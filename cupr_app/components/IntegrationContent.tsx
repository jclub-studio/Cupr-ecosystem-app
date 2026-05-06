'use client';

import { motion } from 'motion/react';
import {
  Globe,
  MapPin,
  Search,
  Store,
  ShoppingBag,
  Truck,
  Zap,
  Activity,
  ScanLine,
  Smartphone,
  ShoppingCart,
  BarChart2,
  Leaf,
  Package,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { IntegrationCardGrid, type IntegrationPlatform } from './IntegrationCardGrid';
import {
  CHANNEL_INTEGRATIONS,
  CHANNEL_INTEGRATIONS_INTRO,
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

const DIGITAL_PLATFORMS: IntegrationPlatform[] = CHANNEL_INTEGRATIONS.map(p => ({
  icon: ICONS[p.iconKey],
  name: p.name,
  label: p.label,
  desc: p.desc,
}));

export default function IntegrationContent() {
  return (
    <div className="flex flex-col w-full overflow-hidden relative">

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16 space-y-6 max-w-3xl">
            <p className="text-xl md:text-2xl font-light text-white leading-relaxed">
              {CHANNEL_INTEGRATIONS_INTRO.subhead}
            </p>
            <p className="text-neutral-400 font-light leading-relaxed text-lg">
              {CHANNEL_INTEGRATIONS_INTRO.body}
            </p>
          </div>

          <div className="mb-16 p-6 border border-white/10 rounded-2xl bg-neutral-950/50">
            <p className="text-neutral-300 font-light leading-relaxed">
              {CHANNEL_INTEGRATIONS_INTRO.bridge}
            </p>
          </div>

          <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-10">
            {CHANNEL_INTEGRATIONS_INTRO.sectionLabel}
          </p>

          <IntegrationCardGrid platforms={DIGITAL_PLATFORMS} columns={4} />

          <div className="mt-16 pt-10 border-t border-white/10 max-w-3xl">
            <p className="text-neutral-400 font-light leading-relaxed text-lg">
              {CHANNEL_INTEGRATIONS_INTRO.closing}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-neutral-900/50 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1 relative aspect-square md:aspect-[4/3] rounded-2xl border border-white/10 overflow-hidden bg-[#0a0a0a] flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

            <div className="w-full max-w-sm space-y-4 relative z-10">
              <div className="p-4 border border-white/10 rounded-xl bg-black/50 backdrop-blur-md">
                <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                  <span className="text-xs font-mono text-neutral-500 uppercase">Analysis: Northern Lights</span>
                  <ScanLine className="w-4 h-4 text-white" aria-hidden="true" />
                </div>
                <div className="space-y-3">
                  {['Myrcene (1.2%)', 'Pinene (0.8%)', 'Caryophyllene (0.5%)'].map((terp, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                        <span>{terp.split(' ')[0]}</span>
                        <span>{terp.split(' ')[1]}</span>
                      </div>
                      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${100 - (idx * 25)}%` }}
                          transition={{ duration: 1, delay: 0.5 + (idx * 0.2) }}
                          className="h-full bg-white"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-widest">
              <Zap className="w-4 h-4 text-yellow-500" aria-hidden="true" />
              BudBook Pro
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              Enhanced Analytical Display
            </h2>
            <p className="text-lg text-neutral-400 font-light leading-relaxed">
              Standard menus only tell half the story. Our BudBook Pro integration provides producers and dispensaries the tools to display deep-dive analytics directly to consumers.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                'Full terpene profiling and lab analysis visualization.',
                'Interactive strain lineage and genetics mapping.',
                'Rich media upload for unboxing and trichome macro shots.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-neutral-300 font-light">
                  <span className="font-mono text-neutral-600 mt-1">0{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
