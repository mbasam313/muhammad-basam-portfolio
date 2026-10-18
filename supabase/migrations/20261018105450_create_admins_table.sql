/*
# Create admins table

1. New Tables
   - admins: maps auth.users ids to the admin role. First row is provisioned server-side.
2. Security
   - RLS enabled. Admins can read the roster; each user can read their own row. No anon access.
*/

create extension if not exists pgcrypto;

create table if not exists public.admins (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  created_at timestamptz not null default now()
);
alter table public.admins enable row level security;
