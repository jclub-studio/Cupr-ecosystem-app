'use client';

import { motion } from 'motion/react';
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
import type { ComponentType } from 'react';
import {
  OPERATIONAL_INTEGRATIONS,
  OPERATIONAL_INTEGRATIONS_INTRO,
  type IntegrationPlatformContent,
} from '@/content/integrations';

const ICONS: Record<IntegrationPlatformContent['iconKey'], ComponentType<{ className?: string }>> = {
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OPERATIONAL_INTEGRATIONS.map((platform, i) => {
              const Icon = ICONS[platform.iconKey];
              return (
                <motion.div
                  key={platform.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="p-8 bg-neutral-950 border border-white/10 rounded-2xl flex flex-col hover:bg-neutral-900 transition-colors group"
                >
                  <Icon className="w-8 h-8 text-neutral-500 mb-6 group-hover:text-white transition-colors" />
                  <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-600 mb-2">
                    {platform.label}
                  </p>
                  <h3 className="text-lg font-medium text-white mb-3">{platform.name}</h3>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">{platform.desc}</p>
                </motion.div>
              );
            })}
          </div>

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
