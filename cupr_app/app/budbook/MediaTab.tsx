'use client';

import { 
  Music, 
  Youtube, 
  Image as ImageIcon, 
  Layers, 
  Globe, 
  Share2, 
  Mic2, 
  ListMusic,
  PlusCircle,
  CloudUpload,
  Sparkles,
  Users
} from 'lucide-react';

export function MediaTab() {
  return (
    <div className="w-full max-w-5xl space-y-16">
      
      {/* Intro Section */}
      <div className="flex flex-col space-y-6 max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
         <h2 className="text-4xl font-light tracking-tight text-white leading-tight">
          Media: All Your Beats, Videos & Vibes in One Place
         </h2>
         <p className="text-neutral-400 font-light leading-relaxed text-lg text-pretty">
           The Media tab is where BudBeats connects everything you already love—your AI‑made beats, your saved playlists, and your own photos—directly into your freestyle sessions.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1: AI Beats & Personal Crate */}
        <div className="group p-8 rounded-[2.5rem] border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 hover:border-white/20 transition-all duration-500 space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 ring-1 ring-orange-500/20">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-medium text-white tracking-tight">AI Beats & Personal Crate</h3>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <Sparkles className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
              <p className="text-neutral-400 font-light leading-relaxed">
                Use AI to generate brand‑new instrumentals from text prompts like <span className="text-orange-200/60 italic">&quot;dark drill with sliding 808s&quot;</span> or <span className="text-orange-200/60 italic">&quot;emotional piano at 150 BPM.&quot;</span>
              </p>
            </div>
            <div className="flex gap-4">
              <CloudUpload className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
              <p className="text-neutral-400 font-light leading-relaxed">
                Upload your own beats from your desktop or DAW exports and keep them in a personal library alongside your AI creations.
              </p>
            </div>
            <div className="flex gap-4">
              <PlusCircle className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
              <p className="text-neutral-400 font-light leading-relaxed text-sm">
                Save favorites from YouTube by pairing them with your own AI beats or uploads for future cyphers.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Public Beat Library */}
        <div className="group p-8 rounded-[2.5rem] border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 hover:border-white/20 transition-all duration-500 space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 ring-1 ring-purple-500/20">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-medium text-white tracking-tight">Community Library</h3>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <Users className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
              <p className="text-neutral-400 font-light leading-relaxed">
                A repository of user-submitted beats—uploaded and AI-generated—that creators have chosen to share with the world.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-wrap gap-2 pt-2">
                {['Drill', 'Lo-Fi', 'Trap', 'West Coast', 'Boom Bap'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-purple-500/5 border border-purple-500/10 text-[10px] text-purple-300 uppercase tracking-widest font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-neutral-500 font-light text-sm leading-relaxed">
              Mix and match: start on YouTube type beats, then switch into a community loop for a different energy.
            </p>
          </div>
        </div>

        {/* Card 3: Synchronized YouTube Experience */}
        <div className="col-span-1 md:col-span-2 group p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 hover:border-white/20 transition-all duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 ring-1 ring-red-500/20">
                  <Youtube className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-medium text-white tracking-tight leading-tight">YouTube Synchronized</h3>
              </div>
              <p className="text-neutral-400 font-light leading-relaxed text-lg italic">
                &quot;Playback is synchronized for everyone, so when you pause, skip, or switch videos, the whole room sees the same moment at the same time.&quot;
              </p>
              <div className="space-y-4">
                {[
                  'Pull in type beat channels and music videos',
                  'Live rotating backdrops for every round',
                  'Synced playback for group reactions'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
                    <span className="text-neutral-300 font-light tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 bg-black">
               <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <Youtube className="w-20 h-20 text-neutral-800" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
               <div className="absolute bottom-6 left-6 right-6">
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mb-3">
                    <div className="h-full w-2/3 bg-red-600 rounded-full" />
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                    <span>Synchronized Live Stream</span>
                    <span>4 Peers Watching</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Card 4: Camera Roll Backdrops */}
        <div className="group p-8 rounded-[2.5rem] border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 hover:border-white/20 transition-all duration-500 space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 ring-1 ring-emerald-500/20">
              <ImageIcon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-medium text-white tracking-tight">Camera Roll Backdrops</h3>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square rounded-xl bg-white/5 border border-white/10" />
              <div className="aspect-square rounded-xl bg-white/10 border border-white/10" />
              <div className="aspect-square rounded-xl bg-white/5 border border-white/10" />
            </div>
            <p className="text-neutral-400 font-light leading-relaxed">
              Drop photos from your camera roll into a session: cover art drafts, moodboards, or behind‑the‑scenes shots that fit the vibe.
            </p>
            <p className="text-neutral-500 font-light text-sm leading-relaxed">
              Swap visuals live as you move through different beats, ensuring the room looks like the music feels.
            </p>
          </div>
        </div>

        {/* Card 5: The Hub Summary */}
        <div className="group p-8 rounded-[2.5rem] border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 hover:border-white/20 transition-all duration-500 space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 ring-1 ring-blue-500/20">
              <Share2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-medium text-white tracking-tight leading-tight">One Media Hub</h3>
          </div>
          <p className="text-neutral-400 font-light leading-relaxed">
            By connecting your YouTube and Apple Music accounts, the Media tab becomes a true command center for your sessions.
          </p>
          <div className="space-y-4 pt-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between group-hover:border-white/10 transition-colors">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Connect YouTube</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between group-hover:border-white/10 transition-colors">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Connect Apple Music</span>
              <div className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[8px] text-blue-400">PENDING</div>
            </div>
          </div>
        </div>

        {/* Hero Section: Apple Music Integration */}
        <div className="col-span-1 md:col-span-2 mt-8">
          <div className="relative p-10 md:p-16 rounded-[3rem] overflow-hidden border border-white/10 bg-[#fa243c]/10 group">
             {/* Gradient Background */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#fa243c]/20 via-black to-black" />
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#fa243c]/30 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 transition-transform duration-1000 group-hover:scale-110" />
             
             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-[#fa243c] flex items-center justify-center text-white shadow-2xl shadow-[#fa243c]/50">
                        <Music className="w-8 h-8" />
                      </div>
                      <h3 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
                        Connect <br /> Apple Music
                      </h3>
                   </div>
                   <p className="text-neutral-400 font-light text-xl leading-relaxed">
                     Turn your entire library into a live stage. Perform over millions of tracks with Apple Music Sing.
                   </p>
                   <button className="px-8 py-4 rounded-full bg-white text-black text-sm font-semibold tracking-wide hover:bg-neutral-200 transition-colors">
                     Sign In to Apple Music
                   </button>
                </div>

                <div className="space-y-10">
                   <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Mic2 className="w-6 h-6 text-[#fa243c]" />
                        <h4 className="text-lg font-medium text-white tracking-tight">Sing Over Your Library</h4>
                      </div>
                      <p className="text-neutral-400 font-light leading-relaxed text-sm ml-10">
                        Using Apple Music Sing–compatible songs as backing tracks, lowering lead vocals so your voice takes the lead.
                      </p>
                   </div>
                   <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <ListMusic className="w-6 h-6 text-[#fa243c]" />
                        <h4 className="text-lg font-medium text-white tracking-tight">Playlists are Session-Ready</h4>
                      </div>
                      <p className="text-neutral-400 font-light leading-relaxed text-sm ml-10">
                        Pick any track from your gym anthems or slow jams, lower the lead vocal, and use it as a beat in your BudBeats room.
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </div>

      </div>

      {/* Synchronized Lyrics Showcase */}
      <div className="p-12 rounded-[2.5rem] bg-neutral-900/10 border border-white/5 space-y-8">
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-light tracking-tight text-white">Beat-by-Beat Lyrics</h3>
              <p className="text-neutral-500 font-light">Real-time synced lyrics during your group video session.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer">
                <ChevronLeft className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
         </div>

         <div className="space-y-6 font-light text-2xl md:text-3xl tracking-tight leading-snug">
            <p className="text-neutral-700">Watch me get it now</p>
            <p className="text-[#fa243c] animate-pulse">Running up the mountain, no I never look back</p>
            <p className="text-neutral-700">Every single step is like a heart attack</p>
         </div>
      </div>

    </div>
  );
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
