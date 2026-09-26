import type { ReactNode } from 'react';
import { Link } from 'react-router';

type Variant = 'primary' | 'outline' | 'ghost-light';

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: Variant;
  size?: 'md' | 'sm';
  className?: string;
}

const BASE =
'inline-flex items-center justify-center rounded-pill font-heading font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2';

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-electric-blue text-white hover:bg-[#0062c4]',
  outline: 'border border-ink/80 text-ink hover:bg-ink hover:text-paper',
  'ghost-light': 'border border-white/35 text-paper hover:bg-white hover:text-ink'
};

const SIZES: Record<string, string> = {
  md: 'px-5 py-[10px] text-[15px] tracking-[-0.011em] sm:px-6 sm:py-[11px] sm:text-[16px] lg:text-[17px]',
  sm: 'px-4 py-2 text-[13px] tracking-[-0.011em] sm:px-[18px] sm:text-[14px]'
};

export function ButtonLink({ to, children, variant = 'primary', size = 'md', className = '' }: ButtonLinkProps) {
  return (
    <Link data-ev-id="ev_041f761d25" to={to} className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}>
			{children}
		</Link>);

}

interface ArrowLinkProps {
  to: string;
  children: ReactNode;
  invert?: boolean;
  className?: string;
}

export function ArrowLink({ to, children, invert = false, className = '' }: ArrowLinkProps) {
  return (
    <Link data-ev-id="ev_5812aff4ea"
    to={to}
    className={`group inline-flex min-h-[44px] items-center gap-1 px-1 py-2 font-heading text-[15px] tracking-[-0.011em] transition-colors sm:text-[16px] lg:text-[17px] ${
    invert ? 'text-paper/80 hover:text-paper' : 'text-link-blue hover:text-[#004e9e]'} ${
    className}`}>

			<span data-ev-id="ev_3f7303a9e7" className="group-hover:underline underline-offset-4">{children}</span>
			<span data-ev-id="ev_f715e9f39f" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
				›
			</span>
		</Link>);

}