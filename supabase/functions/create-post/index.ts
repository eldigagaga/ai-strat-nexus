import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { createClient } from 'npm:@supabase/supabase-js@2'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405)
  }

  const apiKey = req.headers.get('x-api-key')
  const expected = Deno.env.get('MAKE_API_KEY')
  if (!expected || apiKey !== expected) {
    return json({ error: 'Unauthorized' }, 401)
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return json({ error: 'Invalid JSON body' }, 400)
  }

  const { title, slug, content, cover_image } = (body ?? {}) as Record<string, unknown>

  const errors: string[] = []
  if (typeof title !== 'string' || title.trim().length === 0 || title.length > 255) {
    errors.push('title must be a string of 1-255 characters')
  }
  if (typeof slug !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.length > 255) {
    errors.push('slug must be a lowercase kebab-case string of max 255 characters')
  }
  if (content !== undefined && content !== null && typeof content !== 'string') {
    errors.push('content must be a string')
  }
  if (cover_image !== undefined && cover_image !== null && typeof cover_image !== 'string') {
    errors.push('cover_image must be a string')
  }
  if (errors.length > 0) {
    return json({ error: errors }, 400)
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  )

  const { data, error } = await supabase
    .from('posts')
    .insert({
      title: (title as string).trim(),
      slug: slug as string,
      content: (content as string | undefined) ?? null,
      cover_image: (cover_image as string | undefined) ?? null,
      status: 'published',
      published_at: new Date().toISOString(),
    })
    .select()
    .single()

  if (error) {
    console.error('create-post insert failed', error.message)
    return json({ error: error.message }, 400)
  }

  return json({ post: data }, 201)
})