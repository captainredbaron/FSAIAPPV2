// Import Al Tayer food-safety QCS form structures into Supabase checklists.
//
// Source files are produced by scripts/pull_altayer_qcs.py under
// training/altayer_qcs_forms/. This importer is idempotent on checklist
// name+version and keeps QCS form/element/question ids in metadata.

import fs from 'node:fs'
import path from 'node:path'
import pg from 'pg'

const { Client } = pg

const ROOT = process.cwd()
const FORMS_DIR = path.join(ROOT, 'training/altayer_qcs_forms')
const INDEX_PATH = path.join(FORMS_DIR, 'INDEX.json')

const env = Object.fromEntries(
  fs.readFileSync('.env.local', 'utf8')
    .split(/\n/)
    .filter((line) => line.trim() && !line.trim().startsWith('#'))
    .map((line) => {
      const i = line.indexOf('=')
      return [line.slice(0, i), line.slice(i + 1)]
    }),
)

const projectRef = new URL(env.VITE_SUPABASE_URL).hostname.split('.')[0]
const password = env.SUPABASE_DB_PASSWORD

const c = new Client({
  host: 'aws-1-ap-south-1.pooler.supabase.com',
  port: 6543,
  user: 'postgres.' + projectRef,
  database: 'postgres',
  password,
  ssl: { rejectUnauthorized: false },
})

function stripHtml(value = '') {
  return String(value)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+\n/g, '\n')
    .replace(/\n\s+/g, '\n')
    .replace(/[ \t]{2,}/g, ' ')
    .trim()
}

function splitEnglishArabic(html = '') {
  const raw = String(html)
  const parts = raw.split(/<br\s*\/?>/i)
  if (parts.length > 1) {
    return {
      en: stripHtml(parts[0]),
      ar: stripHtml(parts.slice(1).join('<br>')) || null,
    }
  }
  const clean = stripHtml(raw)
  return { en: clean, ar: null }
}

function isHelperQuestion(text = '') {
  const clean = stripHtml(text).toLowerCase()
  return (
    clean === '' ||
    clean === 'action plan' ||
    clean === 'picture' ||
    clean === 'pictures' ||
    clean === 'corrected mistakes' ||
    clean.startsWith('action plan ') ||
    clean.startsWith('picture ') ||
    clean.startsWith('pictures ')
  )
}

function parseVersion(name, formId) {
  const match = String(name).match(/\bV(\d+(?:\.\d+)*)\b/i)
  return match ? match[1] : 'qcs-' + formId
}

function answerOptions(answersByQuestion, questionId) {
  return (answersByQuestion.get(questionId) || [])
    .sort((a, b) => Number(a.Position || 0) - Number(b.Position || 0))
    .map((a) => ({
      label: stripHtml(a.Text),
      score: a.Measure == null ? null : Number(a.Measure),
      qcsAnswerSetId: a.AnswerSetID ?? null,
      qcsPosition: a.Position ?? null,
    }))
}

async function getOrCreateGroup() {
  const existing = await c.query('select id from public.client_groups where name = $1', ['Al Tayer Group'])
  if (existing.rows[0]) return existing.rows[0].id
  const inserted = await c.query(
    'insert into public.client_groups (name, description) values ($1, $2) returning id',
    ['Al Tayer Group', 'Imported from QCS food-safety forms'],
  )
  return inserted.rows[0].id
}

async function getOrCreateOrganization(groupId) {
  const existing = await c.query('select id from public.organizations where name = $1', ['Al Tayer - FS'])
  if (existing.rows[0]) {
    await c.query(
      'update public.organizations set client_group_id = $1, segment = $2, country = $3 where id = $4',
      [groupId, 'Food safety / F&B', 'UAE', existing.rows[0].id],
    )
    return existing.rows[0].id
  }
  const inserted = await c.query(
    'insert into public.organizations (name, client_group_id, segment, country) values ($1, $2, $3, $4) returning id',
    ['Al Tayer - FS', groupId, 'Food safety / F&B', 'UAE'],
  )
  return inserted.rows[0].id
}

async function getOrCreateBrand(organizationId, brandName) {
  const inserted = await c.query(
    `insert into public.brands (organization_id, name, segment)
     values ($1, $2, $3)
     on conflict (organization_id, name)
     do update set segment = excluded.segment
     returning id`,
    [organizationId, brandName, 'F&B'],
  )
  return inserted.rows[0].id
}

async function importForm({ brandName, formId, formName, organizationId, brandId }) {
  const raw = JSON.parse(fs.readFileSync(path.join(FORMS_DIR, 'form_' + formId + '.json'), 'utf8'))
  const rowsets = raw.dataset?.data || []
  const elements = [...(rowsets[1] || [])].sort((a, b) => Number(a.Position || 0) - Number(b.Position || 0))
  const answers = rowsets[3] || []
  const answersByQuestion = new Map()
  for (const a of answers) {
    const list = answersByQuestion.get(a.QuestionID) || []
    list.push(a)
    answersByQuestion.set(a.QuestionID, list)
  }

  const version = parseVersion(formName, formId)
  const checklist = await c.query(
    `insert into public.checklists
       (name, version, scope, organization_id, brand_id, source, status, metadata)
     values ($1, $2, 'brand', $3, $4, $5, 'active', $6::jsonb)
     on conflict (name, version) do update set
       scope = excluded.scope,
       organization_id = excluded.organization_id,
       brand_id = excluded.brand_id,
       source = excluded.source,
       status = excluded.status,
       metadata = excluded.metadata
     returning id`,
    [
      formName,
      version,
      organizationId,
      brandId,
      'QCS Shopmetrics FormElements API',
      JSON.stringify({ qcsFormId: formId, brandName, importedFrom: 'training/altayer_qcs_forms' }),
    ],
  )
  const checklistId = checklist.rows[0].id

  let currentSection = null
  let sectionIndex = -1
  let itemIndex = 0
  let importedItems = 0

  for (let i = 0; i < elements.length; i += 1) {
    const e = elements[i]
    const kind = String(e.ElementTypeID || '').trim()
    if (kind === 'S') {
      sectionIndex += 1
      const title = splitEnglishArabic(e.Text)
      const sec = await c.query(
        `insert into public.checklist_sections
           (checklist_id, section_index, code, title_en, title_ar, metadata)
         values ($1, $2, $3, $4, $5, $6::jsonb)
         on conflict (checklist_id, section_index) do update set
           code = excluded.code,
           title_en = excluded.title_en,
           title_ar = excluded.title_ar,
           metadata = excluded.metadata
         returning id`,
        [
          checklistId,
          sectionIndex,
          'QCS-' + formId + '-S' + e.ElementID,
          title.en || 'Untitled section',
          title.ar,
          JSON.stringify({ qcsElementId: e.ElementID, qcsPosition: e.Position, sectionType: e.SectionType }),
        ],
      )
      currentSection = sec.rows[0]
      continue
    }

    if (kind !== 'Q' || !currentSection || isHelperQuestion(e.Text)) continue

    const q = splitEnglishArabic(e.Text)
    if (!q.en) continue

    const nextHelpers = []
    for (let j = i + 1; j < Math.min(elements.length, i + 4); j += 1) {
      const candidate = elements[j]
      if (String(candidate.ElementTypeID || '').trim() !== 'Q') break
      if (!isHelperQuestion(candidate.Text)) break
      nextHelpers.push({
        qcsElementId: candidate.ElementID,
        qcsPosition: candidate.Position,
        text: stripHtml(candidate.Text),
      })
    }

    await c.query(
      `insert into public.checklist_items
         (checklist_id, section_id, item_index, code, text_en, text_ar,
          answer_options, evidence_required, action_plan_reference, metadata)
       values ($1, $2, $3, $4, $5, $6, $7::jsonb, $8, $9, $10::jsonb)
       on conflict (checklist_id, item_index) do update set
         section_id = excluded.section_id,
         code = excluded.code,
         text_en = excluded.text_en,
         text_ar = excluded.text_ar,
         answer_options = excluded.answer_options,
         evidence_required = excluded.evidence_required,
         action_plan_reference = excluded.action_plan_reference,
         metadata = excluded.metadata`,
      [
        checklistId,
        currentSection.id,
        itemIndex,
        'QCS-' + formId + '-Q' + e.ElementID,
        q.en,
        q.ar,
        JSON.stringify(answerOptions(answersByQuestion, e.ElementID)),
        nextHelpers.some((h) => h.text.toLowerCase().startsWith('picture')),
        nextHelpers.find((h) => h.text.toLowerCase().startsWith('action plan'))?.text || null,
        JSON.stringify({
          qcsFormId: formId,
          qcsElementId: e.ElementID,
          qcsPosition: e.Position,
          qcsObjectName: e.ObjectName,
          helperFields: nextHelpers,
          rawHtml: e.Text,
        }),
      ],
    )
    itemIndex += 1
    importedItems += 1
  }

  return { formId, formName, brandName, checklistId, sections: sectionIndex + 1, items: importedItems }
}

await c.connect()
await c.query('begin')

try {
  const index = JSON.parse(fs.readFileSync(INDEX_PATH, 'utf8'))
  const groupId = await getOrCreateGroup()
  const organizationId = await getOrCreateOrganization(groupId)
  const results = []

  for (const [brandName, forms] of Object.entries(index.brands || {})) {
    const brandId = await getOrCreateBrand(organizationId, brandName)
    for (const form of forms) {
      if (form.error) continue
      results.push(await importForm({
        brandName,
        formId: form.form_id,
        formName: form.name,
        organizationId,
        brandId,
      }))
    }
  }

  await c.query('commit')
  console.log(JSON.stringify({ organizationId, imported: results }, null, 2))
} catch (err) {
  await c.query('rollback')
  console.error(err)
  process.exit(1)
} finally {
  await c.end()
}
