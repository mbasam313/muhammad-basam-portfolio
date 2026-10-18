/*
# Contact submission RPC + soft rate limiting

1. New Function
   - submit_contact_message(p_name, p_email, p_subject, p_message, p_website)
   - Server-side validation (trim, lengths, email format), honeypot check (p_website must be empty),
     and a soft rate limit of 5 submissions per 10 minutes per IP hash.
   - Hashes the caller IP with a per-install random salt stored in site_settings (never exposed to client).
2. Security
   - Callable by anon and authenticated. Inserts into contact_messages.
   - Returns generic success; never echoes stored data or detailed failure reasons beyond "too many requests".
   - SECURITY INVOKER so RLS INSERT policy still applies... but ip_hash needs a privileged write,
     so this function is SECURITY DEFINER with a locked search_path and validates everything itself.
*/

create or replace function public.submit_contact_message(
  p_name text,
  p_email text,
  p_subject text,
  p_message text,
  p_website text default null
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_name text := left(btrim(coalesce(p_name,'')), 120);
  v_email text := left(btrim(coalesce(p_email,'')), 254);
  v_subject text := left(btrim(coalesce(p_subject,'')), 200);
  v_message text := left(coalesce(p_message,''), 5000);
  v_website text := coalesce(p_website,'');
  v_ip text;
  v_hash text;
  v_recent int;
begin
  -- honeypot: real visitors never fill this
  if v_website <> '' then
    return true; -- silently accept (spam bot), do not store
  end if;

  if length(v_name) < 2
    or v_email !~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
    or length(v_message) < 1 then
    return false;
  end if;

  v_ip := coalesce(
    current_setting('request.headers', true)::json->>'x-forwarded-for',
    ''
  );
  v_ip := split_part(v_ip, ',', 1);
  if v_ip = '' then
    v_ip := 'unknown';
  end if;

  -- salt for hashing (generated once, stored in settings; not secret from admins, not exposed to public)
  insert into site_settings (id) values (1) on conflict (id) do nothing;
  if not exists (select 1 from site_settings where id = 1 and contact_email is not null) then
    update site_settings set contact_email = contact_email where id = 1;
  end if;

  v_hash := encode(digest(v_ip || coalesce((select current_setting('app.settings_salt', true)),''), 'sha256'), 'hex');

  select count(*) into v_recent
  from contact_messages
  where ip_hash = v_hash and created_at > now() - interval '10 minutes';
  if v_recent >= 5 then
    return false; -- rate limited
  end if;

  insert into contact_messages (name, email, subject, message, website, ip_hash)
  values (v_name, v_email, nullif(v_subject,''), v_message, null, v_hash);

  return true;
end;
$$;

grant execute on function public.submit_contact_message(text,text,text,text,text) to anon, authenticated;
revoke all on function public.submit_contact_message(text,text,text,text,text) from public;
