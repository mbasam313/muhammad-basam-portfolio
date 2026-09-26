import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return <div data-ev-id="ev_b8a8d9265d" className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10 xl:max-w-[1320px] 2xl:max-w-[1440px] ${className}`}>{children}</div>;
}

interface SectionProps {
  children: ReactNode;
  id?: string;
  tone?: 'paper' | 'canvas' | 'ink';
  className?: string;
  labelledBy?: string;
}

const TONES: Record<string, string> = {
  paper: 'bg-paper text-ink',
  canvas: 'bg-canvas text-ink',
  ink: 'bg-ink text-paper'
};

export function Section({ children, id, tone = 'paper', className = '', labelledBy }: SectionProps) {
  return (
    <section data-ev-id="ev_811dff533c"
    id={id}
    aria-labelledby={labelledBy}
    className={`${TONES[tone]} py-14 sm:py-20 lg:py-24 xl:py-[100px] 2xl:py-[120px] ${className}`}>

			{children}
		</section>);

}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  id?: string;
  description?: string;
  invert?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  id,
  description,
  invert = false,
  className = ''
}: SectionHeadingProps) {
  return (
    <div data-ev-id="ev_978a65bc70" className={`flex flex-col gap-4 ${className}`}>
			{eyebrow ?
      <span data-ev-id="ev_f1c53e2d6f"
      className={`font-heading text-[13px] font-medium uppercase tracking-[0.14em] ${
      invert ? 'text-paper/55' : 'text-mid-gray'}`
      }>

					{eyebrow}
				</span> :
      null}
			<h2 data-ev-id="ev_6dfae77acb"
      id={id}
      className={`max-w-[18ch] font-display text-[26px] font-bold leading-[1.1] tracking-[-0.01em] text-balance sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[48px] ${
      invert ? 'text-paper' : 'text-ink'}`
      }>

				{title}
			</h2>
			{description ?
      <p data-ev-id="ev_9d77417ede"
      className={`max-w-[58ch] font-sans text-[15px] leading-[1.6] tracking-[-0.011em] text-pretty sm:text-[16px] lg:text-[17px] ${
      invert ? 'text-paper/70' : 'text-mid-gray'}`
      }>

					{description}
				</p> :
      null}
		</div>);

}