import Image from 'next/image';
import { BUSINESS } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#C48376]/40 bg-[#E8DCC4]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-20 lg:px-8 lg:py-24 min-[480px]:py-14">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div className="order-2 lg:order-1">
            <h1 className="font-bold text-stone-900 text-2xl leading-snug sm:text-3xl lg:text-4xl tracking-tight">
              Professional Junk Removal Services
            </h1>
            <p className="mt-4 sm:mt-5 text-stone-700 text-sm sm:text-base leading-relaxed max-w-lg">
              Renovating your home, flipping a property, or clearing out a rental? We handle the removal of furniture, appliances, construction debris, patios, hot tubs, and more. Professional service from start to finish.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center min-h-[52px] rounded-full bg-[#C48376] px-6 py-3.5 text-white text-base font-semibold hover:bg-[#A96D62] active:scale-[0.98] transition-all touch-manipulation"
              >
                Request a Quote
              </a>
              <a
                href={`tel:${BUSINESS.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center min-h-[52px] rounded-full border-2 border-stone-800 px-6 py-3.5 text-stone-800 text-base font-semibold hover:bg-stone-800 hover:text-white active:scale-[0.98] transition-all touch-manipulation"
              >
                Call Now
              </a>
            </div>
            <p className="mt-6 text-stone-600 text-sm">
              Fast response times. Upfront pricing. Same-day service available.
            </p>
          </div>
          <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-xl order-1 lg:order-2 lg:aspect-[4/3]">
            {/* Image: truck, work-in-progress, or backyard cleanout. Place files in /public */}
            <Image
              src="/junk-hero.jpg"
              alt="Junk removal truck ready for service"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
