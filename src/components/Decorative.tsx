import type { CSSProperties } from 'react';

/* Line-art hexagon / chevron decorations — used at low opacity as
   background "wallpaper", never as content. Ported from the design
   system's Decorative.jsx (square-cornered, flat, brand steel-blue). */

export function HexLines({ style, className }: { style?: CSSProperties; className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      style={style}
      className={className}
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hex 1 — shifted up 70 units vs original so it sits higher in the hero */}
      <polygon points="100,80 250,10 400,80 400,250 250,320 100,250" stroke="#8FA9B8" strokeWidth="1.2" />
      <circle cx="100" cy="80" r="4" fill="#8FA9B8" />
      <circle cx="400" cy="250" r="4" fill="#8FA9B8" />
    </svg>
  );
}

/* Hex 2 — standalone so it can be placed in its own right-side wrapper in Hero.tsx.
   Coordinates are re-centred in a 330×330 viewBox (original points minus offset 270,215). */
export function HexLine2({ style, className }: { style?: CSSProperties; className?: string }) {
  return (
    <svg
      viewBox="0 0 330 330"
      style={style}
      className={className}
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="10,85 160,15 310,85 310,255 160,325 10,255" stroke="#8FA9B8" strokeWidth="1.2" />
      <circle cx="160" cy="15" r="4" fill="#8FA9B8" />
    </svg>
  );
}

/* The "roofline" chevron — a tall rectangle with a triangular peak on top. */
export function Chevron({
  fill = 'var(--bq-blue-500)',
  style,
  className,
}: {
  fill?: string;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        ...style,
        background: fill,
        clipPath: 'polygon(0 12%, 50% 0, 100% 12%, 100% 100%, 0 100%)',
      }}
    />
  );
}

/* A pale panel: rectangle body with a diagonal triangle cut at top-left,
   the angled edge has a slight curve. Uses SVG so the curve scales cleanly. */
export function SoftBlock({
  fill = 'var(--bq-blue-400)',
  style,
  className,
}: {
  fill?: string;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* M = top of diagonal, Q = slight curve on the angled edge, rest is rectangle */}
      <path d="M 32,0 L 100,0 L 100,100 L 0,100 L 0,42 Q 12,18 32,0 Z" fill={fill} />
    </svg>
  );
}

/* Arrow-pointing-down (used near the person + tablet). */
export function DownArrow({
  fill = 'var(--bq-blue-500)',
  style,
  className,
}: {
  fill?: string;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        ...style,
        background: fill,
        clipPath: 'polygon(0 0, 100% 0, 100% 60%, 50% 100%, 0 60%)',
      }}
    />
  );
}
