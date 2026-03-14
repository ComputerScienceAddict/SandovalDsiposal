import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyCallCTA from '@/components/StickyCallCTA';
import Image from 'next/image';
import Link from 'next/link';

// Exclude duplicate images (gallery-2, gallery-5, gallery-6 duplicate gallery-1)
const GALLERY_INDICES = [1, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34];

// Owner photo (replaced in About section by truck-trailer.png)
const EXTRA_IMAGES = [{ src: '/owner-truck.png', alt: 'Sandoval Commercial Disposal owner with truck and trailer' }];

export const metadata = {
  title: 'Gallery | Sandoval Commercial Disposal',
  description: 'View our junk removal, demolition, and clean-out projects across Southern California.',
};

export default function GalleryPage() {
  const galleryImages = GALLERY_INDICES.map((n, i) => ({
    src: `/gallery/gallery-${n}.png`,
    alt: `Sandoval Commercial Disposal project ${i + 1}`,
  }));
  const images = [...EXTRA_IMAGES, ...galleryImages];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F5ECD6] pb-24 sm:pb-0">
        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-14 lg:px-8 pb-[max(3rem,calc(2rem+env(safe-area-inset-bottom)))]">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Link
                href="/"
                className="text-sm font-medium text-stone-600 hover:text-stone-800 transition-colors"
              >
                ← Back to Home
              </Link>
              <h1 className="mt-2 text-2xl font-bold text-stone-900 sm:text-3xl">
                Our Work
              </h1>
              <p className="mt-1 text-stone-600 text-sm sm:text-base">
                Junk removal, demolition debris, and clean-outs across Southern California
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5 lg:gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-xl bg-stone-200 shadow-md ring-1 ring-stone-800/5 active:scale-[0.97] transition-transform duration-200"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105 group-active:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <StickyCallCTA />
      <Footer />
    </>
  );
}
