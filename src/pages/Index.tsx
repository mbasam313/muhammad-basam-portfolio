import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Seo } from '@/components/Seo';
import { Hero } from '@/components/home/Hero';
import { Stats } from '@/components/home/Stats';
import { FeatureSection } from '@/components/home/FeatureSection';
import { Services } from '@/components/home/Services';
import { PortfolioShowcase } from '@/components/home/PortfolioShowcase';
import { DigitalMarketing } from '@/components/home/DigitalMarketing';
import { Process } from '@/components/home/Process';
import { FinalCta } from '@/components/home/FinalCta';

export default function Index() {
  return (
    <div data-ev-id="ev_9b666c18bf" className="flex min-h-screen flex-col overflow-x-hidden bg-paper font-sans antialiased">
      <Seo
        title="Website Designer, Graphic Designer & Digital Marketer"
        description="Muhammad Basam is a website designer, graphic designer and digital marketing professional in Peshawar, Pakistan. WordPress, WooCommerce, graphic design and Meta Ads."
        keywords={['website designer', 'graphic designer', 'digital marketer', 'WordPress designer', 'WooCommerce', 'Meta Ads', 'Pakistan', 'Peshawar']}
        path="/"
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Muhammad Basam',
          jobTitle: 'Website Designer, Graphic Designer & Digital Marketing Professional',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Peshawar',
            addressRegion: 'Khyber Pakhtunkhwa',
            addressCountry: 'PK',
          },
          worksFor: { '@type': 'Organization', name: 'Skyward Vision' },
          knowsAbout: [
            'WordPress Website Design',
            'WooCommerce',
            'Graphic Design',
            'Meta Ads',
            'Google Ads',
            'Social Media Management',
            'Landing Page Design',
            'Website Redesign',
          ],
        }}
      />
      <a
        data-ev-id="ev_e0973bd59c"
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:bg-ink focus:px-5 focus:py-2 focus:text-[14px] focus:text-paper"
      >
        Skip to content
      </a>
      <Header />
      <main data-ev-id="ev_e6f659a1b0" id="main" className="flex-1">
        <Hero />
        <Stats />
        <FeatureSection />
        <Services />
        <PortfolioShowcase />
        <DigitalMarketing />
        <Process />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
