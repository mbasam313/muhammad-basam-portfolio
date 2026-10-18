import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  type?: 'website' | 'article' | 'profile';
  robots?: string;
  schema?: Record<string, unknown>;
}

const SITE_NAME = 'Muhammad Basam';
const SITE_ORIGIN = 'https://mbasamportfolio.site';
const OG_IMAGE = `${SITE_ORIGIN}/og-image.jpg`;

function getCanonicalUrl(path: string): string {
  return new URL(path || '/', SITE_ORIGIN).toString();
}

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

export function Seo({
  title,
  description,
  keywords,
  path,
  type = 'website',
  robots = 'index, follow',
  schema,
}: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const canonicalUrl = getCanonicalUrl(path);

    document.title = fullTitle;
    setMeta('name', 'description', description);
    if (keywords && keywords.length > 0) {
      setMeta('name', 'keywords', keywords.join(', '));
    } else {
      document.head.querySelector('meta[name="keywords"]')?.remove();
    }
    setMeta('name', 'robots', robots);

    (async () => {
      if (!supabase) return;
      const slug = path.replace(/^\//, '').split('/')[0] || 'home';
      const { data } = await supabase
        .from('pages')
        .select('seo')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();
      const seo = (data?.seo ?? {}) as Record<string, unknown>;
      if (seo.title) {
        const dbTitle = `${String(seo.title)} | ${SITE_NAME}`;
        document.title = dbTitle;
        setMeta('property', 'og:title', dbTitle);
        setMeta('name', 'twitter:title', dbTitle);
      }
      if (seo.description) {
        const desc = String(seo.description);
        setMeta('name', 'description', desc);
        setMeta('property', 'og:description', desc);
        setMeta('name', 'twitter:description', desc);
      }
    })();

    setLink('canonical', canonicalUrl);

    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', OG_IMAGE);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:locale', 'en_US');
    setMeta('property', 'og:image:alt', `${SITE_NAME} portfolio`);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', OG_IMAGE);
    setMeta('name', 'twitter:image:alt', `${SITE_NAME} portfolio`);

    if (schema) {
      setJsonLd('page-jsonld', schema);
    } else {
      const existing = document.getElementById('page-jsonld');
      if (existing) existing.remove();
    }
  }, [title, description, keywords, path, type, robots, schema]);

  return null;
}
