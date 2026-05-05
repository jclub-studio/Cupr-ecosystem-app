import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Link href="/" className="text-2xl font-mono tracking-widest uppercase">
            CŪPR
          </Link>
          <p className="text-sm text-white/50 max-w-sm font-light leading-relaxed">
            Cannabis Ūtility Performance Research. High-performance commerce infrastructure, proprietary data intelligence, and enterprise-grade hardware integrations for the global cannabis industry.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.1em] text-white/40">Services</h4>
          <nav className="flex flex-col space-y-3">
            <Link href="/web" className="text-sm font-light text-white/70 hover:text-white transition-colors">Web</Link>
            <Link href="/promo" className="text-sm font-light text-white/70 hover:text-white transition-colors">Promo</Link>
            <Link href="/data" className="text-sm font-light text-white/70 hover:text-white transition-colors">Data</Link>
          </nav>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.1em] text-white/40">Agency</h4>
          <nav className="flex flex-col space-y-3">
            <Link href="/" className="text-sm font-light text-white/70 hover:text-white transition-colors">Vantage</Link>
            <Link href="/join" className="text-sm font-light text-white/70 hover:text-white transition-colors">Partner</Link>
          </nav>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/30 tracking-wide font-mono uppercase">
          © {new Date().getFullYear()} CŪPR. All rights reserved.
        </p>
        <div className="flex items-center space-x-6 text-xs text-white/30 tracking-wide font-mono uppercase">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
}
