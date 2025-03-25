from abc import ABC, abstractmethod
from typing import List, Dict, Any
import requests
from bs4 import BeautifulSoup
from datetime import datetime

class BaseScraper(ABC):
    """Base class for job board scrapers."""
    
    def __init__(self, name: str):
        self.name = name
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })

    @abstractmethod
    def get_jobs(self) -> List[Dict[str, Any]]:
        """Fetch and parse jobs from the job board.
        
        Returns:
            List of job dictionaries with standardized fields:
            - id: str
            - title: str
            - company: str
            - location: str
            - type: str
            - remote: bool
            - description: str
            - url: str
            - created_at: datetime
            - source: str (job board name)
        """
        pass

    def _get_soup(self, url: str) -> BeautifulSoup:
        """Helper method to fetch a page and return BeautifulSoup object."""
        response = self.session.get(url)
        response.raise_for_status()
        return BeautifulSoup(response.text, 'html.parser')

    def _clean_text(self, text: str) -> str:
        """Helper method to clean scraped text."""
        if not text:
            return ""
        return " ".join(text.split()) 