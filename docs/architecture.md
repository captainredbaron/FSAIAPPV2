# GWR Food Safety Platform — Architecture

Multi-tenant SaaS. One Supabase backend serves three distinct frontend surfaces, each with its own auth scope and UI.

## Three Surfaces

| Surface | Users | Purpose | Tech |
|---|---|---|---|
| **Auditor PWA** | GWR auditors (and eventually client internal QA teams) | Conduct audits in the field — assigned audits queue, active auditing interface, evidence capture (photo/video/voice), submit, history of own audits | React + Vite PWA, offline-capable, installable |
| **Client Portal** | Client users (Asnan, Spinneys, etc.) | View their own audits, action plans, findings, scores, trends, evidence — read-mostly + action-plan responses | React web app, desktop-first |
| **GWR Admin Portal** | GWR ops (Maya, Vanessa, Nabil, etc.) | Manage tenants, assign audits, manage auditors, review findings, approve reports, configure checklists, manage knowledge base, billing | React web app, desktop |

All three hit the same Supabase project — separation is via **RLS policies on tenant + role**, not separate databases.

## Multi-Tenancy Model

- Tenant root = `organizations` table (already in schema).
- Every business object (audits, findings, evidence, action plans, users) carries `organization_id`.
- RLS enforces: a user can only read/write rows where `organization_id` matches their JWT claim.
- GWR itself is **organization_id = `gwr`** (the operator tenant). GWR admins have a special claim `is_gwr_admin = true` that bypasses tenant filter and can see all orgs.
- Client users are scoped to their own org.
- Auditors can be either GWR-employed (cross-tenant via assignment) or client-employed (single-tenant).

## User Roles (per organization)

| Role | Surface | Permissions |
|---|---|---|
| `gwr_admin` | Admin Portal | Cross-tenant: manage orgs, auditors, assignments, checklists, KB, reports |
| `gwr_auditor` | Auditor PWA | Conduct audits assigned to them across any tenant |
| `client_admin` | Client Portal | Read all audits for own org, manage own users, respond to action plans |
| `client_viewer` | Client Portal | Read-only access to own org's audits/findings/reports |
| `client_auditor` | Auditor PWA (later) | Conduct internal self-audits for own org only |

Roles live in `public.organization_members(organization_id, user_id, role)` joined to `auth.users`.

## Data Model

```
client_groups (optional parent for holding cos / multi-tenant clients)
  └─ organizations (tenant root)
       └─ organization_members (user_id, role)
       └─ brands (KFC, Pizza Hut, etc. — one org can own many brands)
            └─ sites (physical locations under that brand)
                 └─ audit_assignments (planned visits)
                      └─ audits (created when auditor opens the assignment)
                           └─ audit_responses (per checklist_item: answer, score, notes)
                                └─ evidence (photo / video / voice + ai_result)
                           └─ findings (severity, action_plan, status)
                                └─ capa_tasks (corrective actions, owners, due dates)
       └─ checklists (scope = global | organization | brand)
            └─ checklist_sections
                 └─ checklist_items (answer options, evidence required, KB refs)
       └─ knowledge_documents (global = GWR + Dubai Food Code; per-tenant = client SOPs)
            └─ knowledge_chunks (pgvector embeddings)
```

Reporting can roll up at every level: `site → brand → organization → client_group`.

## Admin Portal Capabilities

The GWR Admin Portal is the operator cockpit. Per Nabil 2026-05-17:

### 1. Tenant ingestion
Ingest new clients as **groups** (optional) → **organizations** (tenant) → **brands** → **sites**. Each level carries metadata (segment, country, logo, contact, contract type) so reporting can be sliced any way.

Example hierarchy:
```
Client Group: Americana Holdings
  └─ Org: Americana UAE
       └─ Brand: KFC UAE       → 18 sites
       └─ Brand: Pizza Hut UAE → 12 sites
       └─ Brand: Hardee's UAE  → 9 sites
```

### 2. Checklist management
- Upload master checklists (Excel / structured form) as **versioned** documents.
- Each checklist has scope = `global` (GWR's standard food safety checklist), `organization` (client-specific custom), or `brand` (brand-specific custom).
- Sections, items, answer options, scoring weights, evidence-required flags, action-plan references, and knowledge-base citations all editable.
- Active checklists are pinned to tenant + brand; audit assignments inherit the active checklist by default but can be overridden.
- Audits always store the **exact checklist version** they were run against, so historical reports stay accurate when a checklist evolves.

### 3. Audit assignments
GWR ops creates `audit_assignments` rows: site + brand + checklist + auditor + scheduled date/window + language. The auditor sees these in their PWA queue. When the auditor opens an assignment, an `audits` row is created and linked back. Assignment statuses: `scheduled`, `in_progress`, `completed`, `cancelled`, `missed`.

### 4. Reporting
With group → org → brand → site hierarchy + per-audit checklist_id, the Admin Portal can produce:
- Brand performance leaderboards within a tenant
- Cross-tenant benchmarks (segment-level, only visible to GWR admins)
- Action plan SLA tracking (capa_tasks due/overdue)
- Auditor workload, completion rate, average finding count
- Geographic heatmaps when sites have lat/long

### Schema additions
Migration `supabase/migrations/2026-05-17_admin_portal_groups_brands_checklists.sql` adds: `client_groups`, `brands`, `checklists`, `checklist_sections`, `checklist_items`, `audit_responses`, `audit_assignments`, plus FK columns on `organizations`, `sites`, `audits`, `evidence`.

## AI Layer

Per `docs/ai-model-and-rag.md`:

- Frontend never calls OpenAI. All AI calls go through Supabase Edge Functions.
- `inspect-evidence` Edge Function uses `FOOD_SAFETY_OPENAI_API_KEY` (✅ stored as Supabase secret 2026-05-17).
- RAG retrieval from `knowledge_chunks` filtered by `organization_id IN (gwr, current_tenant)` so a tenant gets GWR's global knowledge base plus its own private SOPs.

## Auth

- Supabase Auth (email + magic link initially, add SSO for enterprise clients later).
- JWT carries `organization_id` (default org) and `role`.
- Users can belong to multiple orgs (e.g., GWR auditor assigned to multiple client tenants) — switch via `organization_members` row + JWT refresh.

## Build & Deploy Plan

| Surface | Repo path | Status |
|---|---|---|
| Auditor PWA | `src/auditor/` (current `src/` shell) | 🟡 Prototype shell built |
| Client Portal | `src/client/` | ⏳ Not started |
| Admin Portal | `src/admin/` | ⏳ Not started |

Three options for the build:

1. **Monorepo, three Vite entry points** (chosen): one repo, three `vite.config.*.ts` outputs, one shared `src/shared/` for components/types/Supabase client. Cheapest to keep schema/types in sync.
2. Three separate repos — too much duplication for v1.
3. Single SPA with role-based routing — bad UX (auditor in field doesn't need admin code).

Hosting:
- All three deploy as static sites (Vite build) to Vercel or Netlify with subdomain routing:
  - `audit.foodsafety.gwrconsulting.com`
  - `portal.foodsafety.gwrconsulting.com`
  - `admin.foodsafety.gwrconsulting.com`

## Open Decisions

1. **Auditor PWA — GWR-staff only first, or open to client_auditor in v1?** Recommend GWR-only for v1, add client_auditor in v2.
2. **Subdomain branding for client portal** — does each client see GWR branding, co-branded, or white-labeled? Recommend co-branded (GWR-powered, client logo).
3. **Billing model** — per-audit, per-site, per-seat, or flat tenant fee? Affects schema (`billing_events` table).

Last updated: 2026-05-17
