Backend Structure Document

Database Schema

-- job_posts
id (uuid)
title (text)
company (text)
url (text)
tags (text[])
posted_date (timestamp)
source (text)
scraped_at (timestamp)
duplicate (boolean)
visible (boolean)

-- subscribers
id (uuid)
email (text)
digest_frequency (text: 'daily' | 'weekly')
confirmed (boolean)
subscribed_at (timestamp)

-- email_logs
id (uuid)
send_time (timestamp)
email_subject (text)
job_ids (uuid[])

-- scrape_sources
id (uuid)
name (text)
url (text)
last_scraped (timestamp)
Auth Logic
Supabase Auth (email only) for admin

No login required for users to subscribe

Admin dashboard (optional) protected route

Storage Rules
Only visible and non-duplicate jobs appear in email or frontend

Jobs expire after X days (e.g., 14)