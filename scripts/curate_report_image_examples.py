#!/usr/bin/env python3
"""Build a first-pass curated image training set from extracted report PDFs.

This does not pretend to be final labeling. It filters obvious PDF layout assets and
keeps likely audit photos with their page-level report text and best checklist-section
match. Human/AI review can then turn these candidates into gold examples.
"""

from __future__ import annotations

import json
import re
import subprocess
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
RAW_DIR = ROOT / 'training' / 'reports' / 'raw'
EXTRACTED_DIR = ROOT / 'training' / 'reports' / 'extracted'
CHECKLIST_TS = ROOT / 'src' / 'data' / 'foodSafetyChecklist.ts'
OUT_JSONL = ROOT / 'training' / 'reports' / 'curated_image_candidates.jsonl'
OUT_SUMMARY = ROOT / 'training' / 'reports' / 'curation_summary.md'


def run(cmd: list[str]) -> str:
    return subprocess.run(cmd, check=True, text=True, capture_output=True).stdout


def load_checklist() -> list[dict]:
    text = CHECKLIST_TS.read_text(encoding='utf-8')
    match = re.search(r'export const foodSafetyChecklist = (\[.*\]) satisfies', text, re.S)
    if not match:
        return []
    return json.loads(match.group(1))


def split_pages(text_path: Path) -> list[str]:
    if not text_path.exists():
        return []
    return [page.strip() for page in text_path.read_text(errors='ignore').split('\f')]


def parse_pdfimages(pdf: Path) -> list[dict]:
    lines = run(['pdfimages', '-list', str(pdf)]).splitlines()[2:]
    rows = []
    for line in lines:
        parts = line.split()
        if len(parts) < 15:
            continue
        try:
            page = int(parts[0])
            num = int(parts[1])
            kind = parts[2]
            width = int(parts[3])
            height = int(parts[4])
            enc = parts[8]
        except ValueError:
            continue
        if kind != 'image':
            continue
        rows.append({'page': page, 'num': num, 'width': width, 'height': height, 'encoding': enc})
    return rows


def image_file_map(image_dir: Path) -> dict[int, Path]:
    files: dict[int, list[Path]] = {}
    for path in image_dir.glob('image-*.*'):
        match = re.match(r'image-(\d+)\.', path.name)
        if not match:
            continue
        files.setdefault(int(match.group(1)), []).append(path)
    return {
        num: sorted(paths, key=lambda p: (p.suffix.lower() != '.jpg', len(p.name)))[0]
        for num, paths in files.items()
    }


def find_image_file(files: dict[int, Path], num: int) -> Path | None:
    candidates = []
    for key in (num, int(f'{num:03d}')):
        if key in files:
            candidates.append(files[key])
    if not candidates:
        return None
    return candidates[0]


def likely_audit_photo(row: dict, page_text: str, image_path: Path | None) -> bool:
    if not image_path or not image_path.exists() or image_path.stat().st_size < 12_000:
        return False
    width = row['width']
    height = row['height']
    ratio = width / max(height, 1)
    if width < 220 or height < 160:
        return False
    if ratio < 0.35 or ratio > 3.4:
        return False
    if row['page'] <= 2:
        return False
    text = page_text.lower()
    return any(token in text for token in ['picture', 'action plan', 'yes', 'no', 'n/a'])


def compact_context(page_text: str) -> str:
    lines = [re.sub(r'\s+', ' ', line).strip() for line in page_text.splitlines()]
    lines = [line for line in lines if line]
    useful = [
        line
        for line in lines
        if not line.startswith('©')
        and 'copyright' not in line.lower()
        and len(line) > 2
    ]
    return '\n'.join(useful[:35])[:5000]


def match_section(context: str, checklist: list[dict]) -> dict:
    lower = context.lower()
    best = {'sectionId': '', 'sectionTitle': '', 'score': 0}
    for section in checklist:
        score = 0
        title = section.get('title', '')
        if title and title.lower() in lower:
            score += 12
        for item in section.get('items', [])[:]:
            words = re.findall(r'[a-zA-Z]{5,}', item.get('question', '').lower())
            score += sum(1 for word in set(words[:18]) if word in lower)
        if score > best['score']:
            best = {'sectionId': section.get('id', ''), 'sectionTitle': title, 'score': score}
    return best


def main() -> None:
    checklist = load_checklist()
    records = []

    for pdf in sorted(RAW_DIR.glob('*.pdf')):
        if pdf.stat().st_size <= 0:
            continue
        report_dir = EXTRACTED_DIR / pdf.stem
        image_dir = report_dir / 'images'
        pages = split_pages(report_dir / 'text.txt')
        if not image_dir.exists() or not pages:
            continue
        image_files = image_file_map(image_dir)
        for row in parse_pdfimages(pdf):
            page_text = pages[row['page'] - 1] if row['page'] - 1 < len(pages) else ''
            image_path = find_image_file(image_files, row['num'])
            if not likely_audit_photo(row, page_text, image_path):
                continue
            context = compact_context(page_text)
            section = match_section(context, checklist)
            records.append(
                {
                    'report': pdf.name,
                    'page': row['page'],
                    'imageNum': row['num'],
                    'imagePath': str(image_path.relative_to(ROOT)) if image_path else '',
                    'width': row['width'],
                    'height': row['height'],
                    'context': context,
                    'candidateChecklistSectionId': section['sectionId'],
                    'candidateChecklistSectionTitle': section['sectionTitle'],
                    'labelStatus': 'candidate_needs_review',
                }
            )

    with OUT_JSONL.open('w', encoding='utf-8') as handle:
        for record in records:
            handle.write(json.dumps(record, ensure_ascii=False) + '\n')

    by_report: dict[str, int] = {}
    by_section: dict[str, int] = {}
    for record in records:
        by_report[record['report']] = by_report.get(record['report'], 0) + 1
        section = record['candidateChecklistSectionTitle'] or 'Unmatched'
        by_section[section] = by_section.get(section, 0) + 1

    summary = [
        '# Food Safety Image Candidate Curation',
        '',
        f'- Candidate image examples: {len(records)}',
        f'- Reports represented: {len(by_report)}',
        '',
        '## By Section',
    ]
    for section, count in sorted(by_section.items(), key=lambda x: (-x[1], x[0]))[:20]:
        summary.append(f'- {section}: {count}')
    summary.extend(['', '## By Report'])
    for report, count in sorted(by_report.items()):
        summary.append(f'- {report}: {count}')
    OUT_SUMMARY.write_text('\n'.join(summary) + '\n', encoding='utf-8')

    print(f'wrote {len(records)} candidates', flush=True)
    print(OUT_JSONL.relative_to(ROOT), flush=True)
    print(OUT_SUMMARY.relative_to(ROOT), flush=True)


if __name__ == '__main__':
    main()
