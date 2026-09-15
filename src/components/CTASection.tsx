import { BUSINESS } from '@/lib/constants';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden border-t-4 border-stone-900 bg-stone-900 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:gap-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <h2 className="font-bold text-white text-xl sm:text-3xl leading-tight">
              Ready to clear the clutter?
            </h2>
            <p className="mt-2 text-[#C48376] font-semibold text-sm sm:text-base">
              Get your free estimate today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center min-h-[52px] rounded-full bg-[#C48376] px-8 py-3 text-white text-base font-bold hover:bg-[#A96D62] active:scale-[0.98] transition-all touch-manipulation"
            >
              Request a Quote
            </a>
            <a
              href={`tel:${BUSINESS.phone.replace(/\D/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center min-h-[52px] rounded-full bg-white px-8 py-3 text-stone-900 text-base font-bold hover:bg-stone-100 active:scale-[0.98] transition-all touch-manipulation"
            >
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
