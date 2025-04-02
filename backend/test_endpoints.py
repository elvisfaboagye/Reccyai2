import requests
import json

BASE_URL = 'http://localhost:5000'

def test_signup():
    signup_data = {
        'username': 'testuser',
        'password': 'testpass123',
        'email': 'test@example.com'
    }
    
    response = requests.post(
        f'{BASE_URL}/signup',
        json=signup_data,
        headers={'Content-Type': 'application/json'}
    )
    
    print('Signup Response:', response.status_code)
    print(response.json())
    return response.json()

def test_scrape(token, user_id):
    scrape_data = {
        'url': 'https://example.com',
        'user_id': user_id
    }
    
    response = requests.post(
        f'{BASE_URL}/scrape',
        json=scrape_data,
        headers={
            'Content-Type': 'application/json',
            'Authorization': token
        }
    )
    
    print('Scrape Response:', response.status_code)
    print(response.json())

if __name__ == '__main__':
    # Test signup first
    signup_result = test_signup()
    
    # If signup successful, test scraping
    if 'token' in signup_result and 'user_id' in signup_result:
        test_scrape(signup_result['token'], signup_result['user_id'])
    else:
        print('Signup failed, cannot test scraping endpoint')
