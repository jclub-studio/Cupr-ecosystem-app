'use client';

import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { CategorySidebarLayout, type CategoryTab } from '@/components/CategorySidebarLayout';

type ConsumableCategory = CategoryTab & { desc: string };

const CATEGORIES: ReadonlyArray<ConsumableCategory> = [
  { id: 'scent-disposers', title: 'Scent Disposers', desc: 'Discreet and effective disposal units designed to trap odors instantly.' },
  { id: 'incense', title: 'Incense', desc: 'Premium, slow-burning incense sticks with natural, curated scent profiles.' },
  { id: 'odor-spray', title: 'Odor-Eliminating Spray', desc: 'Fast-acting, non-toxic sprays that neutralize odors at a molecular level.' },
  { id: 'car-fresheners', title: 'Car Fresheners', desc: 'Subtle, long-lasting fragrances designed specifically for automotive interiors.' },
  { id: 'cleaning-solvent', title: 'Bong Cleaning Solvent', desc: 'High-strength concentrate crafted to dissolve resin and restore glass to a pristine shine.' },
  { id: 'pipe-cleaners', title: 'Pipe Cleaners', desc: 'Durable, highly absorbent bristle cleaners for precision maintenance.' },
  { id: 'rolling-papers', title: 'Rolling Papers', desc: 'Ultra-thin, unbleached papers with natural gum for a slow, even burn.' },
  { id: 'lighters', title: 'Lighters', desc: 'Reliable, minimalist lighter designs that perfectly complement your setup.' },
  { id: 'matchboxes', title: 'Matchboxes', desc: 'Premium strike-anywhere matches housed in sleek, branded boxes.' },
  { id: 'dry-mouth-mints', title: 'Dry Mouth Mints', desc: 'Refreshing, hydrating mints formulated specifically to combat cottonmouth.' },
  { id: 'cbd-beverages', title: 'CBD Hydration Beverages', desc: 'Sparkling, restorative drinks infused with premium hemp extract.' },
  { id: 'candles', title: 'Candles', desc: 'Hand-poured, soy-wax candles with sophisticated terpene-inspired fragrances.' },
];

function CategoryContent({ category }: { category: ConsumableCategory }) {
  return (
    <>
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 md:px-12 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-800/40 via-black to-black pointer-events-none" />
        <div className="max-w-7xl w-full relative z-10 space-y-8 mt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
            Consumables Collection
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-white">{category.title}</h1>
          <p className="max-w-xl text-neutral-400 font-light text-lg leading-relaxed">{category.desc}</p>
          <div className="pt-8 text-neutral-600 animate-bounce cursor-default" aria-hidden>
            <ArrowDown className="w-6 h-6" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="group relative flex flex-col h-full bg-neutral-950 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-colors"
          >
            <div className="relative aspect-square bg-[#0a0a0a] flex items-center justify-center p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <div className="w-full h-full border border-dashed border-white/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <span className="font-mono text-xs text-neutral-600 uppercase tracking-widest text-center px-4">
                  {category.title} Series
                </span>
              </div>
            </div>

            <div className="px-6 pb-8 pt-4 flex flex-col flex-grow relative z-20">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-light text-white group-hover:text-white transition-colors">
                  {category.title}
                </h3>
                <span className="text-[10px] font-mono border border-white/20 rounded-full px-2 py-0.5 text-neutral-400 group-hover:border-white/50 group-hover:text-white transition-colors">
                  Explore
                </span>
              </div>
              <p className="text-sm text-neutral-400 font-light leading-relaxed flex-grow">{category.desc}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default function Consumables() {
  return (
    <CategorySidebarLayout
      categories={CATEGORIES}
      renderContent={category => <CategoryContent category={category} />}
    />
  );
}
