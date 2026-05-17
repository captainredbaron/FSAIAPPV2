#!/usr/bin/env python3
"""Extract food-safety report pages, text, and embedded images for skill examples.

Input: PDF reports under training/reports/raw.
Output:
  training/reports/extracted/<pdf-stem>/text.txt
  training/reports/extracted/<pdf-stem>/images/*
  training/reports/examples.jsonl
"""

from __future__ import annotations

import json
import subprocess
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
RAW_DIR = ROOT / 'training' / 'reports' / 'raw'
OUT_DIR = ROOT / 'training' / 'reports' / 'extracted'
EXAMPLES = ROOT / 'training' / 'reports' / 'examples.jsonl'


def run(cmd: list[str]) -> str:
    return subprocess.run(cmd, check=True, text=True, capture_output=True).stdout


def split_pages(text: str) -> list[str]:
    pages = [page.strip() for page in text.split('\f')]
    return [page for page in pages if page]


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    records: list[dict] = []

    pdfs = sorted(path for path in RAW_DIR.glob('*.pdf') if path.stat().st_size > 0)
    for pdf in pdfs:
        report_dir = OUT_DIR / pdf.stem
        image_dir = report_dir / 'images'
        report_dir.mkdir(parents=True, exist_ok=True)
        image_dir.mkdir(parents=True, exist_ok=True)

        text_path = report_dir / 'text.txt'
        run(['pdftotext', '-layout', str(pdf), str(text_path)])
        pages = split_pages(text_path.read_text(errors='ignore'))

        prefix = image_dir / 'image'
        run(['pdfimages', '-j', str(pdf), str(prefix)])
        images = sorted(image_dir.glob('image-*'))

        # Poppler names images sequentially; page-level placement is not reliable without PDF layout
        # analysis, so keep image-to-report linkage and use page text as surrounding context.
        records.append(
            {
                'report': pdf.name,
                'reportPath': str(pdf.relative_to(ROOT)),
                'pageCount': len(pages),
                'imageCount': len(images),
                'textPath': str(text_path.relative_to(ROOT)),
                'imageDir': str(image_dir.relative_to(ROOT)),
                'samplePages': pages[:3],
            }
        )

    with EXAMPLES.open('w', encoding='utf-8') as handle:
        for record in records:
            handle.write(json.dumps(record, ensure_ascii=False) + '\n')

    print(f'extracted {len(records)} reports')
    print(f'wrote {EXAMPLES.relative_to(ROOT)}')


if __name__ == '__main__':
    main()
