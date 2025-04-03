from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_socketio import SocketIO
from datetime import datetime, timedelta
import jwt
from backend.config import Config
from backend.database import db
from backend.services.scraper_service import ScraperService
from backend.services.recommendation_service import RecommendationService
from backend.services.analytics_service import AnalyticsService
from backend.firebase_config import get_all_users, get_user_by_id, create_user, update_user, delete_user

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")
app.config.from_object(Config)

# Initialize services
scraper_service = ScraperService()
recommendation_service = RecommendationService()
analytics_service = AnalyticsService()

# Predefined industry categories
INDUSTRY_CATEGORIES = [
    "Technology", "E-commerce", "Finance", "Healthcare", "Education",
    "Entertainment", "Real Estate", "Automotive", "Travel", "Food"
]

# Firebase Users Endpoints
@app.route('/api/users', methods=['GET'])
def get_users():
    """Get all users from Firestore"""
    try:
        users = get_all_users()
        return jsonify(users), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/users/<user_id>', methods=['GET'])
def get_user(user_id):
    """Get a specific user by ID from Firestore"""
    try:
        user = get_user_by_id(user_id)
        if user:
            return jsonify(user), 200
        return jsonify({'error': 'User not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/users', methods=['POST'])
def add_user():
    """Create a new user in Firestore"""
    try:
        user_data = request.get_json()
        if not user_data:
            return jsonify({'error': 'No data provided'}), 400
        
        new_user = create_user(user_data)
        return jsonify(new_user), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/users/<user_id>', methods=['PUT'])
def update_user_endpoint(user_id):
    """Update a user in Firestore"""
    try:
        user_data = request.get_json()
        if not user_data:
            return jsonify({'error': 'No data provided'}), 400
        
        updated_user = update_user(user_id, user_data)
        return jsonify(updated_user), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/users/<user_id>', methods=['DELETE'])
def delete_user_endpoint(user_id):
    """Delete a user from Firestore"""
    try:
        if delete_user(user_id):
            return jsonify({'message': 'User deleted successfully'}), 200
        return jsonify({'error': 'User not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')  # In production, this should be hashed
        website_url = data.get('website_url')
        
        if not email or not password or not website_url:
            return jsonify({'error': 'Email, password, and website URL are required'}), 400

        # Check if user already exists
        existing_user = db.users.find_one({'email': email})
        if existing_user:
            return jsonify({'error': 'Email already exists'}), 400

        # Scrape website content
        scraped_data = scraper_service.scrape_text(website_url)
        
        # Get initial recommendations
        recommendations = recommendation_service.get_recommendations(" ".join(word for word, count in scraped_data))
        
        # Create user
        user = {
            'email': email,
            'password': password,  # In production, this should be hashed
            'website_url': website_url,
            'industry': recommendations['industry'],
            'created_at': datetime.utcnow(),
            'last_scrape': {
                'content': scraped_data,
                'recommendations': recommendations,
                'scraped_at': datetime.utcnow()
            }
        }
        
        result = db.users.insert_one(user)
        user_id = str(result.inserted_id)
        
        # Generate JWT token
        token = jwt.encode(
            {'user_id': user_id, 'exp': datetime.utcnow() + timedelta(seconds=Config.JWT_ACCESS_TOKEN_EXPIRES)},
            Config.JWT_SECRET_KEY,
            algorithm='HS256'
        )
        
        return jsonify({
            'user_id': user_id,
            'token': token,
            'industry': recommendations['industry'],
            'dashboard_url': f'/dashboard/{user_id}'
        }), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/scrape', methods=['POST'])
def scrape_website():
    try:
        data = request.get_json()
        url = data.get('url')
        if not url:
            return jsonify({'error': 'URL is required'}), 400

        # Get user_id from token
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'error': 'Authorization token is required'}), 401

        try:
            payload = jwt.decode(token, Config.JWT_SECRET_KEY, algorithms=['HS256'])
            user_id = payload['user_id']
        except jwt.ExpiredSignatureError:
            return jsonify({'error': 'Token has expired'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'error': 'Invalid token'}), 401

        # Scrape the website
        content = scraper_service.scrape_text(url)
        
        # Get recommendations based on the content
        recommendations = recommendation_service.get_recommendations(" ".join(word for word, count in content))
        
        # Store the scrape result and recommendations
        db.users.update_one(
            {'_id': user_id},
            {
                '$set': {
                    'last_scrape': {
                        'url': url,
                        'content': content,
                        'recommendations': recommendations,
                        'scraped_at': datetime.utcnow()
                    }
                }
            }
        )
        
        # Track analytics
        analytics_service.track_recommendation(user_id, recommendations['recommendations'])
        
        return jsonify({
            'content': content,
            'recommendations': recommendations
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/analytics/<user_id>', methods=['GET'])
def get_analytics(user_id):
    try:
        # Verify token
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'error': 'Authorization token is required'}), 401

        try:
            payload = jwt.decode(token, Config.JWT_SECRET_KEY, algorithms=['HS256'])
            if payload['user_id'] != user_id:
                return jsonify({'error': 'Unauthorized'}), 403
        except jwt.ExpiredSignatureError:
            return jsonify({'error': 'Token has expired'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'error': 'Invalid token'}), 401

        # Get time range from query params
        time_range = request.args.get('range', 'daily')  # daily, weekly, or monthly
        
        # Get analytics data
        analytics_data = analytics_service.get_recommendation_performance(user_id, time_range)
        
        return jsonify(analytics_data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000, debug=True)
