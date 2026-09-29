import { Check, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Seo } from '@/components/Seo';
import { Container, Section, SectionHeading } from '@/components/ui/Section';
import { ButtonLink, ArrowLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { FinalCta } from '@/components/home/FinalCta';
import { SERVICES } from '@/data/site';

export default function Services() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-paper font-sans antialiased">
      <Seo
        title="Services — Website Design, Graphic Design & Digital Marketing"
        description="WordPress website design, graphic design, Meta Ads management, WooCommerce stores and landing page design. Five services covering the full digital journey by Muhammad Basam."
        keywords={['services', 'website design', 'graphic design', 'Meta Ads', 'WooCommerce', 'landing page design', 'digital marketing services', 'WordPress designer Pakistan']}
        path="/services"
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ServiceCatalog',
          provider: {
            '@type': 'Person',
            name: 'Muhammad Basam',
            jobTitle: 'Website Designer, Graphic Designer & Digital Marketing Professional',
          },
          hasService: SERVICES.map((s) => ({
            '@type': 'Service',
            name: s.title,
            description: s.summary,
            url: s.href,
          })),
        }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:bg-ink focus:px-5 focus:py-2 focus:text-[14px] focus:text-paper"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Section tone="paper" className="!py-16 sm:!py-20 lg:!py-24">
          <Container>
            <Reveal>
              <span className="inline-block rounded-[8px] bg-[#0c78e4] px-3 py-1.5 font-heading text-[10px] font-semibold uppercase text-white sm:px-4 sm:py-2 sm:text-[11px] lg:px-5 lg:py-2.5 lg:text-[12px]">
                Services
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-5 max-w-[20ch] font-display text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-ink text-balance sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[52px]">
                Everything you need to look better and work better online.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-4 max-w-[54ch] font-sans text-[15px] leading-[1.6] tracking-[-0.011em] text-mid-gray text-pretty sm:text-[16px] lg:text-[17px]">
                Five focused services that cover the full digital journey — from the website itself
                to the visuals that fill it and the campaigns that bring people to it.
              </p>
            </Reveal>
          </Container>
        </Section>

        <Section tone="canvas" labelledBy="services-grid-heading" className="!pt-0">
          <Container>
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service, index) => (
                <Reveal as="li" key={service.id} delay={index * 70}>
                  <article className="flex h-full flex-col gap-4 rounded-[14px] bg-paper p-5 ring-1 ring-hairline/60 transition-all duration-300 hover:ring-hairline hover:shadow-lg sm:p-6 lg:p-8">
                    <span className="font-heading text-[11px] font-medium uppercase tracking-[0.14em] text-electric-blue sm:text-[12px] lg:text-[13px]">
                      {service.eyebrow}
                    </span>
                    <h3 className="font-heading text-[20px] font-semibold leading-[1.2] tracking-[-0.012em] text-ink sm:text-[22px] lg:text-[24px]">
                      {service.title}
                    </h3>
                    <p className="font-sans text-[15px] leading-[1.6] tracking-[-0.011em] text-mid-gray text-pretty sm:text-[16px] lg:text-[17px]">
                      {service.summary}
                    </p>
                    <ul className="flex flex-col gap-2 border-t border-hairline/70 pt-4 sm:gap-2.5 lg:gap-3 lg:pt-6">
                      {service.items.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-blue/10">
                            <Check size={12} className="text-electric-blue" aria-hidden="true" />
                          </span>
                          <span className="font-sans text-[13px] leading-[1.5] tracking-[-0.011em] text-deep-gray sm:text-[14px] lg:text-[15px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-2">
                      <ArrowLink to={service.href}>Learn more</ArrowLink>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </Container>
        </Section>

        <Section tone="paper" labelledBy="approach-heading">
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <Reveal>
                <SectionHeading
                  eyebrow="How I Work"
                  id="approach-heading"
                  title="One process across every service."
                  description="Whether it's a website, a set of creatives or a campaign, the approach stays the same — understand first, then design, then build and refine."
                />
              </Reveal>
              <Reveal delay={80}>
                <div className="flex flex-col gap-4">
                  {[
                    { step: '01', title: 'Understand', body: 'What the business needs, who the users are and what the project has to achieve.' },
                    { step: '02', title: 'Plan', body: 'Structure, content priorities and how people will move through everything.' },
                    { step: '03', title: 'Design', body: 'Layout, hierarchy, typography and visuals consistent with the brand.' },
                    { step: '04', title: 'Build & Refine', body: 'Implementation, responsive checks, refinements and launch.' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 rounded-[14px] bg-canvas p-4 sm:p-5 lg:p-6">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-electric-blue text-[13px] font-bold text-white">
                        {item.step}
                      </span>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-heading text-[16px] font-semibold tracking-[-0.012em] text-ink sm:text-[17px] lg:text-[18px]">
                          {item.title}
                        </h3>
                        <p className="font-sans text-[14px] leading-[1.55] tracking-[-0.011em] text-mid-gray sm:text-[15px] lg:text-[16px]">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>

        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
