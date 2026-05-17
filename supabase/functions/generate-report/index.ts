import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'

type ReportRequest = {
  auditId: string
  format?: 'pdf'
}

serve(async (request) => {
  if (request.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 })
  }

  const body = (await request.json()) as ReportRequest

  if (!body.auditId) {
    return Response.json({ error: 'auditId is required' }, { status: 400 })
  }

  // Production path: fetch audit, render branded PDF, upload to report storage.
  return Response.json({
    auditId: body.auditId,
    status: 'queued',
    format: body.format ?? 'pdf',
  })
})
