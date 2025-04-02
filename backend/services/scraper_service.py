import requests
from bs4 import BeautifulSoup
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from collections import Counter

class ScraperService:
    def __init__(self):
        # Initialize NLTK resources
        nltk.download('punkt', quiet=True)
        nltk.download('stopwords', quiet=True)
        self.stop_words = set(stopwords.words('english'))

    def scrape_text(self, url):
        try:
            response = requests.get(url)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Get all text from paragraphs
            text = ' '.join([p.get_text() for p in soup.find_all('p')])
            
            # Tokenize and remove stopwords
            tokens = word_tokenize(text.lower())
            tokens = [t for t in tokens if t.isalnum() and t not in self.stop_words]
            
            # Get word frequencies
            word_freq = Counter(tokens)
            return word_freq.most_common(50)  # Return top 50 words
            
        except Exception as e:
            print(f"Error scraping {url}: {str(e)}")
            return []