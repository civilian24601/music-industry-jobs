-- Enable Row Level Security
alter default privileges revoke execute on functions from public;

-- Job Posts Table
create table public.job_posts (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    company text not null,
    url text not null,
    tags text[] default '{}',
    posted_date timestamp with time zone default timezone('utc'::text, now()) not null,
    source text not null,
    scraped_at timestamp with time zone default timezone('utc'::text, now()) not null,
    duplicate boolean default false,
    visible boolean default true
);

-- Subscribers Table
create table public.subscribers (
    id uuid default gen_random_uuid() primary key,
    email text not null unique,
    digest_frequency text not null check (digest_frequency in ('daily', 'weekly')),
    confirmed boolean default false,
    subscribed_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Email Logs Table
create table public.email_logs (
    id uuid default gen_random_uuid() primary key,
    send_time timestamp with time zone default timezone('utc'::text, now()) not null,
    email_subject text not null,
    job_ids uuid[] not null
);

-- Scrape Sources Table
create table public.scrape_sources (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    url text not null,
    last_scraped timestamp with time zone
);

-- Enable RLS
alter table public.job_posts enable row level security;
alter table public.subscribers enable row level security;
alter table public.email_logs enable row level security;
alter table public.scrape_sources enable row level security;

-- RLS Policies
create policy "Jobs are viewable by everyone"
    on public.job_posts for select
    using (visible = true and duplicate = false);

create policy "Subscribers can manage their own data"
    on public.subscribers for all
    using (auth.uid() = id);

create policy "Email logs viewable by admins only"
    on public.email_logs for select
    using (auth.role() = 'authenticated');

create policy "Scrape sources viewable by admins only"
    on public.scrape_sources for select
    using (auth.role() = 'authenticated');

-- Function to clean up old jobs
create or replace function public.cleanup_old_jobs()
returns void as $$
begin
    update public.job_posts
    set visible = false
    where posted_date < now() - interval '14 days';
end;
$$ language plpgsql security definer; 