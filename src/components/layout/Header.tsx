import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

interface NavLink {
  label: string;
  href: string;
  children?: {label: string;href: string;external?: boolean;}[];
}

const NAV_LINKS: NavLink[] = [
{ label: 'Home', href: '/' },
{ label: 'About', href: '/about' },
{ label: 'Services', href: '/services' },
{ label: 'Portfolio', href: '/portfolio' },
{
  label: 'Products',
  href: '#',
  children: [
  { label: 'VisualWinner', href: 'https://visualwinner.com', external: true },
  { label: 'Prompt Enhancer', href: 'https://promptenhancer.com', external: true },
  { label: 'Workora', href: 'https://workora.com', external: true }]

},
{ label: 'Pricing', href: '/pricing' },
{ label: 'Contact', href: '/contact' }];


export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header data-ev-id="ev_3dc8c5b539"
    className={`sticky top-0 z-50 transition-colors duration-300 ${
    scrolled || open ? 'bg-white/90 backdrop-blur-xl border-b border-hairline/60' : 'bg-transparent'}`
    }>

			<Container>
				<div data-ev-id="ev_395c2570a5" className="flex h-[72px] items-center justify-between gap-6">
					<Link data-ev-id="ev_e14e344807"
          to="/"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 rounded-sm">

						<Logo className="h-9 w-auto" />
					</Link>

					<nav data-ev-id="ev_eb11f05f54" aria-label="Main" className="hidden lg:block">
						<ul data-ev-id="ev_ef97e0970c" className="flex flex-row items-center gap-8">
							{NAV_LINKS.map((link) =>
              <li data-ev-id="ev_5ee3f774c1"
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setDropdownOpen(link.label)}
              onMouseLeave={() => setDropdownOpen(null)}>

									{link.children ?
                <>
											<button data-ev-id="ev_7556134104"
                  type="button"
                  className="inline-flex items-center gap-1 font-heading text-[14px] tracking-[-0.011em] text-deep-gray transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 rounded-sm"
                  aria-expanded={dropdownOpen === link.label}
                  aria-haspopup="true">

												{link.label}
												<ChevronDown size={14} aria-hidden="true" />
											</button>
											{dropdownOpen === link.label &&
                  <ul data-ev-id="ev_a7acde3405" className="absolute left-0 top-full pt-2">
													<li data-ev-id="ev_6f4df3ccbc" className="min-w-[180px] rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/5">
														{link.children.map((child) =>
                      <a data-ev-id="ev_c2bd5b9fa9"
                      key={child.label}
                      href={child.href}
                      target={child.external ? '_blank' : undefined}
                      rel={child.external ? 'noopener noreferrer' : undefined}
                      className="block px-4 py-2 font-heading text-[14px] text-deep-gray transition-colors hover:bg-canvas hover:text-ink">

																{child.label}
															</a>
                      )}
													</li>
												</ul>
                  }
										</> :

                <Link data-ev-id="ev_04fd676c33"
                to={link.href}
                className="font-heading text-[14px] tracking-[-0.011em] text-deep-gray transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 rounded-sm">

											{link.label}
										</Link>
                }
								</li>
              )}
						</ul>
					</nav>

					<div data-ev-id="ev_ac18741dcb" className="hidden lg:block">
						<ButtonLink to="/contact" size="sm">
							Let's Work Together
						</ButtonLink>
					</div>

					<button data-ev-id="ev_38397b2f05"
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-pill text-ink transition-colors hover:bg-cool-wash focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue">

						{open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
					</button>
				</div>
			</Container>

			{open ?
      <div data-ev-id="ev_72e71a3c8b" id="mobile-nav" className="lg:hidden border-t border-hairline/60 bg-white/95 backdrop-blur-xl">
					<Container>
						<nav data-ev-id="ev_4094ca7672" aria-label="Mobile" className="flex flex-col gap-1 py-6">
							{NAV_LINKS.map((link) =>
            link.children ?
            <div data-ev-id="ev_659fd9d525" key={link.label} className="flex flex-col gap-1">
										<span data-ev-id="ev_0c0b99fee3" className="py-3 font-heading text-[18px] font-medium tracking-[-0.015em] text-ink sm:text-[20px]">
											{link.label}
										</span>
										{link.children.map((child) =>
              <a data-ev-id="ev_66d7d09b65"
              key={child.label}
              href={child.href}
              target={child.external ? '_blank' : undefined}
              rel={child.external ? 'noopener noreferrer' : undefined}
              onClick={() => setOpen(false)}
              className="rounded-sm py-2.5 pl-4 font-heading text-[16px] text-mid-gray transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue sm:text-[17px]">

												{child.label}
											</a>
              )}
									</div> :

            <Link data-ev-id="ev_1bd7c27dee"
            key={link.label}
            to={link.href}
            onClick={() => setOpen(false)}
            className="rounded-sm py-3 font-heading text-[18px] font-medium tracking-[-0.015em] text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue sm:text-[20px]">

										{link.label}
									</Link>

            )}
							<div data-ev-id="ev_f534136b0e" className="pt-4">
								<ButtonLink to="/contact" className="w-full">
									Let's Work Together
								</ButtonLink>
							</div>
						</nav>
					</Container>
				</div> :
      null}
		</header>);

}