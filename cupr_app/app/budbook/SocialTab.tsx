'use client';

import { 
  Users, 
  Share2, 
  Store, 
  Image as ImageIcon, 
  Shield, 
  Lock, 
  Zap, 
  Activity, 
  MapPin, 
  UserPlus, 
  UploadCloud, 
  Archive,
  Info
} from 'lucide-react';

export function SocialTab() {
  return (
    <div className="w-full max-w-5xl space-y-12">
      
      {/* Intro Section */}
      <div className="flex flex-col space-y-6 max-w-3xl">
         <h2 className="text-3xl font-light tracking-tight text-white">BudBook Social: Engagement Refined</h2>
         <p className="text-neutral-400 font-light leading-relaxed text-lg">
           The cannabis experience has always been inherently communal, but legacy digital platforms have failed to evolve alongside the modern consumer. BudBook Social provides a sophisticated infrastructure to connect, share, and discover. We have moved beyond superficial metrics to create a secure environment where your experiences drive the culture forward.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Smoke Circles */}
        <div className="col-span-1 p-10 rounded-[2rem] border border-white/10 bg-neutral-900/20 space-y-8 flex flex-col justify-between group hover:bg-neutral-900/50 transition-colors h-full">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-[22px] font-medium text-white">Smoke Circles</h4>
            </div>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              Move beyond generic groups. Smoke Circles allow you to architect your ideal digital ecosystem, whether you are building a broad community of enthusiasts or a hyper-private collective for your trusted network.
            </p>
          </div>
          
          <div className="space-y-4 pt-4 border-t border-white/10 flex flex-col gap-3">
             <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col gap-1">
                   <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Public</span>
                   <p className="text-xs text-white/80">Lead industry conversations.</p>
                </div>
                <div className="flex flex-col gap-1">
                   <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Private</span>
                      <Lock className="w-3 h-3 text-neutral-600" />
                   </div>
                   <p className="text-xs text-white/80">Secure gated spaces for associates.</p>
                </div>
                <div className="flex flex-col gap-1">
                   <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-blue-400 uppercase tracking-widest">Exclusive</span>
                      <Shield className="w-3 h-3 text-blue-500" />
                   </div>
                   <p className="text-xs text-white/80">Invite-only connoisseur tiers.</p>
                </div>
             </div>

             <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 flex gap-3 mt-2">
                <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-xs text-blue-400/80 leading-relaxed italic">
                  <span className="font-medium text-blue-400">System Tip:</span> Segment your experiences by creating distinct Circles—keep your wellness-focused collectives separate from your recreational networks.
                </p>
             </div>
          </div>
        </div>

        {/* The Network */}
        <div className="col-span-1 p-10 rounded-[2rem] border border-white/10 bg-neutral-900/20 space-y-8 flex flex-col justify-between group hover:bg-neutral-900/50 transition-colors h-full">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                <Share2 className="w-5 h-5" />
              </div>
              <h4 className="text-[22px] font-medium text-white">The Network</h4>
            </div>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              Traditional social media is passive; BudBook is active. This is a dynamic network built around shared experiences and real-time interaction.
            </p>
          </div>
          <div className="space-y-4 pt-4 border-t border-white/10">
             <div className="flex items-center gap-4">
                <Zap className="w-5 h-5 text-orange-400 shrink-0" />
                <div>
                   <span className="text-sm font-medium text-white block">Session Sync</span>
                   <p className="text-xs text-neutral-500">See what your network is enjoying and digitally join sessions.</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <Activity className="w-5 h-5 text-orange-400 shrink-0" />
                <div>
                   <span className="text-sm font-medium text-white block">Collaborative Logs</span>
                   <p className="text-xs text-neutral-500">Share session data to compare effects and hardware performance.</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <UserPlus className="w-5 h-5 text-orange-400 shrink-0" />
                <div>
                   <span className="text-sm font-medium text-white block">Strategic Alignment</span>
                   <p className="text-xs text-neutral-500">Connect with users who share your terpene preferences or goals.</p>
                </div>
             </div>
          </div>
        </div>

        {/* Retail */}
        <div className="col-span-1 p-10 rounded-[2rem] border border-white/10 bg-neutral-900/20 space-y-8 flex flex-col justify-between group hover:bg-neutral-900/50 transition-colors h-full">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Store className="w-5 h-5" />
              </div>
              <h4 className="text-[22px] font-medium text-white">Retail</h4>
            </div>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              The dispensary experience should be personalized, not purely transactional. BudBook transforms retail into a tailored extension of your ecosystem.
            </p>
          </div>
          <div className="space-y-4 pt-4 border-t border-white/10">
             <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5" />
                <p className="text-xs text-neutral-400 leading-relaxed"><span className="text-white font-medium">Curated Favorites:</span> Maintain an active directory of your preferred dispensaries globally.</p>
             </div>
             <div className="flex items-start gap-3">
                <Users className="w-4 h-4 text-emerald-400 mt-0.5" />
                <p className="text-xs text-neutral-400 leading-relaxed"><span className="text-white font-medium">The Concierge Connection:</span> Log specific budtenders who truly understand your palate.</p>
             </div>
             <div className="flex items-start gap-3">
                <Zap className="w-4 h-4 text-emerald-400 mt-0.5" />
                <p className="text-xs text-neutral-400 leading-relaxed"><span className="text-white font-medium">Integrated Logistics:</span> Seamless access to menus directly linked with your session history.</p>
             </div>
          </div>
        </div>

        {/* Media */}
        <div className="col-span-1 p-10 rounded-[2rem] border border-white/10 bg-neutral-900/20 space-y-8 flex flex-col justify-between group hover:bg-neutral-900/50 transition-colors h-full">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <ImageIcon className="w-5 h-5" />
              </div>
              <h4 className="text-[22px] font-medium text-white">Media</h4>
            </div>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              The Media module provides a censorship-free environment to document your experiences without the constraints of traditional platform algorithms.
            </p>
          </div>
          <div className="space-y-4 pt-4 border-t border-white/10">
             <div className="flex items-center gap-4">
                <UploadCloud className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                   <span className="text-sm font-medium text-white block">Unrestricted Uploads</span>
                   <p className="text-xs text-neutral-500">Document your acquisitions or CŪPR setups in high fidelity.</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <ImageIcon className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                   <span className="text-sm font-medium text-white block">Contextual Sharing</span>
                   <p className="text-xs text-neutral-500">Attach media to specific sessions or Circles for relevant audiences.</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <Archive className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                   <span className="text-sm font-medium text-white block">Secure Archive</span>
                   <p className="text-xs text-neutral-500">Your memories securely stored within an ecosystem built for the community.</p>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
