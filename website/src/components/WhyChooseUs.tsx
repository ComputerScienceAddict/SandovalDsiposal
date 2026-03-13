import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="border-t border-[#C48376]/30 bg-[#F5ECD6] py-12 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 -mx-4 sm:mx-0 overflow-hidden rounded-none sm:rounded-xl border-0 sm:border border-[#C48376]/30 shadow-lg">
          <Image
            src="/sandoval-banner.png"
            alt="Sandoval Commercial Disposal"
            width={800}
            height={300}
            className="h-auto w-full object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 800px"
          />
        </div>
        <h2 className="font-bold text-stone-900 text-2xl sm:text-3xl">
          Why Choose Us
        </h2>
        <div className="mt-8 max-w-2xl">
          <p className="text-stone-700 leading-relaxed">
            We respond quickly, typically within the same day. Reach out by phone, text, or our online form and receive a transparent quote before any work begins. Our team arrives on schedule and handles everything from loading to hauling. Residential, commercial, or job site cleanup, we have you covered.
          </p>
        </div>
      </div>
    </section>
  );
}
