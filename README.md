# GWR Food Safety Platform

Multi-tenant SaaS for AI-assisted food safety inspections. Three frontend surfaces share one Supabase backend.

## Architecture

Three distinct apps, one platform:

| Surface | Who | Purpose |
|---|---|---|
| **Auditor PWA** | GWR auditors (+ client internal QA later) | Field audits, evidence capture, submit |
| **Client Portal** | Client users (Asnan, Spinneys, etc.) | View own audits, action plans, scores, trends |
| **GWR Admin Portal** | GWR ops (Maya, Vanessa, Nabil) | Tenant mgmt, assignments, KB, billing |

Multi-tenancy enforced via Supabase RLS on `organization_id`. See `docs/architecture.md`.

## Current Build

- Separate auditor PWA, scoped away from the client portal
- Assigned-audits queue for work allocated to the logged-in auditor
- Active auditing interface with photo, video, and voice-note evidence upload, checklist sections, findings review, and submit action
- Maya's raw food-safety checklist imported as 14 reference sections and 165 checklist items
- Auditor history view showing audits completed by the user
- Simulated AI findings confirmation queue
- Dubai Food Code / GWR checklist scoring data
- PWA manifest and service worker shell
- GWR brand assets wired in
- Local draft persistence for offline work
- Supabase schema and Edge Function boundaries

## Run Locally

```bash
npm install
npm run dev
```

Optional Supabase environment:

```bash
cp .env.example .env.local
```

Current project URL:

```bash
VITE_SUPABASE_URL=https://dapzuexwkamjwpwwvkqq.supabase.co
```

## Build Checks

```bash
npm run lint
npm run build
```

## Supabase Setup

Storage buckets can be created/verified with the service role key:

```bash
npm run supabase:storage
```

Or apply it directly from this repo:

```bash
npm run supabase:schema
```

Direct CLI attempt notes:

- `db.<project-ref>.supabase.co` did not resolve from this machine.
- Working pooler route: `aws-1-ap-south-1.pooler.supabase.com:6543` as `postgres.dapzuexwkamjwpwwvkqq`.
- `npm run supabase:schema` applies the schema through that route.
- Supabase CLI is installed, logged in, and linked to project `dapzuexwkamjwpwwvkqq`.
- Local Supabase/Docker commands need Docker Desktop running.

## AI Model Layer

The inspection AI design is documented in `docs/ai-model-and-rag.md`.

- Model keys stay server-side in Supabase Edge Function secrets.
- Evidence analysis uses `supabase/functions/inspect-evidence`.
- Dubai Food Code / GWR checklist / historical report examples belong in the Supabase knowledge DB.
- The frontend should never expose model API keys.

## Next Engineering Step

Connect the shell to real data:

- replace prototype anon policies with proper Supabase Auth roles
- bind assigned/history views to the authenticated auditor's Supabase records
- persist checklist item responses, selected action plans, and item-level evidence mapping
- replace `src/lib/aiInspection.ts` with the `inspect-evidence` Edge Function
- transcribe voice notes and attach them to checklist answers/findings
- add back-office/client-portal report generation as a separate app surface
