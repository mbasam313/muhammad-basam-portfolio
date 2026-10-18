import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { PRICING_PLANS, SERVICES, BUSINESS_WEBSITES, ECOMMERCE_WEBSITES, type PricingPlan, type Service } from '@/data/site';

export interface UseContentResult<T> {
  data: T;
  fromDb: boolean;
  loading: boolean;
}

function useDbContent<T>(
  load: () => Promise<T | null>,
  fallback: T,
  deps: unknown[] = [],
): UseContentResult<T> {
  const [data, setData] = useState<T>(fallback);
  const [fromDb, setFromDb] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      let result: T | null = null;
      try {
        result = await load();
      } catch {
        result = null;
      }
      if (mounted && result !== null) {
        setData(result);
        setFromDb(true);
      }
      if (mounted) setLoading(false);
    })();
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, fromDb, loading };
}

function rowToPlan(row: Record<string, unknown>): PricingPlan {
  return {
    id: String(row.id),
    name: String(row.name ?? ''),
    category: (row.category === 'monthly' ? 'monthly' : 'per-project'),
    serviceName: String(row.service_name ?? ''),
    price: String(row.price ?? ''),
    period: String(row.period ?? ''),
    description: String(row.description ?? ''),
    features: Array.isArray(row.features) ? (row.features as string[]) : [],
    popular: Boolean(row.featured),
  }
}

function rowToService(row: Record<string, unknown>): Service {
  const c = (row.content ?? {}) as Record<string, unknown>;
  const staticMatch = SERVICES.find((s) => s.id === row.slug);
  return {
    id: String(row.slug),
    title: String(row.title ?? ''),
    eyebrow: String(c.eyebrow ?? staticMatch?.eyebrow ?? ''),
    summary: String(row.summary ?? ''),
    intro: String(c.intro ?? ''),
    description: String(c.description ?? ''),
    items: Array.isArray(c.items) ? (c.items as string[]) : [],
    benefits: Array.isArray(c.benefits) ? (c.benefits as Service['benefits']) : [],
    process: Array.isArray(c.process) ? (c.process as Service['process']) : [],
    faqs: Array.isArray(c.faqs) ? (c.faqs as Service['faqs']) : [],
    href: `/services/${row.slug}`,
    metaTitle: String((row.seo as Record<string, unknown>)?.title ?? staticMatch?.metaTitle ?? ''),
    metaDescription: String((row.seo as Record<string, unknown>)?.description ?? staticMatch?.metaDescription ?? ''),
    keywords: Array.isArray((row.seo as Record<string, unknown>)?.keywords)
      ? ((row.seo as Record<string, unknown>).keywords as string[])
      : (staticMatch?.keywords ?? []),
  };
}

function rowToProject(row: Record<string, unknown>) {
  return {
    id: String(row.slug),
    title: String(row.title ?? ''),
    description: String(row.description ?? ''),
    image: String(row.cover_image ?? ''),
  };
}

export function usePricingPlans(): UseContentResult<PricingPlan[]> {
  return useDbContent<PricingPlan[]>(
    async () => {
      if (!supabase) return null;
      const { data, error } = await supabase
        .from('pricing_plans')
        .select('*')
        .eq('status', 'published')
        .order('sort_order');
      if (error) return null;
      const rows = (data ?? []) as unknown as Record<string, unknown>[];
      if (rows.length === 0) return null;
      return rows.map(rowToPlan);
    },
    PRICING_PLANS,
  );
}

export function useServices(): UseContentResult<Service[]> {
  return useDbContent<Service[]>(
    async () => {
      if (!supabase) return null;
      const { data, error } = await supabase.from('services').select('*').eq('published', true).order('sort_order');
      if (error) return null;
      const rows = (data ?? []) as unknown as Record<string, unknown>[];
      if (rows.length === 0) return null;
      return rows.map(rowToService);
    },
    SERVICES,
  );
}

export interface WebProject {
  id: string;
  title: string;
  description: string;
  image: string;
}

export function usePortfolioProjects(): UseContentResult<{ business: WebProject[]; ecommerce: WebProject[] }> {
  return useDbContent<{ business: WebProject[]; ecommerce: WebProject[] }>(
    async () => {
      if (!supabase) return null;
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('status', 'published')
        .order('sort_order');
      if (error) return null;
      const rows = (data ?? []) as unknown as Record<string, unknown>[];
      if (rows.length === 0) return null;
      const mapped = rows.map(rowToProject);
      return {
        business: mapped.filter((p) => {
          const row = rows.find((r) => String(r.slug) === p.id);
          return row?.category === 'business';
        }),
        ecommerce: mapped.filter((p) => {
          const row = rows.find((r) => String(r.slug) === p.id);
          return row?.category === 'ecommerce';
        }),
      };
    },
    { business: BUSINESS_WEBSITES, ecommerce: ECOMMERCE_WEBSITES },
  );
}

export interface SiteSettings {
  brandName: string;
  tagline: string;
  contactEmail: string;
  contactPhone: string;
  location: string;
  whatsappNumber: string;
  seoTitle: string;
  seoDescription: string;
}

export function useSiteSettings(): UseContentResult<SiteSettings | null> {
  return useDbContent<SiteSettings | null>(
    async () => {
      if (!supabase) return null;
      const { data, error } = await supabase.from('site_settings').select('*').eq('id', 1).maybeSingle();
      if (error || !data) return null;
      return {
        brandName: String(data.brand_name ?? ''),
        tagline: String(data.tagline ?? ''),
        contactEmail: String(data.contact_email ?? ''),
        contactPhone: String(data.contact_phone ?? ''),
        location: String(data.location ?? ''),
        whatsappNumber: String(data.whatsapp_number ?? ''),
        seoTitle: String(data.default_seo_title ?? ''),
        seoDescription: String(data.default_seo_description ?? ''),
      };
    },
    null,
  );
}
