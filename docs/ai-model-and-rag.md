# AI Model + Documentation RAG Plan

## Decision

Use a model-agnostic AI layer. The app should not be hardwired to one vendor.

Recommended first production setup:

- Vision + reasoning: OpenAI GPT-5.5 or Gemini 3 Pro, via a server-side Edge Function.
- Voice notes: Whisper / GPT audio transcription first, then the same inspection prompt.
- Documentation retrieval: Supabase Postgres + pgvector for Dubai Food Code, GWR checklist, and GWR historical findings.

The frontend never calls model APIs directly. It uploads evidence to Supabase Storage and calls Edge Functions.

## Why

Food safety decisions need traceability. The model should not only say "this is wrong"; it should return:

- what is visible
- which checklist item it maps to
- which reference/document supports it
- severity
- recommended corrective action
- confidence and uncertainty

## Required API Keys

For the first implementation, one of these is enough:

- \`FOOD_SAFETY_OPENAI_API_KEY\` for GPT vision/audio. **✅ Set on 2026-05-17** (Nabil-provided dedicated key, isolated from the general \`OPENAI_API_KEY\` for cost tracking).
- \`GEMINI_API_KEY\` for Gemini vision. (Optional fallback — not set yet.)

Keys live only in Supabase Edge Function secrets, never in Vite/frontend env:

\`\`\`bash
supabase secrets set FOOD_SAFETY_OPENAI_API_KEY=...
supabase secrets set GEMINI_API_KEY=...
\`\`\`

Local mirror for ops (chmod 600): \`.secrets/food-safety-openai.json\`.

## AI Pipeline

1. Auditor uploads photo, video, or voice note.
2. App stores file in \`audit-evidence\`.
3. Edge Function \`inspect-evidence\` receives:
   - \`auditId\`
   - \`evidenceId\`
   - selected checklist section/item if available
   - storage path
   - optional auditor note/transcript
4. Function retrieves relevant docs from the documentation DB:
   - checklist item/action plan
   - Dubai Food Code excerpts
   - similar historical GWR report examples
5. Function calls the model with the evidence + retrieved references.
6. Function writes structured result to \`evidence.ai_result\` and creates/updates a \`finding\`.

## Documentation DB

Use Supabase tables:

- \`knowledge_documents\`
  - source documents: Dubai Food Code, GWR checklist, HACCP references, GWR report examples.
- \`knowledge_chunks\`
  - chunk text, metadata, and vector embedding.
- \`knowledge_citations\`
  - optional page/section references.

Minimum metadata per chunk:

\`\`\`json
{
  "source": "Dubai Food Code",
  "section": "Temperature control",
  "jurisdiction": "Dubai",
  "documentType": "regulation|checklist|historical_report",
  "checklistSectionId": "fs-section-02",
  "checklistItemId": "fs-section-02-item-003"
}
\`\`\`

## Prompt Contract

System instruction:

\`\`\`text
You are GWR's food safety inspection assistant.
Analyze only the provided evidence and retrieved references.
Do not invent temperatures, smells, dates, labels, staff actions, or causes unless visible or provided in notes.
Distinguish visible evidence from inference.
Map the issue to the closest GWR checklist item and cite the most relevant reference chunk.
If the evidence is unclear, say what cannot be confirmed and ask for more evidence.
Return only valid JSON matching the schema.
\`\`\`

User payload:

\`\`\`json
{
  "evidenceType": "image|video_frame|audio_transcript",
  "auditorNote": "",
  "selectedChecklistSection": "",
  "selectedChecklistItem": "",
  "retrievedReferences": [
    {
      "source": "",
      "section": "",
      "text": ""
    }
  ]
}
\`\`\`

Required model output:

\`\`\`json
{
  "visibleObservations": [
    ""
  ],
  "checklistSectionId": "",
  "checklistItemId": "",
  "severity": "Critical|Major|Minor|No visible issue|Insufficient evidence",
  "issue": "",
  "correctiveAction": "",
  "referenceCitations": [
    {
      "source": "",
      "section": "",
      "reason": ""
    }
  ],
  "confidence": 0.0,
  "needsMoreEvidence": false,
  "moreEvidenceRequest": ""
}
\`\`\`

## Severity Rules

- Critical: immediate foodborne illness/contamination risk, raw/RTE cross-contamination, unsafe holding temperatures, pest activity, chemical contamination.
- Major: clear food safety nonconformity requiring correction but not immediately dangerous.
- Minor: low-risk housekeeping, labeling, organization, or documentation gap.
- No visible issue: no defect visible from evidence.
- Insufficient evidence: photo/video/audio does not support a conclusion.

## Historical Report Training Set

Current local corpus:

- \`training/reports/raw/\`
- \`training/reports/extracted/\`
- \`training/reports/curated_image_candidates.jsonl\`

Current status:

- 15 report PDFs extracted.
- 22,902 embedded images/assets extracted.
- 49 likely audit-photo candidates curated with page context and checklist-section guesses.

Next step:

Turn candidates into gold labels:

- actual image issue
- checklist item
- severity
- report comment
- corrective action
- confidence

Those gold labels become prompt examples and later fine-tuning/evaluation data.
