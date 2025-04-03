import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    # MongoDB configuration
    MONGODB_URI = os.getenv('MONGODB_URI')
    
    # JWT configuration
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'your-secret-key')  # Change this to a secure secret key
    JWT_ALGORITHM = "HS256"
    JWT_ACCESS_TOKEN_EXPIRES = 3600  # 1 hour
    
    # Firebase configuration (for real-time updates)
    FIREBASE_CONFIG = os.getenv('FIREBASE_CONFIG', '{}')
    FIREBASE_API_KEY = os.getenv('FIREBASE_API_KEY')
    
    # ML Model configurations
    MODEL_PATH = 'models/'
    SPACY_MODEL = 'en_core_web_sm'
    
    # API configurations
    CORS_ORIGINS = os.getenv('CORS_ORIGINS', 'http://localhost:3000,https://your-production-frontend.com').split(',')
    MAX_CONTENT_LENGTH = 16 * 1024 * 1024  # 16MB max file size
    OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
