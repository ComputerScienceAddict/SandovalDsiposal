'use client';

import { useState, useRef, useEffect } from 'react';
import { BUSINESS } from '@/lib/constants';

const TIKTOK_VIDEOS = [
  '7616460319661034765',
  '7614292842235563278',
  '7610942166067580174',
  '7607213380394339597',
  '7606139503769685262',
  '7605288131247607054',
  '7602835646750723341',
  '7601689476766731534',
];

const CARD_WIDTH = 380;
const CARD_GAP = 24;

export default function TikTokSection() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const maxIndex = Math.max(0, TIKTOK_VIDEOS.length - perView);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const p = w >= 768 ? 2 : 1;
      setPerView(p);
      setIndex((i) => Math.min(i, Math.max(0, TIKTOK_VIDEOS.length - p)));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const card = cardRefs.current[index];
    if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [index]);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section
      id="tiktok"
      className="relative overflow-hidden scroll-mt-20 border-t-2 border-[#C48376]/40 bg-gradient-to-b from-[#F5ECD6] via-[#F0E6D0] to-[#F5ECD6] py-10 sm:py-16"
    >
      {/* Mobile: bold accent stripe */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#C48376] to-transparent sm:hidden" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h2 className="font-bold text-stone-900 text-2xl sm:text-3xl">
              Follow Us on TikTok
            </h2>
            <p className="mt-2 text-stone-600 text-sm">
              See our junk removal work in action — browse video by video
            </p>
          </div>
          <a
            href={BUSINESS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C48376] text-sm font-semibold hover:underline"
          >
            @sandoval.commeric
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="relative">
          {/* Navigation arrows - bigger on mobile */}
          <button
            type="button"
            onClick={goPrev}
            disabled={index === 0}
            aria-label="Previous video"
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 sm:left-0 sm:-translate-x-4 lg:left-4 flex h-14 w-14 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-xl ring-1 ring-stone-800/10 text-stone-700 hover:bg-stone-50 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all touch-manipulation"
          >
            <svg className="h-7 w-7 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={index >= maxIndex}
            aria-label="Next video"
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 sm:right-0 sm:translate-x-4 lg:right-4 flex h-14 w-14 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-xl ring-1 ring-stone-800/10 text-stone-700 hover:bg-stone-50 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all touch-manipulation"
          >
            <svg className="h-7 w-7 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Gallery carousel - full bleed on mobile with centered cards */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 touch-pan-x"
            style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex gap-4 sm:gap-6" style={{ width: 'max-content' }}>
              {TIKTOK_VIDEOS.map((videoId, i) => (
                <div
                  key={videoId}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  className="flex-shrink-0 w-[min(320px,calc(100vw-3rem))] sm:w-[380px] snap-center rounded-2xl overflow-hidden ring-1 ring-stone-800/5 shadow-lg sm:shadow-xl"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <iframe
                    src={`https://www.tiktok.com/player/v1/${videoId}?autoplay=0`}
                    width="100%"
                    height="575"
                    allowFullScreen
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    title={`TikTok video ${i + 1}`}
                    className="w-full bg-stone-100"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Counter & dots - bigger on mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6">
            <span className="text-stone-600 text-sm font-medium">
              {index + 1} of {TIKTOK_VIDEOS.length}
            </span>
            <div className="flex gap-2">
              {TIKTOK_VIDEOS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to video ${i + 1}`}
                  className={`rounded-full transition-all touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center sm:min-w-0 sm:min-h-0 sm:py-0 sm:px-0 ${
                    i === index
                      ? 'w-8 h-2.5 sm:w-6 sm:h-2 bg-[#C48376]'
                      : 'w-2.5 h-2.5 sm:w-2 sm:h-2 bg-stone-300 hover:bg-stone-400 active:bg-stone-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
