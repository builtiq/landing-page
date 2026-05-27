import { Reveal } from './Reveal';

export function ContactBand() {
  return (
    <section id="contact" className="bg-[var(--bq-teal-800)] px-6 py-16 text-white md:px-0">
      <Reveal>
        <div className="max-w-xl md:ml-[33%]">
          <h2 className="m-0 text-[22px] font-bold uppercase tracking-[0.14em] text-white">
            Contact us
          </h2>
          <p className="mb-7 mt-4 text-lg leading-[1.5] text-white/85">
            and turn your building data
            <br />
            in understandable answers
          </p>
          <a
            href="mailto:info@builtiq.org"
            className="border-b border-white/40 pb-0.5 text-lg font-bold tracking-[0.04em] text-white transition-opacity duration-200 hover:opacity-70"
          >
            info@builtiq.org
          </a>
        </div>
      </Reveal>
    </section>
  );
}
