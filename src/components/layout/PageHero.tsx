import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { ProtectedImage } from '@/components/ui/ProtectedImage';
import portrait from '@/assets/uploads/muhammad-basam-portrait.png';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  showPortraitOnMobile?: boolean;
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryLabel = "Let's Work Together",
  primaryTo = "/contact",
  secondaryLabel = 'View My Work',
  secondaryTo = '/portfolio',
  showPortraitOnMobile = false,
  children
}: PageHeroProps) {
  return (
    <section className="bg-paper text-ink">
      <Container>
        <div className="grid min-h-[520px] grid-cols-1 items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <div className="flex flex-col items-center justify-center gap-5 py-16 text-center lg:items-start lg:self-stretch lg:py-20 lg:text-left">
            <Reveal>
              <span className="inline-block rounded-[8px] bg-[#0c78e4] px-3 py-1.5 font-heading text-[10px] font-semibold uppercase text-white sm:px-4 sm:py-2 sm:text-[11px] lg:px-5 lg:py-2.5 lg:text-[12px]">
                {eyebrow}
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="max-w-[20ch] font-display text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-balance sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[52px]">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-[56ch] font-sans text-[15px] leading-[1.6] tracking-[-0.011em] text-mid-gray text-pretty sm:text-[16px] lg:text-[17px]">
                {description}
              </p>
            </Reveal>
            {(primaryLabel || secondaryLabel) && (
              <Reveal delay={180}>
                <div className="flex flex-row flex-wrap items-center justify-center gap-3 lg:justify-start">
                  {primaryLabel && <ButtonLink to={primaryTo}>{primaryLabel}</ButtonLink>}
                  {secondaryLabel && (
                    <ButtonLink to={secondaryTo} variant="outline">
                      {secondaryLabel}
                    </ButtonLink>
                  )}
                </div>
              </Reveal>
            )}
            {children}
          </div>
          <Reveal
            delay={120}
            className={`${showPortraitOnMobile ? 'flex' : 'hidden lg:flex'} items-end justify-center lg:justify-end lg:pt-12`}
          >
            <ProtectedImage
              src={portrait}
              alt="Muhammad Basam, website designer and digital marketing professional"
              width={500}
              height={500}
              loading="eager"
              className="h-[240px] w-auto object-contain object-bottom sm:h-[300px] md:h-[340px] lg:h-[390px] xl:h-[430px]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
