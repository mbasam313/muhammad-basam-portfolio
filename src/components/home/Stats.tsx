import { Container, Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { STATS } from '@/data/site';

export function Stats() {
  return (
    <Section tone="ink" className="!py-8 sm:!py-10 lg:!py-12" labelledBy="stats-heading">
      <Container>
        <h2 id="stats-heading" className="sr-only">
          Key stats
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 60} className="flex flex-col items-center text-center">
              <span className="font-heading text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-paper sm:text-[36px] lg:text-[42px] xl:text-[48px]">
                {stat.value}
              </span>
              <span className="mt-1.5 font-heading text-[11px] font-medium uppercase tracking-[0.12em] text-paper/55 sm:text-[12px] sm:tracking-[0.14em] lg:text-[13px]">
                {stat.label}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
