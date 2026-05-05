'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Database, Zap, ChartLine } from 'lucide-react';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Regulatory Compliance Engine',
    desc: 'Auto-checking campaigns against 50-state advertising laws and platform policies.',
  },
  {
    icon: Database,
    title: 'Unified Customer Data Platform',
    desc: 'Integrating POS, ecommerce, and marketplace data for closed-loop attribution.',
  },
  {
    icon: Zap,
    title: 'Multi-channel Automation',
    desc: 'Orchestrating email, SMS, programmatic, and emerging channels from one interface.',
  },
  {
    icon: ChartLine,
    title: 'Platform Certification Tools',
    desc: 'Preparing operators for Google/Meta access as policies evolve post-rescheduling.',
  }
];

export default function PlatformContent() {
  return (
    <div className="flex flex-col w-full text-white">
      {/* Introduction */}
      <section className="pb-16 border-b border-white/10">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
            Compliance-Native Marketing Infrastructure for the Cannabis Industry
          </h2>
          <p className="text-xl md:text-2xl font-light text-neutral-300 leading-relaxed">
            Unified CMS and advertising management platform capturing the $2.3B capital injection created by Schedule III rescheduling.
          </p>
        </div>
      </section>

      {/* The Problem & The Solution */}
      <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-white/10">
        <div className="space-y-6">
          <h3 className="text-3xl font-light text-white">The Problem</h3>
          <p className="text-neutral-400 font-light leading-relaxed">
            Schedule III reclassification (April 2026) eliminated Section 280E tax burdens for medical marijuana operators, making marketing expenses deductible for the first time. This structural shift unlocked $2.3B in annual industry capital and reduced the after-tax cost of marketing 30-50%.
          </p>
          <p className="text-neutral-400 font-light leading-relaxed">
            However, dispensaries lack infrastructure to deploy this capital effectively. Mainstream marketing platforms reject cannabis accounts. Niche cannabis tools lack enterprise functionality. Agency models don’t scale economics for mid-market operators.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-light text-white">The Solution</h3>
          <p className="text-neutral-400 font-light leading-relaxed">
            CŪPR is compliance-first marketing automation purpose-built for Schedule III cannabis operators. We combine enterprise-grade CMS, multi-channel advertising management, and unified customer data infrastructure—solving the regulatory, integration, and attribution challenges unique to cannabis commerce.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {FEATURES.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 border border-white/5 bg-neutral-950 rounded-2xl"
            >
              <Icon className="w-8 h-8 text-neutral-400 mb-6" />
              <h4 className="text-xl font-light text-white mb-3">{feature.title}</h4>
              <p className="text-neutral-400 font-light leading-relaxed">{feature.desc}</p>
            </motion.div>
          );
        })}
      </section>

      {/* Market Position */}
      <section className="py-16 space-y-6">
        <h3 className="text-3xl font-light text-white">Market Position</h3>
        <p className="text-neutral-400 font-light leading-relaxed">
          15,740 licensed US dispensaries spend $30K-90K annually on marketing, creating a $132M TAM for marketing software. Our serviceable addressable market is $42M. We target 20% market share by Year 3.
        </p>
        <p className="text-neutral-400 font-light leading-relaxed">
           First-mover advantage: We’re the only platform architected specifically for the Schedule III transition.
        </p>
      </section>
    </div>
  );
}
