import { useEffect } from 'react';

/**
 * Global media protection hook
 * Prevents image dragging site-wide without affecting text selection
 */
export function useMediaProtection() {
	useEffect(() => {
		const handleDragStart = (e: DragEvent) => {
			const target = e.target as HTMLElement;
			if (target.tagName === 'IMG' || target.closest('.protected-media')) {
				e.preventDefault();
			}
		};

		const handleContextMenu = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (target.tagName === 'IMG' || target.closest('.protected-media')) {
				e.preventDefault();
			}
		};

		document.addEventListener('dragstart', handleDragStart);
		document.addEventListener('contextmenu', handleContextMenu);

		return () => {
			document.removeEventListener('dragstart', handleDragStart);
			document.removeEventListener('contextmenu', handleContextMenu);
		};
	}, []);
}
