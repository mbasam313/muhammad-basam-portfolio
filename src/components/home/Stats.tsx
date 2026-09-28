import { Container, Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { STATS } from '@/data/site';

export function Stats() {
  return (
    <Section tone="ink" className="!py-12 sm:!py-16 lg:!py-20" labelledBy="stats-heading">
      <Container>
        <h2 id="stats-heading" className="sr-only">
          Key stats
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80} className="flex flex-col items-center text-center">
              <span className="font-display text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-paper sm:text-[40px] lg:text-[48px] xl:text-[56px]">
                {stat.value}
              </span>
              <span className="mt-2 font-heading text-[12px] font-medium uppercase tracking-[0.12em] text-paper/55 sm:text-[13px] sm:tracking-[0.14em] lg:text-[14px]">
                {stat.label}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
