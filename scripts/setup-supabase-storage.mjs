import fs from 'node:fs'

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

const supabaseUrl = env.VITE_SUPABASE_URL
const serviceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error('VITE_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required in .env.local')
}

const buckets = [
  {
    id: 'audit-evidence',
    name: 'audit-evidence',
    public: false,
    file_size_limit: 52_428_800,
    allowed_mime_types: [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/heic',
      'video/mp4',
      'video/quicktime',
      'video/webm',
      'audio/mpeg',
      'audio/mp4',
      'audio/aac',
      'audio/wav',
      'audio/webm',
      'audio/ogg',
      'audio/x-m4a',
    ],
  },
  {
    id: 'audit-reports',
    name: 'audit-reports',
    public: false,
    file_size_limit: 52_428_800,
    allowed_mime_types: ['application/pdf'],
  },
]

async function storageRequest(path, options = {}) {
  const response = await fetch(supabaseUrl + path, {
    ...options,
    headers: {
      apikey: serviceRoleKey,
      Authorization: 'Bearer ' + serviceRoleKey,
      ...(options.headers ?? {}),
    },
  })

  const body = await response.text()
  return { response, body }
}

for (const bucket of buckets) {
  const existing = await storageRequest('/storage/v1/bucket/' + bucket.id)

  if (existing.response.ok) {
    const updated = await storageRequest('/storage/v1/bucket/' + bucket.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bucket),
    })

    if (!updated.response.ok) {
      throw new Error(bucket.id + ': update ' + updated.response.status + ' ' + updated.body)
    }

    console.log(bucket.id + ': updated')
    continue
  }

  const created = await storageRequest('/storage/v1/bucket', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bucket),
  })

  if (!created.response.ok) {
    throw new Error(bucket.id + ': ' + created.response.status + ' ' + created.body)
  }

  console.log(bucket.id + ': created')
}
