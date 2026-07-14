'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { Reveal } from './Reveal';

export function ContactBand() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function joinWaitlist(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const form = new FormData(event.currentTarget);
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        website: form.get('website'),
      }),
    }).catch(() => null);

    if (!response?.ok) {
      setStatus('error');
      return;
    }

    setEmail('');
    setStatus('success');
  }

  return (
    <section id="contact" className="bg-[var(--bq-teal-800)] px-6 py-16 text-white md:px-0">
      <Reveal>
        <div id="waitlist" className="max-w-2xl scroll-mt-32 md:ml-[33%]">
          <h2 className="m-0 text-[22px] font-bold uppercase tracking-[0.14em] text-white">
            Join the waitlist
          </h2>
          <p className="mb-7 mt-4 max-w-xl text-lg leading-[1.5] text-white/85">
            Get early access to BUILTIQ and updates on our first building pilots.
          </p>

          <form onSubmit={joinWaitlist} className="max-w-xl" aria-label="Join the BUILTIQ waitlist">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="waitlist-email" className="sr-only">
                Work email
              </label>
              <input
                id="waitlist-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={320}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Work email"
                className="min-w-0 flex-1 rounded-full border border-white/30 bg-white px-6 py-4 text-base text-black outline-none placeholder:text-black/45 focus:border-white focus:ring-2 focus:ring-white/35"
              />
              <input
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-px w-px opacity-0"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="cursor-pointer rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[var(--bq-teal-800)] transition-opacity duration-200 hover:opacity-85 disabled:cursor-wait disabled:opacity-60"
              >
                {status === 'submitting' ? 'Joining…' : 'Join waitlist'}
              </button>
            </div>
            <p className="mt-3 min-h-6 text-sm text-white/80" aria-live="polite">
              {status === 'success' && 'You’re on the list. We’ll be in touch.'}
              {status === 'error' && 'Something went wrong. Please try again or email info@builtiq.org.'}
              {status === 'idle' && 'No spam. Just relevant product and pilot updates.'}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-white/60">
              By joining, you agree to receive these updates. You can unsubscribe at any time.{' '}
              <a href="/privacy" className="underline underline-offset-2 hover:text-white">
                Privacy Policy
              </a>
            </p>
          </form>

          <p className="mt-6 text-sm text-white/70">
            Prefer email?{' '}
            <a
              href="mailto:info@builtiq.org"
              className="border-b border-white/40 pb-0.5 font-bold text-white transition-opacity duration-200 hover:opacity-70"
            >
              info@builtiq.org
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
