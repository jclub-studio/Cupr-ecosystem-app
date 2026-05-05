'use client';

import { 
  Headset, 
  ShieldCheck, 
  RefreshCcw, 
  Wrench, 
  BookOpen, 
  ChevronRight, 
  Cpu, 
  Bluetooth, 
  Thermometer, 
  FileText,
  History,
  LifeBuoy
} from 'lucide-react';

export function CustomerServiceTab() {
  return (
    <div className="w-full max-w-5xl space-y-16 pb-20">
      
      {/* Intro Hero Section */}
      <div className="flex flex-col space-y-6 max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
         <h2 className="text-4xl font-light tracking-tight text-white leading-tight">
          CŪPR Client Services
         </h2>
         <p className="text-neutral-400 font-light leading-relaxed text-lg text-pretty">
           Comprehensive support, hardware diagnostics, and warranty management for your CŪPR ecosystem. We engineer our hardware for peak performance and frictionless integration.
         </p>
      </div>

      {/* Action Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Product Registration */}
        <div className="group p-8 rounded-[2.5rem] border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-500">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-medium text-white tracking-tight mb-4 text-balance">Product Registration</h3>
          <p className="text-neutral-500 font-light text-sm leading-relaxed mb-6">
            Authenticate hardware to unlock the full potential of the CŪPR platform and ecosystem.
          </p>
          <button className="w-full py-3 rounded-xl bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors">
            Register Device
          </button>
        </div>

        {/* Submit a Claim */}
        <div className="group p-8 rounded-[2.5rem] border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-500">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-medium text-white tracking-tight mb-4">Submit a Claim</h3>
          <p className="text-neutral-500 font-light text-sm leading-relaxed mb-6">
            Initiate a repair or replacement request through our streamlined ticketing system.
          </p>
          <button className="w-full py-3 rounded-xl border border-white/10 text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all">
            New Ticket
          </button>
        </div>

        {/* Knowledge Base */}
        <div className="group p-8 rounded-[2.5rem] border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-500">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-medium text-white tracking-tight mb-4">Search Knowledge Base</h3>
          <p className="text-neutral-500 font-light text-sm leading-relaxed mb-6">
            Access our comprehensive database of common inquiries and technical docs.
          </p>
          <div className="relative">
            <input 
              type="text" 
              placeholder="How do I..." 
              className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-white/20"
            />
          </div>
        </div>

      </div>

      {/* Main Content Sections */}
      <div className="space-y-24">
        
        {/* Section 1: Registration & Ecosystem */}
        <section className="space-y-10">
          <div className="flex items-center gap-4">
             <div className="w-1 h-8 bg-white/20 rounded-full" />
             <h3 className="text-2xl font-light text-white tracking-tight">Product Registration & Ecosystem Sync</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SupportItem 
              icon={<Cpu className="w-5 h-5" />}
              title="Hardware Authentication"
              desc="Verify authenticity to protect against counterfeits and secure your investment."
            />
            <SupportItem 
              icon={<RefreshCcw className="w-5 h-5" />}
              title="The Stash Integration"
              desc="Automatically sync registered hardware to your BudBook Stash for live sessions."
            />
            <SupportItem 
              icon={<LifeBuoy className="w-5 h-5" />}
              title="Firmware Updates"
              desc="Priority notifications for critical device updates and performance optimizations."
            />
          </div>
        </section>

        {/* Section 2: Warranty & Protection */}
        <section className="space-y-10">
          <div className="flex items-center gap-4">
             <div className="w-1 h-8 bg-white/20 rounded-full" />
             <h3 className="text-2xl font-light text-white tracking-tight">Warranty & Protection</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-400 font-light translate-y-0 opacity-100 transition-all">
             <div className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] space-y-6">
                <div className="flex items-center justify-between">
                   <h4 className="text-lg font-medium text-white">Claim Telemetry</h4>
                   <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono uppercase tracking-widest border border-emerald-500/20">Active</span>
                </div>
                <div className="space-y-4">
                   <div className="flex justify-between items-center text-xs">
                      <span>E-Series Case Replacement</span>
                      <span className="font-mono">#98322-A</span>
                   </div>
                   <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-white/40" />
                   </div>
                   <div className="flex justify-between items-center text-[10px] text-neutral-600 uppercase tracking-widest font-mono pt-2">
                      <span>Diagnostic Review</span>
                      <span>Return Shipping</span>
                   </div>
                </div>
             </div>
             <div className="space-y-8">
                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0 border border-orange-500/10">
                      <ShieldCheck className="w-5 h-5" />
                   </div>
                   <div>
                      <h4 className="text-white font-medium mb-1">CŪPR Standard Warranty</h4>
                      <p className="text-sm leading-relaxed">Review the baseline coverage details for all hardware, glass, and electronic components.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/10">
                      <History className="w-5 h-5" />
                   </div>
                   <div>
                      <h4 className="text-white font-medium mb-1">Service History</h4>
                      <p className="text-sm leading-relaxed">Access all previous maintenance records and hardware replacements in one place.</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Section 3: Diagnostics & Troubleshooting */}
        <section className="space-y-10">
          <div className="flex items-center gap-4">
             <div className="w-1 h-8 bg-white/20 rounded-full" />
             <h3 className="text-2xl font-light text-white tracking-tight">Diagnostic & Troubleshooting Center</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <DiagnosticCard 
               icon={<Thermometer className="w-5 h-5" />}
               title="Calibration Guides"
               items={['Temperature Optimization', 'Draw Resistance Check', 'Cleaning Protocol']}
             />
             <DiagnosticCard 
               icon={<Bluetooth className="w-5 h-5" />}
               title="Software Sync Support"
               items={['Bluetooth Pairing', 'Live Telemetry Delays', 'App Re-authentication']}
             />
             <DiagnosticCard 
               icon={<Wrench className="w-5 h-5" />}
               title="Maintenance & Teardowns"
               items={['Disassembly Video', 'Deep Clean Procedure', 'Part Replacement']}
             />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-10 pt-12 border-t border-white/10">
           <div className="flex items-center justify-between">
              <h3 className="text-2xl font-light text-white tracking-tight">The Knowledge Base (FAQ)</h3>
              <button className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors">View All Articles</button>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
              <FaqItem 
                title="Ecosystem Inquiries"
                desc="How to link your Apple Music, manage your BudBook privacy, and optimize your BudBeat video settings."
              />
              <FaqItem 
                title="Orders & Shipping"
                desc="Information on order tracking, international shipping policies, and return windows."
              />
              <FaqItem 
                title="Account Management"
                desc="Guidance on updating your profile, managing subscriptions, and data privacy protocols."
              />
              <FaqItem 
                title="Hardware Storage"
                desc="Best practices for maintaining lithium-ion battery health during long-term equipment storage."
              />
           </div>
        </section>

      </div>

      {/* Support Footer */}
      <div className="flex flex-col md:flex-row items-center justify-between p-12 rounded-[3rem] border border-white/5 bg-neutral-950/50 gap-8">
         <div className="flex items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white">
               <Headset className="w-8 h-8" />
            </div>
            <div className="space-y-1">
               <h3 className="text-xl font-light text-white">Still need assistance?</h3>
               <p className="text-neutral-500 font-light text-sm">Direct connection to a CŪPR Client Specialist.</p>
            </div>
         </div>
         <button className="px-10 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wide hover:bg-neutral-200 transition-colors">
            Start Live Chat
         </button>
      </div>

    </div>
  );
}

function SupportItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="space-y-4">
      <div className="text-neutral-400">{icon}</div>
      <h4 className="text-white font-medium tracking-tight mb-2">{title}</h4>
      <p className="text-neutral-500 font-light text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function DiagnosticCard({ icon, title, items }: { icon: React.ReactNode, title: string, items: string[] }) {
  return (
    <div className="p-8 rounded-[2.5rem] border border-white/10 bg-neutral-900/10 space-y-6">
      <div className="flex items-center gap-3">
         <div className="text-neutral-400">{icon}</div>
         <h4 className="text-white font-medium text-sm tracking-tight">{title}</h4>
      </div>
      <div className="space-y-3">
         {items.map((item, i) => (
           <div key={i} className="flex items-center justify-between group cursor-pointer">
              <span className="text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">{item}</span>
              <ChevronRight className="w-3 h-3 text-neutral-700 group-hover:text-white transition-colors" />
           </div>
         ))}
      </div>
    </div>
  );
}

function FaqItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="space-y-3">
      <h4 className="text-white font-medium tracking-tight border-b border-white/5 pb-2">{title}</h4>
      <p className="text-neutral-500 font-light text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
