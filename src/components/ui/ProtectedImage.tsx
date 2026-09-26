import { useEffect, useRef } from 'react';

interface ProtectedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
}

/**
 * Protected Image Component
 * - Disables right-click context menu
 * - Prevents drag and drop
 * - Adds invisible overlay to block direct interaction
 * - Disables image selection
 */
export function ProtectedImage({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  decoding = 'async'
}: ProtectedImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preventActions = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Prevent context menu (right-click)
    container.addEventListener('contextmenu', preventActions);
    // Prevent drag start
    container.addEventListener('dragstart', preventActions);
    // Prevent selection
    container.addEventListener('selectstart', preventActions);

    return () => {
      container.removeEventListener('contextmenu', preventActions);
      container.removeEventListener('dragstart', preventActions);
      container.removeEventListener('selectstart', preventActions);
    };
  }, []);

  return (
    <div data-ev-id="ev_2e867c64a6"
    ref={containerRef}
    className="protected-media relative inline-block"
    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>

			<img data-ev-id="ev_23d2b63a38"
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      style={{
        pointerEvents: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        WebkitTouchCallout: 'none'
      }} />

			{/* Invisible overlay to block direct image interaction */}
			<div data-ev-id="ev_88079d6533"
      aria-hidden="true"
      className="absolute inset-0 z-10"
      style={{ background: 'transparent' }}
      onContextMenu={(e) => e.preventDefault()} />

		</div>);

}

/**
 * Protected Background Image Component
 * Uses CSS background-image which is harder to download
 */
interface ProtectedBgImageProps {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}

export function ProtectedBgImage({ src, alt, className = '', children }: ProtectedBgImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preventActions = (e: Event) => {
      e.preventDefault();
      return false;
    };

    container.addEventListener('contextmenu', preventActions);
    container.addEventListener('dragstart', preventActions);

    return () => {
      container.removeEventListener('contextmenu', preventActions);
      container.removeEventListener('dragstart', preventActions);
    };
  }, []);

  return (
    <div data-ev-id="ev_0597bbf557"
    ref={containerRef}
    role="img"
    aria-label={alt}
    className={`protected-media ${className}`}
    style={{
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      userSelect: 'none',
      WebkitUserSelect: 'none'
    }}
    onContextMenu={(e) => e.preventDefault()}>

			{children}
		</div>);

}