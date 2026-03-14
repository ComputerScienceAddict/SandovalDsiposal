import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-[#C48376]/30 bg-[#F5ECD6] py-10 sm:py-24">
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
            <div className="mt-6 rounded-xl border-2 border-[#C48376]/40 bg-[#E8DCC4]/60 p-4">
              <p className="font-semibold text-stone-900 text-sm">
                Dump Trailer Rental
              </p>
              <p className="mt-1 text-stone-600 text-sm">
                12 yard and 14 yard heavy duty dump trailers available for rent. Perfect for cleanouts, demolition, and hauling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
