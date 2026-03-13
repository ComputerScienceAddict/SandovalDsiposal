'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'sandoval-ping-seen';

export default function WelcomePing() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (seen) return;
    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem(STORAGE_KEY, '1');
    }, 800);
    return () => clearTimeout(timer);
  }, [mounted]);

  const openChat = () => {
    window.dispatchEvent(new CustomEvent('open-chat'));
    setVisible(false);
  };

  const dismiss = () => setVisible(false);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-stone-900/20 pt-24 px-4 pb-8 backdrop-blur-[2px]"
      onClick={dismiss}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="pointer-events-auto w-full max-w-sm rounded-2xl border-2 border-[#C48376] bg-white p-5 shadow-2xl animate-ping-in mx-4"
        role="alert"
      >
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C48376] text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-bold text-stone-900 text-lg">Have Questions?</p>
            <p className="mt-1 text-stone-600 text-sm">Learn about our pricing, scheduling, and services.</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={openChat}
                className="min-h-[48px] flex items-center justify-center rounded-xl bg-[#C48376] px-4 py-3 text-white text-sm font-bold hover:bg-[#A96D62] active:scale-[0.98] transition-all"
              >
                View FAQs
              </button>
              <button
                type="button"
                onClick={dismiss}
                className="min-h-[48px] flex items-center justify-center rounded-xl border border-stone-300 px-4 py-3 text-stone-600 text-sm font-medium hover:bg-stone-100 active:scale-[0.98] transition-all"
              >
                Close
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={dismiss}
            className="shrink-0 rounded p-1 text-stone-400 hover:text-stone-600"
            aria-label="Dismiss"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
