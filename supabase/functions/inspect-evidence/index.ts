import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'

type InspectRequest = {
  auditId: string
  evidenceId: string
  evidenceUrl: string
  evidenceType: 'image' | 'video_frame' | 'audio_transcript'
  auditorNote?: string
  selectedChecklistSection?: string
  selectedChecklistItem?: string
  retrievedReferences?: Array<{
    source: string
    section: string
    text: string
  }>
  locale?: 'en' | 'ar'
}

const INSPECTION_SYSTEM_PROMPT = `You are GWR's food safety inspection assistant.
Analyze only the provided evidence and retrieved references.
Do not invent temperatures, smells, dates, labels, staff actions, or causes unless visible or provided in notes.
Distinguish visible evidence from inference.
Map the issue to the closest GWR checklist item and cite the most relevant reference chunk.
If the evidence is unclear, say what cannot be confirmed and ask for more evidence.
Return only valid JSON matching the requested schema.`

serve(async (request) => {
  if (request.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 })
  }

  const body = (await request.json()) as InspectRequest

  if (!body.auditId || !body.evidenceId || !body.evidenceUrl || !body.evidenceType) {
    return Response.json(
      { error: 'auditId, evidenceId, evidenceUrl, and evidenceType are required' },
      { status: 400 },
    )
  }

  // Production call belongs here. Keep all AI keys server-side in Supabase secrets.
  // See docs/ai-model-and-rag.md for the full prompt contract and RAG schema.
  const promptPayload = {
    evidenceType: body.evidenceType,
    auditorNote: body.auditorNote ?? '',
    selectedChecklistSection: body.selectedChecklistSection ?? '',
    selectedChecklistItem: body.selectedChecklistItem ?? '',
    retrievedReferences: body.retrievedReferences ?? [],
    outputSchema: {
      visibleObservations: [''],
      checklistSectionId: '',
      checklistItemId: '',
      severity: 'Critical|Major|Minor|No visible issue|Insufficient evidence',
      issue: '',
      correctiveAction: '',
      referenceCitations: [{ source: '', section: '', reason: '' }],
      confidence: 0,
      needsMoreEvidence: false,
      moreEvidenceRequest: '',
    },
  }

  const finding = {
    area: 'Preparation area',
    issue: 'Potential hygiene or storage risk detected from uploaded evidence.',
    code: 'GWR FS AI-Triage',
    severity: 'Major',
    action: 'Auditor must verify the image and assign a corrective action before report issue.',
    due: '24h',
    owner: 'Site Manager',
  }

  return Response.json({
    evidenceId: body.evidenceId,
    model: 'placeholder',
    systemPrompt: INSPECTION_SYSTEM_PROMPT,
    promptPayload,
    finding,
  })
})
