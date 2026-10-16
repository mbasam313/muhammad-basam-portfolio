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

function setDocumentScroll(left: number, top: number): void {
  const scrollingElement = document.scrollingElement ?? document.documentElement;
  scrollingElement.scrollLeft = left;
  scrollingElement.scrollTop = top;
  window.scrollTo({ top, left, behavior: 'auto' });
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const anchor = getAnchorTarget(hash);
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'auto' });
      return;
    }

    setDocumentScroll(0, 0);
  }, [pathname, hash]);

  return null;
}
