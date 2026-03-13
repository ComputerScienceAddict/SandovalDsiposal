'use client';

import { useEffect, useRef, useState } from 'react';

const fullText = `We handle the heavy lifting so you can focus on what matters. Contact us today to schedule your pickup.`;

export default function AnimatedText() {
  const [displayed, setDisplayed] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    if (displayed >= fullText.length) return;
    const timeout = setTimeout(() => {
      setDisplayed((d) => Math.min(d + 1, fullText.length));
    }, 25);
    return () => clearTimeout(timeout);
  }, [started, displayed]);

  return (
    <p ref={ref} className="mt-6 max-w-lg text-stone-700 leading-relaxed">
      <span>{fullText.slice(0, displayed)}</span>
      {displayed < fullText.length && (
        <span className="inline-block w-0.5 h-4 bg-[#C48376] animate-cursor-blink ml-0.5 align-middle" />
      )}
    </p>
  );
}
