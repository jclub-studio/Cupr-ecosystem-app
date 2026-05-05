'use client';

import { 
  Video, 
  Mic2, 
  Music, 
  Layout, 
  Shield, 
  Zap, 
  Volume2, 
  ListMusic, 
  Monitor, 
  Clock, 
  UserPlus, 
  CheckCircle,
  Info
} from 'lucide-react';

export function VideoTab() {
  return (
    <div className="w-full max-w-5xl space-y-12">
      
      {/* Intro Section */}
      <div className="flex flex-col space-y-6 max-w-3xl">
         <h2 className="text-3xl font-light tracking-tight text-white">BudBeat: Synchronized Video Sessions</h2>
         <p className="text-neutral-400 font-light leading-relaxed text-lg">
           Experience real-time, collaborative performance. BudBeat integrates seamless group video with intelligent audio routing and synchronized beat playback, ensuring the active performer always commands the room&apos;s focus. Enter a secure environment, select your instrumental, and engage in a fluid, turn-based exchange where high-fidelity sound and instantaneous visual feedback elevate every session.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Private Video Environments */}
        <div className="col-span-1 p-10 rounded-[2rem] border border-white/10 bg-neutral-900/20 space-y-8 flex flex-col justify-between group hover:bg-neutral-900/50 transition-colors h-full">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Video className="w-5 h-5" />
              </div>
              <h4 className="text-[22px] font-medium text-white leading-tight">Private Video Environments</h4>
            </div>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              Initiate a BudBeat session to deploy a secure, high-performance video room engineered for collaborative creation.
            </p>
          </div>
          
          <div className="space-y-4 pt-4 border-t border-white/10">
             <div className="flex items-start gap-4">
                <Monitor className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div className="flex-1 flex flex-col">
                   <span className="text-sm font-medium text-white block">Responsive Interface</span>
                   <p className="text-xs text-neutral-500 leading-relaxed">Minimalist, zero-latency video grid for authentic reactions.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <UserPlus className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div className="flex-1 flex flex-col">
                   <span className="text-sm font-medium text-white block">Frictionless Entry</span>
                   <p className="text-xs text-neutral-500 leading-relaxed">Direct secure links bypass complex meeting codes.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <Shield className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div className="flex-1 flex flex-col">
                   <span className="text-sm font-medium text-white block">Environmental Control</span>
                   <p className="text-xs text-neutral-500 leading-relaxed">Hosts retain total command over track selection and queues.</p>
                </div>
             </div>
          </div>
        </div>

        {/* Card 2: Synchronized Audio Architecture */}
        <div className="col-span-1 p-10 rounded-[2rem] border border-white/10 bg-neutral-900/20 space-y-8 flex flex-col justify-between group hover:bg-neutral-900/50 transition-colors h-full">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                <Music className="w-5 h-5" />
              </div>
              <h4 className="text-[22px] font-medium text-white leading-tight">Synchronized Audio Architecture</h4>
            </div>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              BudBeat eliminates latency discrepancies through a centralized, simultaneous playback engine.
            </p>
          </div>
          
          <div className="space-y-4 pt-4 border-t border-white/10">
             <div className="flex items-start gap-4">
                <Zap className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div className="flex-1 flex flex-col">
                   <span className="text-sm font-medium text-white block">Centralized Timing</span>
                   <p className="text-xs text-neutral-500 leading-relaxed">Every participant experiences exact timing with zero overlap.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <Volume2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div className="flex-1 flex flex-col">
                   <span className="text-sm font-medium text-white block">Dynamic Ducking</span>
                   <p className="text-xs text-neutral-500 leading-relaxed">Smart engine automatically prioritizes the active performer&apos;s mic.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <Mic2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div className="flex-1 flex flex-col">
                   <span className="text-sm font-medium text-white block">Integrated Processing</span>
                   <p className="text-xs text-neutral-500 leading-relaxed">Automated vocal processing optimizes clarity across all devices.</p>
                </div>
             </div>
          </div>
        </div>

        {/* Card 3: Structured Performance Sequencing */}
        <div className="col-span-1 p-10 rounded-[2rem] border border-white/10 bg-neutral-900/20 space-y-8 flex flex-col justify-between group hover:bg-neutral-900/50 transition-colors h-full">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <ListMusic className="w-5 h-5" />
              </div>
              <h4 className="text-[22px] font-medium text-white leading-tight">Structured Performance Sequencing</h4>
            </div>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              Maintain session momentum with intuitive, turn-based mechanics designed for a frictionless flow.
            </p>
          </div>
          
          <div className="space-y-4 pt-4 border-t border-white/10">
             <div className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div className="flex-1 flex flex-col">
                   <span className="text-sm font-medium text-white block">Visual Indicators</span>
                   <p className="text-xs text-neutral-500 leading-relaxed">Immediate visual cues identifying the active performer.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div className="flex-1 flex flex-col">
                   <span className="text-sm font-medium text-white block">Queue Management</span>
                   <p className="text-xs text-neutral-500 leading-relaxed">Participants can queue up via &quot;request next&quot; functionality.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <Layout className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div className="flex-1 flex flex-col">
                   <span className="text-sm font-medium text-white block">Host Capabilities</span>
                   <p className="text-xs text-neutral-500 leading-relaxed">Advanced controls to dynamically manage the performance queue.</p>
                </div>
             </div>
          </div>
        </div>

        {/* Card 4: Focused Interface & Utility */}
        <div className="col-span-1 lg:col-span-3 p-10 rounded-[2rem] border border-white/10 bg-neutral-900/20 space-y-8 flex flex-col justify-between group hover:bg-neutral-900/50 transition-colors h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Layout className="w-5 h-5" />
                </div>
                <h4 className="text-[22px] font-medium text-white leading-tight">Focused Interface & Utility</h4>
              </div>
              <p className="text-neutral-400 font-light text-sm leading-relaxed">
                BudBeat strips away social clutter to prioritize the session and the performance.
              </p>
              <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex gap-4 backdrop-blur-sm">
                <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-emerald-400/80 leading-relaxed italic">
                  <span className="font-semibold text-emerald-400 not-italic">System Tip:</span> The user journey is engineered for absolute simplicity: select an instrumental, initialize the room, and begin.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t md:border-t-0 md:border-l border-white/10 md:pl-12">
               <div className="space-y-2">
                  <span className="text-sm font-medium text-white block">Purpose-Built Profiles</span>
                  <p className="text-xs text-neutral-500 leading-relaxed">Profiles highlight core creative identities and performance preferences.</p>
               </div>
               <div className="space-y-2">
                  <span className="text-sm font-medium text-white block">Seamless Scheduling</span>
                  <p className="text-xs text-neutral-500 leading-relaxed">Deploy instant invites or schedule future rooms with automated reminders.</p>
               </div>
               <div className="space-y-2">
                  <span className="text-sm font-medium text-white block">Minimalist Workflow</span>
                  <p className="text-xs text-neutral-500 leading-relaxed">Engineered for pure utility with zero noise and distraction.</p>
               </div>
               <div className="space-y-2">
                  <span className="text-sm font-medium text-white block">Session Sync</span>
                  <p className="text-xs text-neutral-500 leading-relaxed">Automatically sync your session data with your BudBook Journal.</p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
