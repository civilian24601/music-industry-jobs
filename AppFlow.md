App Flow Document
Users visit the homepage. The homepage features a beautiful, minimal design with sections for the latest jobs, a few featured categories (e.g., AI/ML, Game Dev), and a large CTA to subscribe via email. Below is a browsable list of jobs with title, company, tags, date posted, and a "View" button.

When a user clicks “Subscribe,” a modal appears with email frequency options (daily or weekly). After confirmation, the user is stored in Supabase with their preferences.

In the background, the scraper runs daily (or more frequently), checking predefined boards. Each board has its own scraping logic (component). New jobs are added to the database and deduplicated. Fresh jobs are queued up for the next digest.

An email is generated and sent to users with a templated format, containing job title, company, tags, and links.

An admin can log into a separate /admin route (if enabled) to view scraped jobs, flag issues, and view email send logs.