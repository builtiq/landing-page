export function Footer() {
  return (
    <footer
      className="px-6 py-5 text-center md:px-20"
      style={{
        background:
          'radial-gradient(120% 140% at 50% 0%, var(--bq-teal-800) 0%, var(--bq-teal-900) 100%)',
      }}
    >
      <p className="m-0 text-xs tracking-[0.08em] text-white/70">
        © 2026 BUILTIQ. All rights reserved.
      </p>
    </footer>
  );
}
