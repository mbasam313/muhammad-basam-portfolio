/*
# Portfolio CMS Schema

1. Overview
   - Creates the persistent content model for the portfolio website's admin dashboard.
   - Public pages read from these tables at runtime; admins edit them via the dashboard.

2. New Tables
   - site_settings (singleton row): brand name, contact info, social links, default SEO, default OG image.
   - pages: editable content for homepage, about, contact pages. `slug` unique; `content` jsonb section payloads; `seo` jsonb per-page overrides.
   - services: the five service pages. `slug` unique; `content` jsonb; `seo` jsonb; `sort_order`; `published`.
   - projects: portfolio projects. `slug` unique; `status` ('draft'|'published'); `featured`; `cover_image`; `gallery` jsonb; `seo` jsonb.
   - pricing_plans: pricing entries with status/featured/sort_order and features array.
   - media: media library metadata. `storage_path` unique; alt text, caption, size, mime.
   - testimonials, faqs: content collections with status and sort_order.
   - contact_messages: visitor submissions with private admin fields (status, admin_notes, ip_hash).

3. Security
   - RLS enabled on every table.
   - anon can only SELECT published content and INSERT validated contact_messages (honeypot + length + email checks in WITH CHECK).
   - anon can never read contact_messages. All other anon writes denied by default.
   - Admins (users in `admins` table via is_admin()) get full CRUD on content tables.

4. Notes
   - jsonb `content` fields allow flexible per-section editing while keeping typed columns for queryable fields.
   - Idempotent: IF NOT EXISTS everywhere, policies drop-first.
*/

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.admins where id = auth.uid());
$$;

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---------- tables ----------

create table if not exists public.site_settings (
  id int primary key default 1 check (id = 1),
  brand_name text not null default 'Muhammad Basam',
  tagline text,
  contact_email text,
  contact_phone text,
  location text,
  whatsapp_number text,
  social_links jsonb not null default '[]'::jsonb,
  default_seo_title text,
  default_seo_description text,
  default_og_image text,
  updated_at timestamptz not null default now()
);
alter table public.site_settings enable row level security;

create table if not exists public.pages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  content jsonb not null default '{}'::jsonb,
  seo jsonb not null default '{}'::jsonb,
  published boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.pages enable row level security;

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  summary text,
  icon text,
  content jsonb not null default '{}'::jsonb,
  seo jsonb not null default '{}'::jsonb,
  published boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.services enable row level security;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  category text,
  description text,
  body text,
  client text,
  services_provided text,
  project_year text,
  live_url text,
  cover_image text,
  gallery jsonb not null default '[]'::jsonb,
  featured boolean not null default false,
  status text not null default 'draft' check (status in ('draft','published')),
  sort_order int not null default 0,
  seo jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.projects enable row level security;

create table if not exists public.pricing_plans (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null default 'per-project',
  service_name text,
  price text,
  period text,
  description text,
  features jsonb not null default '[]'::jsonb,
  cta_label text,
  cta_url text,
  featured boolean not null default false,
  status text not null default 'published' check (status in ('draft','published')),
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.pricing_plans enable row level security;

create table if not exists public.media (
  id uuid primary key default gen_random_uuid(),
  storage_path text not null unique,
  file_name text not null,
  mime_type text not null,
  file_size bigint,
  alt_text text,
  caption text,
  created_at timestamptz not null default now()
);
alter table public.media enable row level security;

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  author_name text not null,
  author_role text,
  quote text not null,
  avatar_url text,
  status text not null default 'published' check (status in ('draft','published')),
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.testimonials enable row level security;

create table if not exists public.faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  category text not null default 'general',
  status text not null default 'published' check (status in ('draft','published')),
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.faqs enable row level security;

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  website text,
  status text not null default 'new' check (status in ('new','in_progress','replied','archived','spam')),
  admin_notes text,
  ip_hash text,
  created_at timestamptz not null default now()
);
alter table public.contact_messages enable row level security;

-- ---------- indexes ----------

create index if not exists idx_projects_status_featured on public.projects (status, featured, sort_order);
create index if not exists idx_pricing_status_order on public.pricing_plans (status, category, sort_order);
create index if not exists idx_messages_status_created on public.contact_messages (status, created_at);
create index if not exists idx_services_order on public.services (sort_order);

-- ---------- updated_at triggers ----------

do $$
declare t text;
begin
  foreach t in array array['pages','services','projects','pricing_plans','testimonials','faqs','site_settings'] loop
    execute format('drop trigger if exists trg_touch_%1$s on public.%1$s', t);
    execute format('create trigger trg_touch_%1$s before update on public.%1$s for each row execute function public.touch_updated_at()', t);
  end loop;
end $$;

-- ---------- RLS policies ----------

drop policy if exists "settings_public_read" on public.site_settings;
create policy "settings_public_read" on public.site_settings for select to anon, authenticated using (true);
drop policy if exists "settings_admin_write" on public.site_settings;
create policy "settings_admin_write" on public.site_settings for update to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "pages_public_read" on public.pages;
create policy "pages_public_read" on public.pages for select to anon, authenticated using (published = true or public.is_admin());
drop policy if exists "pages_admin_insert" on public.pages;
create policy "pages_admin_insert" on public.pages for insert to authenticated with check (public.is_admin());
drop policy if exists "pages_admin_update" on public.pages;
create policy "pages_admin_update" on public.pages for update to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "pages_admin_delete" on public.pages;
create policy "pages_admin_delete" on public.pages for delete to authenticated using (public.is_admin());

drop policy if exists "services_public_read" on public.services;
create policy "services_public_read" on public.services for select to anon, authenticated using (published = true or public.is_admin());
drop policy if exists "services_admin_insert" on public.services;
create policy "services_admin_insert" on public.services for insert to authenticated with check (public.is_admin());
drop policy if exists "services_admin_update" on public.services;
create policy "services_admin_update" on public.services for update to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "services_admin_delete" on public.services;
create policy "services_admin_delete" on public.services for delete to authenticated using (public.is_admin());

drop policy if exists "projects_public_read" on public.projects;
create policy "projects_public_read" on public.projects for select to anon, authenticated using (status = 'published' or public.is_admin());
drop policy if exists "projects_admin_insert" on public.projects;
create policy "projects_admin_insert" on public.projects for insert to authenticated with check (public.is_admin());
drop policy if exists "projects_admin_update" on public.projects;
create policy "projects_admin_update" on public.projects for update to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "projects_admin_delete" on public.projects;
create policy "projects_admin_delete" on public.projects for delete to authenticated using (public.is_admin());

drop policy if exists "pricing_public_read" on public.pricing_plans;
create policy "pricing_public_read" on public.pricing_plans for select to anon, authenticated using (status = 'published' or public.is_admin());
drop policy if exists "pricing_admin_insert" on public.pricing_plans;
create policy "pricing_admin_insert" on public.pricing_plans for insert to authenticated with check (public.is_admin());
drop policy if exists "pricing_admin_update" on public.pricing_plans;
create policy "pricing_admin_update" on public.pricing_plans for update to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "pricing_admin_delete" on public.pricing_plans;
create policy "pricing_admin_delete" on public.pricing_plans for delete to authenticated using (public.is_admin());

drop policy if exists "testimonials_public_read" on public.testimonials;
create policy "testimonials_public_read" on public.testimonials for select to anon, authenticated using (status = 'published' or public.is_admin());
drop policy if exists "testimonials_admin_insert" on public.testimonials;
create policy "testimonials_admin_insert" on public.testimonials for insert to authenticated with check (public.is_admin());
drop policy if exists "testimonials_admin_update" on public.testimonials;
create policy "testimonials_admin_update" on public.testimonials for update to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "testimonials_admin_delete" on public.testimonials;
create policy "testimonials_admin_delete" on public.testimonials for delete to authenticated using (public.is_admin());

drop policy if exists "faqs_public_read" on public.faqs;
create policy "faqs_public_read" on public.faqs for select to anon, authenticated using (status = 'published' or public.is_admin());
drop policy if exists "faqs_admin_insert" on public.faqs;
create policy "faqs_admin_insert" on public.faqs for insert to authenticated with check (public.is_admin());
drop policy if exists "faqs_admin_update" on public.faqs;
create policy "faqs_admin_update" on public.faqs for update to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "faqs_admin_delete" on public.faqs;
create policy "faqs_admin_delete" on public.faqs for delete to authenticated using (public.is_admin());

drop policy if exists "media_admin_read" on public.media;
create policy "media_admin_read" on public.media for select to authenticated using (public.is_admin());
drop policy if exists "media_admin_insert" on public.media;
create policy "media_admin_insert" on public.media for insert to authenticated with check (public.is_admin());
drop policy if exists "media_admin_update" on public.media;
create policy "media_admin_update" on public.media for update to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "media_admin_delete" on public.media;
create policy "media_admin_delete" on public.media for delete to authenticated using (public.is_admin());

drop policy if exists "messages_admin_read" on public.contact_messages;
create policy "messages_admin_read" on public.contact_messages for select to authenticated using (public.is_admin());
drop policy if exists "messages_anon_insert" on public.contact_messages;
create policy "messages_anon_insert" on public.contact_messages for insert to anon, authenticated with check (
  length(coalesce(name,'')) between 2 and 120
  and email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
  and length(coalesce(message,'')) between 1 and 5000
  and (website is null or website = '')
);
drop policy if exists "messages_admin_update" on public.contact_messages;
create policy "messages_admin_update" on public.contact_messages for update to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "messages_admin_delete" on public.contact_messages;
create policy "messages_admin_delete" on public.contact_messages for delete to authenticated using (public.is_admin());

drop policy if exists "admins_read" on public.admins;
create policy "admins_read" on public.admins for select to authenticated using (public.is_admin() or auth.uid() = id);
drop policy if exists "admins_admin_insert" on public.admins;
create policy "admins_admin_insert" on public.admins for insert to authenticated with check (public.is_admin());
drop policy if exists "admins_admin_delete" on public.admins;
create policy "admins_admin_delete" on public.admins for delete to authenticated using (public.is_admin() and auth.uid() <> id);

-- ---------- storage ----------

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('media','media', true, 5242880, array['image/png','image/jpeg','image/webp','image/svg+xml'])
on conflict (id) do update set
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = array['image/png','image/jpeg','image/webp','image/svg+xml'];

drop policy if exists "media_public_read" on storage.objects;
create policy "media_public_read" on storage.objects for select to anon, authenticated using (bucket_id = 'media');

drop policy if exists "media_admin_insert" on storage.objects;
create policy "media_admin_insert" on storage.objects for insert to authenticated with check (bucket_id = 'media' and public.is_admin());

drop policy if exists "media_admin_update" on storage.objects;
create policy "media_admin_update" on storage.objects for update to authenticated using (bucket_id = 'media' and public.is_admin());

drop policy if exists "media_admin_delete" on storage.objects;
create policy "media_admin_delete" on storage.objects for delete to authenticated using (bucket_id = 'media' and public.is_admin());
