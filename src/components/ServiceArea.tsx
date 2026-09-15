import { BUSINESS } from '@/lib/constants';

export default function ServiceArea() {
  return (
    <section className="border-t border-[#C48376]/30 bg-[#C48376]/15 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-stone-800 text-base">
          Proudly serving <span className="font-semibold text-stone-900">{BUSINESS.serviceArea}</span>
        </p>
      </div>
    </section>
  );
}
