'use client';

import { Layers, Link as LinkIcon, Activity, Box, Sparkles, Lock, CheckCircle, Eye, UserSquare, MousePointer, Info } from 'lucide-react';

export function IntegrationTab() {
  return (
    <div className="w-full max-w-5xl space-y-12">
      
      {/* Intro Section */}
      <div className="flex flex-col space-y-6 max-w-4xl">
         <h2 className="text-3xl font-light tracking-tight text-white animate-in fade-in slide-in-from-bottom-4 duration-700">Ecosystem Integration: The Stash, The Class, and The Session</h2>
         <p className="text-neutral-400 font-light leading-relaxed text-lg animate-in fade-in slide-in-from-bottom-6 duration-1000">
           The power of the CŪPR ecosystem lies in the frictionless flow of data between your asynchronous digital identity and your synchronous live sessions. By linking your BudBook inventory to your BudBeat presence, we bring your physical setup onto the digital stage—without cluttering the performance space.
         </p>
      </div>

      <div className="flex md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 items-stretch animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
        
        {/* Card 1: The Build */}
        <div className="min-w-[85vw] md:min-w-0 snap-center p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-neutral-900/20 flex flex-col group hover:bg-neutral-900/40 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 h-auto md:h-full">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 ring-1 ring-orange-500/20">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="text-[22px] font-medium text-white leading-tight">The Build<br/><span className="text-white/60 font-light">(BudBook Social)</span></h4>
            </div>
            <p className="text-neutral-400 font-light text-base leading-relaxed max-w-prose">
              The foundation of your live identity is constructed entirely within BudBook Social. This is your asynchronous preparation zone.
            </p>
          </div>
          
          <div className="space-y-8 pt-10 border-t border-white/10 mt-10">
             <div className="flex items-start gap-4">
                <Box className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                <div className="flex-1 flex flex-col space-y-2">
                   <span className="text-sm font-bold text-white tracking-tight">The Stash</span>
                   <p className="text-[13px] text-neutral-400 leading-relaxed font-light">Your master inventory. Every piece of hardware, premium glass, precision tool, and consumable product you log is stored securely in your personal Stash.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <Sparkles className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                <div className="flex-1 flex flex-col space-y-2">
                   <span className="text-sm font-bold text-white tracking-tight">Curating a Class</span>
                   <p className="text-[13px] text-neutral-400 leading-relaxed font-light">Construct specialized &quot;Classes&quot; (e.g., The Glass Purist) using strictly items from your Stash to define your consumption persona.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <Lock className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                <div className="flex-1 flex flex-col space-y-2">
                   <span className="text-sm font-bold text-white tracking-tight">Strictly Asynchronous</span>
                   <p className="text-[13px] text-neutral-400 leading-relaxed font-light">Stash management and Class creation are locked exclusively to the BudBook platform.</p>
                </div>
             </div>
          </div>
        </div>

        {/* Card 2: The Intrinsic Connection */}
        <div className="min-w-[85vw] md:min-w-0 snap-center p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-neutral-900/20 flex flex-col group hover:bg-neutral-900/40 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 h-auto md:h-full">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 ring-1 ring-purple-500/20">
                <LinkIcon className="w-6 h-6" />
              </div>
              <h4 className="text-[22px] font-medium text-white leading-tight">The Intrinsic Connection</h4>
            </div>
            <p className="text-neutral-400 font-light text-base leading-relaxed max-w-prose">
              Leveraging an intrinsic backend connection, BudBeat pulls your BudBook profile forward, acting as the dedicated live performance extension of your social network.
            </p>
          </div>
          
          <div className="space-y-8 pt-10 border-t border-white/10 mt-10">
             <div className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
                <div className="flex-1 flex flex-col space-y-2">
                   <span className="text-sm font-bold text-white tracking-tight">Pre-Session Selection</span>
                   <p className="text-[13px] text-neutral-400 leading-relaxed font-light">As you enter the waiting lobby, seamlessly toggle between pre-built Classes to match the physical gear currently sitting on your desk.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <Eye className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
                <div className="flex-1 flex flex-col space-y-2">
                   <span className="text-sm font-bold text-white tracking-tight">Read-Only Architecture</span>
                   <p className="text-[13px] text-neutral-400 leading-relaxed font-light">To preserve a lightweight, zero-distraction environment, Classes cannot be edited or created within BudBeat. Need to add new glass? Return to BudBook.</p>
                </div>
             </div>
          </div>
        </div>
        
        {/* Card 3: The Session */}
        <div className="min-w-[85vw] md:min-w-0 snap-center p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-neutral-900/20 flex flex-col group hover:bg-neutral-900/40 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 h-auto md:h-full">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 ring-1 ring-emerald-500/20">
                <Activity className="w-6 h-6" />
              </div>
              <h4 className="text-[22px] font-medium text-white leading-tight">The Session<br/><span className="text-white/60 font-light">(Live Telemetry)</span></h4>
            </div>
            <p className="text-neutral-400 font-light text-base leading-relaxed max-w-prose">
              Once the session begins, your selected Class data translates into a sleek, non-intrusive visual layer integrated seamlessly into the zero-latency video grid.
            </p>
          </div>
          
          <div className="space-y-8 pt-10 border-t border-white/10 mt-10">
             <div className="flex items-start gap-4">
                <UserSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                <div className="flex-1 flex flex-col space-y-2">
                   <span className="text-sm font-bold text-white tracking-tight">The Player Icon</span>
                   <p className="text-[13px] text-neutral-400 leading-relaxed font-light">A minimalist graphic displaying your active Class sits subtly beneath your video feed.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <MousePointer className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                <div className="flex-1 flex flex-col space-y-2">
                   <span className="text-sm font-bold text-white tracking-tight">Hover-State Inventory</span>
                   <p className="text-[13px] text-neutral-400 leading-relaxed font-light">The interface remains entirely clean until interacted with. Hovering over a collaborator&apos;s Class icon deploys an elegant frosted-glass panel, revealing their active Stash equipment.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                <div className="flex-1 flex flex-col space-y-2">
                   <span className="text-sm font-bold text-white tracking-tight">Instant Context</span>
                   <p className="text-[13px] text-neutral-400 leading-relaxed font-light">Everyone in the room instantly knows what rig you are hitting or what strain is in rotation—without a single word interrupting the cypher.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

