import { NextRequest, NextResponse } from 'next/server';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');

  if (origin) {
    try {
      if (new URL(origin).host !== request.nextUrl.host) {
        return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403 });
    }
  }

  let body: { email?: unknown; website?: unknown };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: acknowledge bots without adding their submission.
  if (typeof body.website === 'string' && body.website.trim()) {
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';

  if (!email || email.length > 320 || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    console.error('Waitlist is missing its Supabase server configuration.');
    return NextResponse.json({ error: 'Waitlist is temporarily unavailable.' }, { status: 503 });
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/waitlist_signups?on_conflict=email`, {
    method: 'POST',
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      'Content-Type': 'application/json',
      Prefer: 'resolution=ignore-duplicates,return=minimal',
    },
    body: JSON.stringify({ email, source: 'landing-page' }),
    cache: 'no-store',
  });

  if (!response.ok) {
    console.error('Supabase waitlist insert failed.', response.status);
    return NextResponse.json({ error: 'Waitlist is temporarily unavailable.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
