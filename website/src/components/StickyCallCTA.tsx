'use client';

import { BUSINESS } from '@/lib/constants';

export default function StickyCallCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center gap-3 bg-[#F5ECD6]/98 backdrop-blur-md border-t-2 border-[#C48376]/40 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <a
        href={`tel:${BUSINESS.phone.replace(/\D/g, '')}`}
        className="flex-1 max-w-[180px] min-h-[52px] flex items-center justify-center rounded-full bg-[#C48376] py-3 text-center text-white text-base font-bold shadow-lg shadow-[#C48376]/30 hover:bg-[#A96D62] active:scale-[0.97] transition-all"
      >
        Call Now
      </a>
      <a
        href="#contact"
        className="flex-1 max-w-[180px] min-h-[52px] flex items-center justify-center rounded-full border-2 border-[#A96D62] py-3 text-center text-base font-bold text-[#A96D62] bg-white/80 hover:bg-[#A96D62] hover:text-white active:scale-[0.97] transition-all"
      >
        Free Quote
      </a>
    </div>
  );
}
