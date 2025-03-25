Project Requirements Document (PRD)
App Overview
The app is a niche job board aggregator and digest tool designed to scrape and curate jobs from lesser-known boards in highly specific industries (e.g., Remote AI/ML Freelance Gigs, Remote Tools, Indie Game Dev). Users can view new job postings via a clean web-based board and/or subscribe to receive daily or weekly email digests.

User Flows
Visitor lands on the homepage → Browses job posts by tag/niche → Subscribes via email

User gets email digest → Clicks job link → Redirected to original job board or details page

Admin runs scraper (automated on schedule) → Scrapes job boards → Saves new jobs to DB → Flags duplicates → Populates email digest queue

Admin (future) reviews/moderates flagged jobs before publication

Advertiser (future) submits a paid job listing via form

Tech Stack & APIs
Frontend: React (with Tailwind or shadcn/ui)

Backend: Python + FastAPI (job scraping + job API)

Scheduler: APScheduler / Replit's native scheduler / GitHub Actions

Scraping: BeautifulSoup4, Playwright (for JS-heavy sites)

Database: Supabase (PostgreSQL + Auth)

Email: Resend or Postmark for deliverability

Telegram (optional later): python-telegram-bot

Core Features
Modular scraping logic per niche

Email subscription + digest scheduling

Job board frontend UI w/ search + tags

Duplicate detection & job freshness logic

Admin-only pages (optional in MVP)

Sexy landing page with clear CTA

In Scope
Multi-niche support with clean module design

Scheduled scraping + digest generation

Landing + Job Board UI (searchable)

Simple signup and email delivery

Out of Scope (V1)
Paid listings

Job alert customization per user

Full user dashboards

Telegram bot integration

API for 3rd-party consumption