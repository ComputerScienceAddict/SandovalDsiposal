'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

export default function StickyCallCTA() {
  const pathname = usePathname();
  const isGallery = pathname === '/gallery';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-2.5 bg-[#F5ECD6]/98 backdrop-blur-md border-t-2 border-[#C48376]/40 px-4 py-3.5 pb-[max(0.875rem,env(safe-area-inset-bottom))] md:hidden shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
      <Link
        href={isGallery ? '/' : '/gallery'}
        className="flex items-center justify-center gap-1.5 min-h-[50px] min-w-[84px] rounded-full border-2 border-stone-400 py-3 px-4 text-center text-[15px] font-bold text-stone-700 hover:bg-stone-100 active:scale-[0.97] transition-all"
      >
        {isGallery ? (
          <>
            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            Home
          </>
        ) : (
          <>
            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            Gallery
          </>
        )}
      </Link>
      <a
        href={`tel:${BUSINESS.phone.replace(/\D/g, '')}`}
        className="flex-1 min-w-0 max-w-[150px] min-h-[50px] flex items-center justify-center rounded-full bg-[#C48376] py-3 text-center text-white text-[15px] font-bold shadow-lg shadow-[#C48376]/30 hover:bg-[#A96D62] active:scale-[0.97] transition-all"
      >
        Call Now
      </a>
      <a
        href="/#contact"
        className="flex-1 min-w-0 max-w-[150px] min-h-[50px] flex items-center justify-center rounded-full border-2 border-[#A96D62] py-3 text-center text-[15px] font-bold text-[#A96D62] bg-white/80 hover:bg-[#A96D62] hover:text-white active:scale-[0.97] transition-all"
      >
        Free Quote
      </a>
    </div>
  );
}
