import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Seo } from '@/components/Seo';
import { Container, Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { FinalCta } from '@/components/home/FinalCta';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/data/site';
import { buildWhatsAppUrl, buildContactMessage } from '@/utils/whatsapp';

const SOCIAL_ICONS: Record<string, typeof Mail> = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
};

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullMessage = buildContactMessage(name, email, subject, message);
    window.open(buildWhatsAppUrl(fullMessage), '_blank');
  };

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-paper font-sans antialiased">
      <Seo
        title="Contact — Let's Work Together"
        description="Get in touch with Muhammad Basam for website design, graphic design, Meta Ads management and digital marketing projects. Based in Peshawar, Pakistan — working with clients worldwide."
        keywords={['contact', 'hire website designer', 'contact Muhammad Basam', 'WhatsApp', 'website designer Pakistan', 'graphic designer contact', 'digital marketer contact']}
        path="/contact"
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Muhammad Basam',
          mainEntity: {
            '@type': 'Person',
            name: 'Muhammad Basam',
            email: CONTACT_INFO.email,
            telephone: CONTACT_INFO.whatsapp,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Peshawar',
              addressRegion: 'Khyber Pakhtunkhwa',
              addressCountry: 'PK',
            },
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
                Contact
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-5 max-w-[20ch] font-display text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-ink text-balance sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[52px]">
                Let's work together.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-4 max-w-[54ch] font-sans text-[15px] leading-[1.6] tracking-[-0.011em] text-mid-gray text-pretty sm:text-[16px] lg:text-[17px]">
                Have a project in mind? Fill out the form below and you'll be redirected to WhatsApp with
                your message ready to send. Or reach out directly using the contact details.
              </p>
            </Reveal>
          </Container>
        </Section>

        <Section tone="canvas" labelledBy="contact-heading" className="!pt-0">
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              {/* Contact Info */}
              <Reveal>
                <SectionHeading
                  eyebrow="Get in Touch"
                  id="contact-heading"
                  title="Contact information."
                  description="Reach out through any of these channels. I usually respond within a few hours."
                />
                <div className="mt-8 flex flex-col gap-4">
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-[14px] bg-paper p-4 ring-1 ring-hairline/60 transition-all duration-300 hover:ring-hairline hover:shadow-md sm:p-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-electric-blue/10 sm:h-12 sm:w-12">
                      <Phone size={20} className="text-electric-blue" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-heading text-[12px] font-medium uppercase tracking-[0.12em] text-mid-gray sm:text-[13px]">
                        WhatsApp
                      </span>
                      <span className="font-heading text-[15px] font-semibold tracking-[-0.012em] text-ink sm:text-[16px] lg:text-[17px]">
                        {CONTACT_INFO.whatsappDisplay}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="group flex items-center gap-4 rounded-[14px] bg-paper p-4 ring-1 ring-hairline/60 transition-all duration-300 hover:ring-hairline hover:shadow-md sm:p-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-electric-blue/10 sm:h-12 sm:w-12">
                      <Mail size={20} className="text-electric-blue" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-heading text-[12px] font-medium uppercase tracking-[0.12em] text-mid-gray sm:text-[13px]">
                        Email
                      </span>
                      <span className="font-heading text-[15px] font-semibold tracking-[-0.012em] text-ink sm:text-[16px] lg:text-[17px]">
                        {CONTACT_INFO.email}
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 rounded-[14px] bg-paper p-4 ring-1 ring-hairline/60 sm:p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-electric-blue/10 sm:h-12 sm:w-12">
                      <MapPin size={20} className="text-electric-blue" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-heading text-[12px] font-medium uppercase tracking-[0.12em] text-mid-gray sm:text-[13px]">
                        Location
                      </span>
                      <span className="font-heading text-[15px] font-semibold tracking-[-0.012em] text-ink sm:text-[16px] lg:text-[17px]">
                        {CONTACT_INFO.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <span className="font-heading text-[12px] font-medium uppercase tracking-[0.14em] text-mid-gray sm:text-[13px]">
                    Follow Me
                  </span>
                  <div className="mt-3 flex flex-row gap-3">
                    {SOCIAL_LINKS.map((social) => {
                      const Icon = SOCIAL_ICONS[social.icon] ?? Mail;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-paper ring-1 ring-hairline/60 transition-all duration-300 hover:ring-electric-blue hover:shadow-md sm:h-12 sm:w-12"
                        >
                          <Icon size={20} className="text-deep-gray transition-colors hover:text-electric-blue" aria-hidden="true" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </Reveal>

              {/* Contact Form */}
              <Reveal delay={80}>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 rounded-[14px] bg-paper p-5 ring-1 ring-hairline/60 sm:p-6 lg:p-8"
                >
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-heading text-[13px] font-medium tracking-[-0.011em] text-ink sm:text-[14px]">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="rounded-[10px] border border-hairline bg-canvas px-4 py-3 font-sans text-[15px] text-ink placeholder:text-mid-gray/60 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 sm:text-[16px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-heading text-[13px] font-medium tracking-[-0.011em] text-ink sm:text-[14px]">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="rounded-[10px] border border-hairline bg-canvas px-4 py-3 font-sans text-[15px] text-ink placeholder:text-mid-gray/60 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 sm:text-[16px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="font-heading text-[13px] font-medium tracking-[-0.011em] text-ink sm:text-[14px]">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="What's this about?"
                      className="rounded-[10px] border border-hairline bg-canvas px-4 py-3 font-sans text-[15px] text-ink placeholder:text-mid-gray/60 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 sm:text-[16px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="font-heading text-[13px] font-medium tracking-[-0.011em] text-ink sm:text-[14px]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project..."
                      className="resize-none rounded-[10px] border border-hairline bg-canvas px-4 py-3 font-sans text-[15px] text-ink placeholder:text-mid-gray/60 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 sm:text-[16px]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-pill bg-electric-blue px-6 py-[11px] font-heading text-[16px] font-medium text-white transition-colors duration-200 hover:bg-[#0062c4] lg:text-[17px]"
                  >
                    Send via WhatsApp
                    <Send size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                  </button>
                  <p className="font-sans text-[13px] leading-[1.5] tracking-[-0.011em] text-mid-gray sm:text-[14px]">
                    Clicking send will open WhatsApp with your message pre-filled and ready to send.
                  </p>
                </form>
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
