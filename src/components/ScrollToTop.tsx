import { useLayoutEffect } from 'react';
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

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (hash && getAnchorTarget(hash)) {
      return;
    }

    const scrollingElement = document.scrollingElement ?? document.documentElement;
    scrollingElement.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}
