create extension if not exists pgcrypto;
create extension if not exists vector;

do $$
begin
  create type audit_status as enum ('draft', 'in_progress', 'submitted', 'closed');
exception
  when duplicate_object then null;
end $$;

do $$
begin
  create type finding_severity as enum ('Critical', 'Major', 'Minor');
exception
  when duplicate_object then null;
end $$;

do $$
begin
  create type finding_status as enum ('open', 'accepted', 'rejected', 'closed');
exception
  when duplicate_object then null;
end $$;

create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.sites (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null,
  country text not null,
  city text not null,
  address text,
  created_at timestamptz not null default now()
);

create table if not exists public.audits (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  site_id uuid not null references public.sites(id) on delete cascade,
  auditor_id uuid references auth.users(id),
  status audit_status not null default 'draft',
  language text not null default 'en',
  score numeric(5,2) not null default 100,
  started_at timestamptz not null default now(),
  submitted_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.evidence (
  id uuid primary key default gen_random_uuid(),
  audit_id uuid not null references public.audits(id) on delete cascade,
  storage_path text not null,
  file_name text not null,
  mime_type text not null default 'application/octet-stream',
  media_type text not null default 'file',
  area text,
  captured_at timestamptz not null default now(),
  ai_status text not null default 'queued',
  ai_result jsonb not null default '{}'::jsonb
);

alter table public.evidence
  add column if not exists mime_type text not null default 'application/octet-stream';

alter table public.evidence
  add column if not exists media_type text not null default 'file';

create table if not exists public.findings (
  id uuid primary key default gen_random_uuid(),
  audit_id uuid not null references public.audits(id) on delete cascade,
  evidence_id uuid references public.evidence(id) on delete set null,
  area text not null,
  issue text not null,
  code text not null,
  severity finding_severity not null,
  action text not null,
  due text not null,
  owner text,
  status finding_status not null default 'open',
  created_at timestamptz not null default now()
);

create table if not exists public.checklist_scores (
  id uuid primary key default gen_random_uuid(),
  audit_id uuid not null references public.audits(id) on delete cascade,
  section text not null,
  score numeric(5,2) not null,
  created_at timestamptz not null default now()
);

create table if not exists public.capa_tasks (
  id uuid primary key default gen_random_uuid(),
  finding_id uuid not null references public.findings(id) on delete cascade,
  assignee text,
  due_at timestamptz,
  status text not null default 'open',
  completed_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.reports (
  id uuid primary key default gen_random_uuid(),
  audit_id uuid not null references public.audits(id) on delete cascade,
  storage_path text,
  status text not null default 'draft',
  generated_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.knowledge_documents (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  source text not null,
  document_type text not null,
  jurisdiction text,
  version text,
  storage_path text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.knowledge_chunks (
  id uuid primary key default gen_random_uuid(),
  document_id uuid not null references public.knowledge_documents(id) on delete cascade,
  chunk_index integer not null,
  section text,
  content text not null,
  metadata jsonb not null default '{}'::jsonb,
  embedding vector(1536),
  created_at timestamptz not null default now(),
  unique (document_id, chunk_index)
);

create index if not exists knowledge_chunks_document_idx on public.knowledge_chunks(document_id);
create index if not exists knowledge_chunks_metadata_idx on public.knowledge_chunks using gin(metadata);

alter table public.organizations enable row level security;
alter table public.sites enable row level security;
alter table public.audits enable row level security;
alter table public.evidence enable row level security;
alter table public.findings enable row level security;
alter table public.checklist_scores enable row level security;
alter table public.capa_tasks enable row level security;
alter table public.reports enable row level security;
alter table public.knowledge_documents enable row level security;
alter table public.knowledge_chunks enable row level security;

drop policy if exists "authenticated read organizations" on public.organizations;
drop policy if exists "authenticated manage sites" on public.sites;
drop policy if exists "authenticated manage audits" on public.audits;
drop policy if exists "authenticated manage evidence" on public.evidence;
drop policy if exists "authenticated manage findings" on public.findings;
drop policy if exists "authenticated manage checklist scores" on public.checklist_scores;
drop policy if exists "authenticated manage capa tasks" on public.capa_tasks;
drop policy if exists "authenticated manage reports" on public.reports;
drop policy if exists "authenticated manage knowledge documents" on public.knowledge_documents;
drop policy if exists "authenticated manage knowledge chunks" on public.knowledge_chunks;

create policy "authenticated read organizations" on public.organizations
  for select to authenticated using (true);

create policy "authenticated manage sites" on public.sites
  for all to authenticated using (true) with check (true);

create policy "authenticated manage audits" on public.audits
  for all to authenticated using (true) with check (true);

create policy "authenticated manage evidence" on public.evidence
  for all to authenticated using (true) with check (true);

create policy "authenticated manage findings" on public.findings
  for all to authenticated using (true) with check (true);

create policy "authenticated manage checklist scores" on public.checklist_scores
  for all to authenticated using (true) with check (true);

create policy "authenticated manage capa tasks" on public.capa_tasks
  for all to authenticated using (true) with check (true);

create policy "authenticated manage reports" on public.reports
  for all to authenticated using (true) with check (true);

create policy "authenticated manage knowledge documents" on public.knowledge_documents
  for all to authenticated using (true) with check (true);

create policy "authenticated manage knowledge chunks" on public.knowledge_chunks
  for all to authenticated using (true) with check (true);

-- Prototype access: allows the local PWA to work before auth/user roles are added.
-- Remove or tighten these before production.
drop policy if exists "prototype anon read organizations" on public.organizations;
drop policy if exists "prototype anon manage sites" on public.sites;
drop policy if exists "prototype anon manage audits" on public.audits;
drop policy if exists "prototype anon manage evidence" on public.evidence;
drop policy if exists "prototype anon manage findings" on public.findings;
drop policy if exists "prototype anon manage checklist scores" on public.checklist_scores;
drop policy if exists "prototype anon manage capa tasks" on public.capa_tasks;
drop policy if exists "prototype anon manage reports" on public.reports;
drop policy if exists "prototype anon read knowledge documents" on public.knowledge_documents;
drop policy if exists "prototype anon read knowledge chunks" on public.knowledge_chunks;

create policy "prototype anon read organizations" on public.organizations
  for select to anon using (true);

create policy "prototype anon manage sites" on public.sites
  for all to anon using (true) with check (true);

create policy "prototype anon manage audits" on public.audits
  for all to anon using (true) with check (true);

create policy "prototype anon manage evidence" on public.evidence
  for all to anon using (true) with check (true);

create policy "prototype anon manage findings" on public.findings
  for all to anon using (true) with check (true);

create policy "prototype anon manage checklist scores" on public.checklist_scores
  for all to anon using (true) with check (true);

create policy "prototype anon manage capa tasks" on public.capa_tasks
  for all to anon using (true) with check (true);

create policy "prototype anon manage reports" on public.reports
  for all to anon using (true) with check (true);

create policy "prototype anon read knowledge documents" on public.knowledge_documents
  for select to anon using (true);

create policy "prototype anon read knowledge chunks" on public.knowledge_chunks
  for select to anon using (true);

drop policy if exists "prototype anon upload audit evidence" on storage.objects;
drop policy if exists "prototype anon read audit evidence" on storage.objects;
drop policy if exists "prototype anon read audit reports" on storage.objects;

create policy "prototype anon upload audit evidence" on storage.objects
  for insert to anon
  with check (bucket_id = 'audit-evidence');

create policy "prototype anon read audit evidence" on storage.objects
  for select to anon
  using (bucket_id = 'audit-evidence');

create policy "prototype anon read audit reports" on storage.objects
  for select to anon
  using (bucket_id = 'audit-reports');

insert into public.organizations (id, name)
values ('00000000-0000-4000-8000-000000000001', 'GWR Food Safety Demo')
on conflict (id) do nothing;

insert into public.sites (id, organization_id, name, country, city, address)
values (
  '00000000-0000-4000-8000-000000000101',
  '00000000-0000-4000-8000-000000000001',
  'Al Safa Central Kitchen',
  'UAE',
  'Dubai',
  'Pilot site'
)
on conflict (id) do nothing;
