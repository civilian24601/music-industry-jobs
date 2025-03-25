from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

app = FastAPI(title="Music Industry Jobs API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to the Music Industry Jobs API"}

@app.get("/api/jobs")
async def get_jobs():
    # TODO: Implement job fetching from database
    return {
        "jobs": [
            {
                "id": 1,
                "title": "Senior Music Producer",
                "company": "Universal Music Group",
                "location": "Los Angeles, CA",
                "type": "Full-time",
                "remote": True,
                "description": "Join our team as a Senior Music Producer...",
                "url": "https://example.com/job/1",
                "created_at": "2024-03-24T00:00:00Z"
            }
        ]
    }

@app.post("/api/subscribe")
async def subscribe(email: str):
    # TODO: Implement email subscription
    return {"message": f"Successfully subscribed {email} to job alerts"} 