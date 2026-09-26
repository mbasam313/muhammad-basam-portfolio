import { Link } from 'react-router';
import { Container } from '@/components/ui/Section';
import { Logo } from '@/components/ui/Logo';
import { NAV_LINKS, FOOTER_SERVICES, FOOTER_PRODUCTS, FOOTER_LEGAL, PROFILE } from '@/data/site';

const LINK_CLASS =
'inline-flex min-h-[44px] items-center font-heading text-[13px] leading-[1.6] tracking-[-0.011em] text-mid-gray transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue rounded-sm sm:min-h-0 sm:text-[14px]';

export function Footer() {
  return (
    <footer data-ev-id="ev_8da7c14ec0" className="bg-canvas text-ink safe-area-bottom">
			<Container>
				<div data-ev-id="ev_e1f6f24bc0" className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 sm:gap-12 sm:py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-20">
					{/* Column 1: Logo with Description */}
					<div data-ev-id="ev_11847e8fac" className="flex flex-col gap-5">
						<Logo className="h-8 w-auto max-w-fit" />
						<p data-ev-id="ev_8a948a69dc" className="max-w-[38ch] font-sans text-[13px] leading-[1.6] tracking-[-0.011em] text-mid-gray text-pretty sm:text-[14px]">
							{PROFILE.shortBio}
						</p>
						<p data-ev-id="ev_619f906f12" className="font-sans text-[13px] leading-[1.6] tracking-[-0.011em] text-mid-gray sm:text-[14px]">
							{PROFILE.location}
						</p>
					</div>

					{/* Column 2: Navigation */}
					<nav data-ev-id="ev_c0118593b0" aria-label="Footer Navigation" className="flex flex-col gap-3">
						<h2 data-ev-id="ev_a4a47f93e4" className="font-heading text-[11px] font-medium uppercase tracking-[0.12em] text-deep-gray sm:text-[12px] sm:tracking-[0.14em] lg:text-[13px]">
							Navigation
						</h2>
						{NAV_LINKS.map((link) =>
            <Link data-ev-id="ev_0cf24cd282" key={link.label} to={link.href} className={LINK_CLASS}>
								{link.label}
							</Link>
            )}
					</nav>

					{/* Column 3: Services */}
					<nav data-ev-id="ev_984842ca1e" aria-label="Services" className="flex flex-col gap-3">
						<h2 data-ev-id="ev_86cc1e6004" className="font-heading text-[11px] font-medium uppercase tracking-[0.12em] text-deep-gray sm:text-[12px] sm:tracking-[0.14em] lg:text-[13px]">
							Services
						</h2>
						{FOOTER_SERVICES.map((link) =>
            <Link data-ev-id="ev_2d681961c4" key={link.label} to={link.href} className={LINK_CLASS}>
								{link.label}
							</Link>
            )}
					</nav>

					{/* Column 4: Products */}
					<div data-ev-id="ev_cbbc85d085" className="flex flex-col gap-3">
						<h2 data-ev-id="ev_d5c53b8e9b" className="font-heading text-[11px] font-medium uppercase tracking-[0.12em] text-deep-gray sm:text-[12px] sm:tracking-[0.14em] lg:text-[13px]">
							Products
						</h2>
						{FOOTER_PRODUCTS.map((link) =>
            <a data-ev-id="ev_c848009087"
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASS}>

								{link.label}
							</a>
            )}
					</div>
				</div>

				{/* Bottom Bar */}
				<div data-ev-id="ev_c050723dd0" className="flex flex-col gap-4 border-t border-hairline py-8 sm:flex-row sm:items-center sm:justify-between">
					<p data-ev-id="ev_bb88e6c8b2" className="font-sans text-[12px] leading-[1.5] tracking-[-0.01em] text-mid-gray">
						© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
					</p>
					<nav data-ev-id="ev_9f5916d5d2" aria-label="Legal" className="flex flex-row flex-wrap gap-6">
						{FOOTER_LEGAL.map((link) =>
            <Link data-ev-id="ev_eb5c6facb1"
            key={link.label}
            to={link.href}
            className="inline-flex min-h-[44px] items-center font-sans text-[13px] tracking-[-0.01em] text-mid-gray transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue rounded-sm px-1 sm:text-[12px] sm:min-h-0 sm:px-0">

								{link.label}
							</Link>
            )}
					</nav>
				</div>
			</Container>
		</footer>);

}