'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { BUSINESS } from '@/lib/constants';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'What we haul' },
  { href: '/#how-it-works', label: 'Process' },
  { href: '/#why-us', label: 'Why us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/#tiktok', label: 'Videos' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleVideosClick = (e: React.MouseEvent) => {
    if (pathname === '/' || pathname === '') {
      e.preventDefault();
      const el = document.getElementById('tiktok');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-stone-800/10 bg-[#F5ECD6]/98 shadow-sm backdrop-blur-sm pt-[env(safe-area-inset-top)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2 sm:px-4 sm:py-2 lg:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0 min-w-0 group">
          <Image
            src={BUSINESS.logoPath}
            alt={BUSINESS.name}
            width={40}
            height={40}
            className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
            priority
          />
          <span className="truncate">
            <span className="font-bold text-[#C48376] text-sm sm:text-base tracking-tight">Sandoval</span>
            <span className="hidden sm:inline font-semibold text-stone-800 text-[10px] sm:text-xs uppercase tracking-wider"> Commercial Disposal</span>
          </span>
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-3 xl:gap-4 shrink-0">
          {navLinks.map((link) =>
            link.href === '/#tiktok' ? (
              <a
                key={link.href}
                href="/#tiktok"
                onClick={handleVideosClick}
                className="text-stone-700 hover:text-stone-900 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-stone-700 hover:text-stone-900 text-xs font-semibold whitespace-nowrap transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-2 xl:gap-3 shrink-0">
          <div className="flex items-center gap-1.5">
            <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-800/10 text-stone-600 hover:bg-stone-800/20 hover:text-stone-800 transition-colors" aria-label="Instagram">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href={BUSINESS.tiktok} target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-800/10 text-stone-600 hover:bg-stone-800/20 hover:text-stone-800 transition-colors" aria-label="TikTok">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a href={BUSINESS.yelp} target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-800/10 hover:bg-stone-800/20 transition-colors" aria-label="Yelp Reviews">
              <Image src="/yelp-logo.png" alt="Yelp" width={16} height={16} className="h-4 w-4 object-contain" />
            </a>
          </div>
          <a
            href={`tel:${BUSINESS.phone.replace(/\D/g, '')}`}
            className="rounded-full bg-stone-900 px-4 py-2 text-white text-xs font-bold hover:bg-stone-800 transition-all whitespace-nowrap"
          >
            Get a Quote
          </a>
          <a
            href={`tel:${BUSINESS.phone.replace(/\D/g, '')}`}
            className="text-stone-800 font-bold text-xs whitespace-nowrap"
          >
            {BUSINESS.phone}
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-stone-600 hover:bg-stone-100 rounded-lg active:bg-stone-200 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-[#C48376]/30 bg-[#F5ECD6] px-4 py-4 lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) =>
              link.href === '/#tiktok' ? (
                <a
                  key={link.href}
                  href="/#tiktok"
                  onClick={handleVideosClick}
                  className="min-h-[48px] flex items-center text-stone-600 hover:text-stone-900 font-medium border-b border-stone-200/60 last:border-0 active:bg-stone-100/50 -mx-4 px-4 transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="min-h-[48px] flex items-center text-stone-600 hover:text-stone-900 font-medium border-b border-stone-200/60 last:border-0 active:bg-stone-100/50 -mx-4 px-4 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="flex items-center justify-center gap-3 py-4 border-b border-stone-200/60">
              <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800/10 text-stone-600 hover:bg-stone-800/20" aria-label="Instagram" onClick={() => setMobileOpen(false)}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href={BUSINESS.tiktok} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800/10 text-stone-600 hover:bg-stone-800/20" aria-label="TikTok" onClick={() => setMobileOpen(false)}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a href={BUSINESS.yelp} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800/10 hover:bg-stone-800/20" aria-label="Yelp Reviews" onClick={() => setMobileOpen(false)}>
                <Image src="/yelp-logo.png" alt="Yelp" width={20} height={20} className="h-5 w-5 object-contain" />
              </a>
            </div>
            <a
              href={`tel:${BUSINESS.phone.replace(/\D/g, '')}`}
              className="mt-4 flex items-center justify-center min-h-[48px] rounded-xl bg-[#C48376] py-3 text-center text-white font-bold hover:bg-[#A96D62] active:scale-[0.98] transition-all"
              onClick={() => setMobileOpen(false)}
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
