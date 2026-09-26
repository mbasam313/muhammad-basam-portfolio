import { FileText } from 'lucide-react';
import { Container, Section, SectionHeading } from '@/components/ui/Section';
import { ArrowLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { ProtectedImage } from '@/components/ui/ProtectedImage';
import { ProtectedPDFCard } from '@/components/ui/ProtectedPDF';
import {
  BUSINESS_WEBSITES,
  ECOMMERCE_WEBSITES,
  LOGO_PROJECTS,
  BRANDING_PROJECTS,
  AD_CREATIVES,
  SM_POSTS } from
'@/data/site';

function SectionTitle({ children, accent }: {children: React.ReactNode;accent?: string;}) {
  return (
    <h3 data-ev-id="ev_6bb84695d2" className="font-heading text-[22px] font-semibold leading-[1.15] tracking-[-0.015em] text-ink sm:text-[26px] md:text-[28px] lg:text-[32px]">
			{children}
			{accent ? <span data-ev-id="ev_2aeea7d6b8" className="text-[#0c78e4]"> {accent}</span> : null}
		</h3>);

}

function WebProjectCard({ title, description, image }: {title: string;description: string;image: string;}) {
  return (
    <article data-ev-id="ev_5be8335adc" className="group flex flex-col overflow-hidden rounded-[14px] bg-paper ring-1 ring-hairline/60 transition-shadow duration-300 hover:ring-hairline">
			<div data-ev-id="ev_6181507a6e" className="relative aspect-[3/2] overflow-hidden bg-canvas">
				<ProtectedImage
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />

			</div>
			<div data-ev-id="ev_23fb25e0a9" className="flex flex-col gap-1 p-4 sm:p-5">
				<h4 data-ev-id="ev_17c650e619" className="font-heading text-[15px] font-semibold tracking-[-0.011em] text-ink sm:text-[16px] lg:text-[17px]">{title}</h4>
				<p data-ev-id="ev_0f6d0e2a27" className="font-sans text-[13px] leading-[1.5] tracking-[-0.011em] text-mid-gray sm:text-[14px]">{description}</p>
			</div>
		</article>);

}

function LogoCard({ title, image }: {title: string;image: string;}) {
  return (
    <article data-ev-id="ev_42dc05eb16" className="group flex aspect-square items-center justify-center overflow-hidden rounded-[8px] bg-paper ring-1 ring-hairline/60 transition-all duration-300 hover:ring-hairline hover:shadow-sm">
			<ProtectedImage
        src={image}
        alt={title}
        className="h-full w-full object-cover p-4 transition-transform duration-300 group-hover:scale-105" />

		</article>);

}

function CreativeCard({ image }: {image: string;}) {
  return (
    <article data-ev-id="ev_7b8feaace8" className="group overflow-hidden rounded-[8px] ring-1 ring-hairline/60 transition-all duration-300 hover:ring-hairline">
			<ProtectedImage
        src={image}
        alt="Creative design"
        className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105" />

		</article>);

}

export function PortfolioShowcase() {
  return (
    <Section id="work" tone="paper" labelledBy="work-heading">
			<Container>
				{/* Main heading */}
				<div data-ev-id="ev_136049f1ad" className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
					<SectionHeading
            eyebrow="Recent Work"
            id="work-heading"
            title="Web Design Projects"
            description="A look at my recent website projects made for companies and live online stores. Each one is designed with a clean layout and a simple flow that works well for users." />

					<ArrowLink to="/portfolio" className="shrink-0">
						View all work
					</ArrowLink>
				</div>

				{/* Business & Company Websites */}
				<Reveal className="mt-12 sm:mt-14 lg:mt-16">
					<SectionTitle>Business & Company</SectionTitle>
					<div data-ev-id="ev_f158b670ef" className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{BUSINESS_WEBSITES.map((project) =>
            <WebProjectCard key={project.id} {...project} />
            )}
					</div>
				</Reveal>

				{/* E-commerce Websites */}
				<Reveal className="mt-14 sm:mt-16 lg:mt-20">
					<SectionTitle>E-Commerce</SectionTitle>
					<div data-ev-id="ev_004dcc9f8c" className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{ECOMMERCE_WEBSITES.map((project) =>
            <WebProjectCard key={project.id} {...project} />
            )}
					</div>
				</Reveal>
			</Container>

			{/* Graphic Design Section */}
			<div data-ev-id="ev_202372e4b5" className="mt-16 bg-canvas py-14 sm:mt-20 sm:py-20 lg:mt-24 lg:py-24">
				<Container>
					<SectionHeading
            eyebrow="Graphic Design"
            title="Design Projects Showcase"
            description="A look at my latest graphic design projects made for brands and online campaigns. Every design focuses on clear visuals, simple layouts, and a style that fits the client's needs." />


					{/* Logo Design Projects - 6 per row, 2 rows = 12 logos */}
					<Reveal className="mt-10 sm:mt-12 lg:mt-14">
						<h4 data-ev-id="ev_c274032f38" className="font-heading text-[11px] font-medium uppercase tracking-[0.12em] text-mid-gray sm:text-[12px] sm:tracking-[0.14em] lg:text-[13px]">Recent Logo Designs</h4>
						<div data-ev-id="ev_900b265f82" className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-3">
							{LOGO_PROJECTS.map((logo) =>
              <LogoCard key={logo.id} {...logo} />
              )}
						</div>
					</Reveal>

					{/* Branding Projects - 2x2 Grid with Protected PDFs */}
					<Reveal className="mt-12 sm:mt-14 lg:mt-16">
						<h4 data-ev-id="ev_e62963c090" className="font-heading text-[11px] font-medium uppercase tracking-[0.12em] text-mid-gray sm:text-[12px] sm:tracking-[0.14em] lg:text-[13px]">Branding Projects</h4>
						<div data-ev-id="ev_a92d27434f" className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6">
							{BRANDING_PROJECTS.map((brand) =>
              <ProtectedPDFCard
                key={brand.id}
                title={brand.title}
                subtitle={brand.subtitle}
                pdfUrl={brand.pdfUrl} />

              )}
						</div>
					</Reveal>

					{/* Ad Creatives - 6 per row, 2 rows = 12 */}
					<Reveal className="mt-12 sm:mt-14 lg:mt-16">
						<h4 data-ev-id="ev_8f6da01b89" className="font-heading text-[11px] font-medium uppercase tracking-[0.12em] text-mid-gray sm:text-[12px] sm:tracking-[0.14em] lg:text-[13px]">Latest Ad Creatives</h4>
						<div data-ev-id="ev_bf6f072d6b" className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-3">
							{AD_CREATIVES.map((item) =>
              <CreativeCard key={item.id} image={item.image} />
              )}
						</div>
					</Reveal>

					{/* SM Posts - 6 per row, 4 rows = 24 */}
					<Reveal className="mt-10 sm:mt-12">
						<h4 data-ev-id="ev_ea3d95152b" className="font-heading text-[11px] font-medium uppercase tracking-[0.12em] text-mid-gray sm:text-[12px] sm:tracking-[0.14em] lg:text-[13px]">SM Posts Design</h4>
						<div data-ev-id="ev_c03b23772b" className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-3">
							{SM_POSTS.map((item) =>
              <CreativeCard key={item.id} image={item.image} />
              )}
						</div>
					</Reveal>
				</Container>
			</div>
		</Section>);

}