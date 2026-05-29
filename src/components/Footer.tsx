import Link from 'next/link';

export function Footer() {
  return (
    <footer
      className="px-6 py-5 md:px-20"
      style={{
        background:
          'radial-gradient(120% 140% at 50% 0%, var(--bq-teal-800) 0%, var(--bq-teal-900) 100%)',
      }}
    >
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
        <p className="m-0 text-xs tracking-[0.08em] text-white/70">
          © 2026 BUILTIQ. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs tracking-[0.08em] text-white/70">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span className="text-white/30">·</span>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
