import { useEffect, useRef } from 'react';
import { FileText } from 'lucide-react';

interface ProtectedPDFProps {
  src: string;
  title: string;
  className?: string;
  maxHeight?: string;
}

/**
 * Protected PDF Viewer Component
 * - Renders PDF in a protected container
 * - Disables right-click
 * - Prevents easy download
 */
export function ProtectedPDF({ src, title, className = '', maxHeight = '40vh' }: ProtectedPDFProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preventActions = (e: Event) => {
      e.preventDefault();
      return false;
    };

    container.addEventListener('contextmenu', preventActions);

    return () => {
      container.removeEventListener('contextmenu', preventActions);
    };
  }, []);

  return (
    <div data-ev-id="ev_23000eae44"
    ref={containerRef}
    className={`protected-media relative ${className}`}
    style={{ height: maxHeight, userSelect: 'none' }}
    onContextMenu={(e) => e.preventDefault()}>

			<iframe data-ev-id="ev_83c926dbb6"
        src={`${src}#toolbar=0&navpanes=0&scrollbar=0`}
        title={title}
        className="h-full w-full border-0"
        style={{ pointerEvents: 'auto' }} />

			{/* Overlay to prevent right-click on iframe content */}
			<div data-ev-id="ev_8ad85d7b8f"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10" />

		</div>);

}

/**
 * Protected PDF Card with header
 */
interface ProtectedPDFCardProps {
  title: string;
  subtitle?: string;
  pdfUrl: string;
}

export function ProtectedPDFCard({ title, subtitle, pdfUrl }: ProtectedPDFCardProps) {
  return (
    <article data-ev-id="ev_17e531775b" className="group flex flex-col overflow-hidden rounded-[14px] bg-[#1a1f26] ring-1 ring-white/10 transition-all duration-300 hover:ring-white/20">
			<div data-ev-id="ev_0b666dc26d" className="flex items-center gap-2 border-b border-white/10 bg-[#0f1419] px-3 py-2.5 sm:px-4 sm:py-3">
				<FileText size={14} className="text-[#0c78e4]" />
				<span data-ev-id="ev_c90de921a7" className="font-heading text-[11px] text-white/60 sm:text-[12px]">PDF Document</span>
			</div>
			<ProtectedPDF src={pdfUrl} title={title} className="w-full" maxHeight="40vh" />
			<div data-ev-id="ev_b79a8e5d34" className="flex flex-col gap-0.5 p-3 sm:p-4">
				<h4 data-ev-id="ev_0ba51cbfc1" className="font-heading text-[14px] font-semibold tracking-[-0.011em] text-white sm:text-[15px]">{title}</h4>
				{subtitle && <p data-ev-id="ev_46d5ddcc6b" className="font-sans text-[11px] tracking-[-0.011em] text-white/50 sm:text-[12px]">{subtitle}</p>}
			</div>
		</article>);

}