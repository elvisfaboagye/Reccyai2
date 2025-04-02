import requests
import json

def test_signup_and_scrape():
    base_url = 'http://localhost:5000'
    
    # 1. Sign up
    signup_data = {
        'email': 'test@example.com',
        'password': 'testpass123'
    }
    
    signup_response = requests.post(
        f'{base_url}/signup',
        json=signup_data,
        headers={'Content-Type': 'application/json'}
    )
    
    print('\nSignup Response:', signup_response.status_code)
    print(json.dumps(signup_response.json(), indent=2))
    
    if signup_response.status_code != 201:
        print("Signup failed, cannot proceed with scraping")
        return
    
    # Get token from signup response
    token = signup_response.json()['token']
    
    # 2. Test scraping with authentication
    scrape_data = {
        'url': 'https://www.microsoft.com'
    }
    
    scrape_response = requests.post(
        f'{base_url}/scrape',
        json=scrape_data,
        headers={
            'Content-Type': 'application/json',
            'Authorization': token
        }
    )
    
    print('\nScrape Response:', scrape_response.status_code)
    print(json.dumps(scrape_response.json(), indent=2))

if __name__ == '__main__':
    test_signup_and_scrape()
