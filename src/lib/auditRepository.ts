import { inspectEvidence } from './aiInspection'
import { isSupabaseConfigured, supabase } from './supabase'
import type { Audit, EvidenceItem, EvidenceKind, Finding } from '../types'

const DEMO_ORGANIZATION_ID = '00000000-0000-4000-8000-000000000001'
const DEMO_SITE_ID = '00000000-0000-4000-8000-000000000101'

function getEvidenceKind(file: File): EvidenceKind {
  if (file.type.startsWith('image/')) return 'image'
  if (file.type.startsWith('video/')) return 'video'
  if (file.type.startsWith('audio/')) return 'audio'
  return 'file'
}

export async function createRemoteAudit(audit: Audit) {
  if (!isSupabaseConfigured || !supabase) return null

  const { data, error } = await supabase
    .from('audits')
    .insert({
      organization_id: DEMO_ORGANIZATION_ID,
      site_id: DEMO_SITE_ID,
      status: audit.status,
      language: audit.language,
      score: audit.score,
    })
    .select('id')
    .single()

  if (error) throw error
  return data.id as string
}

export async function uploadEvidenceAndInspect(file: File, auditId: string, area = 'Unassigned area') {
  const localEvidence: EvidenceItem = {
    id: crypto.randomUUID(),
    fileName: file.name,
    kind: getEvidenceKind(file),
    mimeType: file.type || 'application/octet-stream',
    previewUrl: URL.createObjectURL(file),
    area,
    capturedAt: new Date().toISOString(),
    synced: false,
  }

  if (!isSupabaseConfigured || !supabase || auditId.startsWith('audit-demo')) {
    const finding = await inspectEvidence(localEvidence)
    return { evidence: localEvidence, finding }
  }

  const storagePath = auditId + '/' + localEvidence.id + '-' + file.name
  const upload = await supabase.storage.from('audit-evidence').upload(storagePath, file, {
    cacheControl: '3600',
    upsert: false,
  })

  if (upload.error) throw upload.error

  const evidenceInsert = await supabase
    .from('evidence')
    .insert({
      id: localEvidence.id,
      audit_id: auditId,
      storage_path: storagePath,
      file_name: file.name,
      mime_type: localEvidence.mimeType,
      media_type: localEvidence.kind,
      area: localEvidence.area,
      captured_at: localEvidence.capturedAt,
      ai_status: 'queued',
    })
    .select('*')
    .single()

  if (evidenceInsert.error) throw evidenceInsert.error

  const finding = await inspectEvidence({ ...localEvidence, synced: true })
  const findingInsert = await supabase
    .from('findings')
    .insert({
      audit_id: auditId,
      evidence_id: localEvidence.id,
      area: finding.area,
      issue: finding.issue,
      code: finding.code,
      severity: finding.severity,
      action: finding.action,
      due: finding.due,
      owner: finding.owner,
      status: finding.status,
    })
    .select('id')
    .single()

  if (findingInsert.error) throw findingInsert.error

  return {
    evidence: { ...localEvidence, synced: true },
    finding: { ...finding, id: findingInsert.data.id as string },
  }
}

export async function updateRemoteFindingStatus(id: string, status: Finding['status']) {
  if (!isSupabaseConfigured || !supabase || id.startsWith('finding-')) return

  const { error } = await supabase.from('findings').update({ status }).eq('id', id)
  if (error) throw error
}
