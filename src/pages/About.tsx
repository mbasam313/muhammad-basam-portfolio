import {
  Globe,
  Palette,
  Megaphone,
  Share2,
  Check,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Seo } from '@/components/Seo';
import { Container, Section, SectionHeading } from '@/components/ui/Section';
import { ButtonLink, ArrowLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { ProtectedImage } from '@/components/ui/ProtectedImage';
import { FinalCta } from '@/components/home/FinalCta';
import { PROFILE } from '@/data/site';
import portrait from '@/assets/uploads/muhammad-basam-portrait.png';

interface Specialization {
  icon: typeof Globe;
  title: string;
  description: string;
  items: string[];
}

const SPECIALIZATIONS: Specialization[] = [
  {
    icon: Globe,
    title: 'Website Design',
    description:
      'Modern, responsive websites built around clear structure, usability, and business goals.',
    items: [
      'WordPress websites',
      'WooCommerce stores',
      'Business & portfolio sites',
      'Landing pages',
      'Website redesigns',
      'Performance optimisation',
    ],
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description:
      'Digital graphics for brands and campaigns — designed to communicate quickly and clearly.',
    items: [
      'Social media posts',
      'Meta ad creatives',
      'Promotional graphics',
      'Marketing materials',
      'Digital reports',
      'Branding materials',
    ],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description:
      'Paid social and search campaigns where creative and targeting are planned together.',
    items: [
      'Facebook & Instagram Ads',
      'Google Ads',
      'Campaign planning',
      'Ad creative strategy',
      'Audience research',
      'Performance analysis',
    ],
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description:
      'Content planning, creative development, and consistent brand communication across channels.',
    items: [
      'Content planning',
      'Post design',
      'Caption coordination',
      'Social media scheduling',
      'Campaign support',
      'Performance tracking',
    ],
  },
];

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

const EXPERIENCES: Experience[] = [
  {
    company: 'Skyward Vision',
    role: 'Creative Head & Social Media Manager',
    period: 'Current',
    description:
      'Leads creative design work, social media activities, and digital projects. Recently designed an employee ID card system with an AI-assisted QR verification and profile system.',
    highlights: [
      'Creative design & visual communication',
      'Social media management',
      'AI-assisted employee verification system',
    ],
  },
  {
    company: 'Zetasoft Solutions',
    role: 'WordPress Designer → WordPress Lead',
    period: '1.5+ years',
    description:
      'Started as a WordPress Designer and was promoted to WordPress Lead after six months. Managed website structure, page design, responsive layouts, and client requirements.',
    highlights: [
      'Promoted to WordPress Lead',
      'Website structure & page design',
      'Client project management',
    ],
  },
  {
    company: 'Greens Marketing',
    role: 'Digital Marketing Expert & Graphic Designer',
    period: '',
    description:
      'Worked on digital marketing and graphic design projects, combining visual design with advertising and marketing goals.',
    highlights: [
      'Meta Ads & social media advertising',
      'Ad creative design',
      'Marketing reports & digital content',
    ],
  },
  {
    company: 'WAPS Agency',
    role: 'Remote WordPress Designer',
    period: '',
    description:
      'Worked remotely on website design, WordPress-related tasks, page creation, updates, and design improvements.',
    highlights: [
      'Remote website design',
      'Independent task management',
      'Design improvements & updates',
    ],
  },
  {
    company: 'Gondal Group of Marketing',
    role: 'Graphic Designer / Senior Graphic Designer',
    period: '',
    description:
      'Created promotional graphics, marketing creatives, social media designs, and branded visual content for real estate marketing.',
    highlights: [
      'Promotional graphics & creatives',
      'Real estate marketing exposure',
      'Professional brand communication',
    ],
  },
];

interface Product {
  name: string;
  description: string;
  url: string;
  features: string[];
}

const PRODUCTS: Product[] = [
  {
    name: 'VisualWinner',
    description:
      'A platform for live A/B design voting. Upload two designs, share a voting campaign, and let the audience decide which performs better.',
    url: 'https://visualwinner.com',
    features: ['YouTube thumbnails', 'Ad creatives', 'Logos', 'Podcast covers', 'Social media designs'],
  },
  {
    name: 'Prompt Enhancer',
    description:
      'A web app that turns rough AI prompts into detailed, structured prompts for tools like ChatGPT, Claude, and Grok.',
    url: 'https://promptenhancer.com',
    features: ['Prompt enhancement', 'Documentation', 'Blog system', 'Admin system'],
  },
  {
    name: 'Workora',
    description:
      'An HR and payroll SaaS concept for managing employees, attendance, leave, payroll, and performance digitally.',
    url: 'https://workora.com',
    features: ['Employee management', 'Attendance & leave', 'Payroll automation', 'Payslips'],
  },
];

const PHILOSOPHY_POINTS = [
  'Clear hierarchy',
  'Strong spacing',
  'Good typography',
  'Consistent visual systems',
  'Simple layouts',
  'Strong contrast',
  'User-friendly structure',
  'Brand consistency',
  'Purpose-driven visuals',
];

const SKILL_GROUPS = [
  {
    label: 'Website & Web',
    skills: [
      'WordPress',
      'WooCommerce',
      'Responsive Design',
      'Landing Page Design',
      'E-commerce Website Design',
      'Basic SEO',
    ],
  },
  {
    label: 'Design',
    skills: [
      'Graphic Design',
      'Social Media Design',
      'Ad Creative Design',
      'Canva Pro',
      'Layout Design',
      'Visual Hierarchy',
    ],
  },
  {
    label: 'Advertising & Marketing',
    skills: [
      'Meta Ads',
      'Facebook Ads',
      'Instagram Ads',
      'Google Ads',
      'Campaign Planning',
      'Performance Analysis',
    ],
  },
];

function AboutHero() {
  return (
    <Section tone="paper" className="!py-16 sm:!py-20 lg:!py-24 xl:!py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="flex flex-col gap-5 text-center lg:text-left">
            <Reveal>
              <span className="inline-block rounded-[8px] bg-[#0c78e4] px-3 py-1.5 font-heading text-[10px] font-semibold uppercase text-white sm:px-4 sm:py-2 sm:text-[11px] lg:px-5 lg:py-2.5 lg:text-[12px]">
                About Me
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="max-w-[20ch] font-display text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-ink text-balance sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[52px]">
                Designer, developer, and marketer — all in one.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mx-auto max-w-[54ch] font-sans text-[15px] leading-[1.6] tracking-[-0.011em] text-mid-gray text-pretty sm:text-[16px] lg:text-[17px] lg:mx-0">
                I'm {PROFILE.name}, a {PROFILE.role} based in {PROFILE.location}. With 4+ years of
                practical experience, I work across website design, graphic design, and digital
                marketing — combining skills that most people treat as separate.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="flex flex-row flex-wrap items-center justify-center gap-3 lg:justify-start">
                <ButtonLink to="/contact">Let's Work Together</ButtonLink>
                <ButtonLink to="/portfolio" variant="outline">
                  View My Work
                </ButtonLink>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-[20px] bg-canvas" />
              <ProtectedImage
                src={portrait}
                alt={`${PROFILE.name}, website designer and digital marketing professional`}
                width={400}
                height={400}
                loading="eager"
                className="h-[240px] w-auto rounded-[16px] object-contain sm:h-[300px] lg:h-[360px] xl:h-[400px]"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function ProfessionalBio() {
  return (
    <Section tone="canvas" labelledBy="bio-heading">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Who I Am"
              id="bio-heading"
              title="A multidisciplinary digital professional."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="flex flex-col gap-5">
              <p className="font-sans text-[15px] leading-[1.7] tracking-[-0.011em] text-deep-gray text-pretty sm:text-[16px] lg:text-[17px]">
                I work across website design, visual design, social media, advertising, and digital
                marketing. My main tools are WordPress, WooCommerce, Canva Pro, Meta Ads, and Google
                Ads — but the tool is never the point. The point is building something clear, useful,
                and consistent with the brand behind it.
              </p>
              <p className="font-sans text-[15px] leading-[1.7] tracking-[-0.011em] text-deep-gray text-pretty sm:text-[16px] lg:text-[17px]">
                I've worked with companies, agencies, and clients on business websites, e-commerce
                stores, landing pages, social media creatives, ad campaigns, reports, and branding
                materials. I'm comfortable handling both the creative and the technical side of a
                project — from planning and design to implementation, content, advertising, and
                optimisation.
              </p>
              <p className="font-sans text-[15px] leading-[1.7] tracking-[-0.011em] text-deep-gray text-pretty sm:text-[16px] lg:text-[17px]">
                My approach is practical and result-focused. I don't just make things look good — I
                think about usability, structure, user experience, performance, and the purpose
                behind every design decision.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function Specializations() {
  return (
    <Section tone="paper" labelledBy="specializations-heading">
      <Container>
        <SectionHeading
          eyebrow="What I Do"
          id="specializations-heading"
          title="Four areas I work across — and they connect."
          description="Most projects need more than one. A website needs visuals. Visuals need a campaign. Campaigns need a landing page. I work across all of it."
        />
        <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {SPECIALIZATIONS.map((spec, index) => (
            <Reveal as="li" key={spec.title} delay={index * 80}>
              <article className="flex h-full flex-col gap-4 rounded-[14px] bg-canvas p-5 sm:gap-5 sm:p-6 lg:gap-6 lg:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-electric-blue/10 sm:h-12 sm:w-12">
                    <spec.icon size={22} className="text-electric-blue" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-[20px] font-semibold leading-[1.2] tracking-[-0.012em] text-ink sm:text-[22px] lg:text-[24px]">
                    {spec.title}
                  </h3>
                </div>
                <p className="font-sans text-[15px] leading-[1.6] tracking-[-0.011em] text-mid-gray text-pretty sm:text-[16px] lg:text-[17px]">
                  {spec.description}
                </p>
                <ul className="flex flex-col gap-2 border-t border-hairline/70 pt-4 sm:gap-2.5 sm:pt-5 lg:gap-3 lg:pt-6">
                  {spec.items.map((item) => (
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
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function ExperienceTimeline() {
  return (
    <Section tone="canvas" labelledBy="experience-heading">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          id="experience-heading"
          title="Where I've worked and what I've done."
          description="Four-plus years across agencies, companies, and remote roles — building websites, designing creatives, and running campaigns."
        />
        <ol className="mt-14 flex flex-col gap-5 sm:gap-6 lg:gap-7">
          {EXPERIENCES.map((exp, index) => (
            <Reveal as="li" key={exp.company} delay={index * 70}>
              <article className="flex flex-col gap-3 rounded-[14px] bg-paper p-5 ring-1 ring-hairline/60 sm:p-6 lg:flex-row lg:gap-8 lg:p-8">
                <div className="flex flex-col gap-1 lg:w-[240px] lg:shrink-0">
                  <span className="font-heading text-[11px] font-medium uppercase tracking-[0.14em] text-electric-blue">
                    {exp.period || 'Previous'}
                  </span>
                  <h3 className="font-heading text-[18px] font-semibold tracking-[-0.012em] text-ink sm:text-[20px] lg:text-[22px]">
                    {exp.company}
                  </h3>
                  <p className="font-sans text-[13px] leading-[1.5] tracking-[-0.011em] text-mid-gray sm:text-[14px]">
                    {exp.role}
                  </p>
                </div>
                <div className="flex flex-col gap-3 lg:border-l lg:border-hairline/70 lg:pl-8">
                  <p className="font-sans text-[15px] leading-[1.6] tracking-[-0.011em] text-deep-gray text-pretty sm:text-[16px] lg:text-[17px]">
                    {exp.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-pill bg-canvas px-3 py-1 font-sans text-[12px] leading-[1.4] tracking-[-0.011em] text-mid-gray sm:text-[13px]"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

function DesignPhilosophy() {
  return (
    <Section tone="ink" labelledBy="philosophy-heading">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <span className="font-heading text-[13px] font-medium uppercase tracking-[0.14em] text-paper/55">
              Design Philosophy
            </span>
            <h2
              id="philosophy-heading"
              className="mt-4 max-w-[18ch] font-display text-[26px] font-bold leading-[1.1] tracking-[-0.02em] text-paper text-balance sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[48px]"
            >
              Clean, modern, and built to communicate.
            </h2>
            <p className="mt-4 max-w-[52ch] font-sans text-[15px] leading-[1.6] tracking-[-0.011em] text-paper/65 text-pretty sm:text-[16px] lg:text-[17px]">
              I believe good design should not only look attractive — it should be easy to understand
              and serve a clear purpose. I prefer clean, modern interfaces over designs overloaded
              with unnecessary effects.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {PHILOSOPHY_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 rounded-[10px] border border-white/10 bg-white/[0.03] px-4 py-3.5 transition-colors hover:bg-white/[0.06]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0c78e4]/15">
                    <Sparkles size={14} className="text-[#0c78e4]" aria-hidden="true" />
                  </span>
                  <span className="font-heading text-[14px] font-medium tracking-[-0.011em] text-paper/90 sm:text-[15px] lg:text-[16px]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function SkillsSection() {
  return (
    <Section tone="paper" labelledBy="skills-heading">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          id="skills-heading"
          title="Tools and areas I work with."
          description="A practical set of skills across web, design, and marketing — built through real projects, not just theory."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {SKILL_GROUPS.map((group, index) => (
            <Reveal key={group.label} delay={index * 80}>
              <div className="flex flex-col gap-4 rounded-[14px] bg-canvas p-5 sm:p-6 lg:p-8">
                <h3 className="font-heading text-[16px] font-semibold tracking-[-0.012em] text-ink sm:text-[17px] lg:text-[18px]">
                  {group.label}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2.5 font-sans text-[14px] leading-[1.5] tracking-[-0.011em] text-deep-gray sm:text-[15px] lg:text-[16px]"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-electric-blue" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ProductsSection() {
  return (
    <Section tone="canvas" labelledBy="products-heading">
      <Container>
        <SectionHeading
          eyebrow="Personal Projects"
          id="products-heading"
          title="Digital products I'm building."
          description="Beyond client work, I build my own platforms — experimenting with AI, SaaS, and modern web applications."
        />
        <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <Reveal as="li" key={product.name} delay={index * 80}>
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-4 rounded-[14px] bg-paper p-5 ring-1 ring-hairline/60 transition-all duration-300 hover:ring-hairline hover:shadow-lg sm:p-6 lg:p-8"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-[20px] font-semibold tracking-[-0.012em] text-ink sm:text-[22px] lg:text-[24px]">
                    {product.name}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-mid-gray transition-colors group-hover:text-electric-blue"
                    aria-hidden="true"
                  />
                </div>
                <p className="font-sans text-[14px] leading-[1.6] tracking-[-0.011em] text-mid-gray text-pretty sm:text-[15px] lg:text-[16px]">
                  {product.description}
                </p>
                <ul className="flex flex-wrap gap-2 mt-auto pt-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-pill bg-canvas px-3 py-1 font-sans text-[12px] leading-[1.4] tracking-[-0.011em] text-mid-gray sm:text-[13px]"
                    >
                      {feature}
                      </li>
                  ))}
                </ul>
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export default function About() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-paper font-sans antialiased">
      <Seo
        title="About Muhammad Basam — Designer, Developer & Marketer"
        description="Muhammad Basam is a website designer, graphic designer and digital marketing professional with 4+ years of experience. Based in Peshawar, Pakistan. Creative Head at Skyward Vision."
        keywords={['about Muhammad Basam', 'website designer Pakistan', 'graphic designer Peshawar', 'digital marketer', 'WordPress designer', 'creative head', 'Skyward Vision']}
        path="/about"
        type="profile"
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
          ],
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
        <AboutHero />
        <ProfessionalBio />
        <Specializations />
        <ExperienceTimeline />
        <DesignPhilosophy />
        <SkillsSection />
        <ProductsSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
