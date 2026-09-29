import { Check } from 'lucide-react';
import { Container, Section, SectionHeading } from '@/components/ui/Section';
import { ArrowLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SERVICES } from '@/data/site';

export function Services() {
  const homepageServices = SERVICES.slice(0, 3);

  return (
    <Section id="services" tone="canvas" labelledBy="services-heading">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Services"
            id="services-heading"
            title="Five things I do, and they work better together."
            description="Most projects need a site, the visuals that fill it and the campaigns that bring people to it. I work across all of it." />

          <ArrowLink to="/services" className="shrink-0">
            View all services
          </ArrowLink>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {homepageServices.map((service, index) =>
            <Reveal as="li" key={service.id} delay={index * 90}>
              <article className="flex h-full flex-col gap-4 rounded-[14px] bg-paper p-5 sm:gap-5 sm:p-6 lg:gap-6 lg:p-8">
                <span className="font-heading text-[11px] font-medium uppercase tracking-[0.14em] text-electric-blue sm:text-[12px] lg:text-[13px]">
                  {service.eyebrow}
                </span>
                <h3 className="font-heading text-[20px] font-semibold leading-[1.2] tracking-[-0.012em] text-ink sm:text-[22px] lg:text-[24px]">
                  {service.title}
                </h3>
                <p className="font-sans text-[15px] leading-[1.6] tracking-[-0.011em] text-mid-gray text-pretty sm:text-[16px] lg:text-[17px]">
                  {service.summary}
                </p>
                <ul className="flex flex-col gap-2 border-t border-hairline/70 pt-4 sm:gap-2.5 sm:pt-5 lg:gap-3 lg:pt-6">
                  {service.items.slice(0, 4).map((item) =>
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-blue/10">
                        <Check size={12} className="text-electric-blue" aria-hidden="true" />
                      </span>
                      <span className="font-sans text-[13px] leading-[1.5] tracking-[-0.011em] text-deep-gray sm:text-[14px] lg:text-[15px]">
                        {item}
                      </span>
                    </li>
                  )}
                </ul>
                <div className="mt-auto pt-2">
                  <ArrowLink to={service.href}>Learn more</ArrowLink>
                </div>
              </article>
            </Reveal>
          )}
        </ul>
      </Container>
    </Section>
  );
}
