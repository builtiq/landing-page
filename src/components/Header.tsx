'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About us', href: '#about' },
  { id: 'contact', label: 'Contact us', href: '#contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between px-6 py-5 md:px-12 md:py-6">
        <a href="#home" className="block leading-none" aria-label="BUILTIQ home">
          <Image
            src="/logo.png"
            alt="BUILTIQ"
            width={180}
            height={56}
            priority
            className="h-12 w-auto md:h-14"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-12 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={l.href}
              className={`bq-nav-link${l.id === 'home' ? ' is-active' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="cursor-pointer p-1 text-black md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col gap-5 border-t border-[var(--bq-line)] px-6 py-5 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`bq-nav-link${l.id === 'home' ? ' is-active' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
