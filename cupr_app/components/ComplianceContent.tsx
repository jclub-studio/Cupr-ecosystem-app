'use client';

import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function ComplianceContent() {
  const bullets = [
    '50-state advertising law monitoring with real-time policy updates',
    'Creative pre-flight review flagging compliance violations before campaign launch',
    'Audit trail maintenance for DEA registration and regulatory scrutiny',
    '280E deduction tracking generating reports for tax filing/amended returns'
  ];

  return (
    <div className="flex flex-col w-full text-white">
      <section className="pb-24 border-b border-white/10">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-extralight tracking-tighter text-white leading-tight">
            Compliance Automation
          </h2>
          <p className="mt-8 text-neutral-400 font-light leading-relaxed text-lg">
            Regulatory intelligence differentiating CŪPR from generic marketing platforms.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="p-10 border border-white/5 bg-neutral-950/50 rounded-3xl max-w-3xl">
          <div className="mb-10 p-4 inline-block rounded-full bg-white/5 border border-white/10">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-2xl font-light text-white mb-6 tracking-tight">Regulatory Guardrails</h4>
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
