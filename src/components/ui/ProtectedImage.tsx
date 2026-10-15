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

    container.addEventListener('contextmenu', preventActions);
    container.addEventListener('dragstart', preventActions);

    return () => {
      container.removeEventListener('contextmenu', preventActions);
      container.removeEventListener('dragstart', preventActions);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="protected-media relative inline-block"
    >
      <img
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
          WebkitTouchCallout: 'none'
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10"
        style={{ background: 'transparent' }}
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}

interface ProtectedBgImageProps {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}

export function ProtectedBgImage({ src, alt, className = '', children }: ProtectedBgImageProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`protected-media ${className}`}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {children}
    </div>
  );
}
