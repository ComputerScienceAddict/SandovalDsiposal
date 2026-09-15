import Image from 'next/image';
import { BUSINESS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#6B4039] text-[#F5ECD6]">
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-[#C48376] via-[#A96D62] to-[#C48376]" />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 pb-[max(2.5rem,calc(1rem+env(safe-area-inset-bottom)))]">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-10 text-center sm:text-left">
          {/* Brand */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-3">
              <Image
                src={BUSINESS.logoPath}
                alt={BUSINESS.name}
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
              <span className="font-bold text-white text-xl">{BUSINESS.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-[#F5ECD6]/90 text-sm leading-relaxed text-center sm:text-left">
              Professional commercial and residential junk removal services. Reliable, efficient, and competitively priced.
            </p>
            <a
              href={`tel:${BUSINESS.phone.replace(/\D/g, '')}`}
              className="mt-6 inline-flex items-center justify-center gap-2 min-h-[48px] rounded-xl bg-[#C48376] px-6 py-3 text-white text-sm font-bold hover:bg-[#A96D62] active:scale-[0.98] transition-all"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phone}
            </a>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#F5ECD6] hover:bg-white/20 transition-colors" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href={BUSINESS.tiktok} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#F5ECD6] hover:bg-white/20 transition-colors" aria-label="TikTok">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a href={BUSINESS.yelp} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#F5ECD6] hover:bg-white/20 transition-colors" aria-label="Yelp Reviews">
                <Image src="/yelp-logo.png" alt="Yelp" width={20} height={20} className="h-5 w-5 object-contain" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 flex flex-col items-center sm:items-start">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${BUSINESS.phone.replace(/\D/g, '')}`}
                  className="inline-flex items-center gap-2 min-h-[44px] text-[#F5ECD6]/90 text-sm hover:text-white transition-colors py-1"
                >
                  <span className="text-[#C48376]">●</span>
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="inline-flex items-center gap-2 min-h-[44px] text-[#F5ECD6]/90 text-sm hover:text-white transition-colors break-all py-1"
                >
                  <span className="text-[#C48376]">●</span>
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Service Area & Hours */}
          <div className="lg:col-span-2 flex flex-col items-center sm:items-start">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Service Area</h4>
            <p className="mt-4 text-[#F5ECD6]/90 text-sm leading-relaxed">
              {BUSINESS.serviceArea}
            </p>
            <p className="mt-3 text-[#4ade80] text-sm font-medium">
              Open {BUSINESS.hours}
            </p>
            <p className="mt-3 text-[#F5ECD6]/80 text-xs">
              {BUSINESS.categories.join(' • ')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col items-center sm:items-start">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {[
                { href: '/#about', label: 'About' },
                { href: '/#services', label: 'Services' },
                { href: '/#how-it-works', label: 'How It Works' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/#tiktok', label: 'Videos' },
                { href: '/#contact', label: 'Get a Quote' },
                { href: BUSINESS.yelp, label: 'Yelp Reviews', external: true },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center min-h-[44px] text-[#F5ECD6]/90 text-sm hover:text-white transition-colors py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-[#F5ECD6]/70 text-xs">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-[#C48376] text-xs font-medium">
            Professional • Reliable • Efficient
          </p>
        </div>
      </div>
    </footer>
  );
}
