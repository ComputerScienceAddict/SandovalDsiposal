import Image from 'next/image';

const services = [
  {
    title: 'Junk Removal',
    description: 'Complete junk removal services for residential and commercial properties. Same-day service available.',
    image: '/junk-team.jpg',
  },
  {
    title: 'Light Demolition',
    description: 'Removal of construction debris including drywall, wood, pallets, and concrete.',
    image: '/junk-hero.jpg',
  },
  {
    title: 'Patio, Gazebo & Outdoor Removal',
    description: 'Professional demolition and removal of patios, gazebos, fencing, and yard structures.',
    image: '/junk-service-2.jpg',
  },
  {
    title: 'Spa & Hot Tub Removal',
    description: 'Safe removal and disposal of above-ground spas and hot tubs.',
    image: '/junk-service-3.jpg',
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
  {
    title: 'Garage & Estate Clean Outs',
    description: 'Comprehensive clearing of garages, storage units, and estate properties.',
    image: '/junk-cleanout.jpg',
  },
];

const equipment = [
  '12 Yard Dumpster Trailer',
  '14 Yard Dump Trailer',
  '17 Foot Box Truck for Moving & Clean Outs',
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#E8DCC4]/60 py-12 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold text-stone-900 text-2xl sm:text-3xl">
          Our Services
        </h2>
        <p className="mt-2 text-stone-600 text-sm">
          Comprehensive removal services for residential and commercial properties throughout Southern California.
        </p>
        {/* Mobile: horizontal scroll with snap */}
        <div className="mt-8 sm:hidden -mx-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth">
          <div className="flex gap-4 pl-4 pr-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="w-[280px] shrink-0 overflow-hidden rounded-2xl border-2 border-[#C48376]/30 bg-[#F5ECD6] shadow-md snap-center"
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
