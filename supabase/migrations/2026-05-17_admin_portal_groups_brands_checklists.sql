-- ===========================================================================
-- 2026-05-17 — Admin Portal capabilities
-- Adds: client groups, brands, custom checklists per tenant, audit assignments
-- Requested by Nabil 2026-05-17
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- 1. Client groups (parent of organizations, optional)
-- ---------------------------------------------------------------------------
-- An "organization" in our schema is a tenant (a paying client). A group lets
-- us roll several tenants under one parent for reporting — e.g. a holding co
-- that owns multiple restaurant chains. Most clients won't need this.

create table if not exists public.client_groups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  created_at timestamptz not null default now()
);

alter table public.organizations
  add column if not exists client_group_id uuid references public.client_groups(id) on delete set null;

alter table public.organizations
  add column if not exists segment text;  -- catering, restaurants, hotels, supermarkets, etc.

alter table public.organizations
  add column if not exists country text;

-- ---------------------------------------------------------------------------
-- 2. Brands (one tenant can have multiple brands; one brand has many sites)
-- ---------------------------------------------------------------------------
-- Example: tenant "Americana Group" → brands "KFC", "Pizza Hut", "Hardee's"
-- Each brand owns many sites. Reporting can roll up: site → brand → org → group.

create table if not exists public.brands (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null,
  segment text,         -- can override org-level segment
  logo_path text,       -- storage path for brand logo
  created_at timestamptz not null default now(),
  unique (organization_id, name)
);

alter table public.sites
  add column if not exists brand_id uuid references public.brands(id) on delete set null;

create index if not exists sites_brand_idx on public.sites(brand_id);
create index if not exists sites_org_idx on public.sites(organization_id);

-- ---------------------------------------------------------------------------
-- 3. Checklists (GWR admin uploads; each tenant or brand uses one)
-- ---------------------------------------------------------------------------
-- Master checklist (e.g. "GWR Food Safety v3", "Dubai DM Food Code 2.0",
-- "Asnan Tower Catering — custom"). Versioned so historical audits stay linked
-- to the checklist they were run against.

create table if not exists public.checklists (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  version text not null,                   -- "1.0", "2.1-Asnan", etc.
  scope text not null default 'global',    -- 'global' | 'organization' | 'brand'
  organization_id uuid references public.organizations(id) on delete cascade,
  brand_id uuid references public.brands(id) on delete cascade,
  source text,                              -- "Maya Excel 2026-05-12", "Dubai Food Code 2.0"
  status text not null default 'draft',    -- 'draft' | 'active' | 'retired'
  storage_path text,                        -- uploaded source file (Excel/PDF)
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  unique (name, version)
);

create table if not exists public.checklist_sections (
  id uuid primary key default gen_random_uuid(),
  checklist_id uuid not null references public.checklists(id) on delete cascade,
  section_index integer not null,
  code text,                                -- e.g. "FS-02"
  title_en text not null,
  title_ar text,
  weight numeric(5,2),                      -- optional weighting for scoring
  metadata jsonb not null default '{}'::jsonb,
  unique (checklist_id, section_index)
);

create table if not exists public.checklist_items (
  id uuid primary key default gen_random_uuid(),
  checklist_id uuid not null references public.checklists(id) on delete cascade,
  section_id uuid not null references public.checklist_sections(id) on delete cascade,
  item_index integer not null,
  code text,                                -- e.g. "FS-02-003"
  text_en text not null,
  text_ar text,
  answer_options jsonb not null default '[]'::jsonb,  -- [{label, score}, ...]
  evidence_required boolean not null default false,
  action_plan_reference text,
  knowledge_refs jsonb not null default '[]'::jsonb,  -- ["Dubai Food Code 2.6.1", ...]
  metadata jsonb not null default '{}'::jsonb,
  unique (checklist_id, item_index)
);

create index if not exists checklist_items_section_idx on public.checklist_items(section_id);

-- Audits now reference the exact checklist version used
alter table public.audits
  add column if not exists checklist_id uuid references public.checklists(id) on delete set null;

alter table public.audits
  add column if not exists brand_id uuid references public.brands(id) on delete set null;

-- audit_responses gives us per-item answers (currently we only have section-level scores)
create table if not exists public.audit_responses (
  id uuid primary key default gen_random_uuid(),
  audit_id uuid not null references public.audits(id) on delete cascade,
  checklist_item_id uuid not null references public.checklist_items(id) on delete restrict,
  answer_label text,
  answer_score numeric(5,2),
  notes text,
  na boolean not null default false,
  created_at timestamptz not null default now(),
  unique (audit_id, checklist_item_id)
);

create index if not exists audit_responses_audit_idx on public.audit_responses(audit_id);

-- Evidence can now be linked to a specific checklist item, not just an audit
alter table public.evidence
  add column if not exists checklist_item_id uuid references public.checklist_items(id) on delete set null;

-- ---------------------------------------------------------------------------
-- 4. Audit assignments (GWR admin assigns visits to auditors)
-- ---------------------------------------------------------------------------
-- Separate from `audits` so we can plan a visit before any audit row exists.
-- When auditor opens it in the PWA, an `audits` row is created and linked back.

create table if not exists public.audit_assignments (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  site_id uuid not null references public.sites(id) on delete cascade,
  brand_id uuid references public.brands(id) on delete set null,
  checklist_id uuid not null references public.checklists(id) on delete restrict,
  assigned_auditor_id uuid references auth.users(id),
  assigned_by uuid references auth.users(id),
  scheduled_for timestamptz,
  window_start timestamptz,
  window_end timestamptz,
  language text not null default 'en',
  status text not null default 'scheduled', -- scheduled | in_progress | completed | cancelled | missed
  audit_id uuid references public.audits(id) on delete set null,
  notes text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists audit_assignments_auditor_idx on public.audit_assignments(assigned_auditor_id);
create index if not exists audit_assignments_site_idx on public.audit_assignments(site_id);
create index if not exists audit_assignments_status_idx on public.audit_assignments(status);

-- ---------------------------------------------------------------------------
-- 5. RLS
-- ---------------------------------------------------------------------------
alter table public.client_groups          enable row level security;
alter table public.brands                 enable row level security;
alter table public.checklists             enable row level security;
alter table public.checklist_sections     enable row level security;
alter table public.checklist_items        enable row level security;
alter table public.audit_responses        enable row level security;
alter table public.audit_assignments      enable row level security;

-- Policies are added in a follow-up migration once organization_members
-- and JWT claim helpers (is_gwr_admin, current_org_id) are finalized.
-- Until then, only the service role key can read/write these tables.
