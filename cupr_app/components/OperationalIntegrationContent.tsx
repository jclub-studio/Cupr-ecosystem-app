'use client';

import {
  ShoppingCart,
  BarChart2,
  Leaf,
  Package,
  Globe,
  MapPin,
  Smartphone,
  Search,
  Activity,
  Store,
  ShoppingBag,
  Truck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { IntegrationCardGrid, type IntegrationPlatform } from './IntegrationCardGrid';
import {
  OPERATIONAL_INTEGRATIONS,
  OPERATIONAL_INTEGRATIONS_INTRO,
  type IntegrationPlatformContent,
} from '@/content/integrations';

const ICONS: Record<IntegrationPlatformContent['iconKey'], LucideIcon> = {
  Globe,
  MapPin,
  Smartphone,
  Search,
  Activity,
  Store,
  ShoppingBag,
  Truck,
  ShoppingCart,
  BarChart2,
  Leaf,
  Package,
};

const OPERATIONAL_PLATFORMS: IntegrationPlatform[] = OPERATIONAL_INTEGRATIONS.map(p => ({
  icon: ICONS[p.iconKey],
  name: p.name,
  label: p.label,
  desc: p.desc,
}));

export default function OperationalIntegrationContent() {
  return (
    <div className="flex flex-col w-full overflow-hidden relative">
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16 space-y-6 max-w-3xl">
            <p className="text-xl md:text-2xl font-light text-white leading-relaxed">
              {OPERATIONAL_INTEGRATIONS_INTRO.subhead}
            </p>
            <p className="text-neutral-400 font-light leading-relaxed text-lg">
              {OPERATIONAL_INTEGRATIONS_INTRO.body}
            </p>
          </div>

          <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-10">
            {OPERATIONAL_INTEGRATIONS_INTRO.sectionLabel}
          </p>

          <IntegrationCardGrid
            platforms={OPERATIONAL_PLATFORMS}
            columns={2}
            staggerDelay={0.07}
          />

          <div className="mt-16 pt-10 border-t border-white/10 max-w-3xl">
            <p className="text-neutral-400 font-light leading-relaxed text-lg">
              {OPERATIONAL_INTEGRATIONS_INTRO.closing}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
