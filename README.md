# Reccy AI - Intelligent Website Recommendation Engine

An AI-powered recommendation engine that automatically analyzes websites and provides personalized content recommendations to visitors.

## Features
- Automatic dashboard setup with website URL analysis
- Industry classification using NLP
- Real-time visitor interaction tracking
- AI-driven content recommendations
- Analytics dashboard for visitor behavior
- Real-time updates and monitoring

## Tech Stack
- Frontend: React with Next.js (Vercel hosting)
- Backend: Flask API (Railway.app)
- Database: MongoDB Atlas
- Real-time Updates: Firebase Firestore
- ML/NLP: spaCy/NLTK

## Setup Instructions
1. Install dependencies:
```bash
# Backend
pip install -r requirements.txt

# Frontend
npm install
```

2. Configure environment variables:
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
FIREBASE_CONFIG=your_firebase_config
```

3. Run development servers:
```bash
# Backend
python backend/app.py

# Frontend
npm run dev
```

## API Documentation
- POST /signup - Register new website
- GET /dashboard/{user_id} - Fetch analytics
- POST /track-interaction - Log visitor interactions
- GET /recommendations/{user_id} - Get AI recommendations
