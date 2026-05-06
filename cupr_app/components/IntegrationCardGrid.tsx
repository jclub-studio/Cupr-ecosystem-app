'use client';

import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

export type IntegrationPlatform = {
  icon: LucideIcon;
  name: string;
  label: string;
  desc: string;
};

type IntegrationCardGridProps = {
  platforms: IntegrationPlatform[];
  columns?: 2 | 3 | 4;
  staggerDelay?: number;
};

export function IntegrationCardGrid({
  platforms,
  columns = 4,
  staggerDelay = 0.05,
}: IntegrationCardGridProps) {
  const gridColsClass =
    columns === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : columns === 3
        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';

  return (
    <div className={`grid ${gridColsClass} gap-6`}>
      {platforms.map((platform, i) => {
        const Icon = platform.icon;
        return (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * staggerDelay }}
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
  );
}
