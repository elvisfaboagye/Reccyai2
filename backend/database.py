from pymongo import MongoClient
from backend.config import Config
import logging
import urllib.parse

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize variables
db = None
users = None
interactions = None
recommendations = None
analytics = None

def init_db():
    global db, users, interactions, recommendations, analytics
    
    try:
        if not Config.MONGODB_URI:
            logger.error("MONGODB_URI is not set in environment variables")
            return
            
        # Parse and encode the connection string properly
        uri = Config.MONGODB_URI
        if '@' in uri:
            # If the URI contains credentials, ensure they're properly encoded
            parts = uri.split('@')
            credentials = parts[0].split('://')[1]
            host = parts[1]
            username, password = credentials.split(':')
            encoded_username = urllib.parse.quote_plus(username)
            encoded_password = urllib.parse.quote_plus(password)
            uri = f"mongodb+srv://{encoded_username}:{encoded_password}@{host}"
        
        # Initialize MongoDB client with retryWrites and w=majority
        client = MongoClient(uri, retryWrites=True, w='majority')
        
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

# Initialize the database connection
init_db()
