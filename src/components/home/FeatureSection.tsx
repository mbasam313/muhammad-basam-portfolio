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

export function FeatureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionHeight = rect.height;

      const startTrigger = viewportHeight * 0.8;
      const endTrigger = -sectionHeight * 0.3;

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

  return (
    <Section tone="paper" labelledBy="feature-heading" className="!py-16 sm:!py-20 lg:!py-24">
      <Container>
        <div ref={sectionRef} className="flex flex-col items-center gap-10 lg:gap-14">
          <Reveal className="max-w-[64ch] text-center">
            <h2
              id="feature-heading"
              className="font-display text-[24px] font-bold leading-[1.15] tracking-[-0.02em] text-ink text-balance sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px]"
            >
              Experienced Website &amp; Graphic Designer and Digital Marketer, Creating Awesome
              and Effective Identities for Any Kind of Companies of All Sizes Around the Globe and
              Driving Results Through Strategic Digital Marketing.
            </h2>
          </Reveal>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {HOMEPAGE_FEATURES.map((feature, index) => {
              const Icon = ICON_MAP[feature.icon] ?? Globe;
              const featureProgress = Math.max(
                0,
                Math.min(1, (scrollProgress * HOMEPAGE_FEATURES.length - index) / 1),
              );
              const isActive = featureProgress > 0.1;
              return (
                <div
                  key={feature.text}
                  className="flex items-start gap-3 rounded-[14px] p-4 transition-all duration-500 sm:p-5 lg:p-6"
                  style={{
                    backgroundColor: isActive ? 'rgba(12, 120, 228, 0.06)' : 'transparent',
                  }}
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] transition-colors duration-500 sm:h-11 sm:w-11"
                    style={{
                      backgroundColor: isActive ? 'rgba(12, 120, 228, 0.12)' : 'rgba(119, 119, 119, 0.1)',
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
                      color: isActive ? '#1d1d1f' : '#777777',
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
