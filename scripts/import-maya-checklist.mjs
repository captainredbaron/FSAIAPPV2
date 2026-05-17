// Import Maya's master food-safety checklist from src/data/foodSafetyChecklist.ts
// into the new checklists / checklist_sections / checklist_items tables.
//
// Idempotent: re-running re-uses the same checklist by (name, version) and
// upserts sections/items by (checklist_id, section_index/item_index).

import fs from 'node:fs'
import path from 'node:path'
import pg from 'pg'

const { Client } = pg

const env = Object.fromEntries(
  fs.readFileSync('.env.local', 'utf8').split(/\n/).filter(Boolean).map((l) => {
    const i = l.indexOf('=')
    return [l.slice(0, i), l.slice(i + 1)]
  }),
)
const projectRef = new URL(env.VITE_SUPABASE_URL).hostname.split('.')[0]
const password = env.SUPABASE_DB_PASSWORD

// Load checklist by stripping the TS wrapper and parsing the JSON-like array.
const tsSrc = fs.readFileSync('src/data/foodSafetyChecklist.ts', 'utf8')
const arrStart = tsSrc.indexOf('[')
const satisfiesIdx = tsSrc.indexOf('satisfies')
const arrEnd = tsSrc.lastIndexOf(']', satisfiesIdx > 0 ? satisfiesIdx : tsSrc.length) + 1
const jsonText = tsSrc.slice(arrStart, arrEnd)
const sections = JSON.parse(jsonText)

console.log(`Loaded ${sections.length} sections, ${sections.reduce((n, s) => n + (s.items?.length || 0), 0)} items`)

const checklistName = 'GWR Food Safety Master'
const checklistVersion = '1.0'
const checklistSource = "Maya's raw food-safety checklist (Excel, imported 2026-05-16)"

const c = new Client({
  host: 'aws-1-ap-south-1.pooler.supabase.com',
  port: 6543,
  user: 'postgres.' + projectRef,
  database: 'postgres',
  password,
  ssl: { rejectUnauthorized: false },
})

await c.connect()
await c.query('begin')

try {
  // 1. Upsert checklist row
  const cr = await c.query(
    `insert into public.checklists (name, version, scope, source, status, metadata)
     values ($1, $2, 'global', $3, 'active', $4)
     on conflict (name, version) do update set source = excluded.source, status = excluded.status
     returning id`,
    [checklistName, checklistVersion, checklistSource, JSON.stringify({ origin: 'src/data/foodSafetyChecklist.ts' })],
  )
  const checklistId = cr.rows[0].id
  console.log('checklist id:', checklistId)

  let sectionIdx = 0
  let totalItems = 0
  for (const sec of sections) {
    const sr = await c.query(
      `insert into public.checklist_sections (checklist_id, section_index, code, title_en, title_ar, metadata)
       values ($1, $2, $3, $4, $5, $6)
       on conflict (checklist_id, section_index)
       do update set code = excluded.code, title_en = excluded.title_en, title_ar = excluded.title_ar
       returning id`,
      [
        checklistId,
        sectionIdx,
        sec.id,
        sec.title,
        sec.titleAr || null,
        JSON.stringify({ legacy_id: sec.id }),
      ],
    )
    const sectionId = sr.rows[0].id

    let itemIdx = 0
    for (const item of sec.items || []) {
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
           action_plan_reference = excluded.action_plan_reference`,
        [
          checklistId,
          sectionId,
          totalItems, // global index across the whole checklist for uniqueness
          item.id,
          item.question || '',
          item.questionAr || null,
          JSON.stringify(item.answers || []),
          item.requiresEvidence === true,
          item.actionPlans ? item.actionPlans.join('\n• ') : null,
          JSON.stringify({ legacy_id: item.id, guidance: item.guidance || '', actionPlans: item.actionPlans || [] }),
        ],
      )
      itemIdx++
      totalItems++
    }
    sectionIdx++
    console.log(`  section ${sec.title.padEnd(40)} → ${itemIdx} items`)
  }

  await c.query('commit')
  console.log(`✅ imported ${sectionIdx} sections, ${totalItems} items`)
} catch (err) {
  await c.query('rollback')
  console.error('rolled back:', err.message)
  process.exit(1)
} finally {
  await c.end()
}
