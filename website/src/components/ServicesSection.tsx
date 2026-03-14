import Image from 'next/image';

const services = [
  {
    title: 'Junk Removal',
    description: 'Complete junk removal services for residential and commercial properties. Same-day service available.',
    image: '/junk-cleanout.jpg',
  },
  {
    title: 'Light Demolition',
    description: 'Removal of construction debris including drywall, wood, pallets, and concrete.',
    image: '/junk-hero.jpg',
  },
  {
    title: 'Patio, Gazebo & Outdoor Removal',
    description: 'Professional demolition and removal of patios, gazebos, fencing, and yard structures.',
    image: '/junk-backyard.jpg',
  },
  {
    title: 'Spa & Hot Tub Removal',
    description: 'Safe removal and disposal of above-ground spas and hot tubs.',
    image: '/junk-service-2.jpg',
  },
  {
    title: 'Heavy Item Hauling',
    description: 'Specialized removal of heavy items including pianos, fitness equipment, and office furniture.',
    image: '/junk-work-in-progress.jpg',
  },
  {
    title: 'Furniture & Appliance Removal',
    description: 'Proper disposal of appliances, furniture, and mattresses with responsible recycling.',
    image: '/junk-trailer.jpg',
  },
  {
    title: 'Yard Debris Removal',
    description: 'Removal of branches, brush, leaves, and bulk yard waste. Properties left clean.',
    image: '/junk-backyard.jpg',
  },
];

const equipment = [
  '12 Yard Dumpster Trailer',
  '14 Yard Dump Trailer',
  '14 ft Dump Trailer',
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#E8DCC4]/60 py-12 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div>
            <h2 className="font-bold text-stone-900 text-2xl sm:text-3xl">
              Our Services
            </h2>
            <p className="mt-2 text-stone-600 text-sm">
              Comprehensive removal services for residential and commercial properties throughout Southern California.
            </p>
          </div>
          <a
            href="/gallery"
            className="mt-4 sm:mt-0 inline-flex items-center justify-center gap-2 min-h-[44px] rounded-full border-2 border-[#C48376] px-5 py-2.5 text-[#C48376] text-sm font-bold hover:bg-[#C48376] hover:text-white active:scale-[0.98] transition-all shrink-0"
          >
            View Our Work
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
        {/* Mobile: horizontal scroll with snap */}
        <div className="mt-6 sm:hidden -mx-4 overflow-x-auto scrollbar-hide pb-5 snap-x snap-mandatory scroll-smooth">
          <div className="flex gap-4 pl-4 pr-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="w-[288px] shrink-0 overflow-hidden rounded-2xl border-2 border-[#C48376]/25 bg-[#F5ECD6] shadow-lg snap-center"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="260px"
                  />
                </div>
                <div className="border-t border-stone-200 p-4">
                  <h3 className="font-semibold text-stone-900 text-sm">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-stone-600 text-xs leading-snug line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Desktop: grid */}
        <div className="mt-10 sm:mt-12 hidden sm:grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="overflow-hidden rounded-t-xl border border-[#C48376]/40 bg-[#F5ECD6]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="border-t border-stone-200 p-4">
                <h3 className="font-semibold text-stone-900 text-sm sm:text-base">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-stone-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-14 rounded-xl border border-[#C48376]/40 bg-[#F5ECD6] p-4 sm:p-8">
          <h3 className="font-bold text-stone-900 text-base sm:text-lg">
            Equipment
          </h3>
          <ul className="mt-2 sm:mt-3 flex flex-wrap gap-2 sm:gap-4">
            {equipment.map((item) => (
              <li key={item} className="flex items-center gap-2 text-stone-700 text-sm">
                <span className="text-[#C48376]">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
