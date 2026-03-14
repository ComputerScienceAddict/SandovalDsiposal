import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-[#C48376]/30 bg-[#F5ECD6] overflow-x-hidden py-10 sm:py-24">
      {/* Full-width ribbon – edge to edge, animated */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 mb-10 sm:mb-14">
        <div className="relative bg-gradient-to-r from-red-600 via-red-600 to-red-700 py-4 px-4 sm:py-5 sm:px-6 text-center animate-ribbon-pulse overflow-hidden">
          <div className="absolute inset-0 animate-ribbon-shimmer" />
          <p className="relative font-bold text-white text-base sm:text-xl tracking-wide">
            DUMP TRAILER RENTAL
          </p>
          <p className="relative mt-0.5 text-red-100 text-xs sm:text-base font-medium px-1">
            12 Yard & 14 Yard Heavy Duty • Cleanouts • Demolition • Hauling
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-stone-900/5">
            <Image
              src="/dump-trailer-rental.png"
              alt="Sandoval Commercial Disposal 12 and 14 yard dump trailer rental – heavy duty equipment for your project"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <h2 className="font-bold text-stone-900 text-2xl sm:text-3xl">
              About Our Company
            </h2>
            <p className="mt-6 text-stone-600 leading-relaxed">
              We are a locally owned commercial and residential disposal company committed to reliability, professionalism, and customer satisfaction. From garage cleanouts and estate clearing to construction debris removal and remodeling cleanup, we provide efficient, dependable service.
            </p>
            <p className="mt-4 text-stone-600 leading-relaxed">
              We offer flexible scheduling, transparent pricing, and prompt communication throughout the process. Our team arrives on time, completes the job efficiently, and leaves your property clean. We also rent 12 and 14 yard dump trailers for DIY projects and contractors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
