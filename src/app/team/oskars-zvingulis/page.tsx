import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Oskars Zvingulis — CEO & Co-founder, Builtiq',
  description:
    'Oskars Zvingulis is CEO & Co-founder of Builtiq, building an intelligence layer for building operations and fragmented building data.',
  alternates: {
    canonical: '/team/oskars-zvingulis',
  },
  openGraph: {
    title: 'Oskars Zvingulis — CEO & Co-founder, Builtiq',
    description:
      'Oskars Zvingulis leads product, engineering, and customer discovery at Builtiq.',
    url: '/team/oskars-zvingulis',
    type: 'profile',
    images: [
      {
        url: '/portrait-oskars.png',
        width: 900,
        height: 900,
        alt: 'Oskars Zvingulis',
      },
    ],
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Oskars Zvingulis',
  jobTitle: 'CEO & Co-founder',
  description:
    'Oskars Zvingulis is CEO & Co-founder of Builtiq, building an intelligence layer for building operations and fragmented building data.',
  image: 'https://www.builtiq.org/portrait-oskars.png',
  url: 'https://www.builtiq.org/team/oskars-zvingulis',
  worksFor: {
    '@type': 'Organization',
    name: 'BUILTIQ',
    url: 'https://www.builtiq.org/',
  },
  sameAs: ['https://lv.linkedin.com/in/oskars-zvingulis-8157509b', 'https://github.com/OskarsZvingulis'],
};

export default function OskarsZvingulisPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Header />

      <section className="px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[320px_1fr] md:items-center">
          <div className="relative mx-auto h-[280px] w-[280px] overflow-hidden rounded-full bg-[var(--bq-bg-soft)] md:h-[320px] md:w-[320px]">
            <Image
              src="/portrait-oskars.png"
              alt="Oskars Zvingulis"
              fill
              sizes="(min-width: 768px) 320px, 280px"
              className="object-contain"
              priority
            />
          </div>

          <div>
            <p className="bq-eyebrow mb-4 text-[var(--bq-blue-600)]">BUILTIQ founder profile</p>
            <h1 className="bq-h1 mb-5">Oskars Zvingulis</h1>
            <p className="mb-6 text-lg font-semibold text-[var(--bq-blue-600)]">
              CEO & Co-founder at Builtiq
            </p>
            <p className="bq-lead mb-5">
              Oskars Zvingulis is CEO & Co-founder of Builtiq. He leads product,
              engineering, and customer discovery, building an intelligence layer that connects
              fragmented building systems and turns operational data into clear answers.
            </p>
            <p className="bq-body mb-8">
              His work combines full-stack engineering, AI workflows, and practical building
              operations: the messy data, integrations, alerts, approvals, and system context that
              determine whether software is useful outside a demo.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-full bg-[var(--bq-teal-800)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[var(--bq-teal-700)]"
              >
                Back to BUILTIQ
              </Link>
              <a
                href="https://github.com/OskarsZvingulis"
                className="rounded-full border border-[var(--bq-blue-400)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--bq-blue-600)] transition-colors hover:border-[var(--bq-blue-600)]"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
