export type Severity = 'Critical' | 'Major' | 'Minor'

export type AuditStatus = 'draft' | 'in_progress' | 'submitted' | 'closed'

export type EvidenceKind = 'image' | 'video' | 'audio' | 'file'

export type EvidenceItem = {
  id: string
  fileName: string
  kind: EvidenceKind
  mimeType: string
  previewUrl: string
  area: string
  capturedAt: string
  synced: boolean
}

export type Finding = {
  id: string
  evidenceId?: string
  area: string
  issue: string
  code: string
  severity: Severity
  action: string
  due: string
  owner: string
  status: 'open' | 'accepted' | 'rejected' | 'closed'
}

export type ChecklistScore = {
  id: string
  label: string
  score: number
  icon: 'temperature' | 'shield' | 'cleaning' | 'hygiene'
}

export type ChecklistAnswerOption = {
  label: string
  score: number
}

export type ChecklistItem = {
  id: string
  question: string
  questionAr: string
  guidance: string
  answers: ChecklistAnswerOption[]
  requiresEvidence: boolean
  actionPlans: string[]
}

export type ChecklistSection = {
  id: string
  title: string
  titleAr: string
  items: ChecklistItem[]
}

export type Audit = {
  id: string
  clientName: string
  siteName: string
  location: string
  language: 'en' | 'ar'
  status: AuditStatus
  score: number
  evidence: EvidenceItem[]
  findings: Finding[]
  checklist: ChecklistScore[]
}
