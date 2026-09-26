import { Settings, TrendingUp, Users, BarChart3, FileText } from 'lucide-react';
import { Container, Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { ProtectedPDF } from '@/components/ui/ProtectedPDF';

const MARKETING_FEATURES = [
{
  icon: Settings,
  title: 'Campaign Setup',
  description: 'Strategic Campaign Structure with Clear Objectives and Precise Audience Targeting'
},
{
  icon: TrendingUp,
  title: 'Optimization',
  description: 'Continuous Monitoring and Data-Driven Adjustments to Improve Campaign Performance'
},
{
  icon: Users,
  title: 'Targeting',
  description: 'Advanced Audience Selection Using Demographics, Interests, and Online Behavior'
},
{
  icon: BarChart3,
  title: 'Reporting',
  description: 'Detailed Analytics and Performance Reports With Actionable Insights for Growth'
}];


export function DigitalMarketing() {
  return (
    <Section id="digital-marketing" tone="ink" labelledBy="marketing-heading" className="!py-16 sm:!py-20 lg:!py-28 xl:!py-32">
			<Container>
				<div data-ev-id="ev_c000234884" className="text-center">
					<Reveal>
						<h2 data-ev-id="ev_d998ec27b2"
            id="marketing-heading"
            className="font-display text-[26px] font-bold leading-[1.1] tracking-[-0.02em] text-paper sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[48px]">

							Digital Marketing <span data-ev-id="ev_bdc47fb449" className="text-[#0c78e4]">Management</span>
						</h2>
						<p data-ev-id="ev_bf9aa4f1f9" className="mx-auto mt-3 max-w-[60ch] font-sans text-[15px] leading-[1.6] tracking-[-0.011em] text-paper/65 sm:mt-4 sm:text-[16px] lg:text-[17px]">
							Expert in Creating and Managing High-Performing Advertising Campaigns Across Meta and Google Platforms
						</p>
					</Reveal>
				</div>

				<div data-ev-id="ev_3292667b2a" className="mt-10 grid grid-cols-1 items-center gap-8 sm:mt-12 sm:gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
					{/* Features List */}
					<Reveal className="flex flex-col gap-5">
						{MARKETING_FEATURES.map((feature, index) =>
            <div data-ev-id="ev_cec5829c37"
            key={feature.title}
            className="flex items-start gap-3 rounded-xl border border-[#0c78e4]/20 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.05] sm:gap-4 sm:p-5"
            style={{ animationDelay: `${index * 100}ms` }}>

								<span data-ev-id="ev_fd7e88c574" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0c78e4]/15 sm:h-11 sm:w-11">
									<feature.icon size={22} className="text-[#0c78e4]" aria-hidden="true" />
								</span>
								<div data-ev-id="ev_1e38248255" className="flex flex-col gap-1">
									<h3 data-ev-id="ev_c5edc309e5" className="font-heading text-[16px] font-semibold tracking-[-0.011em] text-[#0c78e4] sm:text-[17px] lg:text-[18px]">
										{feature.title}
									</h3>
									<p data-ev-id="ev_1b8b1ffc1c" className="font-sans text-[13px] leading-[1.55] tracking-[-0.011em] text-paper/70 sm:text-[14px] lg:text-[15px]">
										{feature.description}
									</p>
								</div>
							</div>
            )}
					</Reveal>

					{/* Protected PDF Viewer - Max 40vh */}
					<Reveal delay={150}>
						<div data-ev-id="ev_1b2f814792" className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f1419] shadow-2xl">
							<div data-ev-id="ev_d7148b889f" className="flex items-center gap-2 border-b border-white/10 bg-[#1a1f26] px-3 py-2.5 sm:px-4 sm:py-3">
								<FileText size={16} className="text-[#0c78e4]" />
								<span data-ev-id="ev_79ffc5cbb6" className="font-heading text-[11px] font-medium text-paper/80 sm:text-[12px] lg:text-[13px]">Digital Marketing Portfolio</span>
							</div>
							<ProtectedPDF
                src="/pdfs/digital-marketing-portfolio.pdf"
                title="Digital Marketing Portfolio"
                maxHeight="50vh"
                className="w-full" />

						</div>
					</Reveal>
				</div>
			</Container>
		</Section>);

}