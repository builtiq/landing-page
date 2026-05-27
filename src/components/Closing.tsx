'use client';

import Image from 'next/image';
import { Reveal } from './Reveal';

export function Closing() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-32 pt-8 md:px-20 md:pb-28">
      {/* Logo — bottom-left corner, larger */}
      <a href="#home" className="absolute bottom-8 left-8 block leading-none md:bottom-10 md:left-12" aria-label="BUILTIQ home">
        <Image src="/logo.png" alt="BUILTIQ" width={220} height={70} className="h-16 w-auto md:h-20" />
      </a>

      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 md:flex-row md:items-end">
        <Reveal className="md:text-right md:ml-auto">
          <h2 className="bq-display max-w-xl font-bold" style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}>
            Intelligence layer for
            <br />
            your building
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
