'use client';

import { 
  Activity,
  Database, 
  LineChart, 
  Scan,
  Box,
  Users,
  Clock,
  BarChart3,
  Info
} from 'lucide-react';
import { LiveNewSessionEmbed } from './LiveNewSessionEmbed';

export function JournalTab() {
  return (
    <div className="w-full max-w-[90rem] space-y-24 pb-20">
      
      {/* Intro Section */}
      <div className="flex flex-col space-y-6 max-w-3xl">
         <h2 className="text-4xl font-light tracking-tight text-white animate-in fade-in slide-in-from-bottom-4 duration-700">
           BudBook Journal
         </h2>
         <div className="space-y-4 text-neutral-400 font-light leading-relaxed text-xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
           <p>
             The Journal is where BudBook turns your day-to-day consumption into structured, searchable telemetry. Log
             sessions, products, and context with just enough friction to stay accurate—without breaking the flow.
           </p>
           <p>
             From there, BudBook surfaces patterns across time: what you used, how it hit, and what it pairs with—so you
             can refine your routine with clarity, not guesswork.
           </p>
         </div>
      </div>

      {/* Section 2: Stash Management */}
      <section className="max-w-5xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-medium text-white leading-tight">Stash Management: Personal Inventory</h3>
            </div>
            <p className="text-neutral-400 font-light text-lg leading-relaxed">
              Transition from physical memory to a highly organized, searchable digital database for all your cannabis assets, hardware, and retail contacts.
            </p>
          </div>
          
          <div className="space-y-6 pt-6 border-t border-white/10">
             <div className="flex items-start gap-4 transition-all hover:translate-x-1">
                <Scan className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
                <div className="flex flex-col">
                   <span className="text-lg font-medium text-white block">AI Product Scanning</span>
                   <p className="text-sm text-neutral-500 leading-relaxed">
                     Scan labels and codes with AI that specializes in product identification and laboratory report processing—surfacing only what matters to your preferences, interests, and goals.
                   </p>
                </div>
             </div>
             <div className="flex items-start gap-4 transition-all hover:translate-x-1">
                <Box className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
                <div className="flex flex-col">
                   <span className="text-lg font-medium text-white block">Accessory Collection</span>
                   <p className="text-sm text-neutral-500 leading-relaxed">
                     Track your CŪPR hardware and third-party gear—and define custom session accessory pre-set classes, or &quot;session loadouts,&quot; for your various use contexts.
                   </p>
                </div>
             </div>
             <div className="flex items-start gap-4 transition-all hover:translate-x-1">
                <Users className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
                <div className="flex flex-col">
                   <span className="text-lg font-medium text-white block">Retail Favorites</span>
                   <p className="text-sm text-neutral-500 leading-relaxed">Save preferred dispensaries and smoke shops directly to your Stash records, giving you ongoing access to each shop&apos;s menu, promotions, weekly specials, and alerts for your favorite products.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 3: Session Analytics + Live New Session */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 lg:items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-medium text-white leading-tight">Session Analytics: Precision Effect Tracking</h3>
            </div>
            <p className="text-neutral-400 font-light text-lg leading-relaxed">
              Meticulously log your consumption sessions to establish a quantified understanding of product efficacy and physiological impact.
            </p>
          </div>
          
          <div className="space-y-6 pt-6 border-t border-white/10">
             <div className="flex items-start gap-4 transition-all hover:translate-x-1">
                <Clock className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
                <div className="flex flex-col">
                   <span className="text-lg font-medium text-white block">Variable Logging</span>
                   <p className="text-sm text-neutral-500 leading-relaxed">Record precise dosages, consumption methods, and product pairings with exact timestamps.</p>
                </div>
             </div>
             <div className="flex items-start gap-4 transition-all hover:translate-x-1">
                <Activity className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
                <div className="flex flex-col">
                   <span className="text-lg font-medium text-white block">Efficacy Mapping</span>
                   <p className="text-sm text-neutral-500 leading-relaxed">Document mood, pain, and anxiety metrics before and after consumption to identify your optimal therapeutic ranges.</p>
                </div>
             </div>
             <div className="flex items-start gap-4 transition-all hover:translate-x-1">
                <BarChart3 className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
                <div className="flex flex-col">
                   <span className="text-lg font-medium text-white block">Pattern Recognition</span>
                   <p className="text-sm text-neutral-500 leading-relaxed">Leverage visual charts and data summaries to compare product performance and refine your selections over time.</p>
                </div>
             </div>

             <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10 flex gap-4 mt-6 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute left-0 top-0 w-1 h-full bg-purple-500/40" />
                <Info className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
                <p className="text-sm text-purple-200/70 leading-relaxed italic">
                  <span className="font-semibold text-purple-400 not-italic">System Tip:</span> Consistently mapping your session effects trains your Buddy AI to provide hyper-accurate, personalized strain recommendations.
                </p>
             </div>
          </div>
        </div>
        <div className="lg:sticky lg:top-28 self-start">
          <LiveNewSessionEmbed />
        </div>
      </section>

    </div>
  );
}

