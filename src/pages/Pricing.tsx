import { Check, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Seo } from '@/components/Seo';
import { Container, Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { FinalCta } from '@/components/home/FinalCta';
import { PRICING_PLANS, type PricingPlan } from '@/data/site';
import { buildWhatsAppUrl, buildPricingMessage } from '@/utils/whatsapp';

function PlanCard({ plan }: { plan: PricingPlan }) {
  const handleSelect = () => {
    const message = buildPricingMessage(plan.name, plan.serviceName, plan.price, plan.period);
    window.open(buildWhatsAppUrl(message), '_blank');
  };

  return (
    <article
      className={`flex h-full flex-col gap-4 rounded-[14px] p-5 sm:p-6 lg:p-8 ${
        plan.popular
          ? 'bg-ink text-paper ring-2 ring-electric-blue'
          : 'bg-paper text-ink ring-1 ring-hairline/60'
      }`}
    >
      {plan.popular && (
        <span className="inline-block w-fit rounded-pill bg-electric-blue px-3 py-1 font-heading text-[10px] font-semibold uppercase text-white sm:text-[11px]">
          Most Popular
        </span>
      )}
      <div className="flex flex-col gap-1">
        <span className={`font-heading text-[11px] font-medium uppercase tracking-[0.14em] sm:text-[12px] lg:text-[13px] ${
          plan.popular ? 'text-electric-blue' : 'text-electric-blue'
        }`}>
          {plan.serviceName}
        </span>
        <h3 className={`font-heading text-[20px] font-semibold leading-[1.2] tracking-[-0.012em] sm:text-[22px] lg:text-[24px] ${
          plan.popular ? 'text-paper' : 'text-ink'
        }`}>
          {plan.name}
        </h3>
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className={`font-display text-[32px] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[36px] lg:text-[40px] ${
          plan.popular ? 'text-paper' : 'text-ink'
        }`}>
          {plan.price}
        </span>
        <span className={`font-sans text-[13px] tracking-[-0.011em] sm:text-[14px] ${
          plan.popular ? 'text-paper/60' : 'text-mid-gray'
        }`}>
          {plan.period}
        </span>
      </div>
      <p className={`font-sans text-[14px] leading-[1.55] tracking-[-0.011em] text-pretty sm:text-[15px] lg:text-[16px] ${
        plan.popular ? 'text-paper/70' : 'text-mid-gray'
      }`}>
        {plan.description}
      </p>
      <ul className={`flex flex-col gap-2.5 border-t pt-4 sm:pt-5 lg:pt-6 ${
        plan.popular ? 'border-white/15' : 'border-hairline/70'
      }`}>
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
              plan.popular ? 'bg-electric-blue/20' : 'bg-electric-blue/10'
            }`}>
              <Check size={12} className="text-electric-blue" aria-hidden="true" />
            </span>
            <span className={`font-sans text-[13px] leading-[1.5] tracking-[-0.011em] sm:text-[14px] lg:text-[15px] ${
              plan.popular ? 'text-paper/85' : 'text-deep-gray'
            }`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-4">
        <button
          type="button"
          onClick={handleSelect}
          className={`group inline-flex w-full items-center justify-center gap-2 rounded-pill px-5 py-[10px] font-heading text-[15px] font-medium tracking-[-0.011em] transition-colors duration-200 sm:px-6 sm:py-[11px] sm:text-[16px] lg:text-[17px] ${
            plan.popular
              ? 'bg-electric-blue text-white hover:bg-[#0062c4]'
              : 'bg-ink text-paper hover:bg-electric-blue'
          }`}
        >
          Select Plan
          <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

function PricingGroup({ title, description, plans }: { title: string; description: string; plans: PricingPlan[] }) {
  return (
    <Reveal>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="font-heading text-[20px] font-semibold tracking-[-0.012em] text-ink sm:text-[22px] lg:text-[24px]">
            {title}
          </h3>
          <p className="mt-1 max-w-[52ch] font-sans text-[14px] leading-[1.55] tracking-[-0.011em] text-mid-gray text-pretty sm:text-[15px] lg:text-[16px]">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 70}>
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Pricing() {
  const websitePlans = PRICING_PLANS.filter((p) => p.serviceName === 'WordPress Website Design');
  const graphicPlans = PRICING_PLANS.filter((p) => p.serviceName === 'Graphic Design');
  const adsPlans = PRICING_PLANS.filter((p) => p.serviceName === 'Meta Ads Management');
  const smmPlans = PRICING_PLANS.filter((p) => p.serviceName === 'Social Media Management');
  const landingPlans = PRICING_PLANS.filter((p) => p.serviceName === 'Landing Page Design');
  const wooPlans = PRICING_PLANS.filter((p) => p.serviceName === 'E-commerce & WooCommerce');

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-paper font-sans antialiased">
      <Seo
        title="Pricing — Website Design, Graphic Design & Marketing Plans"
        description="Transparent pricing for WordPress website design, graphic design, Meta Ads management, social media management, landing pages and WooCommerce stores. Per-project and monthly plans."
        keywords={['pricing', 'website design pricing', 'graphic design pricing', 'Meta Ads pricing', 'WooCommerce pricing', 'landing page pricing', 'social media management pricing', 'freelance pricing Pakistan']}
        path="/pricing"
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'PriceSpecification',
          provider: {
            '@type': 'Person',
            name: 'Muhammad Basam',
          },
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
                Pricing
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-5 max-w-[20ch] font-display text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-ink text-balance sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[52px]">
                Clear pricing for every service.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-4 max-w-[54ch] font-sans text-[15px] leading-[1.6] tracking-[-0.011em] text-mid-gray text-pretty sm:text-[16px] lg:text-[17px]">
                Per-project pricing for websites, graphic design, landing pages and WooCommerce stores.
                Monthly plans for Meta Ads and social media management. Select any plan to discuss on WhatsApp.
              </p>
            </Reveal>
          </Container>
        </Section>

        <Section tone="canvas" labelledBy="website-pricing-heading" className="!pt-0">
          <Container>
            <PricingGroup
              title="WordPress Website Design"
              description="One-time pricing for website projects. Choose the plan that fits the size of your project."
              plans={websitePlans}
            />
          </Container>
        </Section>

        <Section tone="canvas" labelledBy="graphic-pricing-heading" className="!pt-0">
          <Container>
            <PricingGroup
              title="Graphic Design"
              description="Per-project pricing for graphic design work, from social media posts to full brand identity packs."
              plans={graphicPlans}
            />
          </Container>
        </Section>

        <Section tone="canvas" labelledBy="ads-pricing-heading" className="!pt-0">
          <Container>
            <PricingGroup
              title="Meta Ads Management"
              description="Monthly plans for Facebook, Instagram and Google Ads management. Pricing scales with your ad budget."
              plans={adsPlans}
            />
          </Container>
        </Section>

        <Section tone="canvas" labelledBy="smm-pricing-heading" className="!pt-0">
          <Container>
            <PricingGroup
              title="Social Media Management"
              description="Monthly plans for content planning, post design and social media scheduling across platforms."
              plans={smmPlans}
            />
          </Container>
        </Section>

        <Section tone="canvas" labelledBy="landing-pricing-heading" className="!pt-0">
          <Container>
            <PricingGroup
              title="Landing Page Design"
              description="Per-project pricing for conversion-focused landing pages built for campaigns and ad traffic."
              plans={landingPlans}
            />
          </Container>
        </Section>

        <Section tone="canvas" labelledBy="woo-pricing-heading" className="!pt-0">
          <Container>
            <PricingGroup
              title="E-commerce & WooCommerce"
              description="Per-project pricing for WooCommerce stores, from starter shops to full custom store builds."
              plans={wooPlans}
            />
          </Container>
        </Section>

        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
