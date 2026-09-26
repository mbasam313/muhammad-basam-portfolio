import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface RevealProps {
	children: ReactNode;
	delay?: number;
	className?: string;
	as?: 'div' | 'li';
}

export function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) {
			return;
		}

		if (typeof IntersectionObserver === 'undefined') {
			setVisible(true);
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisible(true);
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	const Tag = as;

	return (
		<Tag
			ref={ref as never}
			className={`reveal ${visible ? 'reveal-in' : ''} ${className}`}
			style={{ animationDelay: `${delay}ms` }}
		>
			{children}
		</Tag>
	);
}
