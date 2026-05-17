import fs from 'node:fs'
import pg from 'pg'
const { Client } = pg
const env = Object.fromEntries(fs.readFileSync('.env.local','utf8').split(/\n/).filter(Boolean).map(l=>{const i=l.indexOf('='); return [l.slice(0,i),l.slice(i+1)]}))
const ref = new URL(env.VITE_SUPABASE_URL).hostname.split('.')[0]
const c = new Client({ host:'aws-1-ap-south-1.pooler.supabase.com', port:6543, user:'postgres.'+ref, database:'postgres', password:env.SUPABASE_DB_PASSWORD, ssl:{rejectUnauthorized:false} })
await c.connect()
const tables = ['client_groups','brands','checklists','checklist_sections','checklist_items','audit_responses','audit_assignments']
for (const t of tables) {
  const r = await c.query(`select count(*) as n, (select count(*) from information_schema.columns where table_schema='public' and table_name=$1) as cols from public.${t}`, [t])
  console.log(`${t.padEnd(25)} rows=${r.rows[0].n}  cols=${r.rows[0].cols}`)
}
// check FK columns added
const extras = [
  ['organizations','client_group_id'],['organizations','segment'],['organizations','country'],
  ['sites','brand_id'],
  ['audits','checklist_id'],['audits','brand_id'],
  ['evidence','checklist_item_id'],
]
for (const [t,col] of extras) {
  const r = await c.query("select count(*) as n from information_schema.columns where table_schema='public' and table_name=$1 and column_name=$2", [t,col])
  console.log(`${(t+'.'+col).padEnd(35)} present=${r.rows[0].n==='1'}`)
}
await c.end()
