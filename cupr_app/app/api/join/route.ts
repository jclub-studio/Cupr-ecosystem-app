import { NextRequest, NextResponse } from 'next/server';
import type { JoinRequestBody } from '@/types/api';

type JoinResponseBody = {
  ok: boolean;
  message: string;
};

/**
 * POST /api/join
 *
 * Captures an email address from the /join early-access form.
 *
 * Current implementation: logs the submission server-side and returns success.
 * Production upgrade path: replace the TODO block below with an outbound call to
 * your chosen email/CRM service (e.g. Resend, SendGrid, Supabase, HubSpot).
 */
export async function POST(req: NextRequest): Promise<NextResponse<JoinResponseBody>> {
  let body: Partial<JoinRequestBody>;

  try {
    body = (await req.json()) as Partial<JoinRequestBody>;
  } catch {
    return NextResponse.json(
      { ok: false, message: 'Invalid request body.' },
      { status: 400 },
    );
  }

  const email = body.email?.trim().toLowerCase();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, message: 'A valid email address is required.' },
      { status: 422 },
    );
  }

  // TODO: Replace with your email capture / CRM integration, e.g.:
  //   await resend.emails.send({ from: '...', to: email, subject: 'Welcome to CŪPR' ... });
  //   await supabase.from('early_access').insert({ email, source: body.source });
  console.info('[join] Early-access request received:', { email, source: body.source ?? 'join-page' });

  return NextResponse.json(
    { ok: true, message: 'Request received. We will be in touch soon.' },
    { status: 201 },
  );
}
