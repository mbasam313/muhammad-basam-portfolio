import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Seo } from '@/components/Seo';
import { PageHero } from '@/components/layout/PageHero';
import { PortfolioShowcase } from '@/components/home/PortfolioShowcase';
import { FinalCta } from '@/components/home/FinalCta';

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-paper font-sans antialiased">
      <Seo
        title="Portfolio — Website, Graphic Design & Marketing Work"
        description="Explore Muhammad Basam's portfolio of WordPress websites, WooCommerce stores, branding, graphic design, social media creatives and digital marketing work."
        keywords={['portfolio', 'website design portfolio', 'graphic design portfolio', 'WordPress portfolio', 'WooCommerce projects', 'digital marketing portfolio']}
        path="/portfolio"
        type="website"
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:bg-ink focus:px-5 focus:py-2 focus:text-[14px] focus:text-paper"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          eyebrow="Portfolio"
          title="Selected work across web, design and marketing."
          description="Explore a selection of websites, e-commerce projects, brand materials, ad creatives and social media designs created for businesses and campaigns."
        />
        <PortfolioShowcase />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
