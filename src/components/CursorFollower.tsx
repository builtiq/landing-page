'use client';

import { useState, useEffect, useRef } from 'react';

/* Smooth cursor follower (adapted from 21st.dev "Cursor Follower").
   A small teal dot tracks the pointer; a steel-blue ring trails behind
   with slower lerp and grows when hovering interactive elements.
   Sits above the native cursor as an accent. Disabled for coarse
   pointers (touch) and users who prefer reduced motion. */

const DOT_SMOOTHNESS = 0.2;
const RING_SMOOTHNESS = 0.1;

export function CursorFollower() {
  const mouse = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pos, setPos] = useState({ dot: { x: 0, y: 0 }, ring: { x: 0, y: 0 } });

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduced) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setHovering(true);
    const onExit = () => setHovering(false);

    window.addEventListener('mousemove', onMove);
    document.body.addEventListener('mouseleave', onLeave);

    const interactive = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onExit);
    });

    const lerp = (a: number, b: number, f: number) => a + (b - a) * f;
    let raf = 0;
    const animate = () => {
      dot.current.x = lerp(dot.current.x, mouse.current.x, DOT_SMOOTHNESS);
      dot.current.y = lerp(dot.current.y, mouse.current.y, DOT_SMOOTHNESS);
      ring.current.x = lerp(ring.current.x, mouse.current.x, RING_SMOOTHNESS);
      ring.current.y = lerp(ring.current.y, mouse.current.y, RING_SMOOTHNESS);
      setPos({ dot: { ...dot.current }, ring: { ...ring.current } });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.body.removeEventListener('mouseleave', onLeave);
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onExit);
      });
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60]"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease' }}
      aria-hidden="true"
    >
      <div
        className="absolute rounded-full"
        style={{
          width: 7,
          height: 7,
          background: 'var(--bq-teal-800)',
          transform: 'translate(-50%, -50%)',
          left: pos.dot.x,
          top: pos.dot.y,
        }}
      />
      <div
        className="absolute rounded-full border"
        style={{
          width: hovering ? 44 : 26,
          height: hovering ? 44 : 26,
          borderColor: 'var(--bq-blue-500)',
          transform: 'translate(-50%, -50%)',
          left: pos.ring.x,
          top: pos.ring.y,
          transition: 'width 0.3s, height 0.3s',
        }}
      />
    </div>
  );
}
