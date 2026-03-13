import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-[#C48376]/30 bg-[#F5ECD6] py-12 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg ring-1 ring-stone-900/5">
            <Image
              src="/owner-truck.png"
              alt="Sandoval Commercial Disposal owner with truck and trailer – professional junk removal in Southern California"
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
              We offer flexible scheduling, transparent pricing, and prompt communication throughout the process. Our team arrives on time, completes the job efficiently, and leaves your property clean.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
