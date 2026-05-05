'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';

const NAV_LINKS = [
  { href: '/', label: 'VANTAGE' },
  { href: '/web', label: 'WEB' },
  { href: '/promo', label: 'CMS' },
  { href: '/data', label: 'DATA' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-mono tracking-widest uppercase relative z-10">
          CŪPR
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-[0.1em] transition-colors relative py-8 ${
                  pathname === link.href ? 'text-white' : 'text-white/50 hover:text-white'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  />
                )}
              </Link>
            )
          })}
          <div className="flex items-center gap-4 ml-4">
            <ThemeToggle />
            <Link href="/join" className="nav-pill border border-white/30 rounded-full px-5 py-2 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors block w-fit">
              PARTNER
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-10 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 h-[100dvh] bg-black overflow-y-auto flex flex-col pt-24 px-6 pb-20"
          >
            <div className="flex flex-col space-y-6">
              {NAV_LINKS.map((link) => {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-light tracking-wide ${
                      pathname === link.href ? 'text-white' : 'text-white/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link href="/join" onClick={() => setIsOpen(false)} className="mt-8 border text-center border-white/30 rounded-full px-8 py-3 text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors w-full max-w-xs self-center">
                 PARTNER WITH US
              </Link>
              <div className="flex justify-center mt-4">
                 <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
