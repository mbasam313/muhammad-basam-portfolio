/*
# Harden touch_updated_at function

1. Purpose
   - Sets a fixed search_path on the touch_updated_at trigger function so it cannot be
     influenced by role-configured search paths. Behavior is unchanged.
2. Security
   - Addresses the database linter's "function_search_path_mutable" warning.
*/

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;
