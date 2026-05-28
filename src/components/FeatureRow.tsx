'use client';

import Image from 'next/image';
import { SoftBlock } from './Decorative';
import { Reveal } from './Reveal';

const FEATURES = [
  {
    icon: '/icon-live-monitoring.png',
    title: ['Live', 'Monitoring'],
    sub: ['all systems in one place'],
  },
  {
    icon: '/icon-easy-understand.png',
    title: ['Easy to', 'Understand'],
    sub: ['without technical knowledge'],
  },
  {
    icon: '/icon-anomaly-detection.png',
    title: ['Anomaly', 'Detection'],
    sub: ['problems are spotted early', 'before they become costly'],
  },
];

export function FeatureRow() {
  return (
    <section className="relative bg-[var(--bq-bg-soft)] py-16 md:h-[30vw] md:py-0 md:overflow-visible">
      {/* Right-side pale panel — Anomaly Detection sits on this */}
      <SoftBlock
        fill="var(--bq-panel)"
        className="absolute right-0 top-0 hidden h-full w-[30vw] md:block"
      />

      {/* ─── PERSON IMAGE ──────────────────────────────────────────────────────
          Fine-tune knobs (md: = desktop):
            md:left-[3vw]        — horizontal position from left edge
            md:bottom-[-18vh]    — how far the image bleeds into ContactBand below
                                   (increase the negative value for more bleed)
            md:w-[26vw]          — width / scale
            md:max-w-[380px]     — hard cap on ultra-wide screens
          ────────────────────────────────────────────────────────────────── */}
      <div className="hidden md:absolute md:left-[3vw] md:bottom-[-13vh] md:top-auto md:mx-0 md:mb-0 md:w-[26vw] md:max-w-[380px] md:block z-[10]">
        <Image
          src="/person-tablet.svg"
          alt="Operator reviewing building systems on a tablet"
          width={340}
          height={420}
          sizes="(max-width: 768px) 260px, 26vw"
          className="h-auto w-full"
        />
      </div>

      {/* Feature grid — left offset uses vw so it scales with screen width */}
      <div className="relative z-[3] mx-auto grid max-w-md grid-cols-1 gap-10 px-6
                      sm:max-w-3xl sm:grid-cols-3
                      md:absolute md:inset-0 md:max-w-none md:grid-cols-3 md:gap-[2vw]
                      md:pl-[32vw] md:pr-[3vw] md:items-center md:content-center">
        {FEATURES.map((f, i) => {
          const isOnPanel = i === 2;
          return (
            <Reveal key={f.title.join(' ')} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center gap-4
                              md:items-start md:text-left md:gap-[1.5vw]">
                {/* Fixed-height icon box — keeps titles aligned across all 3 cards */}
                <div className="flex h-[5vw] max-h-[72px] min-h-[48px] items-center">
                  <Image
                    src={f.icon}
                    alt=""
                    width={72}
                    height={72}
                    className={`h-full w-auto object-contain ${isOnPanel ? 'opacity-60' : ''}`}
                  />
                </div>
                <h3 className={`m-0 text-[clamp(13px,1.2vw,18px)] font-bold uppercase leading-[1.15] tracking-[0.08em]
                               ${isOnPanel ? 'text-[var(--bq-teal-800)]' : 'text-[var(--bq-teal-900)]'}`}>
                  {f.title.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </h3>
                <p className={`m-0 text-[clamp(11px,0.95vw,14px)] leading-[1.5]
                               ${isOnPanel ? 'text-[var(--bq-ink-500)]' : 'text-[var(--bq-ink-700)]'}`}>
                  {f.sub.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
