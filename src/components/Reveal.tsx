'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/* Restrained scroll-reveal: a short fade + 16px rise, brand easing,
   plays once. prefers-reduced-motion is handled globally in CSS. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
