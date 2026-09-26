import { Container, Section } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

export function FinalCta() {
  return (
    <Section id="contact-cta" tone="ink" labelledBy="cta-heading">
			<Container>
				<Reveal className="flex flex-col items-center gap-5 text-center sm:gap-6 lg:gap-7">
					<h2 data-ev-id="ev_11b4c1ac76"
          id="cta-heading"
          className="max-w-[16ch] font-display text-[28px] font-bold leading-[1.08] tracking-[-0.02em] text-paper text-balance sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px]">

						Have a project in mind?
					</h2>
					<p data-ev-id="ev_bb903ba021" className="max-w-[52ch] font-sans text-[15px] leading-[1.6] tracking-[-0.011em] text-paper/65 text-pretty sm:text-[16px] lg:text-[17px]">
						Tell me what you're building and what it needs to do. Whether it's a new website, a set of creatives or a
						campaign, I'll give you an honest view of how I'd approach it.
					</p>
					<div data-ev-id="ev_1b6873a34a" className="flex flex-row flex-wrap items-center justify-center gap-3 pt-2">
						<ButtonLink to="/contact">Let's Work Together</ButtonLink>
						<ButtonLink to="/portfolio" variant="ghost-light">
							View My Work
						</ButtonLink>
					</div>
				</Reveal>
			</Container>
		</Section>);

}