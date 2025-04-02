from pymongo import MongoClient
from config import Config

# Initialize MongoDB client
client = MongoClient(Config.MONGODB_URI)

# Get database instance
db = client.reccy_ai

# Initialize collections
users = db.users
interactions = db.interactions
recommendations = db.recommendations
analytics = db.analytics

# Create indexes
users.create_index('email', unique=True)
interactions.create_index([('user_id', 1), ('timestamp', -1)])
recommendations.create_index([('user_id', 1), ('created_at', -1)])
analytics.create_index([('user_id', 1), ('date', -1)])
