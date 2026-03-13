'use client';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  duration?: string;
}

export default function Marquee({
  children,
  className = '',
  reverse = false,
  pauseOnHover = false,
  duration = '40s',
}: MarqueeProps) {
  return (
    <div
      className={`group flex w-full overflow-hidden [--duration:${duration}] [--gap:1rem] ${className}`}
      style={{ gap: 'var(--gap)' }}
    >
      {[1, 2].map((i) => (
        <div
          key={i}
          className={`flex shrink-0 animate-marquee gap-[var(--gap)] ${
            reverse ? '[animation-direction:reverse]' : ''
          } ${pauseOnHover ? 'marquee-pause-on-hover' : ''}`}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
