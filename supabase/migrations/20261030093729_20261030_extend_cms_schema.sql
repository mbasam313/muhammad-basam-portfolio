/*
# Extend CMS schema for full content management

1. Purpose
   - Adds a `portfolio_items` table to manage graphic design collections (logos, ad creatives, SM posts) and digital marketing portfolio entries.
   - Adds a `collection` column to `projects` to distinguish website design projects from branding projects and digital marketing case studies.
   - Adds a `page_type` column to `pages` to classify page kinds.
   - Adds `service_id` column to `pricing_plans` for stable service-pricing relationships.
   - Creates indexes for portfolio_items by collection and sort order.

2. New Tables
   - `portfolio_items`: generic items for graphic design collections and digital marketing entries.
     Columns: id, collection (e.g. 'logos','ad_creatives','sm_posts','digital_marketing'),
     title, description, image_url, pdf_url, category, sort_order, status, featured,
     content (jsonb for bullet points, features, etc.), created_at, updated_at.

3. Modified Tables
   - `projects`: adds `collection` text column (default 'website') to separate website/branding/digital_marketing.
   - `pages`: adds `page_type` text column (default 'standard').
   - `pricing_plans`: adds `service_id` text column for stable FK to services.slug.

4. Security
   - RLS enabled on portfolio_items with same pattern as other content tables:
     anon/authenticated can SELECT published items; admin can do all CRUD.
   - Grants added for portfolio_items.
   - No destructive changes to existing tables or data.
*/

-- ---------- portfolio_items table ----------
create table if not exists public.portfolio_items (
  id uuid primary key default gen_random_uuid(),
  collection text not null default 'logos',
  title text not null default '',
  description text,
  image_url text,
  pdf_url text,
  category text,
  content jsonb not null default '{}'::jsonb,
  sort_order int not null default 0,
  status text not null default 'published' check (status in ('draft','published')),
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.portfolio_items enable row level security;

-- ---------- column additions (idempotent) ----------
do $$
begin
  if not exists (select 1 from information_schema.columns where table_name = 'projects' and column_name = 'collection') then
    alter table public.projects add column collection text not null default 'website';
  end if;
  if not exists (select 1 from information_schema.columns where table_name = 'pages' and column_name = 'page_type') then
    alter table public.pages add column page_type text not null default 'standard';
  end if;
  if not exists (select 1 from information_schema.columns where table_name = 'pricing_plans' and column_name = 'service_id') then
    alter table public.pricing_plans add column service_id text;
  end if;
end $$;

-- ---------- indexes ----------
create index if not exists idx_portfolio_items_collection_order on public.portfolio_items (collection, status, sort_order);
create index if not exists idx_projects_collection on public.projects (collection, status, sort_order);

-- ---------- updated_at trigger for portfolio_items ----------
drop trigger if exists trg_touch_portfolio_items on public.portfolio_items;
create trigger trg_touch_portfolio_items
  before update on public.portfolio_items
  for each row execute function public.touch_updated_at();

-- ---------- RLS policies for portfolio_items ----------
drop policy if exists "portfolio_items_public_read" on public.portfolio_items;
create policy "portfolio_items_public_read" on public.portfolio_items
  for select to anon, authenticated
  using (status = 'published' or public.is_admin());

drop policy if exists "portfolio_items_admin_insert" on public.portfolio_items;
create policy "portfolio_items_admin_insert" on public.portfolio_items
  for insert to authenticated with check (public.is_admin());

drop policy if exists "portfolio_items_admin_update" on public.portfolio_items;
create policy "portfolio_items_admin_update" on public.portfolio_items
  for update to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "portfolio_items_admin_delete" on public.portfolio_items;
create policy "portfolio_items_admin_delete" on public.portfolio_items
  for delete to authenticated using (public.is_admin());

-- ---------- grants ----------
grant select on public.portfolio_items to anon, authenticated;
grant insert, update, delete on public.portfolio_items to authenticated;

-- Backfill collection for existing projects
update public.projects set collection = 'website' where collection is null or collection = '';
