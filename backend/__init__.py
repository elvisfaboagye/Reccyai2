from flask import Flask
from flask_cors import CORS
from .config import Config
from .database import init_db

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(Config)
    
    # Initialize database
    init_db()
    
    # Import and register blueprints
    from .app import main_bp
    app.register_blueprint(main_bp)
    
    return app 