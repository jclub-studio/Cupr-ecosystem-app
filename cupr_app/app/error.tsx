'use client';
export default function ErrorBoundary({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h2 className="text-2xl font-mono text-white">Something went wrong!</h2>
      <p className="text-neutral-500 font-mono text-sm">{error.message}</p>
      <button onClick={() => reset()} className="px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest text-white hover:bg-neutral-800 transition-colors">
        Try again
      </button>
    </div>
  );
}
