'use client';

import { useState, useRef, useEffect } from 'react';
import { BUSINESS } from '@/lib/constants';

const Q_AND_A: { q: string; a: string }[] = [
  {
    q: 'How do I schedule a pickup?',
    a: 'You can text photos to ' + BUSINESS.phone + ' for a free estimate, then schedule your pickup at a convenient time. You may also call or complete our online form. Same-day service is often available.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Call or text ' + BUSINESS.phone + ' with details or photos of the items you need removed. We provide upfront pricing with no hidden fees.',
  },
  {
    q: 'What services do you offer?',
    a: 'We offer junk removal, property cleanouts, light demolition, patio and gazebo removal, spa and hot tub removal, heavy item hauling (pianos, fitness equipment, office furniture), furniture and appliance removal, yard debris, and construction debris removal. We operate dumpster trailers and a 17-foot box truck.',
  },
  {
    q: 'What does junk removal cost?',
    a: 'Pricing depends on the volume and type of items. We provide a quote before beginning any work so you know exactly what to expect. Contact us at ' + BUSINESS.phone + ' for a free estimate.',
  },
  {
    q: 'Do you handle remodeling cleanup?',
    a: 'Yes, we specialize in remodeling and renovation cleanup, including light demolition, patio demolition, and debris removal. Our team handles everything efficiently.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve ' + BUSINESS.serviceArea + '. Contact us at ' + BUSINESS.phone + ' to confirm service availability for your location.',
  },
];

const PRESET_QUESTIONS = Q_AND_A.map((x) => x.q);

type Message = { role: 'user' | 'assistant'; text: string };

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-chat', handler);
    return () => window.removeEventListener('open-chat', handler);
  }, []);

  const addExchange = (question: string) => {
    const answer = Q_AND_A.find((x) => x.q === question)?.a ?? `Please call us at ${BUSINESS.phone} and we will be happy to assist you.`;
    setMessages((m) => [...m, { role: 'user', text: question }, { role: 'assistant', text: answer }]);
  };

  return (
    <>
      <div
        className={`fixed z-50 flex flex-col rounded-2xl border border-[#C48376]/30 bg-[#F5ECD6] shadow-xl transition-all duration-300 ${
          open
            ? 'left-4 right-4 top-20 bottom-28 sm:left-auto sm:right-6 sm:top-auto sm:bottom-20 sm:w-[400px] sm:h-[440px]'
            : 'bottom-24 right-4 sm:bottom-6 sm:right-6 h-0 w-0 overflow-hidden opacity-0'
        }`}
      >
        <div className="flex shrink-0 items-center justify-between rounded-t-2xl border-b border-[#C48376]/25 bg-[#E8DCC4] px-5 py-3.5">
          <h3 className="font-bold text-stone-900 text-sm">
            {BUSINESS.name}
          </h3>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg p-1.5 text-stone-500 hover:bg-[#C48376]/20 hover:text-stone-800 transition-colors"
            aria-label="Close chat"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div
          ref={scrollRef}
          className="min-h-0 flex-1 overflow-y-auto p-5 space-y-5"
        >
          {messages.length === 0 && (
            <div className="space-y-4">
              <p className="text-stone-600 text-sm leading-relaxed">
                Welcome! Select a question below, or call us for immediate assistance.
              </p>
              <div className="space-y-2">
                <p className="text-stone-500 text-xs font-semibold uppercase tracking-wide">Frequently Asked</p>
                <div className="flex flex-wrap gap-2">
                  {PRESET_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => addExchange(q)}
                      className="rounded-xl border border-[#C48376]/50 bg-white px-4 py-3 min-h-[48px] flex items-center text-left text-stone-700 text-sm leading-snug shadow-sm hover:bg-[#C48376]/15 hover:border-[#C48376] active:scale-[0.99] transition-all"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-[#C48376] text-white shadow-md'
                    : 'bg-white border border-stone-200/80 text-stone-800 shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {messages.length > 0 && (
            <div className="pt-4 border-t border-stone-200/80">
              <p className="text-stone-500 text-xs font-semibold uppercase tracking-wide mb-2">Additional Questions</p>
              <div className="flex flex-wrap gap-2">
                {PRESET_QUESTIONS.slice(0, 4).map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => addExchange(q)}
                    className="rounded-xl border border-[#C48376]/40 bg-white px-3 py-2.5 min-h-[40px] flex items-center text-stone-600 text-xs leading-snug hover:bg-[#C48376]/10 active:scale-[0.99] transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="shrink-0 border-t border-[#C48376]/25 bg-[#E8DCC4]/50 px-5 py-3 rounded-b-2xl">
          <a
            href={`tel:${BUSINESS.phone.replace(/\D/g, '')}`}
            className="flex items-center justify-center gap-2 min-h-[48px] rounded-xl bg-[#C48376] px-4 py-3 text-white text-sm font-bold hover:bg-[#A96D62] active:scale-[0.98] transition-all"
          >
            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {BUSINESS.phone}
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-24 right-4 sm:bottom-6 sm:right-6 z-50 flex h-14 w-14 min-h-[56px] min-w-[56px] items-center justify-center rounded-full bg-[#C48376] text-white shadow-lg hover:bg-[#A96D62] active:scale-95 transition-all"
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </>
  );
}
