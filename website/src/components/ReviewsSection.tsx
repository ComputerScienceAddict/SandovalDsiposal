'use client';

import Image from 'next/image';
import { BUSINESS } from '@/lib/constants';
import Marquee from './Marquee';

const reviews = [
  {
    name: 'Hector S.',
    location: 'Pasadena, CA',
    date: 'Feb 2026',
    text: "I had a great experience with Sandoval Disposal!! Everything was so smooth. Very friendly, quick response, appointment was set, arrived early, and they removed all the unwanted items quickly and left my yard looking clean again. If you're looking for reliable commercial or residential junk disposal, I highly recommend them bc no job is too big or small!",
    stars: 5,
  },
  {
    name: 'Stacey H.',
    location: 'Diamond Bar, CA',
    date: 'Nov 2025',
    text: "This was my first time calling someone to come out and pick up items to dump. I wish I would have called sooner. The owner Anthony was easy to talk to when getting an estimate. We scheduled a day and time. They showed up early, went straight to work, cleaned up after themselves. I had these items taking space in my garage for 3 years! I have my Garage back!",
    stars: 5,
  },
  {
    name: 'Jackie P.',
    location: 'Santa Ana, CA',
    date: 'Nov 2025',
    text: "Used Sandoval commercial disposal for a garage clean out, quick reliable and easy process. Thanks for the quality service and timely response. Highly recommend especially in diamond bar community he is a go to. This is the second or third time I've used this company for junk removal. Fast, friendly, reliable service!",
    stars: 5,
  },
  {
    name: 'Riley L.',
    location: 'Diamond Bar, CA',
    date: 'Nov 2025',
    text: 'Had a lot of junk in both my garage and yard. I called Anthony and he came the next day. He is very professional and has great prices.',
    stars: 5,
  },
  {
    name: 'Ted L.',
    location: 'Diamond Bar, CA',
    date: 'Oct 2025',
    text: 'I needed to get rid of all of my junk before moving out of my house in Diamond Bar. Even though I called Anthony at the last minute, he was kind enough to come and get rid of a full truckload of junk. His prices were very reasonable. I would not hesitate to use Sandoval Commercial Disposal again.',
    stars: 5,
  },
  {
    name: 'Violet R.',
    location: 'San Francisco, CA',
    date: 'Jan 2025',
    text: "I needed items removed from my home and I called Anthony and got an honest and reasonable quote that really worked for me. His team did a great job with my request. They were on time and didn't waste any time with the removal. Everything turned out better than expected.",
    stars: 5,
  },
  {
    name: 'Michele C.',
    location: 'Diamond Bar, CA',
    date: 'Nov 2025',
    text: 'I was referred by a Family Member, they provided great service and very friendly staff. They did an amazing job of removing what I had requested. I will surely be referring them to anyone in need of their services.',
    stars: 5,
  },
  {
    name: 'Veronica G.',
    location: 'Corona, CA',
    date: 'Jun 2024',
    text: 'Outstanding, they came on time, did not waste no time got the job DONE. Truly the best company I had this far. GREAT JOB guys!',
    stars: 5,
  },
];

/* Yelp-style red stars */
const YELP_STAR = '#D32323';

function YelpLogo({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <Image
      src="/yelp-logo.png"
      alt="Yelp"
      width={24}
      height={24}
      className={`shrink-0 object-contain ${className}`}
    />
  );
}

function StarIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 fill-current" style={{ color: YELP_STAR }} viewBox="0 0 20 20" aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function getInitials(name: string) {
  return name
    .replace(/\s+\w+\.?$/, '') // drop "S." suffix
    .split(/\s+/)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function ReviewCard({
  name,
  location,
  date,
  text,
  stars,
}: {
  name: string;
  location: string;
  date: string;
  text: string;
  stars: number;
}) {
  return (
    <figure className="relative flex h-full w-72 shrink-0 cursor-default flex-col overflow-hidden rounded-lg border border-stone-200 bg-white p-4 shadow-sm hover:shadow transition-shadow">
      {/* Yelp-style header: avatar + name/location + stars/date */}
      <div className="flex gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-200 text-stone-600 text-xs font-semibold"
          aria-hidden
        >
          {getInitials(name)}
        </div>
        <div className="min-w-0 flex-1">
          <figcaption className="font-bold text-stone-900 text-sm truncate">{name}</figcaption>
          <p className="text-stone-500 text-xs">{location}</p>
          <div className="mt-1.5 flex items-center gap-2">
            <div className="flex gap-0.5" aria-label={`${stars} out of 5 stars`}>
              {[...Array(stars)].map((_, j) => (
                <StarIcon key={j} />
              ))}
            </div>
            <span className="text-stone-400 text-xs">&bull;</span>
            <span className="text-stone-500 text-xs">{date}</span>
          </div>
        </div>
      </div>
      <blockquote className="mt-3 flex-1 text-stone-600 text-sm leading-relaxed line-clamp-4">
        {text}
      </blockquote>
      <a
        href={BUSINESS.yelp}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold hover:underline"
        style={{ color: YELP_STAR }}
      >
        Read more on Yelp
        <YelpLogo className="h-3.5 w-3.5" />
      </a>
    </figure>
  );
}

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

export default function ReviewsSection() {
  return (
    <section id="reviews" className="border-t border-[#C48376]/30 bg-[#E8DCC4]/50 py-10 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h2 className="font-bold text-stone-900 text-xl sm:text-3xl leading-tight">
              Customer Reviews
            </h2>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <YelpLogo className="h-6 w-6 shrink-0" />
                <div className="flex gap-0.5" aria-hidden>
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="h-5 w-5 fill-current" style={{ color: YELP_STAR }} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-semibold text-stone-900 text-base">
                  {BUSINESS.yelpRating} ({BUSINESS.yelpReviewCount} reviews)
                </span>
              </a>
            </div>
          </div>
          <a
            href={BUSINESS.yelp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
            style={{ color: YELP_STAR }}
          >
            See all reviews on Yelp
            <YelpLogo className="h-5 w-5 shrink-0" />
          </a>
        </div>

        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 flex w-full flex-col overflow-hidden">
          <Marquee pauseOnHover duration="35s" className="w-full [--gap:0.75rem]">
            {firstRow.map((review, i) => (
              <ReviewCard key={`${review.name}-${i}`} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover duration="35s" className="w-full [--gap:0.75rem] mt-2">
            {secondRow.map((review, i) => (
              <ReviewCard key={`${review.name}-${i}`} {...review} />
            ))}
          </Marquee>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#E8DCC4]/80 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#E8DCC4]/80 to-transparent"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
