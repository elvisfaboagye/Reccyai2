import jwt
from datetime import datetime, timedelta
from config import Config

class AuthService:
    def __init__(self, db):
        self.db = db
        self.users = db.users

    def create_user(self, website_url, industry, website_data):
        """Create a new user account"""
        user = {
            'website_url': website_url,
            'industry': industry,
            'website_data': website_data,
            'created_at': datetime.utcnow(),
            'updated_at': datetime.utcnow()
        }
        result = self.users.insert_one(user)
        user['_id'] = result.inserted_id
        return user

    def generate_token(self, user):
        """Generate JWT token for user"""
        payload = {
            'user_id': str(user['_id']),
            'website_url': user['website_url'],
            'exp': datetime.utcnow() + timedelta(seconds=Config.JWT_EXPIRATION)
        }
        return jwt.encode(payload, Config.JWT_SECRET, algorithm='HS256')

    def verify_token(self, token, user_id):
        """Verify JWT token"""
        if not token or not token.startswith('Bearer '):
            return False
        
        try:
            token = token.split(' ')[1]
            payload = jwt.decode(token, Config.JWT_SECRET, algorithms=['HS256'])
            return payload['user_id'] == user_id
        except jwt.ExpiredSignatureError:
            return False
        except jwt.InvalidTokenError:
            return False

    def get_user(self, user_id):
        """Get user by ID"""
        return self.users.find_one({'_id': user_id})
