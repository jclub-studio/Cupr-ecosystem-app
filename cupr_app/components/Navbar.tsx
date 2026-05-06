'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';

/** Source dimensions of the navbar logo PNGs in /public — used by next/image for layout. */
const NAV_LOGO_DIMS: Record<string, { width: number; height: number }> = {
  '/Cuproslogo.png': { width: 2000, height: 2000 },
  '/cuprbrandlogo.png': { width: 2730, height: 1536 },
  '/budbooklogo.png': { width: 2730, height: 1536 },
  '/BudBeatlogo.png': { width: 2730, height: 1536 },
};

function getLogoDims(src: string): { width: number; height: number } {
  return NAV_LOGO_DIMS[src] ?? { width: 256, height: 64 };
}

type NavLogoStyle = 'original' | 'mono' | 'auto';

type NavLabelMeta = {
  /** Always present for accessibility (aria-label/alt) and fallbacks. */
  labelText: string;
  /** Optional image to render in place of text. */
  labelLogoSrc?: string;
  /** Presentation choice for the logo on a dark header. */
  logoStyle?: NavLogoStyle;
  /** Optional sizing override for the logo in nav. */
  logoSizeClassName?: string;
};

type NavDropdownLink = { href: string; label: string; special?: boolean; external?: boolean };

type NavDropdownItem = {
  id: string;
  label: NavLabelMeta;
  dropdown: true;
  links: NavDropdownLink[];
};

type NavFlatItem = {
  id: string;
  href: string;
  label: NavLabelMeta;
};

type NavLinkItem = NavFlatItem | NavDropdownItem;

/** Match internal links where pathname excludes query (e.g. /budbook vs ?tab=). */
function routeMatches(pathname: string, href: string, tabInUrl: string | null): boolean {
  if (href.startsWith('http://') || href.startsWith('https://')) {
    return false;
  }
  const [path, queryString] = href.split('?');
  if (pathname !== path) {
    return false;
  }
  if (!queryString) {
    return true;
  }
  const want = new URLSearchParams(queryString);
  if (!want.has('tab')) {
    return true;
  }
  const wantTab = want.get('tab');
  const curTab = tabInUrl ?? 'intro';
  return wantTab === curTab;
}

function NavLabel({
  label,
  variant,
}: {
  label: NavLabelMeta;
  variant: 'desktop' | 'mobile';
}) {
  if (!label.labelLogoSrc) return <span>{label.labelText}</span>;

  const requested = label.logoStyle ?? 'auto';
  const effective = requested === 'auto' ? 'mono' : requested;

  const defaultSizeClass = variant === 'desktop' ? 'h-4 md:h-5' : 'h-6';
  const sizeClass = label.logoSizeClassName ?? defaultSizeClass;
  const filterStyle =
    effective === 'mono'
      ? ({
          filter: 'brightness(0) invert(1)',
        } as const)
      : undefined;

  const dims = getLogoDims(label.labelLogoSrc);
  return (
    <Image
      src={label.labelLogoSrc}
      alt={label.labelText}
      width={dims.width}
      height={dims.height}
      style={filterStyle}
      className={`${sizeClass} w-auto object-contain opacity-70 transition-opacity group-hover:opacity-100`}
      sizes="(max-width: 768px) 192px, 256px"
      priority
    />
  );
}

const NAV_LINKS: NavLinkItem[] = [
  { id: 'vantage', href: '/', label: { labelText: 'VANTAGE' } },
  {
    id: 'b2b',
    label: {
      labelText: 'B2B',
      labelLogoSrc: '/Cuproslogo.png',
      logoStyle: 'auto',
      // Keep below header row (h-20) so overflow does not capture clicks on page content.
      logoSizeClassName: 'max-h-12 md:max-h-[52px] w-auto -ml-2 md:-ml-3',
    },
    dropdown: true,
    links: [
      { href: '/web', label: 'WEB' },
      { href: '/cms', label: 'CMS' },
      { href: '/data', label: 'DATA' },
      { href: 'https://c-pros-217895678902.us-west1.run.app/', label: 'CŪPR.OS APP', external: true },
    ],
  },
  {
    id: 'b2c',
    label: {
      labelText: 'B2C',
      labelLogoSrc: '/cuprbrandlogo.png',
      logoStyle: 'auto',
      // Slightly smaller than CŪPROs mark to keep balance.
      logoSizeClassName: 'max-h-11 md:max-h-12 w-auto -ml-2 md:-ml-3',
    },
    dropdown: true,
    links: [
      { href: '/hardgoods', label: 'Hardgoods' },
      { href: '/softgoods', label: 'Softgoods' },
      { href: '/consumables', label: 'Consumables' },
      { href: '/proprietary', label: 'Proprietary', special: true },
      { href: '/cupr-brand-app', label: 'CŪPR APP' },
    ],
  },
  {
    id: 'demos',
    label: {
      labelText: 'DEMOS',
      labelLogoSrc: '/budbooklogo.png',
      logoStyle: 'auto',
      logoSizeClassName: 'max-h-12 md:max-h-[52px] w-auto -ml-2 md:-ml-3',
    },
    dropdown: true,
    links: [
      { href: '/budbook?tab=journal', label: 'Journal' },
      { href: '/budbook?tab=social', label: 'Social' },
      { href: '/budbook?tab=shop', label: 'Shop' },
      { href: '/budbook?tab=pro', label: 'Pro' },
      { href: '/budbook-app', label: 'BUDBOOK APP' },
    ],
  },
  {
    id: 'origin',
    label: {
      labelText: 'ORIGIN',
      labelLogoSrc: '/BudBeatlogo.png',
      logoStyle: 'auto',
      logoSizeClassName: 'max-h-11 md:max-h-12 w-auto -ml-2 md:-ml-3',
    },
    dropdown: true,
    links: [{ href: '/budbeat-app', label: 'BudBeat App' }],
  },
];

/** Embedded SPAs / proxied apps — avoid eager prefetch (heavy or separate origins via rewrite). */
function prefetchForEmbeddedAppHref(href: string): boolean | undefined {
  if (href.startsWith('/budbeat-app') || href.startsWith('/budbook-app')) {
    return false;
  }
  return undefined;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tabInUrl = searchParams.get('tab');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Desktop: show Vantage link where logo was */}
        <Link
          href="/"
          className={`relative z-10 hidden md:flex text-xs uppercase tracking-[0.1em] transition-colors py-2 ${
            pathname === '/' ? 'text-white' : 'text-white/50 hover:text-white'
          }`}
        >
          Vantage
          {pathname === '/' && (
            <motion.div layoutId="nav-indicator-vantage" className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
          )}
        </Link>

        {/* Tablet/Mobile: show main header logo */}
        <Link href="/" className="relative z-10 flex items-center md:hidden">
          <Image
            src="/cuprbrandlogo.png"
            alt="CŪPR"
            width={2730}
            height={1536}
            className="h-16 w-auto object-contain"
            sizes="128px"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            if (link.id === 'vantage') return null;
            if ('dropdown' in link && link.dropdown) {
              const isActive = link.links.some((sub) =>
                routeMatches(pathname, sub.href, pathname === '/budbook' ? tabInUrl : null),
              );
              return (
                <div 
                  key={link.id} 
                  className="group relative" 
                  onMouseEnter={() => setHoveredDropdown(link.id)} 
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <button
                    aria-label={link.label.labelText}
                    className={`flex items-center gap-1 text-xs uppercase tracking-[0.1em] transition-colors py-2 ${isActive ? 'text-white' : 'text-white/50 group-hover:text-white'}`}
                  >
                     <span className="flex items-center">
                       <NavLabel label={link.label} variant="desktop" />
                     </span>
                     <ChevronDown className={`w-3 h-3 transition-transform ${hoveredDropdown === link.id ? 'rotate-180' : ''}`} />
                     {isActive && (
                        <motion.div
                          layoutId={`nav-indicator-dropdown-${link.id}`}
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                        />
                      )}
                  </button>
                  
                  <AnimatePresence>
                    {hoveredDropdown === link.id && (
                       <motion.div
                         initial={{ opacity: 0, y: 10, scale: 0.95 }}
                         animate={{ opacity: 1, y: 0, scale: 1 }}
                         exit={{ opacity: 0, y: 10, scale: 0.95 }}
                         transition={{ duration: 0.2, ease: "easeOut" }}
                         className="absolute top-full left-1/2 -translate-x-1/2 min-w-[200px] bg-black/95 backdrop-blur-3xl border border-white/10 p-6 rounded-xl shadow-2xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none"
                       >
                          <ul className="space-y-4 relative z-10">
                             {link.links.map((sublink) => (
                                <li key={`${link.id}-${sublink.label}`}>
                                   {sublink.external ? (
                                     <a
                                       href={sublink.href}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className={`block text-xs uppercase tracking-[0.1em] whitespace-nowrap ${sublink.special ? 'text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(200,200,255,0.6)] transition-all duration-300' : 'text-white/50 hover:text-white transition-colors duration-200'}`}
                                     >
                                       <span
                                         className={
                                           sublink.special
                                             ? 'relative inline-block hover:after:absolute hover:after:inset-0 hover:after:bg-gradient-to-r hover:after:from-transparent hover:after:via-white/30 hover:after:to-transparent hover:after:bg-[length:200%_100%] hover:after:animate-[shine_1.5s_ease-in-out_infinite]'
                                             : ''
                                         }
                                       >
                                         {sublink.label}
                                       </span>
                                     </a>
                                   ) : (
                                     <Link
                                       href={sublink.href}
                                       prefetch={prefetchForEmbeddedAppHref(sublink.href)}
                                       className={`block text-xs uppercase tracking-[0.1em] whitespace-nowrap ${sublink.special ? 'text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(200,200,255,0.6)] transition-all duration-300' : 'text-white/50 hover:text-white transition-colors duration-200'}`}
                                     >
                                       <span
                                         className={
                                           sublink.special
                                             ? 'relative inline-block hover:after:absolute hover:after:inset-0 hover:after:bg-gradient-to-r hover:after:from-transparent hover:after:via-white/30 hover:after:to-transparent hover:after:bg-[length:200%_100%] hover:after:animate-[shine_1.5s_ease-in-out_infinite]'
                                             : ''
                                         }
                                       >
                                         {sublink.label}
                                       </span>
                                     </Link>
                                   )}
                                </li>
                             ))}
                          </ul>
                       </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const flat = link as NavFlatItem;
            return (
              <Link
                key={flat.id}
                href={flat.href}
                className={`text-xs uppercase tracking-[0.1em] transition-colors relative py-2 ${
                  pathname === flat.href ? 'text-white' : 'text-white/50 hover:text-white'
                }`}
              >
                <NavLabel label={flat.label} variant="desktop" />
                {pathname === flat.href && (
                  <motion.div
                    layoutId={`nav-indicator-flat-${flat.id}`}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  />
                )}
              </Link>
            );
          })}
          <div className="flex items-center gap-4 ml-4">
            <ThemeToggle />
            <Link href="/join" className="nav-pill border border-white/30 rounded-full px-5 py-2 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors block w-fit">
              JOIN
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
                if ('dropdown' in link && link.dropdown) {
                  return (
                    <div key={`mobile-${link.id}`} className="space-y-4">
                      <button 
                        aria-label={link.label.labelText}
                        onClick={() => setOpenMobileDropdown(openMobileDropdown === link.id ? null : link.id)}
                        className="w-full flex items-center justify-between text-2xl font-light tracking-wide text-white/50"
                      >
                        <span className="group flex items-center">
                          <NavLabel label={link.label} variant="mobile" />
                        </span>
                        <ChevronDown className={`w-6 h-6 transition-transform ${openMobileDropdown === link.id ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openMobileDropdown === link.id && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-6 border-l border-white/10 space-y-8 py-4">
                              <ul className="space-y-4">
                                {link.links.map((sublink) => (
                                  <li key={`${link.id}-${sublink.label}`}>
                                    {sublink.external ? (
                                      <a
                                        href={sublink.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsOpen(false)}
                                        className={`block text-xl font-light tracking-wide ${sublink.special ? 'text-white drop-shadow-[0_0_8px_rgba(200,200,255,0.4)]' : 'text-white/80'}`}
                                      >
                                        {sublink.label}
                                      </a>
                                    ) : (
                                      <Link
                                        href={sublink.href}
                                        prefetch={prefetchForEmbeddedAppHref(sublink.href)}
                                        onClick={() => setIsOpen(false)}
                                        className={`block text-xl font-light tracking-wide ${sublink.special ? 'text-white drop-shadow-[0_0_8px_rgba(200,200,255,0.4)]' : 'text-white/80'}`}
                                      >
                                        {sublink.label}
                                      </Link>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                const flat = link as NavFlatItem;
                return (
                  <Link
                    key={flat.id}
                    href={flat.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-light tracking-wide ${
                      pathname === flat.href ? 'text-white' : 'text-white/50'
                    }`}
                  >
                    <span className="group flex items-center">
                      <NavLabel label={flat.label} variant="mobile" />
                    </span>
                  </Link>
                );
              })}
              <Link href="/join" onClick={() => setIsOpen(false)} className="mt-8 border text-center border-white/30 rounded-full px-8 py-3 text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors w-full max-w-xs self-center">
                 JOIN
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
