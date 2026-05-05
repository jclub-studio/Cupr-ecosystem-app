'use client';

import { motion } from 'motion/react';
import { Brain, AlertTriangle, Lightbulb, Workflow, Sparkles, Target } from 'lucide-react';

const CAPABILITIES = [
  { icon: Sparkles, title: 'Automated social content', desc: 'Generate platform-specific drafts (Instagram, Facebook, X, TikTok) tuned for compliance and channel-specific norms.' },
  { icon: Target, title: 'Digital ads workflow', desc: 'Draft creative variants and support campaign operations for cannabis-friendly networks like MANTIS and MediaJel.' },
  { icon: Lightbulb, title: 'SEO and copywriting', desc: 'Create search-oriented copy, landing pages, and educational content that avoids prohibited health claims.' },
  { icon: Workflow, title: 'Image and listing optimization', desc: 'AI-assisted resizing, variant generation, and review workflows for ad assets and product listings.' },
];

const ANALYTICS = [
    { title: 'Against generic AI', desc: 'General-purpose AI lacks cannabis-specific policies, state-reference logic, and publishing controls. Our edge is vertical workflow design, not just text generation.'},
    { title: 'Against agencies', desc: 'Software lowers marginal content production costs and shortens turnaround. We complement human strategy, not replace it.'},
    { title: 'Against point solutions', desc: 'We unify content and campaign operations, rather than solving only loyalty, ecommerce, or ad-buying in isolation.'}
];

export default function AIStudioContent() {
  return (
    <div className="flex flex-col w-full text-white space-y-24">
      {/* Hero */}
      <section className="space-y-6">
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white leading-tight">
          Compliance-native generative AI for cannabis marketing
        </h2>
        <p className="text-xl md:text-2xl font-light text-neutral-300 leading-relaxed max-w-3xl">
          CŪPR AI Studio helps cannabis operators create marketing content faster while aligning output to state advertising rules, platform policies, and compliance workflows that generic AI tools do not natively handle.
        </p>
      </section>

      {/* Problem & Solution */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-neutral-950/50 p-10 rounded-2xl border border-white/5">
        <div className="space-y-6">
          <h3 className="text-2xl font-light text-neutral-100 flex items-center gap-3"><AlertTriangle className="text-amber-500" /> The Problem</h3>
          <p className="text-neutral-400 font-light leading-relaxed">
            Cannabis marketing sits inside a fragmented regulatory environment. General AI tools draft drafts, but they don&apos;t know compliance review, jurisdiction-specific disclaimers, or platform restrictions.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-light text-neutral-100 flex items-center gap-3"><Brain className="text-emerald-500" /> The Solution</h3>
          <p className="text-neutral-400 font-light leading-relaxed">
            CŪPR AI Studio is a generative content layer built specifically for cannabis marketers. We combine generative AI with structured review logic to help teams draft, adapt, and review assets inside a compliance-aware workflow.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="space-y-12">
        <h3 className="text-3xl font-light">Core Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div key={cap.title} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{delay: i*0.1}} className="p-8 border border-white/5 bg-neutral-950 rounded-2xl hover:border-white/20 transition-all">
                <Icon className="w-10 h-10 text-neutral-400 mb-6" />
                <h4 className="text-xl font-light mb-3">{cap.title}</h4>
                <p className="text-neutral-400 font-light">{cap.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Why it works */}
      <section className="space-y-8 bg-neutral-900 p-12 rounded-2xl border border-white/5">
        <h3 className="text-3xl font-light">Why this works</h3>
        <div className="space-y-6 text-neutral-400 font-light leading-relaxed max-w-4xl">
            <p><strong>Vertical Wedge:</strong> Regulatory context varies widely by state and channel, making compliance-aware workflow software uniquely valuable here.</p>
            <p><strong>Targeted Landscape:</strong> Advertising is constrained but not closed; our system helps operators navigate a complex, mixed channel environment.</p>
            <p><strong>Defensible Workflow:</strong> Our moat is not the model itself, but becoming the operational hub where cannabis marketers create, review, adapt, and store compliant assets.</p>
        </div>
      </section>

      {/* Competitive */}
      <section className="space-y-12">
        <h3 className="text-3xl font-light">Competitive Framing</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ANALYTICS.map(item => (
            <div key={item.title} className="p-8 border-t border-white/10">
              <h4 className="text-lg font-light text-neutral-100 mb-4">{item.title}</h4>
              <p className="text-neutral-400 font-light text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
