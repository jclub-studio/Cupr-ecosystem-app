'use client';

import { motion } from 'motion/react';
import { Layout } from 'lucide-react';

export default function SocialContent() {
  const bullets = [
    'Pre-approved templates meeting state-specific advertising requirements',
    'Automated age-gating and disclaimer insertion by jurisdiction',
    'Health claim detection preventing FDA-prohibited therapeutic language',
    'Platform policy compliance for organic social content distribution'
  ];

  return (
    <div className="flex flex-col w-full text-white">
      <section className="pb-24 border-b border-white/10">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-extralight tracking-tighter text-white leading-tight">
            Social Content Management
          </h2>
          <p className="mt-8 text-neutral-400 font-light leading-relaxed text-lg">
            Cannabis-compliant website infrastructure with regulatory guardrails built into the publishing workflow.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="p-10 border border-white/5 bg-neutral-950/50 rounded-3xl max-w-3xl">
          <div className="mb-10 p-4 inline-block rounded-full bg-white/5 border border-white/10">
            <Layout className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-2xl font-light text-white mb-6 tracking-tight">CMS Features</h4>
          <ul className="space-y-4">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="text-sm text-neutral-500 font-mono flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-700 flex-shrink-0" />
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
