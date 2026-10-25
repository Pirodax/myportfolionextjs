import SiteHeader from '@/components/SiteHeader';
import Hero from '@/components/Hero';
import Research from '@/components/Research';
import SelectedWork from '@/components/SelectedWork';
import Methods from '@/components/Methods';
import BeyondTheLab from '@/components/BeyondTheLab';
import References from '@/components/References';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        <Hero />
        <div className="space-y-16 md:space-y-24">
          <Research />
          <SelectedWork />
          <Methods />
          <BeyondTheLab />
          <References />
          <Footer />
        </div>
      </main>
    </>
  );
}
