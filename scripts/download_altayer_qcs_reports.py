#!/usr/bin/env python3
"""Download Al Tayer QCS food-safety report sources for image-tagging training.

QCS does not expose a stable direct PDF endpoint for these instances. This
script therefore saves the full report HTML, attempts known native PDF routes,
and extracts/downloads original evidence image attachments from the report page.

The output is resumable and intentionally organized one folder per InstanceID.
"""

from __future__ import annotations

import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
import html
import json
import os
import re
import subprocess
import time
from pathlib import Path
from urllib.parse import urljoin

import requests


WORKSPACE = Path.home() / ".openclaw/workspace"
PROJECT = WORKSPACE / "gwr/food-safety-platform"
INSTANCES_JSON = PROJECT / "training/altayer_qcs_instances.json"
OUT_ROOT = PROJECT / "training/altayer_qcs_reports"
BASE = "https://qualitycontrol.gwrconsulting.com"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"


def load_instances() -> list[dict]:
    raw = json.loads(INSTANCES_JSON.read_text())
    rows = raw[0]["data"]["ClientAnalytics"]
    records = []
    for row in rows:
        f = row["fields"]
        records.append({
            "instance_id": int(f["SurveyInstanceID"]),
            "survey_title": f.get("SurveyTitle"),
            "date": f.get("SurveyDateAndTime"),
            "location_name": f.get("LocationName"),
            "location_store_id": f.get("LocationStoreID"),
            "score": f.get("ScorePctXX_X"),
            "client_access_status_id": f.get("ClientAccessStatusID"),
            "workflow_step_id": f.get("SurveyWorkflowStepID"),
        })
    return sorted(records, key=lambda r: (r.get("date") or "", r["instance_id"]), reverse=True)


def login() -> requests.Session:
    login_name = os.environ.get("QCS_LOGIN")
    password = os.environ.get("QCS_PASSWORD")
    if not login_name or not password:
        cred_path = WORKSPACE / ".secrets/qcs-credentials.json"
        if cred_path.exists():
            creds = json.loads(cred_path.read_text())
            login_name = login_name or creds.get("login") or creds.get("username")
            password = password or creds.get("password")
    if not login_name or not password:
        raise RuntimeError("QCS_LOGIN/QCS_PASSWORD or workspace .secrets/qcs-credentials.json is required")

    s = requests.Session()
    s.headers.update({"User-Agent": UA, "Referer": f"{BASE}/auth/index.asp", "Origin": BASE})
    s.get(f"{BASE}/auth/index.asp", timeout=30)
    r = s.post(
        f"{BASE}/loginProcess.asp",
        data={"mode": "service", "login": login_name, "password": password},
        timeout=30,
    )
    if '"status":"ok"' not in r.text:
        raise RuntimeError(f"QCS login failed: HTTP {r.status_code} {r.text[:200]}")
    return s


def safe_name(value: str | None, fallback: str = "untitled") -> str:
    value = value or fallback
    value = re.sub(r"<[^>]+>", " ", value)
    value = html.unescape(value)
    value = re.sub(r"[^A-Za-z0-9._ -]+", "_", value).strip(" ._")
    return re.sub(r"\s+", "_", value)[:120] or fallback


def extract_image_links(report_html: str) -> list[dict]:
    seen: set[str] = set()
    links = []
    for m in re.finditer(r"mystservices/Attachments/getImage\.asp[^'\"<> ]+", report_html, re.I):
        url = html.unescape(m.group(0)).replace("&amp;", "&")
        url = re.sub(r"ImageType=(?:800|1024|raw)", "ImageType=original", url)
        if url in seen:
            continue
        seen.add(url)
        attachment_id = re.search(r"[?&]ID=(\d+)", url)
        image_name = re.search(r"[?&]ImageName=([^&]+)", url)
        links.append({
            "attachment_id": int(attachment_id.group(1)) if attachment_id else None,
            "image_name": image_name.group(1) if image_name else None,
            "url": urljoin(BASE + "/", url),
        })
    return links


def try_native_pdf(session: requests.Session, instance_id: int, out_dir: Path) -> dict:
    # These are known guesses; current Al Tayer QCS redirects/404s them, but keep
    # the result per instance so we know exactly what was attempted.
    paths = [
        f"/document.asp?alias=survey.report&InstanceID={instance_id}",
        f"/document.asp?alias=survey.report.pdf&InstanceID={instance_id}",
        f"/document.asp?alias=clientaccess.surveyreport&InstanceID={instance_id}",
        f"/mystservices/Reports/GetSurveyReport.asp?InstanceID={instance_id}",
        f"/mystservices/Reports/GetPDFReport.asp?InstanceID={instance_id}",
    ]
    attempts = []
    for path in paths:
        try:
            r = session.get(urljoin(BASE, path), timeout=45, allow_redirects=True)
            attempts.append({
                "path": path,
                "status": r.status_code,
                "content_type": r.headers.get("content-type"),
                "bytes": len(r.content),
                "final_url": r.url,
            })
            if r.content.startswith(b"%PDF"):
                pdf_path = out_dir / f"{instance_id}_native.pdf"
                pdf_path.write_bytes(r.content)
                return {"native_pdf": str(pdf_path), "attempts": attempts}
        except Exception as exc:
            attempts.append({"path": path, "error": str(exc)})
    return {"native_pdf": None, "attempts": attempts}


def render_pdf(html_path: Path, pdf_path: Path) -> dict:
    if pdf_path.exists() and pdf_path.stat().st_size > 0:
        return {"path": str(pdf_path), "status": "exists", "bytes": pdf_path.stat().st_size}
    cmd = [
        CHROME,
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        f"--print-to-pdf={pdf_path}",
        html_path.resolve().as_uri(),
    ]
    proc = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, timeout=120)
    return {
        "path": str(pdf_path) if pdf_path.exists() else None,
        "status": "ok" if proc.returncode == 0 and pdf_path.exists() else "failed",
        "returncode": proc.returncode,
        "bytes": pdf_path.stat().st_size if pdf_path.exists() else 0,
        "stderr_tail": proc.stderr[-1000:],
    }


def download_image(cookies: dict, img: dict, dest: Path) -> tuple[dict, int | None, str | None]:
    try:
        rr = requests.get(
            img["url"],
            headers={"User-Agent": UA, "Referer": BASE},
            cookies=cookies,
            timeout=60,
        )
        rr.raise_for_status()
        if not rr.headers.get("content-type", "").lower().startswith("image/"):
            raise RuntimeError(f"non-image content-type {rr.headers.get('content-type')}")
        dest.write_bytes(rr.content)
        img["path"] = str(dest)
        img["bytes"] = len(rr.content)
        return img, len(rr.content), None
    except Exception as exc:
        return img, None, str(exc)


def download_one(session: requests.Session, record: dict, with_images: bool, try_pdf: bool, render_pdf_enabled: bool, force: bool = False, image_workers: int = 8) -> dict:
    instance_id = record["instance_id"]
    out_dir = OUT_ROOT / str(instance_id)
    img_dir = out_dir / "images"
    out_dir.mkdir(parents=True, exist_ok=True)
    img_dir.mkdir(exist_ok=True)

    html_path = out_dir / "report.html"
    if force or not html_path.exists():
        url = f"{BASE}/document.asp?alias=survey.view&InstanceID={instance_id}&ShowSummary=true"
        r = session.get(url, timeout=90)
        r.raise_for_status()
        html_text = r.text
        # Make local browser/PDF rendering able to resolve QCS relative assets.
        html_text = html_text.replace("<head>", f"<head><base href=\"{BASE}/\">", 1)
        html_path.write_text(html_text, encoding="utf-8")
    else:
        html_text = html_path.read_text(encoding="utf-8", errors="replace")

    native_pdf = try_native_pdf(session, instance_id, out_dir) if try_pdf else {"native_pdf": None, "attempts": []}
    rendered_pdf = render_pdf(html_path, out_dir / "report_rendered.pdf") if render_pdf_enabled else None
    images = extract_image_links(html_text)
    downloaded = 0
    failures = []
    if with_images:
        pending = []
        cookies = session.cookies.get_dict()
        with ThreadPoolExecutor(max_workers=max(1, image_workers)) as executor:
            future_map = {}
            for img in images:
                name = safe_name(img.get("image_name"), "image")
                file_name = f"{img.get('attachment_id') or len(pending)}_{name}.jpg"
                dest = img_dir / file_name
                if dest.exists() and dest.stat().st_size > 0:
                    downloaded += 1
                    img["path"] = str(dest)
                    continue
                pending.append(img)
                future_map[executor.submit(download_image, cookies, img, dest)] = img
            for future in as_completed(future_map):
                img, _, error = future.result()
                if error:
                    failures.append({"image": img, "error": error})
                else:
                    downloaded += 1
    manifest = {
        **record,
        "report_html": str(html_path),
        "native_pdf": native_pdf["native_pdf"],
        "rendered_pdf": rendered_pdf,
        "native_pdf_attempts": native_pdf["attempts"],
        "image_count": len(images),
        "images_downloaded": downloaded,
        "image_failures": failures,
        "images": images,
    }
    (out_dir / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    return manifest


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=0, help="0 means all")
    ap.add_argument("--with-images", action="store_true")
    ap.add_argument("--try-native-pdf", action="store_true", help="Probe slow/unstable native QCS PDF routes")
    ap.add_argument("--render-pdf", action="store_true", help="Render saved report HTML to PDF with local Chrome")
    ap.add_argument("--force", action="store_true")
    ap.add_argument("--sleep", type=float, default=0.2)
    ap.add_argument("--image-workers", type=int, default=8)
    ap.add_argument("--shard-count", type=int, default=1)
    ap.add_argument("--shard-index", type=int, default=0)
    ap.add_argument("--only-incomplete", action="store_true", help="Retry only records whose manifest has missing image downloads")
    args = ap.parse_args()
    if args.shard_count < 1:
        raise SystemExit("--shard-count must be >= 1")
    if args.shard_index < 0 or args.shard_index >= args.shard_count:
        raise SystemExit("--shard-index must be between 0 and shard-count - 1")

    OUT_ROOT.mkdir(parents=True, exist_ok=True)
    records = load_instances()
    if args.shard_count > 1:
        records = [record for idx, record in enumerate(records) if idx % args.shard_count == args.shard_index]
    if args.only_incomplete:
        retry_records = []
        for record in records:
            manifest_path = OUT_ROOT / str(record["instance_id"]) / "manifest.json"
            if not manifest_path.exists():
                retry_records.append(record)
                continue
            try:
                manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
            except Exception:
                retry_records.append(record)
                continue
            if manifest.get("image_count") != manifest.get("images_downloaded") or manifest.get("image_failures"):
                retry_records.append(record)
        records = retry_records
    if args.limit:
        records = records[: args.limit]
    session = login()

    summary_path = OUT_ROOT / "download_manifest.jsonl"
    completed = 0
    total_images = 0
    total_downloaded = 0
    with summary_path.open("a", encoding="utf-8") as summary:
        for record in records:
            try:
                result = download_one(session, record, with_images=args.with_images, try_pdf=args.try_native_pdf, render_pdf_enabled=args.render_pdf, force=args.force, image_workers=args.image_workers)
                completed += 1
                total_images += result["image_count"]
                total_downloaded += result["images_downloaded"]
                summary.write(json.dumps({k: v for k, v in result.items() if k != "images"}) + "\n")
                summary.flush()
                print(
                    f"{completed}/{len(records)} instance {record['instance_id']} "
                    f"images {result['images_downloaded']}/{result['image_count']} native_pdf={bool(result['native_pdf'])}",
                    flush=True,
                )
            except Exception as exc:
                print(f"ERROR instance {record['instance_id']}: {exc}", flush=True)
            time.sleep(args.sleep)

    print(json.dumps({
        "instances_attempted": len(records),
        "instances_completed": completed,
        "total_images_found": total_images,
        "total_images_downloaded": total_downloaded,
        "output": str(OUT_ROOT),
    }, indent=2))


if __name__ == "__main__":
    main()
