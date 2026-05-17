import type { EvidenceItem, Finding } from '../types'

const simulatedIssues = [
  {
    area: 'Handwash station',
    issue: 'Handwash basin appears blocked by a mobile prep trolley.',
    code: 'Dubai Food Code 2.3.1',
    severity: 'Major' as const,
    action: 'Clear access to handwash basin and brief staff before service.',
    due: 'Now',
    owner: 'Shift Supervisor',
  },
  {
    area: 'Receiving area',
    issue: 'One delivered carton is stored directly on the floor.',
    code: 'GWR FS Q07',
    severity: 'Minor' as const,
    action: 'Move stock to approved shelving and remind receiving team.',
    due: '24h',
    owner: 'Storekeeper',
  },
]

export async function inspectEvidence(evidence: EvidenceItem): Promise<Finding> {
  await new Promise((resolve) => window.setTimeout(resolve, 550))

  const issue = simulatedIssues[Math.abs(hashCode(evidence.id)) % simulatedIssues.length]

  return {
    id: `finding-${crypto.randomUUID()}`,
    status: 'open',
    ...issue,
    area: evidence.area || issue.area,
  }
}

function hashCode(value: string) {
  return value.split('').reduce((hash, char) => (hash << 5) - hash + char.charCodeAt(0), 0)
}
