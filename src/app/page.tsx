import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FeatureRow } from '@/components/FeatureRow';
import { ContactBand } from '@/components/ContactBand';
import { FoundersGrid } from '@/components/FoundersGrid';
import { Closing } from '@/components/Closing';
import { Footer } from '@/components/Footer';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BUILTIQ',
  alternateName: 'Builtiq',
  url: 'https://www.builtiq.org/',
  logo: 'https://www.builtiq.org/logo-large.png',
  description:
    "BUILTIQ connects to your building's existing systems and turns their data into clear answers in real time.",
  founder: [
    {
      '@type': 'Person',
      name: 'Oskars Zvingulis',
      jobTitle: 'CEO & Co-founder',
      url: 'https://www.builtiq.org/team/oskars-zvingulis',
      sameAs: ['https://lv.linkedin.com/in/oskars-zvingulis-8157509b', 'https://github.com/OskarsZvingulis'],
    },
  ],
  sameAs: ['https://github.com/builtiq'],
};

export default function Home() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Header />
      <Hero />
      <FeatureRow />
      <ContactBand />
      <FoundersGrid />
      <Closing />
      <Footer />
    </main>
  );
}
