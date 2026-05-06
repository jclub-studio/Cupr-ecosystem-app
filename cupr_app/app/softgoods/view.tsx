'use client';

import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { CategorySidebarLayout, type CategoryTab } from '@/components/CategorySidebarLayout';

type SoftgoodCategory = CategoryTab & { desc: string };

const CATEGORIES: ReadonlyArray<SoftgoodCategory> = [
  { id: 'apparel', title: 'Apparel', desc: 'Premium garments engineered for comfort, utility, and refined aesthetics.' },
  { id: 'headwear', title: 'Headwear', desc: 'Caps and beanies crafted with elevated materials and structural integrity.' },
  { id: 'accessories', title: 'Accessories', desc: 'Tactile additions designed to complement your lifestyle.' },
  { id: 'bags', title: 'Bags', desc: 'Functional storage solutions built for daily carry and extended travel.' },
];

function CategoryContent({ category }: { category: SoftgoodCategory }) {
  return (
    <>
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 md:px-12 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-800/40 via-black to-black pointer-events-none" />
        <div className="max-w-7xl w-full relative z-10 space-y-8 mt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
            Softgoods Collection
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
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col cursor-pointer border border-white/5 bg-neutral-950/50 hover:bg-neutral-900 rounded-2xl overflow-hidden transition-colors"
            >
              <div className="relative aspect-[4/5] bg-[#0a0a0a] flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <div className="w-full h-full border border-dashed border-white/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="font-mono text-xs text-neutral-600 uppercase tracking-widest">
                    {category.title} 0{item}
                  </span>
                </div>
              </div>

              <div className="px-6 pb-8 pt-4 flex flex-col flex-grow relative z-20">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-light text-white group-hover:text-white transition-colors">
                    {category.title} Item 0{item}
                  </h3>
                  <span className="text-[10px] font-mono border border-white/20 rounded-full px-2 py-0.5 text-neutral-400 group-hover:border-white/50 group-hover:text-white transition-colors">
                    Explore
                  </span>
                </div>
                <p className="text-sm text-neutral-400 font-light leading-relaxed flex-grow">
                  Coming soon. Engineered for premium feel and utility.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default function SoftgoodsPage() {
  return (
    <CategorySidebarLayout
      categories={CATEGORIES}
      renderContent={category => <CategoryContent category={category} />}
    />
  );
}
