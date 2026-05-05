import { readFile } from 'fs/promises';
import path from 'path';

export type BudbookMockRaw = {
  overview: unknown;
  stash: {
    products: Array<{
      id: string;
      strain_name: string;
      brand: string;
      classification: string;
      category: string;
      thc_percentage: number;
      cbd_percentage: number;
      top_terpenes: Array<{ name: string; percentage: number }>;
      remaining_quantity: { value: number; unit: string };
      lab_report_id: string;
      preferred_dispensary_id: string;
      purchase_date?: string;
    }>;
    hardware: Array<{
      id: string;
      model_name: string;
      brand: string;
      ecosystem: string;
      usage_count: number;
      condition: string;
      next_scheduled_maintenance: string;
    }>;
    retail_directory: Array<{
      id: string;
      dispensary_name: string;
      location: {
        address_line: string;
        city: string;
        state: string;
        zip: string;
      };
      preferred_budtender: { name: string; contact: string };
      last_transaction_date: string;
    }>;
  };
  recent_sessions: Array<{
    id: string;
    timestamp: string;
    variables: {
      product_id: string;
      dosage: string;
      consumption_method: string;
      pairing: string | null;
    };
    efficacy_mapping: {
      pre: { mood: number; pain: number; anxiety: number };
      post: { mood: number; pain: number; anxiety: number };
    };
    pattern_recognition: string;
  }>;
};

export type BudbookMockPayloads = {
  overview: unknown;
  user: Record<string, unknown>;
  products: Record<string, unknown>[];
  inventory: Record<string, unknown>[];
  sessions: Record<string, unknown>[];
  dispensaries: Record<string, unknown>[];
  accessories: Record<string, unknown>[];
};

function classificationToType(c: string): string {
  const x = String(c || '').toLowerCase();
  if (x === 'indica' || x === 'sativa' || x === 'hybrid') return x;
  return 'hybrid';
}

export function buildPayloadsFromRaw(raw: BudbookMockRaw): BudbookMockPayloads {
  const stash = raw.stash;
  const products = stash.products.map((prod) => ({
    id: prod.id,
    name: prod.strain_name,
    strain_name: prod.strain_name,
    brand: prod.brand,
    type: classificationToType(prod.classification),
    category: prod.category,
    thc_percentage: prod.thc_percentage,
    cbd_percentage: prod.cbd_percentage,
    terpene_profile: prod.top_terpenes.map((t) => ({
      terpene_name: t.name,
      percentage: t.percentage,
    })),
    lab_report_id: prod.lab_report_id,
    dispensary_id: prod.preferred_dispensary_id,
  }));

  const inventory = stash.products.map((prod) => {
    const qty = prod.remaining_quantity;
    const unit = qty.unit === 'g' ? 'grams' : qty.unit;
    return {
      id: `inv-${prod.id}`,
      product_id: prod.id,
      quantity: qty.value,
      unit,
      is_active: true,
      purchase_date: prod.purchase_date || '2026-04-01',
      notes: '',
    };
  });

  const ratings = [5, 4, 3, 4];
  const sessions = raw.recent_sessions.map((s, idx) => {
    const pre = s.efficacy_mapping.pre;
    const post = s.efficacy_mapping.post;
    return {
      id: s.id,
      date: s.timestamp,
      product_id: s.variables.product_id,
      consumption_method: s.variables.consumption_method,
      dosage: s.variables.dosage,
      pairing_notes: s.variables.pairing || '',
      rating: ratings[idx] != null ? ratings[idx] : 4,
      mood_before: pre.mood,
      mood_after: post.mood,
      pain_before: pre.pain,
      pain_after: post.pain,
      anxiety_before: pre.anxiety,
      anxiety_after: post.anxiety,
      effects_felt: ['Calm', 'Body relaxation'],
      activities: ['Wind-down'],
      session_notes: s.pattern_recognition,
      session_name: '',
    };
  });

  sessions.sort(
    (a, b) => new Date(String(b.date)).getTime() - new Date(String(a.date)).getTime(),
  );

  const dispensaries = stash.retail_directory.map((d) => ({
    id: d.id,
    name: d.dispensary_name,
    shop_name: d.dispensary_name,
    city: d.location.city,
    state: d.location.state,
    address: d.location.address_line,
    zip_code: d.location.zip,
    notes: `Preferred budtender: ${d.preferred_budtender.name} — ${d.preferred_budtender.contact}`,
    last_visit_date: d.last_transaction_date,
  }));

  /** Maps stash hardware → Accessory entity fields the BudBook UI expects (category is required: Zb/kce call .split on it). */
  function accessoryCategoryFromHardware(h: { model_name: string }): string {
    const n = h.model_name.toLowerCase();
    if (n.includes('grinder') || n.includes('shredder')) return 'grinder';
    if (
      n.includes('vaporizer') ||
      n.includes('pax') ||
      n.includes('cupr') ||
      n.includes('dry herb')
    ) {
      return 'vaporizer_dry_herb';
    }
    return 'other';
  }

  function accessoryConditionSlug(raw: string): string {
    const x = String(raw || '').toLowerCase();
    if (x.includes('optimal') || x.includes('excellent') || x.includes('good'))
      return 'good';
    if (x.includes('need') || x.includes('maint')) return 'needs_maintenance';
    return 'good';
  }

  const accessories = stash.hardware.map((h) => ({
    id: h.id,
    name: h.model_name,
    brand: h.brand,
    category: accessoryCategoryFromHardware(h),
    condition: accessoryConditionSlug(h.condition),
    purchase_date: '2026-04-01',
    notes: '',
    is_favorite: false,
    image_url: '',
    usage_sessions_count: h.usage_count,
    condition_status: h.condition,
    next_maintenance_date: h.next_scheduled_maintenance,
    ecosystem_tag: h.ecosystem,
  }));

  const user = {
    id: 'user-mock-jordan-rivers',
    email: 'jordan.rivers.mock@example.com',
    full_name: 'Jordan Rivers',
    username: 'jordanrivers',
    role: 'user',
  };

  return {
    overview: raw.overview,
    user,
    products,
    inventory,
    sessions,
    dispensaries,
    accessories,
  };
}

let payloadsPromise: Promise<BudbookMockPayloads> | null = null;

export async function getBudbookMockPayloads(): Promise<BudbookMockPayloads> {
  if (!payloadsPromise) {
    payloadsPromise = (async () => {
      const fp = path.join(
        process.cwd(),
        'public/budbook-app/mock/budbook-mock-user.json',
      );
      const txt = await readFile(fp, 'utf8');
      const raw = JSON.parse(txt) as BudbookMockRaw;
      return buildPayloadsFromRaw(raw);
    })();
  }
  return payloadsPromise;
}
