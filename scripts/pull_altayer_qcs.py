#!/usr/bin/env python3
"""Pull all Al Tayer food-safety form versions from QCS via v2 API.

Saves each form's full FormElements payload + a clean section/question summary.
"""
import json, urllib.request, urllib.parse, urllib.error
from pathlib import Path

WORKSPACE = Path.home() / ".openclaw/workspace"
OUT_DIR = WORKSPACE / "gwr/food-safety-platform/training/altayer_qcs_forms"
OUT_DIR.mkdir(parents=True, exist_ok=True)

creds = json.loads((WORKSPACE / ".secrets/qcs-credentials.json").read_text())
api = creds["api"]
BASE = "https://qualitycontrol.gwrconsulting.com"
UA = "Mozilla/5.0 GWR-Brandon"


def token():
    body = urllib.parse.urlencode({
        "client_id": api["client_id"],
        "client_secret": api["client_secret"],
        "grant_type": "client_credentials",
    }).encode()
    req = urllib.request.Request(
        BASE + "/oauth/connect/token", data=body,
        headers={"Content-Type": "application/x-www-form-urlencoded", "User-Agent": UA},
    )
    return json.loads(urllib.request.urlopen(req, timeout=30).read())["access_token"]


def v2(ds_name, params, tok):
    payload = {"action": "exec", "dataset": {"datasetname": ds_name},
               "parameters": [{"name": k, "value": v} for k, v in params.items()]}
    body = urllib.parse.urlencode({"post": json.dumps(payload)}).encode()
    req = urllib.request.Request(BASE + "/api/v2/execute", data=body,
        headers={"Content-Type": "application/x-www-form-urlencoded",
                 "Authorization": f"Bearer {tok}", "User-Agent": UA})
    return json.loads(urllib.request.urlopen(req, timeout=180).read())


# Latest form versions for each Al Tayer brand (TypeID=14 = leaf form versions).
FORMS = {
    # brand -> [(FormID, name)] — picking the latest non-Maintenance form per brand
    "Caffe Nero":        [(16034, "Caffe Nero - Outlet Food Safety Inspection V1.3")],
    "Magnolia Bakery":   [(16028, "Magnolia Bakery - Outlet Food Safety Inspection V1.2"),
                          (18604, "Magnolia Bakery Small Shop - Outlet Food Safety Inspection V1.0")],
    "Atrium Caffe":      [(16033, "Atrium Caffe - Outlet Food Safety Inspection V1.2"),
                          (17972, "Atrium Caffe Small Shop - Outlet Food Safety Inspection V1.0")],
    "Emporio Armani":    [(16030, "Emporio Armani Caffe - Outlet Food Safety Inspection V1.2"),
                          (16029, "Armani Dubai Caffe - Outlet Food Safety Inspection V1.2")],
    "More Cafe":         [(16026, "More Cafe - Outlet Food Safety Inspection V1.2")],
}


def pull_form(form_id, name, tok):
    res = v2("/Apps/SM/APIv2/Query/Projects/FormElements", {
        "FormIDs": str(form_id),
        "IsIncludeSections": "1",
        "IsIncludeQuestions": "1",
        "IsIncludeAnswerSets": "1",
        "IsIncludeAnswers": "1",
    }, tok)
    raw_path = OUT_DIR / f"form_{form_id}.json"
    raw_path.write_text(json.dumps(res, indent=2))

    data = res["dataset"]["data"]
    elements = data[1] if len(data) > 1 and isinstance(data[1], list) else []
    sections = [e for e in elements if str(e.get("ElementTypeID", "")).strip() == "S"]
    questions = [e for e in elements if str(e.get("ElementTypeID", "")).strip() == "Q"]

    # Group questions under their containing section by Position
    sections.sort(key=lambda s: s.get("Position", 0))
    summary = {"form_id": form_id, "name": name,
               "section_count": len(sections), "question_count": len(questions),
               "sections": []}

    # Map: walk elements in Position order and assign questions to the latest seen section
    elements.sort(key=lambda e: e.get("Position", 0))
    current = None
    for e in elements:
        kind = str(e.get("ElementTypeID", "")).strip()
        if kind == "S":
            current = {"position": e.get("Position"), "text": e.get("Text", ""), "questions": []}
            summary["sections"].append(current)
        elif kind == "Q" and current is not None:
            current["questions"].append({
                "position": e.get("Position"),
                "object_name": e.get("ObjectName"),
                "text": (e.get("Text") or "")[:300],
            })

    summary_path = OUT_DIR / f"form_{form_id}_summary.json"
    summary_path.write_text(json.dumps(summary, indent=2))
    return summary


def main():
    tok = token()
    print(f"✅ token acquired ({len(tok)} chars)")
    all_summaries = {}
    for brand, forms in FORMS.items():
        all_summaries[brand] = []
        for form_id, name in forms:
            print(f"\n→ {brand} / {name} (FormID {form_id})")
            try:
                s = pull_form(form_id, name, tok)
                print(f"   ✓ {s['section_count']} sections, {s['question_count']} questions")
                all_summaries[brand].append(s)
            except Exception as e:
                print(f"   ✗ {e}")
                all_summaries[brand].append({"form_id": form_id, "name": name, "error": str(e)})

    index = OUT_DIR / "INDEX.json"
    index.write_text(json.dumps({"brands": all_summaries}, indent=2))
    print(f"\n📁 saved index: {index}")


if __name__ == "__main__":
    main()
