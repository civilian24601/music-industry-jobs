Tech Stack Document
Frontend
Framework: React (hosted on Vercel or Replit)

UI Framework: TailwindCSS or shadcn/ui

Routing: React Router (or Next.js if SSR is needed)

Backend
Language: Python

Framework: FastAPI

Scheduler: APScheduler or GitHub Actions (for scraper jobs)

Scraping:

BeautifulSoup4

Requests

Playwright (optional fallback for dynamic content)

Database
Supabase

PostgreSQL for job data and users

Auth for admin (email/password)

Email Delivery
Resend (https://resend.com) or Postmark

Transactional API with templated digest design

Optional APIs
python-telegram-bot for future Telegram digests

Stripe API (for future paid listings)