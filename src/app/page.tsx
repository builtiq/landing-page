import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FeatureRow } from '@/components/FeatureRow';
import { ContactBand } from '@/components/ContactBand';
import { FoundersGrid } from '@/components/FoundersGrid';
import { Closing } from '@/components/Closing';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-white">
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
