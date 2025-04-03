import firebase_admin
from firebase_admin import credentials, firestore
from pathlib import Path

# Initialize Firebase Admin SDK
cred_path = Path(__file__).parent / 'reccyai2-firebase-adminsdk-fbsvc-f62d1a3e04.json'
cred = credentials.Certificate(str(cred_path))
firebase_admin.initialize_app(cred)

# Get Firestore client
db = firestore.client()

def get_all_users():
    """
    Fetch all users from Firestore users collection
    Returns a list of user documents
    """
    users_ref = db.collection('users')
    users = users_ref.stream()
    
    # Convert Firestore documents to dictionaries
    users_list = []
    for user in users:
        user_data = user.to_dict()
        user_data['id'] = user.id  # Add document ID to the data
        users_list.append(user_data)
    
    return users_list

def get_user_by_id(user_id):
    """
    Fetch a specific user by ID from Firestore
    Returns user document or None if not found
    """
    user_ref = db.collection('users').document(user_id)
    user = user_ref.get()
    
    if user.exists:
        user_data = user.to_dict()
        user_data['id'] = user.id
        return user_data
    return None

def create_user(user_data):
    """
    Create a new user in Firestore
    Returns the created user document
    """
    users_ref = db.collection('users')
    doc_ref = users_ref.document()
    doc_ref.set(user_data)
    
    user_data['id'] = doc_ref.id
    return user_data

def update_user(user_id, user_data):
    """
    Update an existing user in Firestore
    Returns the updated user document
    """
    user_ref = db.collection('users').document(user_id)
    user_ref.update(user_data)
    
    user_data['id'] = user_id
    return user_data

def delete_user(user_id):
    """
    Delete a user from Firestore
    Returns True if successful, False otherwise
    """
    user_ref = db.collection('users').document(user_id)
    if user_ref.get().exists:
        user_ref.delete()
        return True
    return False 