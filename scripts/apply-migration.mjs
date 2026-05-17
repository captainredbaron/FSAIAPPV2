import fs from 'node:fs'
import path from 'node:path'
import pg from 'pg'

const { Client } = pg

const migrationFile = process.argv[2]
if (!migrationFile) {
  console.error('usage: node scripts/apply-migration.mjs <path-to-migration.sql>')
  process.exit(1)
}

if (!fs.existsSync(migrationFile)) {
  console.error('migration file not found: ' + migrationFile)
  process.exit(1)
}

const env = Object.fromEntries(
  fs
    .readFileSync('.env.local', 'utf8')
    .split(/\n/)
    .filter(Boolean)
    .map((line) => {
      const separator = line.indexOf('=')
      return [line.slice(0, separator), line.slice(separator + 1)]
    }),
)

const projectRef = new URL(env.VITE_SUPABASE_URL).hostname.split('.')[0]
const password = env.SUPABASE_DB_PASSWORD

if (!projectRef || !password) {
  throw new Error('VITE_SUPABASE_URL and SUPABASE_DB_PASSWORD are required in .env.local')
}

const hosts = [
  { host: 'aws-1-ap-south-1.pooler.supabase.com', port: 6543, user: 'postgres.' + projectRef },
  { host: 'db.' + projectRef + '.supabase.co', port: 5432, user: 'postgres' },
  { host: 'aws-0-eu-central-1.pooler.supabase.com', port: 6543, user: 'postgres.' + projectRef },
  { host: 'aws-0-eu-central-1.pooler.supabase.com', port: 5432, user: 'postgres.' + projectRef },
]

const sql = fs.readFileSync(migrationFile, 'utf8')
console.log('applying migration: ' + path.basename(migrationFile))
console.log('size: ' + sql.length + ' bytes')

let lastError

for (const config of hosts) {
  const client = new Client({
    ...config,
    database: 'postgres',
    password,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 10_000,
  })

  try {
    console.log('connecting: ' + config.host + ':' + config.port + ' as ' + config.user)
    await client.connect()
    await client.query('begin')
    await client.query(sql)
    await client.query('commit')
    console.log('migration applied ✅')
    await client.end()
    process.exit(0)
  } catch (error) {
    lastError = error
    console.error('failed: ' + (error instanceof Error ? error.message : String(error)))
    try {
      await client.query('rollback')
    } catch {
      // ignore
    }
    try {
      await client.end()
    } catch {
      // ignore
    }
  }
}

throw lastError
