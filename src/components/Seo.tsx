import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  type?: 'website' | 'article' | 'profile';
  schema?: Record<string, unknown>;
}

const SITE_NAME = 'Muhammad Basam';
const OG_IMAGE = '/og-image.jpeg';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id: string, data: Record<string, unknown>) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = id;
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
}

export function Seo({ title, description, keywords, path, type = 'website', schema }: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    setMeta('name', 'description', description);
    if (keywords && keywords.length > 0) {
      setMeta('name', 'keywords', keywords.join(', '));
    }

    setLink('canonical', path);

    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', OG_IMAGE);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:url', path);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', OG_IMAGE);

    if (schema) {
      setJsonLd('page-jsonld', schema);
    } else {
      const existing = document.getElementById('page-jsonld');
      if (existing) existing.remove();
    }
  }, [title, description, keywords, path, type, schema]);

  return null;
}
