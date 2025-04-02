import os

class Config:
    # MongoDB configuration
    MONGODB_URI = "mongodb+srv://aboagyeelvis89:Aboagye1.@cluster0.s8jbqlx.mongodb.net/reccy_ai?retryWrites=true&w=majority"
    
    # JWT configuration
    JWT_SECRET_KEY = "your-secret-key"  # Change this to a secure secret key
    JWT_ALGORITHM = "HS256"
    JWT_ACCESS_TOKEN_EXPIRES = 3600  # 1 hour
    
    # Firebase configuration (for real-time updates)
    FIREBASE_CONFIG = {
        # Add your Firebase config here
    }
    FIREBASE_API_KEY = "your-firebase-api-key"
    
    # ML Model configurations
    MODEL_PATH = 'models/'
    SPACY_MODEL = 'en_core_web_sm'
    
    # API configurations
    CORS_ORIGINS = ['http://localhost:3000', 'https://your-production-frontend.com']
    MAX_CONTENT_LENGTH = 16 * 1024 * 1024  # 16MB max file size
    OPENAI_API_KEY = "your-openai-api-key"
