import { NextResponse } from 'next/server';
import { getBudbookMockPayloads } from '@/lib/budbook-mock/buildPayloads';

/** Serialized mock entity payloads for the BudBook SPA bootstrap shim (?mock=1). */
export async function GET() {
  return NextResponse.json(await getBudbookMockPayloads());
}
