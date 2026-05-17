import fs from 'node:fs'
import pg from 'pg'

const { Client } = pg

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

const sql = fs.readFileSync('supabase/schema.sql', 'utf8')
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
    await client.query(sql)
    console.log('schema applied')
    await client.end()
    process.exit(0)
  } catch (error) {
    lastError = error
    console.error('failed: ' + (error instanceof Error ? error.message : String(error)))
    try {
      await client.end()
    } catch {
      // ignore cleanup failure
    }
  }
}

throw lastError
