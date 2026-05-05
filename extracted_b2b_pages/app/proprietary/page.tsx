'use client';

export default function ProprietaryPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center">
      <div className="text-center space-y-6 mb-16">
        <h1 className="text-4xl md:text-6xl font-light tracking-tighter capitalize text-white">
          Proprietary
        </h1>
        <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest">
          Coming Soon
        </p>
      </div>

      <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-4">
          <div>
            <h2 className="text-xl font-light text-white tracking-wide">
              Flagship Lockbox Ecosystem
            </h2>
            <p className="text-sm text-white/50 font-light mt-2">
              Hardware specifications and proprietary designs will be revealed prior to launch.
            </p>
          </div>
        </div>

        <div className="w-full h-[400px] md:h-[600px] bg-neutral-900/20 rounded-xl border border-dashed border-white/10 flex items-center justify-center">
          <span className="text-white/30 text-sm font-mono tracking-widest uppercase">Classified Hardware</span>
        </div>
      </div>
    </div>
  );
}