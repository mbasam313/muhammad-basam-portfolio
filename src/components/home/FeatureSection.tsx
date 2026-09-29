import { useEffect, useRef, useState } from 'react';
import { Globe, Palette, Megaphone, ShoppingCart, Layout, Search } from 'lucide-react';
import { Container, Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { HOMEPAGE_FEATURES } from '@/data/site';

const ICON_MAP: Record<string, typeof Globe> = {
  Globe,
  Palette,
  Megaphone,
  ShoppingCart,
  Layout,
  Search,
};

const HEADLINE_WORDS = [
  'Experienced', 'Website', '&', 'Graphic', 'Designer', 'and', 'Digital', 'Marketer,',
  'Creating', 'Awesome', 'and', 'Effective', 'Identities', 'for', 'Any', 'Kind', 'of',
  'Companies', 'of', 'All', 'Sizes', 'Around', 'the', 'Globe', 'and', 'Driving', 'Results',
  'Through', 'Strategic', 'Digital', 'Marketing.',
];

export function FeatureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const startTrigger = viewportHeight * 0.85;
      const endTrigger = -rect.height * 0.4;

      if (rect.top > startTrigger) {
        setScrollProgress(0);
        return;
      }
      if (rect.top < endTrigger) {
        setScrollProgress(1);
        return;
      }

      const total = startTrigger - endTrigger;
      const passed = startTrigger - rect.top;
      setScrollProgress(Math.max(0, Math.min(1, passed / total)));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const totalWords = HEADLINE_WORDS.length;

  return (
    <Section tone="ink" labelledBy="feature-heading" className="!py-16 sm:!py-20 lg:!py-28 !pt-0">
      <Container>
        <div ref={sectionRef} className="flex flex-col items-center gap-12 lg:gap-16">
          <Reveal className="max-w-[60ch] text-center">
            <h2
              id="feature-heading"
              className="font-heading text-[20px] font-semibold leading-[1.3] tracking-[-0.015em] text-balance sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[38px]"
            >
              {HEADLINE_WORDS.map((word, i) => {
                const wordProgress = Math.max(0, Math.min(1, (scrollProgress * totalWords - i) / 1));
                const color = lerpColor('#555555', '#0c78e4', wordProgress);
                return (
                  <span
                    key={i}
                    style={{ color, transition: 'color 0.3s ease' }}
                  >
                    {word}{' '}
                  </span>
                );
              })}
            </h2>
          </Reveal>

          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {HOMEPAGE_FEATURES.map((feature, index) => {
              const Icon = ICON_MAP[feature.icon] ?? Globe;
              const featureProgress = Math.max(
                0,
                Math.min(1, (scrollProgress * HOMEPAGE_FEATURES.length - index) / 1),
              );
              const isActive = featureProgress > 0.15;
              return (
                <div
                  key={feature.text}
                  className="flex items-start gap-3 rounded-[14px] p-4 transition-all duration-500 sm:p-5"
                  style={{
                    backgroundColor: isActive ? 'rgba(12, 120, 228, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                    border: `1px solid ${isActive ? 'rgba(12, 120, 228, 0.2)' : 'rgba(255, 255, 255, 0.08)'}`,
                  }}
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] transition-colors duration-500 sm:h-11 sm:w-11"
                    style={{
                      backgroundColor: isActive ? 'rgba(12, 120, 228, 0.15)' : 'rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    <Icon
                      size={20}
                      className="transition-colors duration-500"
                      style={{
                        color: isActive ? '#0c78e4' : '#777777',
                      }}
                      aria-hidden="true"
                    />
                  </span>
                  <span
                    className="font-sans text-[14px] leading-[1.55] tracking-[-0.011em] transition-colors duration-500 sm:text-[15px] lg:text-[16px]"
                    style={{
                      color: isActive ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.45)',
                    }}
                  >
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function lerpColor(a: string, b: string, t: number): string {
  const ah = parseInt(a.slice(1), 16);
  const bh = parseInt(b.slice(1), 16);
  const ar = (ah >> 16) & 0xff, ag = (ah >> 8) & 0xff, ab = ah & 0xff;
  const br = (bh >> 16) & 0xff, bg = (bh >> 8) & 0xff, bb = bh & 0xff;
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return `#${((r << 16) | (g << 8) | bl).toString(16).padStart(6, '0')}`;
}
