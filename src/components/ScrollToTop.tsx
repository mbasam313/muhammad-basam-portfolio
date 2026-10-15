import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

function getAnchorTarget(hash: string): HTMLElement | null {
  if (!hash) return null;

  const rawId = hash.slice(1);
  let id: string;
  try {
    id = decodeURIComponent(rawId);
  } catch {
    return null;
  }

  return document.getElementById(id) ?? document.getElementsByName(id)[0] ?? null;
}

function resetDocumentScroll(): void {
  const scrollingElement = document.scrollingElement ?? document.documentElement;
  scrollingElement.scrollLeft = 0;
  scrollingElement.scrollTop = 0;
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const reconcileInitialPosition = () => {
      const anchor = getAnchorTarget(window.location.hash);
      if (anchor) {
        anchor.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'auto' });
        return;
      }

      resetDocumentScroll();
    };

    window.addEventListener('pageshow', reconcileInitialPosition);
    window.addEventListener('load', reconcileInitialPosition);
    return () => {
      window.removeEventListener('pageshow', reconcileInitialPosition);
      window.removeEventListener('load', reconcileInitialPosition);
    };
  }, []);

  useLayoutEffect(() => {
    const anchor = getAnchorTarget(hash);
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'auto' });
      return;
    }

    resetDocumentScroll();
  }, [pathname, hash]);

  return null;
}
