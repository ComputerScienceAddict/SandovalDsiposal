'use client';

import { useState } from 'react';
import { BUSINESS } from '@/lib/constants';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    /* UPDATE: Connect form to your lead capture (email API, CRM, Zapier, etc.) */
    await new Promise((r) => setTimeout(r, 800));
    setStatus('sent');
  }

  return (
    <section id="contact" className="border-t border-[#C48376]/30 bg-[#F5ECD6] py-12 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-bold text-stone-900 text-2xl sm:text-3xl">
              Request a Free Estimate
            </h2>
            <p className="mt-3 text-stone-600 text-sm">
              Text photos of your items to {BUSINESS.phone} or complete the form below for a prompt quote.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href={`tel:${BUSINESS.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center gap-3 min-h-[50px] rounded-xl bg-[#C48376] px-5 py-3.5 text-white text-[15px] font-bold hover:bg-[#A96D62] active:scale-[0.98] transition-all shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span>Call or Text {BUSINESS.phone}</span>
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="inline-flex items-center justify-center gap-3 min-h-[50px] rounded-xl border-2 border-[#C48376]/50 bg-white px-5 py-3.5 text-stone-700 text-[15px] font-semibold hover:bg-[#C48376]/10 hover:border-[#C48376] active:scale-[0.98] transition-all"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#C48376]/10">
                  <svg className="h-5 w-5 text-[#C48376]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span>{BUSINESS.email}</span>
              </a>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border-2 border-stone-300 bg-stone-50 p-5 sm:p-6 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-stone-800 text-sm font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 block w-full min-h-[48px] rounded-lg border-2 border-stone-300 bg-white px-4 py-3 text-stone-900 text-base placeholder-stone-400 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-[#C48376]/20"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-stone-800 text-sm font-semibold">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-1 block w-full min-h-[48px] rounded-lg border-2 border-stone-300 bg-white px-4 py-3 text-stone-900 text-base placeholder-stone-400 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-[#C48376]/20"
                  placeholder="(555) 555-5555"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-stone-800 text-sm font-semibold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full min-h-[48px] rounded-lg border-2 border-stone-300 bg-white px-4 py-3 text-stone-900 text-base placeholder-stone-400 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-[#C48376]/20"
                placeholder="john@email.com"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="service" className="block text-stone-800 text-sm font-semibold">
                Service Type
              </label>
              <select
                id="service"
                name="service"
                className="mt-1 block w-full min-h-[48px] rounded-lg border-2 border-stone-300 bg-white px-4 py-3 text-stone-900 text-base focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-[#C48376]/20"
              >
                <option value="">Select a service</option>
                <option value="junk-removal">Junk Removal</option>
                <option value="furniture">Furniture</option>
                <option value="appliance">Appliance</option>
                <option value="yard-debris">Yard Debris</option>
                <option value="garage">Garage Cleanout</option>
                <option value="property">Property Cleanout</option>
                <option value="construction">Construction Debris</option>
                <option value="general">General Hauling</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="block text-stone-800 text-sm font-semibold">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full min-h-[120px] rounded-lg border-2 border-stone-300 bg-white px-4 py-3 text-stone-900 text-base placeholder-stone-400 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-[#C48376]/20 resize-none"
                placeholder="Please describe what needs to be removed and include your address"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 w-full min-h-[52px] rounded-full bg-stone-900 px-4 py-3 text-white font-bold hover:bg-stone-800 active:scale-[0.98] disabled:opacity-70 transition-all"
            >
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && 'Thank you! We will contact you shortly.'}
              {status === 'idle' && 'Request Quote'}
              {status === 'error' && 'Please try again'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
