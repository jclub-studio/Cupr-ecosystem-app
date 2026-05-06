export const LIVE_NEW_SESSION_SRC =
  '/budbook-app/NewSession?fullscreen=true&returnPath=%2FPersonal';

/** Inline BudBook New Session shell for embedding beside Journal marketing columns (same-origin iframe). */
export function LiveNewSessionEmbed({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 min-h-0 ${className}`}>
      <div className="flex flex-col gap-1 shrink-0">
        <h2 className="text-sm font-medium tracking-tight text-white">Live New Session</h2>
        <p className="text-xs text-neutral-500 font-light leading-relaxed">
          Same flow as the BudBook app — log and interact without leaving this page.
        </p>
        <a
          href={LIVE_NEW_SESSION_SRC}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors w-fit"
        >
          Open full window
        </a>
      </div>
      <div className="flex-1 min-h-[min(420px,55vh)] lg:min-h-[480px] rounded-[2.5rem] border border-white/10 overflow-hidden bg-black shadow-2xl">
        <iframe
          title="BudBook New Session"
          src={LIVE_NEW_SESSION_SRC}
          loading="lazy"
          className="w-full h-full min-h-[min(420px,55vh)] lg:min-h-[480px] border-0"
        />
      </div>
    </div>
  );
}
