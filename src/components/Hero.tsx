'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { HexLines, HexLine2 } from './Decorative';

export function Hero() {
  // Pointer-driven parallax for the decorative hex line-art.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const decorX = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const decorY = useTransform(sy, [-0.5, 0.5], [-12, 12]);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="home"
      onMouseMove={onMove}
      className="relative overflow-hidden bg-white min-h-[520px] md:min-h-[780px]"
    >
      {/* Decorative hex line-art with parallax (desktop only).
          Rendered FIRST so the teal band paints on top, hiding the right half of hex #1.
          Position: left = calc(40% - 258px) puts the first hex's centre exactly on the
          teal band's left edge (40%), giving the half-in / half-out effect. */}
      <motion.div
        aria-hidden="true"
        style={{ x: decorX, y: decorY, left: 'calc(40% - 258px)' }}
        className="pointer-events-none absolute top-10 hidden h-[620px] w-[620px] opacity-60 md:block"
      >
        <HexLines style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* Deep teal vertical band — starts at 40%, 30vw wide, renders after hex so it covers the right half */}
      <div className="absolute inset-y-0 left-[40%] hidden w-[30vw] bg-[var(--bq-teal-800)] md:block" />

      {/* Hex 2 — right side of the screen, partially off-edge, behind the building. */}
      <motion.div
        aria-hidden="true"
        style={{ x: decorX, y: decorY }}
        className="pointer-events-none absolute right-[-5%] top-[20%] hidden h-[400px] w-[400px] opacity-60 z-[3] md:block"
      >
        <HexLine2 style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* Building render
          Mobile  : full-width teal wrapper so the background always matches
                    the image height exactly — no fixed-% overlap issues.
          Desktop : absolute box, right-[15%], 45vw wide. */}
      <div className="w-full bg-[var(--bq-teal-800)] md:contents">
        <div
          className="relative z-[4] mx-auto w-[82%] max-w-[480px] pt-6
                     md:absolute md:mx-0 md:max-w-none md:pt-0
                     md:top-0 md:right-[15%] md:h-[60vh] md:w-[45vw]"
        >
          <div className="flex items-center md:h-full">
            <Image
              src="/building-hero.png"
              alt="BUILTIQ 3D office building render"
              width={720}
              height={560}
              priority
              sizes="(max-width: 768px) 82vw, 45vw"
              className="w-full h-auto md:h-full md:w-full md:object-contain md:object-right"
            />
          </div>
        </div>
      </div>

      {/* Pale copy panel — overlaps the teal band on desktop */}

      {/* Background-only slab — spans the full original width (behind building + text panel).
          Hidden on mobile; the text panel provides the grey bg there. */}
      <div
        className="hidden md:block md:absolute md:left-[5%] md:top-[15vh] md:w-[80%] z-[2]"
        style={{ height: '40vh', backgroundColor: 'rgba(229, 236, 239, 0.7)' }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-[3] mx-4 mt-6 px-8 py-10
                   md:absolute md:left-[5%] md:top-[15vh] md:mx-0 md:mt-0 md:w-[38%] md:py-12 lg:px-12"
        style={{
          height: '40vh',
          // No background here — the slab behind provides the shared grey background.
          // This prevents double-stacking opacity on the left side.
        }}
      >
        <h1
          className="m-0 font-bold uppercase leading-[0.95] tracking-[-0.025em] text-black "
          style={{ fontSize: 'clamp(44px, 6vw, 72px)' }}
        >
          BUILTIQ
        </h1>
        <div className="mt-6 bq-eyebrow">Technology &amp; Innovation</div>
        <p className="mt-5 bq-body max-w-md">
          that connects to the building&rsquo;s existing systems, turning their data into
          clear answers in real time: what&rsquo;s happening, where the problem is, where
          energy is leaking.
        </p>
      </motion.div>
    </section>
  );
}
