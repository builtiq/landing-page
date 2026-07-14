create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'landing-page',
  created_at timestamptz not null default now(),
  constraint waitlist_signups_email_is_lowercase check (email = lower(email)),
  constraint waitlist_signups_email_length check (char_length(email) between 3 and 320)
);

comment on table public.waitlist_signups is
  'Email addresses submitted through the public BUILTIQ landing-page waitlist.';

alter table public.waitlist_signups enable row level security;

revoke all on table public.waitlist_signups from anon, authenticated;
grant select, insert on table public.waitlist_signups to service_role;
