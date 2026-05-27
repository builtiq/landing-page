'use client';

import Image from 'next/image';
import { Chevron } from './Decorative';
import { Reveal } from './Reveal';

const FOUNDERS = [
  {
    name: 'Līva',
    portrait: '/portrait-liva.png',
    desc: ['Design', 'strategy', 'and user', 'experience'],
  },
  {
    name: 'Oskars',
    portrait: '/portrait-oskars.png',
    desc: ['Technical &', 'code ·', 'mechanic', 'turned', 'developer'],
  },
  {
    name: 'Jānis',
    portrait: '/portrait-janis.png',
    desc: ['Engineering &', 'code ·', 'mechatronics', 'engineer'],
  },
];

export function FoundersGrid() {
  return (
    <section id="about" className="relative overflow-hidden bg-white px-6 py-24 md:px-20 md:pb-32">
      <Chevron
        fill="var(--bq-bg-soft)"
        className="absolute -left-16 top-16 hidden h-[480px] w-[200px] opacity-60 md:block"
      />
      <Chevron
        fill="var(--bq-bg-soft)"
        className="absolute -right-16 top-16 hidden h-[480px] w-[200px] opacity-60 md:block"
      />

      <div className="relative z-[2] mx-auto flex max-w-3xl flex-col items-center justify-center gap-14 sm:flex-row sm:items-start sm:gap-16">
        {FOUNDERS.map((f, i) => (
          <Reveal key={f.name} delay={i * 0.1}>
            <div className="flex w-[180px] flex-col items-start gap-1.5">
              <div className="group relative mb-4 h-[180px] w-[180px]">
                <div className="absolute inset-0 rounded-full bg-[var(--bq-navy-900)]" />
                <Image
                  src={f.portrait}
                  alt={f.name}
                  width={225}
                  height={225}
                  sizes="225px"
                  className="absolute bottom-0 left-[-12%] w-[125%] max-w-none object-contain transition-transform duration-200 group-hover:-translate-y-1"
                />
              </div>
              <div className="bq-name">{f.name}</div>
              <div className="mb-3.5 text-sm font-medium text-[var(--bq-blue-600)]">Co-founder</div>
              <div className="text-xs font-semibold uppercase leading-[1.5] tracking-[0.12em] text-[var(--bq-blue-600)]">
                {f.desc.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
