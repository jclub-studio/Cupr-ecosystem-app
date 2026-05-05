'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  BrainCircuit, 
  Gamepad2, 
  BarChart3,
  Bot,
  Database,
  GraduationCap,
  Sparkles,
  Trophy,
  Target,
  ChevronDown
} from 'lucide-react';

const ADVANTAGES = [
  {
    title: "Store-native, inventory-driven training",
    content: "While traditional Cannabis LMS platforms offer static, generic product knowledge, BudBook Edu integrates directly with your POS and e-commerce menu. It automatically generates training modules based on your live inventory, ensuring staff are always knowledgeable about the exact products you currently sell."
  },
  {
    title: "Employee-first personalization",
    content: "Generic HCM suites provide a one-size-fits-all onboarding experience. BudBook Edu creates personalized learning tracks based on an employee's role, existing knowledge, and preferred learning style. This targeted approach identifies knowledge gaps and adapts the curriculum to help each staff member excel."
  },
  {
    title: "Down-time “edutainment” designed for the sales floor",
    content: "Instead of making employees sit through long, boring videos in a back room, BudBook Edu utilizes gamified micro-learning. Staff can play short trivia games, scenario roleplays, and lightning rounds directly from their devices during slow periods on the sales floor."
  },
  {
    title: "Localized SOP and compliance intelligence",
    content: "Unlike traditional Cannabis LMS platforms that focus only on broad state regulations, BudBook Edu incorporates your shop's specific Standard Operating Procedures (SOPs). It perfectly blends local compliance requirements with your unique workflows, cash handling policies, and store culture."
  },
  {
    title: "In-store enablement vs broad workforce tools",
    content: "Generic HCM suites are often bloated with HR tools that distract from the core goal: selling products safely. BudBook Edu is built specifically for in-store enablement. It equips your budtenders and shift leads with the exact knowledge they need to improve basket sizes, ensure compliance, and deliver exceptional customer experiences."
  },
  {
    title: "Content “co-pilot” for owners",
    content: "Creating training content from scratch is incredibly time-consuming. BudBook Edu acts as an AI co-pilot for owners and managers, automatically drafting product primers and job aids from ingested vendor PDFs, menus, and policy documents, turning hours of work into a few simple clicks."
  }
];

export function EduTab() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <div className="w-full max-w-5xl space-y-12">
      
      {/* Intro Section */}
      <div className="flex flex-col space-y-6 max-w-3xl">
         <h2 className="text-3xl font-light tracking-tight text-white">The Future of Dispensary Training</h2>
         <p className="text-neutral-400 font-light leading-relaxed text-lg">
           BudBook Edu is an employee-enriching LMS for dispensaries and smoke/glass shops. It turns your own products, SOPs, and local regulations into personalized, gamified learning paths for staff onboarding, training and education.
         </p>
         <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 rounded-l-full"></div>
           <p className="text-white/90 text-lg leading-relaxed italic font-light">
             &quot;BudBook Edu is not just where you host courses; it&apos;s a live mirror of your menu and SOPs that trains your staff on exactly what you sell and how you operate.&quot;
           </p>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* 1. Business Integration Layer */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 p-10 rounded-[2rem] border border-white/10 bg-neutral-900/20 space-y-8 flex flex-col justify-between group hover:bg-neutral-900/50 transition-colors h-full overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 opacity-20 group-hover:opacity-40 transition-opacity">
            <Building2 className="w-32 h-32 text-blue-500" />
          </div>
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="text-[22px] font-medium text-white">Business Integration Layer</h4>
            </div>
            <p className="text-neutral-400 font-light text-sm leading-relaxed max-w-xl">
              Turn your live catalog, SOPs, and POS exports into structured training.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 pt-4 border-t border-white/10">
             <div className="space-y-2">
               <div className="flex items-center gap-2">
                 <Bot className="w-4 h-4 text-blue-400" />
                 <span className="text-sm font-medium text-white">AI Course Builder</span>
               </div>
               <p className="text-xs text-neutral-500 leading-relaxed">Auto-drafts product primers, category deep-dives, and quick-reference job aids based on your inventory.</p>
             </div>
             <div className="space-y-2">
               <div className="flex items-center gap-2">
                 <Database className="w-4 h-4 text-blue-400" />
                 <span className="text-sm font-medium text-white">Data Ingestion</span>
               </div>
               <p className="text-xs text-neutral-500 leading-relaxed">Pulls from your e-commerce menu, POS system, and uploaded PDFs to create a unified Knowledge Graph.</p>
             </div>
          </div>
        </div>

        {/* 2. Personalized Learning Engine */}
        <div className="col-span-1 p-10 rounded-[2rem] border border-white/10 bg-neutral-900/20 space-y-8 flex flex-col justify-between group hover:bg-neutral-900/50 transition-colors h-full relative">
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h4 className="text-[22px] font-medium text-white">Personalized Learning</h4>
            </div>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              Tailored tracks built around role, experience level, and preferred learning modalities.
            </p>
          </div>
          <div className="space-y-4 pt-4 border-t border-white/10 relative z-10 flex flex-col gap-2">
             <div className="flex items-start gap-3">
                <Target className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                <p className="text-xs text-neutral-400 leading-relaxed"><span className="text-white font-medium">Adaptive:</span> Emphasis dynamically shifts to weak areas based on quiz performance.</p>
             </div>
             <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                <p className="text-xs text-neutral-400 leading-relaxed"><span className="text-white font-medium">Just-in-time:</span> Short 3–5 minute lessons triggered by new SKUs or rule changes.</p>
             </div>
          </div>
        </div>

        {/* 3. Gamified Layer */}
        <div className="col-span-1 p-10 rounded-[2rem] border border-white/10 bg-neutral-900/20 space-y-8 flex flex-col justify-between group hover:bg-neutral-900/50 transition-colors h-full relative">
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <h4 className="text-[22px] font-medium text-white">Gamification</h4>
            </div>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              Trivia, scenario-based roleplay, and lightning rounds to play during slow shifts.
            </p>
          </div>
          <div className="space-y-4 pt-4 border-t border-white/10 relative z-10">
             <div className="flex items-start gap-3">
                <Trophy className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <p className="text-xs text-neutral-400 leading-relaxed">Configurable rewards: discounts, swag, and shift preferences for top performers.</p>
             </div>
             <div className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <p className="text-xs text-neutral-400 leading-relaxed">XP, badges, and leaderboards to keep teams motivated.</p>
             </div>
          </div>
        </div>

        {/* 5. Admin & Business Value */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 p-10 rounded-[2rem] border border-white/10 bg-neutral-900/20 space-y-8 flex flex-col justify-between group hover:bg-neutral-900/50 transition-colors h-full relative">
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h4 className="text-[22px] font-medium text-white">Admin & Value</h4>
            </div>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              Dashboards for onboarding status, product knowledge coverage, and compliance gaps.
            </p>
          </div>
          <div className="space-y-4 pt-4 border-t border-white/10 relative z-10">
             <ul className="text-xs text-neutral-400 leading-relaxed space-y-2 list-disc pl-4">
                <li>Reduce ramp time; fewer mistakes at POS & Metrc</li>
                <li>Lower compliance risk via provable training</li>
                <li>Improve basket size through deeper product knowledge</li>
                <li>Cross-store benchmarking for MSOs</li>
             </ul>
          </div>
        </div>

      </div>

      {/* The BudBook Advantage Accordion */}
      <div className="pt-8 space-y-8">
        <h3 className="text-2xl font-light tracking-tight text-white">The BudBook Advantage</h3>
        <div className="flex flex-col space-y-3">
          {ADVANTAGES.map((item, idx) => {
            const isOpen = openAccordion === idx;
            return (
              <div 
                key={idx} 
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${isOpen ? 'bg-neutral-900/40 border-white/20' : 'bg-neutral-900/20 border-white/5 hover:bg-neutral-900/30'}`}
              >
                <button
                  onClick={() => setOpenAccordion(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-medium text-white">{item.title}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-neutral-400" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-6 text-neutral-400 font-light leading-relaxed">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
