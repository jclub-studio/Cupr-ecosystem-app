'use client';

import { 
  Swords, 
  PenTool, 
  Trophy, 
  Flame, 
  Share2, 
  Zap, 
  Dices,
  Smartphone,
  Tv,
  MessageSquareQuote,
  Star
} from 'lucide-react';

export function GamesTab() {
  return (
    <div className="w-full max-w-5xl space-y-16 pb-20">
      
      {/* Intro Hero Section */}
      <div className="flex flex-col space-y-8 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 uppercase tracking-widest font-mono">
           Second-Screen Party Mode
         </div>
         <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
          BudBeat Games: Spontaneous <br /> Interactive Cyphers
         </h2>
         <p className="text-neutral-400 font-light leading-relaxed text-lg max-w-2xl">
           BudBeat Games layers spontaneous, interactive party game mechanics directly onto your live group video and freestyle sessions. Use your phone as a controller while the shared Game Stage tracks the chaos.
         </p>
         
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
               <Tv className="w-5 h-5 text-emerald-400" />
               <span className="text-sm text-neutral-300 font-light">Shared screen for the room</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
               <Smartphone className="w-5 h-5 text-emerald-400" />
               <span className="text-sm text-neutral-300 font-light">Phone acts as your personal controller</span>
            </div>
         </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* BarBlast */}
        <GameCard 
          icon={<MessageSquareQuote className="w-6 h-6" />}
          color="orange"
          title="BarBlast"
          subtitle="The Punchline Game"
          description="Everyone receives the same text prompt (e.g., 'Finish this bar…'). Players write a one or two-bar answer on their device, and the group votes on the best entry."
          integration="The winning bar becomes the mandatory first line for the next live freestyle round."
        />

        {/* HookBox */}
        <GameCard 
          icon={<PenTool className="w-6 h-6" />}
          color="blue"
          title="HookBox"
          subtitle="Collaborative Hook Writing"
          description="A simple hook template with missing words is generated. Players fill in the blanks on their phones to create the session's chorus."
          integration="The winning hook is locked on screen, and every performer must bring it back in their verse."
        />

        {/* Beat Spin */}
        <GameCard 
          icon={<Dices className="w-6 h-6" />}
          color="purple"
          title="Beat Spin"
          subtitle="Trivia + Beat Selection"
          description="Test your knowledge with quick trivia about music history or inside jokes. High scorers get to claim slices on a 'Beat Wheel'."
          integration="Winners get to select the next backing track for the entire room."
        />

        {/* Cover Clash */}
        <GameCard 
          icon={<Share2 className="w-6 h-6" />}
          color="emerald"
          title="Cover Clash"
          subtitle="Visual Party Game"
          description="Respond to prompts like 'Draw the cover for tonight’s EP' using simple drawing tools on your phone."
          integration="The winning art becomes the session thumbnail and is saved as a session memory."
        />

        {/* Crowd Control */}
        <GameCard 
          icon={<Flame className="w-6 h-6" />}
          color="red"
          title="Crowd Control"
          subtitle="Audience Voting Mode"
          description="After each verse, all participants—and external viewers—can rate the flow (1–5 flames) and apply tags."
          integration="Points accumulate across rounds to crown the session's MVP."
        />

        {/* Echo Mode */}
        <GameCard 
          icon={<Zap className="w-6 h-6" />}
          color="yellow"
          title="Echo Mode"
          subtitle="Call & Response Challenges"
          description="A quick challenge card is pinned to the shared view, setting a rule for the next performer (e.g., 'Only use food metaphors')."
          integration="The group votes on whether the performer successfully passed the challenge."
        />

        {/* Story Cipher */}
        <div className="col-span-1 md:col-span-2 group p-8 rounded-[2.5rem] border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 hover:border-white/20 transition-all duration-500">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 ring-1 ring-cyan-500/20 shrink-0">
               <Swords className="w-8 h-8" />
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex flex-col">
                <span className="text-cyan-400 text-xs font-mono uppercase tracking-[0.2em] mb-1">Collaborative Narrative</span>
                <h3 className="text-3xl font-medium text-white tracking-tight">Story Cipher</h3>
              </div>
              <p className="text-neutral-400 font-light leading-relaxed text-lg italic">
                &quot;Each player secretly receives a hidden objective on their phone (e.g., &apos;Introduce a suspicious neighbor character&apos;) that they must work into their verse.&quot;
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Summary */}
      <div className="flex flex-col items-center justify-center p-12 rounded-[3rem] border border-white/5 bg-gradient-to-b from-transparent to-white/5 text-center space-y-6">
          <Trophy className="w-12 h-12 text-yellow-500/50" />
          <h3 className="text-2xl font-light text-white tracking-tight">Always in Service of the Session</h3>
          <p className="text-neutral-500 font-light max-w-xl">
             These mini-games are always in service of the central BudBeats loop: <span className="text-white">pick a beat, pass the mic, and make something fun together.</span>
          </p>
      </div>

    </div>
  );
}

interface GameCardProps {
  icon: React.ReactNode;
  color: 'orange' | 'blue' | 'purple' | 'emerald' | 'red' | 'yellow';
  title: string;
  subtitle: string;
  description: string;
  integration: string;
}

function GameCard({ icon, color, title, subtitle, description, integration }: GameCardProps) {
  const colorMap = {
    orange: 'bg-orange-500/10 text-orange-400 ring-orange-500/20 shadow-orange-500/5',
    blue: 'bg-blue-500/10 text-blue-400 ring-blue-500/20 shadow-blue-500/5',
    purple: 'bg-purple-500/10 text-purple-400 ring-purple-500/20 shadow-purple-500/5',
    emerald: 'bg-emerald-500/10 text-emerald-400 ring-emerald-500/20 shadow-emerald-500/5',
    red: 'bg-red-500/10 text-red-400 ring-red-500/20 shadow-red-500/5',
    yellow: 'bg-yellow-500/10 text-yellow-400 ring-yellow-500/20 shadow-yellow-500/5'
  };

  const iconBorderColor = {
    orange: 'border-orange-500/30',
    blue: 'border-blue-500/30',
    purple: 'border-purple-500/30',
    emerald: 'border-emerald-500/30',
    red: 'border-red-500/30',
    yellow: 'border-yellow-500/30'
  };

  return (
    <div className="group p-8 rounded-[2.5rem] border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 hover:border-white/20 transition-all duration-500 flex flex-col h-full">
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ring-1 ${colorMap[color]}`}>
          {icon}
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-medium text-white tracking-tight">{title}</h3>
          <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">{subtitle}</span>
        </div>
      </div>
      
      <p className="text-neutral-400 font-light leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      <div className={`mt-auto p-4 rounded-2xl border ${iconBorderColor[color]} bg-black/20 space-y-2`}>
        <div className="flex items-center gap-2">
            <Star className={`w-3 h-3 ${colorMap[color].split(' ')[1]}`} />
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">Live Integration</span>
        </div>
        <p className="text-[11px] text-neutral-300 font-light leading-relaxed">
          {integration}
        </p>
      </div>
    </div>
  );
}
