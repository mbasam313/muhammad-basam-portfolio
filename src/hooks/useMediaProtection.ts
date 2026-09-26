import { useEffect } from 'react';

/**
 * Global media protection hook
 * Prevents common download methods site-wide
 */
export function useMediaProtection() {
	useEffect(() => {
		// Prevent keyboard shortcuts for saving
		const handleKeyDown = (e: KeyboardEvent) => {
			// Prevent Ctrl+S / Cmd+S (Save page)
			if ((e.ctrlKey || e.metaKey) && e.key === 's') {
				e.preventDefault();
			}
			// Prevent Ctrl+Shift+I / Cmd+Option+I (Dev tools) - optional, can be intrusive
			// Prevent Ctrl+U / Cmd+U (View source)
			if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
				e.preventDefault();
			}
		};

		// Prevent dragging images globally
		const handleDragStart = (e: DragEvent) => {
			const target = e.target as HTMLElement;
			if (target.tagName === 'IMG' || target.closest('.protected-media')) {
				e.preventDefault();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('dragstart', handleDragStart);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('dragstart', handleDragStart);
		};
	}, []);
}
