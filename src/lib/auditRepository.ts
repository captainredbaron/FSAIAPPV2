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

export async function createLocalEvidenceAndInspect(file: File, area = 'Unassigned area') {
  const evidence: EvidenceItem = {
    id: crypto.randomUUID(),
    fileName: file.name,
    kind: getEvidenceKind(file),
    mimeType: file.type || 'application/octet-stream',
    previewUrl: URL.createObjectURL(file),
    area,
    capturedAt: new Date().toISOString(),
    synced: false,
  }

  const finding = await inspectEvidence(evidence)
  return { evidence, finding: { ...finding, evidenceId: evidence.id } }
}

export async function submitAuditToDatabase(audit: Audit, evidenceFiles: Map<string, File>) {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error('Supabase is not configured for this deployment.')
  }

  const auditId = audit.id.startsWith('audit-demo')
    ? await createRemoteAudit({ ...audit, status: 'submitted' })
    : audit.id

  if (!auditId) throw new Error('Could not create audit in Supabase.')

  for (const evidence of audit.evidence) {
    if (evidence.synced) continue

    const file = evidenceFiles.get(evidence.id)
    if (!file) {
      throw new Error(`Missing local file for ${evidence.fileName}. Please reattach it before submitting.`)
    }

    const storagePath = auditId + '/' + evidence.id + '-' + file.name
    const upload = await supabase.storage.from('audit-evidence').upload(storagePath, file, {
      cacheControl: '3600',
      upsert: false,
    })

    if (upload.error) throw upload.error

    const evidenceInsert = await supabase.from('evidence').insert({
      id: evidence.id,
      audit_id: auditId,
      storage_path: storagePath,
      file_name: file.name,
      mime_type: evidence.mimeType,
      media_type: evidence.kind,
      area: evidence.area,
      captured_at: evidence.capturedAt,
      ai_status: 'queued',
    })

    if (evidenceInsert.error) throw evidenceInsert.error
  }

  const unsyncedFindings = audit.findings.filter((finding) => finding.id.startsWith('finding-'))
  if (unsyncedFindings.length) {
    const findingInsert = await supabase.from('findings').insert(
      unsyncedFindings.map((finding) => ({
        audit_id: auditId,
        evidence_id: finding.evidenceId ?? null,
        area: finding.area,
        issue: finding.issue,
        code: finding.code,
        severity: finding.severity,
        action: finding.action,
        due: finding.due,
        owner: finding.owner,
        status: finding.status,
      })),
    )

    if (findingInsert.error) throw findingInsert.error
  }

  const auditUpdate = await supabase
    .from('audits')
    .update({ status: 'submitted', score: audit.score, submitted_at: new Date().toISOString() })
    .eq('id', auditId)

  if (auditUpdate.error) throw auditUpdate.error

  return {
    auditId,
    evidence: audit.evidence.map((evidence) => ({ ...evidence, synced: true })),
  }
}

export async function updateRemoteFindingStatus(id: string, status: Finding['status']) {
  if (!isSupabaseConfigured || !supabase || id.startsWith('finding-')) return

  const { error } = await supabase.from('findings').update({ status }).eq('id', id)
  if (error) throw error
}
