import type { Audit } from '../types'

const AUDIT_DRAFT_KEY = 'gwr-food-safety.audit-draft'

export function loadAuditDraft(fallback: Audit): Audit {
  const raw = window.localStorage.getItem(AUDIT_DRAFT_KEY)
  if (!raw) return fallback

  try {
    return { ...fallback, ...JSON.parse(raw) }
  } catch {
    return fallback
  }
}

export function saveAuditDraft(audit: Audit) {
  window.localStorage.setItem(AUDIT_DRAFT_KEY, JSON.stringify(audit))
}

export function clearAuditDraft() {
  window.localStorage.removeItem(AUDIT_DRAFT_KEY)
}
