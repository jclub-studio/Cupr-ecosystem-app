'use client';

import { motion } from 'motion/react';
import { Megaphone, Database } from 'lucide-react';

export default function AdCampaignsContent() {
  const sections = [
    {
      icon: Megaphone,
      title: 'Advertising Management Platform',
      desc: 'Unified campaign orchestration across cannabis-accessible and emerging advertising channels:',
      bullets: [
        'Programmatic DSP integration: MANTIS, MediaJel, TrafficStars campaign management',
        'CTV advertising: Connected TV inventory coordination as platforms open to cannabis',
        'Email/SMS automation: Lifecycle marketing flows with 98% SMS open rates, 20-35% email engagement',
        'Platform certification assistant: LegitScript readiness audits and Google/Meta compliance preparation'
      ]
    },
    {
      icon: Database,
      title: 'Unified Data Infrastructure',
      desc: 'Customer intelligence platform consolidating fragmented data sources:',
      bullets: [
        'Native POS integrations (Flowhub, Treez, Dutchie, Cova, 15+ systems)',
        'Marketplace data unification (Weedmaps, Leafly, Jane)',
        'Cross-channel identity resolution matching online behavior to in-store purchases',
        'Revenue attribution proving marketing ROI with closed-loop tracking'
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full text-white">
      <section className="pb-24 border-b border-white/10">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-extralight tracking-tighter text-white leading-tight">
            Ad. Campaigns & Data
          </h2>
          <p className="mt-8 text-neutral-400 font-light leading-relaxed text-lg">
            Strategic campaign management and data infrastructure to drive growth and track ROI.
          </p>
        </div>
      </section>

      <section className="py-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, i) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-10 border border-white/5 bg-neutral-950/50 rounded-3xl"
            >
              <div className="mb-10 p-4 inline-block rounded-full bg-white/5 border border-white/10">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-light text-white mb-6 tracking-tight">{section.title}</h4>
              <p className="text-neutral-400 font-light leading-relaxed mb-8">{section.desc}</p>
              <ul className="space-y-4">
                {section.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-sm text-neutral-500 font-mono flex items-start">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-700 flex-shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
