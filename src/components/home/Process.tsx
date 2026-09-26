import { Container, Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { PROCESS_STEPS } from '@/data/site';
import { Search, Lightbulb, Palette, Code, Rocket } from 'lucide-react';

const STEP_ICONS = [Search, Lightbulb, Palette, Code, Rocket];

export function Process() {
  return (
    <Section id="process" tone="paper" labelledBy="process-heading">
			<Container>
				<div data-ev-id="ev_534dc26d85" className="text-center">
					<Reveal>
						<span data-ev-id="ev_2dc3a04ca6" className="font-heading text-[13px] font-medium uppercase tracking-[0.14em] text-mid-gray">
							How I work
						</span>
						<h2 data-ev-id="ev_41d09b0a81"
            id="process-heading"
            className="mx-auto mt-4 max-w-[18ch] font-display text-[26px] font-bold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[48px]">

							A simple, clear process from start to finish.
						</h2>
						<p data-ev-id="ev_ccb078e5e9" className="mx-auto mt-3 max-w-[50ch] font-sans text-[15px] leading-[1.6] tracking-[-0.011em] text-mid-gray sm:mt-4 sm:text-[16px] lg:text-[17px]">
							I'd rather understand the actual problem before deciding what the solution looks like.
						</p>
					</Reveal>
				</div>

				<div data-ev-id="ev_72b808a596" className="relative mt-16">
					{/* Connection line */}
					<div data-ev-id="ev_30abf4a647"
          aria-hidden="true"
          className="absolute left-1/2 top-12 hidden h-[2px] w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-hairline to-transparent lg:block" />


					<ol data-ev-id="ev_0075e5df69" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-8 lg:gap-6">
						{PROCESS_STEPS.map((step, index) => {
              const Icon = STEP_ICONS[index];
              return (
                <Reveal as="li" key={step.number} delay={index * 80} className="text-center">
									<div data-ev-id="ev_436814ce91" className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-canvas ring-4 ring-paper">
										<Icon size={28} className="text-[#0c78e4]" aria-hidden="true" />
										<span data-ev-id="ev_ff38b55629" className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#0c78e4] text-[12px] font-bold text-white">
											{step.number}
										</span>
									</div>
									<h3 data-ev-id="ev_e0192a6a64" className="mt-4 font-heading text-[16px] font-semibold tracking-[-0.012em] text-ink sm:mt-5 sm:text-[17px] lg:text-[18px]">
										{step.title}
									</h3>
									<p data-ev-id="ev_8fb28c91c8" className="mt-1.5 font-sans text-[13px] leading-[1.55] tracking-[-0.011em] text-mid-gray sm:mt-2 sm:text-[14px] lg:text-[15px]">
										{step.body}
									</p>
								</Reveal>);

            })}
					</ol>
				</div>
			</Container>
		</Section>);

}