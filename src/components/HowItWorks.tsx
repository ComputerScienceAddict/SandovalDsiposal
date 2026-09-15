import Image from 'next/image';
import AnimatedText from './AnimatedText';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-[#C48376]/30 bg-[#F5ECD6] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          <div className="order-2 lg:order-1">
            <h2 className="font-bold text-stone-900 text-2xl sm:text-3xl">
              Our Process
            </h2>
            <ol className="mt-6 space-y-4 text-stone-700">
              <li className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C48376] text-white text-sm font-bold">1</span>
                <span>Send photos for a <strong>free estimate</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C48376] text-white text-sm font-bold">2</span>
                <span>Schedule your pickup</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C48376] text-white text-sm font-bold">3</span>
                <span>We arrive, load, and haul everything away</span>
              </li>
            </ol>
            <AnimatedText />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl order-1 lg:order-2">
            <Image
              src="/junk-work-in-progress.jpg"
              alt="Junk removal and remodeling cleanup crew at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
