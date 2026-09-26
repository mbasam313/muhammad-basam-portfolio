import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { Services } from '@/components/home/Services';
import { PortfolioShowcase } from '@/components/home/PortfolioShowcase';
import { DigitalMarketing } from '@/components/home/DigitalMarketing';
import { Process } from '@/components/home/Process';
import { FinalCta } from '@/components/home/FinalCta';

export default function Index() {
  return (
    <div data-ev-id="ev_9b666c18bf" className="flex min-h-screen flex-col overflow-x-hidden bg-paper font-sans antialiased">
			<a data-ev-id="ev_e0973bd59c"
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:bg-ink focus:px-5 focus:py-2 focus:text-[14px] focus:text-paper">

				Skip to content
			</a>
			<Header />
			<main data-ev-id="ev_e6f659a1b0" id="main" className="flex-1">
				<Hero />
				<Services />
				<PortfolioShowcase />
				<DigitalMarketing />
				<Process />
				<FinalCta />
			</main>
			<Footer />
		</div>);

}