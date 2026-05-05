import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h2 className="text-4xl font-light text-white">404</h2>
      <p className="text-neutral-500 font-mono text-sm uppercase tracking-widest">Page not found</p>
      <Link href="/" className="px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest text-white hover:bg-neutral-800 transition-colors mt-8">
        Return Home
      </Link>
    </div>
  );
}
