from pymongo import MongoClient
from backend.config import Config
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

try:
    # Initialize MongoDB client
    client = MongoClient(Config.MONGODB_URI)
    
    # Test the connection
    client.admin.command('ping')
    logger.info("Successfully connected to MongoDB")

    # Get database instance
    db = client.reccy_ai

    # Initialize collections
    users = db.users
    interactions = db.interactions
    recommendations = db.recommendations
    analytics = db.analytics

    # Create indexes
    try:
        users.create_index('email', unique=True)
        interactions.create_index([('user_id', 1), ('timestamp', -1)])
        recommendations.create_index([('user_id', 1), ('created_at', -1)])
        analytics.create_index([('user_id', 1), ('date', -1)])
        logger.info("Successfully created MongoDB indexes")
    except Exception as e:
        logger.warning(f"Error creating indexes: {str(e)}")

except Exception as e:
    logger.error(f"Error connecting to MongoDB: {str(e)}")
    # Set default values in case of connection failure
    db = None
    users = None
    interactions = None
    recommendations = None
    analytics = None
