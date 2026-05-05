'use client';

import { 
  LayoutDashboard, 
  Database, 
  LineChart, 
  Activity, 
  TrendingUp, 
  Zap,
  Scan,
  Box,
  Users,
  Clock,
  BarChart3,
  Info
} from 'lucide-react';
import Image from 'next/image';

export function JournalTab() {
  return (
    <div className="w-full max-w-5xl space-y-24 pb-20">
      
      {/* Intro Section */}
      <div className="flex flex-col space-y-6 max-w-3xl">
         <h2 className="text-4xl font-light tracking-tight text-white animate-in fade-in slide-in-from-bottom-4 duration-700">BudBook Journal: Personal Telemetry & Inventory</h2>
         <p className="text-neutral-400 font-light leading-relaxed text-xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
           The BudBook Journal serves as your central command hub for documenting your cannabis journey. Moving beyond basic logging, this is a sophisticated telemetry dashboard engineered to give you comprehensive oversight of your inventory, consumption habits, and physiological responses—empowering responsible, data-driven use.
         </p>
      </div>

      {/* Section 1: Command Dashboard */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-medium text-white leading-tight">Command Dashboard: Macroscopic Oversight</h3>
            </div>
            <p className="text-neutral-400 font-light text-lg leading-relaxed">
              Your personalized home screen provides an immediate, high-level visualization of your ecosystem activity, giving you actionable insights at a glance.
            </p>
          </div>
          
          <div className="space-y-6 pt-6 border-t border-white/10">
             <div className="flex items-start gap-4 transition-all hover:translate-x-1">
                <Activity className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                <div className="flex flex-col">
                   <span className="text-lg font-medium text-white block">Activity Summaries</span>
                   <p className="text-sm text-neutral-500 leading-relaxed">View recent session data and macroscopic consumption trends over time.</p>
                </div>
             </div>
             <div className="flex items-start gap-4 transition-all hover:translate-x-1">
                <TrendingUp className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                <div className="flex flex-col">
                   <span className="text-lg font-medium text-white block">Inventory Telemetry</span>
                   <p className="text-sm text-neutral-500 leading-relaxed">Monitor real-time product levels and hardware status to anticipate procurement needs.</p>
                </div>
             </div>
             <div className="flex items-start gap-4 transition-all hover:translate-x-1">
                <Zap className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                <div className="flex flex-col">
                   <span className="text-lg font-medium text-white block">Data Insights</span>
                   <p className="text-sm text-neutral-500 leading-relaxed">Automatically surface key patterns from your historical logs to optimize your routine.</p>
                </div>
             </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 bg-neutral-900/40 shadow-2xl group">
          <Image 
            src="https://picsum.photos/seed/budboard/1200/900" 
            alt="BudBook Command Dashboard in-app UI" 
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">Live Interface Preview — v2.4</span>
          </div>
        </div>
      </section>

      {/* Section 2: Stash Management */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 bg-neutral-900/40 shadow-2xl group">
          <Image 
            src="https://picsum.photos/seed/budstash/1200/900" 
            alt="Digital Stash Management in-app UI" 
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400">Inventory Module — Stash View</span>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-medium text-white leading-tight">Stash Management: Digital Inventory Control</h3>
            </div>
            <p className="text-neutral-400 font-light text-lg leading-relaxed">
              Transition from physical memory to a highly organized, searchable digital database for all your cannabis assets, hardware, and retail contacts.
            </p>
          </div>
          
          <div className="space-y-6 pt-6 border-t border-white/10">
             <div className="flex items-start gap-4 transition-all hover:translate-x-1">
                <Scan className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
                <div className="flex flex-col">
                   <span className="text-lg font-medium text-white block">AI-Powered Ingestion</span>
                   <p className="text-sm text-neutral-500 leading-relaxed">Instantly log products via AI-driven label and QR code scanning to extract strain data, lab reports, and precise terpene profiles.</p>
                </div>
             </div>
             <div className="flex items-start gap-4 transition-all hover:translate-x-1">
                <Box className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
                <div className="flex flex-col">
                   <span className="text-lg font-medium text-white block">Hardware Tracking</span>
                   <p className="text-sm text-neutral-500 leading-relaxed">Log your CŪPR ecosystem devices and third-party accessories, tracking usage, condition, and maintenance cycles.</p>
                </div>
             </div>
             <div className="flex items-start gap-4 transition-all hover:translate-x-1">
                <Users className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
                <div className="flex flex-col">
                   <span className="text-lg font-medium text-white block">Retail Directory</span>
                   <p className="text-sm text-neutral-500 leading-relaxed">Maintain a curated record of preferred dispensaries, budtender contacts, and transaction histories.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 3: Session Analytics */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 order-2 lg:order-1">
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
        <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 bg-neutral-900/40 shadow-2xl group">
          <Image 
            src="https://picsum.photos/seed/budanalytics/1200/900" 
            alt="Session Analytics Data Visualization UI" 
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400">Analytics Hub — Physiological Data</span>
          </div>
        </div>
      </section>

    </div>
  );
}

