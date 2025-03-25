<<<<<<< HEAD
# music-industry-jobs
a specialized job board and mailing service
=======
# Music Industry Job Board

A niche job board aggregator and digest tool designed to curate jobs from specialized music industry job boards. Built with React, FastAPI, and Supabase.

## Features

- 🎵 Music industry focused job aggregation
- 📱 Mobile-first, responsive design
- 📧 Daily/weekly email digests
- 🏷️ Job categorization and tagging
- 🤖 Automated job scraping
- 🔍 Search and filter capabilities

## Tech Stack

- Frontend: React + TailwindCSS
- Backend: Python + FastAPI
- Database: Supabase (PostgreSQL)
- Email: Resend
- Deployment: Vercel (frontend) / TBD (backend)

## Project Setup

### Prerequisites

- Node.js (v18+)
- Python (v3.9+)
- Git

### Frontend Setup

```bash
# Install dependencies
cd frontend
npm install

# Start development server
npm run dev
```

### Backend Setup

```bash
# Create virtual environment
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start development server
uvicorn main:app --reload
```

### Environment Variables

Create `.env` files in both frontend and backend directories:

Frontend (.env):
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_API_URL=http://localhost:8000
```

Backend (.env):
```
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_KEY=your_supabase_service_key
RESEND_API_KEY=your_resend_api_key
```

## Development

1. Start the backend server
2. Start the frontend development server
3. Visit http://localhost:5173 in your browser

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details
>>>>>>> 6ea1e60 (Initial commit: Project setup with frontend and backend structure)
