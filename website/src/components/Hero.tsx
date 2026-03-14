import { BUSINESS } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#C48376]/40 bg-[#E8DCC4] min-h-0 sm:min-h-0">
      <div className="mx-auto max-w-6xl px-4 pt-4 pb-10 sm:px-6 sm:py-20 lg:px-8 lg:py-24 sm:pt-20">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div className="order-2 lg:order-1">
            <h1 className="font-bold text-stone-900 text-[1.5rem] leading-tight sm:text-3xl sm:leading-snug lg:text-4xl tracking-tight">
              Professional Junk Removal Services
            </h1>
            <p className="mt-4 sm:mt-5 text-stone-700 text-sm sm:text-base leading-relaxed max-w-lg">
              Renovating your home, flipping a property, or clearing out a rental? We handle the removal of furniture, appliances, construction debris, patios, hot tubs, and more. Professional service from start to finish.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center min-h-[48px] sm:min-h-[52px] rounded-full bg-[#C48376] px-6 py-3 text-white text-[15px] font-semibold hover:bg-[#A96D62] active:scale-[0.98] transition-all touch-manipulation"
              >
                Request a Quote
              </a>
              <a
                href={`tel:${BUSINESS.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center min-h-[48px] sm:min-h-[52px] rounded-full border-2 border-stone-800 px-6 py-3 text-stone-800 text-[15px] font-semibold hover:bg-stone-800 hover:text-white active:scale-[0.98] transition-all touch-manipulation"
              >
                Call Now
              </a>
            </div>
            <p className="mt-6 text-stone-600 text-sm">
              Fast response times. Upfront pricing. Same-day service available.
            </p>
          </div>
          <div className="relative aspect-[16/10] sm:aspect-[16/10] overflow-hidden rounded-2xl order-1 lg:order-2 lg:aspect-[4/3] shadow-xl ring-1 ring-stone-900/10">
            <video
              src="/hero-video.mov"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              aria-label="Sandoval Commercial Disposal junk removal in action"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
