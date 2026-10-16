import { Check, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import type { ReactNode } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Seo } from '@/components/Seo';
import { Container, Section, SectionHeading } from '@/components/ui/Section';
import { PageHero } from '@/components/layout/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { FinalCta } from '@/components/home/FinalCta';
import { Process } from '@/components/home/Process';
import { SERVICES, type Service } from '@/data/site';

interface ServiceDetailProps {
  serviceId: string;
  children?: ReactNode;
}

function FaqItem({ faq, index }: { faq: Service['faqs'][number]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="rounded-[14px] bg-canvas p-5 sm:p-6">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="font-heading text-[15px] font-semibold tracking-[-0.012em] text-ink sm:text-[16px] lg:text-[17px]">
          {faq.question}
        </span>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-electric-blue/10">
          {open ? <Minus size={14} className="text-electric-blue" /> : <Plus size={14} className="text-electric-blue" />}
        </span>
      </button>
      {open && (
        <p className="mt-3 font-sans text-[14px] leading-[1.6] tracking-[-0.011em] text-mid-gray text-pretty sm:text-[15px] lg:text-[16px]">
          {faq.answer}
        </p>
      )}
    </div>
  );
}

export function ServiceDetail({ serviceId, children }: ServiceDetailProps) {
  const service = SERVICES.find((s) => s.id === serviceId);
  if (!service) return null;

  const otherServices = SERVICES.filter((s) => s.id !== serviceId);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-paper font-sans antialiased">
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.keywords}
        path={service.href}
        type="article"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.summary,
          provider: {
            '@type': 'Person',
            name: 'Muhammad Basam',
            jobTitle: 'Website Designer, Graphic Designer & Digital Marketing Professional',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Peshawar',
              addressRegion: 'Khyber Pakhtunkhwa',
              addressCountry: 'PK',
            },
          },
          areaServed: 'Worldwide',
          url: service.href,
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
        <PageHero
          eyebrow={service.eyebrow}
          title={service.title}
          description={service.intro}
        />

        {/* Description */}
        <Section tone="canvas" labelledBy="description-heading">
          <Container>
            <Reveal>
              <p className="max-w-[68ch] font-sans text-[15px] leading-[1.75] tracking-[-0.011em] text-deep-gray text-pretty sm:text-[16px] lg:text-[17px]">
                {service.description}
              </p>
            </Reveal>
          </Container>
        </Section>

        {/* What's Included */}
        <Section tone="canvas" labelledBy="included-heading">
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
              <Reveal>
                <SectionHeading
                  eyebrow="What's Included"
                  id="included-heading"
                  title="What this service covers."
                />
              </Reveal>
              <Reveal delay={80}>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-[14px] bg-paper p-4 ring-1 ring-hairline/60 sm:p-5"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-blue/10">
                        <Check size={12} className="text-electric-blue" aria-hidden="true" />
                      </span>
                      <span className="font-sans text-[14px] leading-[1.5] tracking-[-0.011em] text-deep-gray sm:text-[15px] lg:text-[16px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </Container>
        </Section>

        {/* Benefits */}
        <Section tone="paper" labelledBy="benefits-heading">
          <Container>
            <SectionHeading
              eyebrow="Why It Matters"
              id="benefits-heading"
              title="What this gives you."
            />
            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {service.benefits.map((benefit, index) => (
                <Reveal key={benefit.title} delay={index * 70}>
                  <div className="flex h-full flex-col gap-3 rounded-[14px] bg-canvas p-5 lg:p-6">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-electric-blue/10">
                      <Check size={18} className="text-electric-blue" aria-hidden="true" />
                    </span>
                    <h3 className="font-heading text-[16px] font-semibold tracking-[-0.012em] text-ink sm:text-[17px] lg:text-[18px]">
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-[13px] leading-[1.55] tracking-[-0.011em] text-mid-gray sm:text-[14px] lg:text-[15px]">
                      {benefit.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* Process */}
        <Section tone="canvas" labelledBy="process-heading">
          <Container>
            <SectionHeading
              eyebrow="How I Approach It"
              id="process-heading"
              title="A clear process from start to finish."
            />
            <ol className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {service.process.map((step, index) => (
                <Reveal as="li" key={step.title} delay={index * 80}>
                  <div className="flex h-full flex-col gap-3 rounded-[14px] bg-paper p-5 ring-1 ring-hairline/60 lg:p-6">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-electric-blue text-[13px] font-bold text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-heading text-[15px] font-semibold tracking-[-0.012em] text-ink sm:text-[16px] lg:text-[17px]">
                      {step.title}
                    </h3>
                    <p className="font-sans text-[13px] leading-[1.55] tracking-[-0.011em] text-mid-gray sm:text-[14px] lg:text-[15px]">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </Container>
        </Section>

        {/* Shared Process Section from Homepage */}
        <Process />

        {/* Optional extra content (children) */}
        {children}

        {/* FAQs */}
        <Section tone="canvas" labelledBy="faq-heading">
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
              <Reveal>
                <SectionHeading
                  eyebrow="FAQ"
                  id="faq-heading"
                  title="Common questions about this service."
                />
              </Reveal>
              <Reveal delay={80}>
                <div className="flex flex-col gap-3">
                  {service.faqs.map((faq, index) => (
                    <FaqItem key={faq.question} faq={faq} index={index} />
                  ))}
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>

        {/* Other Services */}
        <Section tone="paper" labelledBy="other-heading">
          <Container>
            <div className="flex flex-col gap-4">
              <h2 id="other-heading" className="font-heading text-[20px] font-semibold tracking-[-0.012em] text-ink sm:text-[22px] lg:text-[24px]">
                Other services
              </h2>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {otherServices.map((other) => (
                  <li key={other.id}>
                    <a
                      href={other.href}
                      className="group flex h-full flex-col gap-2 rounded-[14px] bg-canvas p-5 ring-1 ring-hairline/60 transition-all duration-300 hover:ring-hairline hover:shadow-md"
                    >
                      <span className="font-heading text-[11px] font-medium uppercase tracking-[0.14em] text-electric-blue sm:text-[12px] lg:text-[13px]">
                        {other.eyebrow}
                      </span>
                      <span className="font-heading text-[16px] font-semibold tracking-[-0.012em] text-ink sm:text-[17px] lg:text-[18px]">
                        {other.title}
                      </span>
                      <span className="mt-auto inline-flex items-center gap-1 font-heading text-[14px] text-link-blue transition-colors group-hover:text-[#004e9e]">
                        Learn more <span className="transition-transform duration-200 group-hover:translate-x-0.5">›</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>

        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
