from collections import Counter
import random

class RecommendationService:
    def __init__(self):
        # Mock data for testing
        self.mock_recommendations = {
            'marketing': [
                'Create engaging social media content',
                'Start an email newsletter',
                'Run targeted ad campaigns',
                'Optimize website for SEO',
                'Create valuable blog content'
            ],
            'technology': [
                'Implement website analytics',
                'Optimize website performance',
                'Add mobile responsiveness',
                'Implement security best practices',
                'Add user engagement features'
            ],
            'ecommerce': [
                'Streamline checkout process',
                'Add product recommendations',
                'Implement abandoned cart recovery',
                'Add customer reviews',
                'Optimize product pages'
            ]
        }

    def get_recommendations(self, website_content):
        """
        Generate recommendations based on website content.
        For now, we'll use a simple keyword-based approach.
        """
        try:
            # Convert content to lowercase for better matching
            content = website_content.lower() if website_content else ""
            
            # Simple keyword matching for industry detection
            industry = self._detect_industry(content)
            
            # Get recommendations for the detected industry
            recommendations = self._get_industry_recommendations(industry)
            
            return {
                'industry': industry,
                'recommendations': recommendations
            }
        except Exception as e:
            print(f"Error generating recommendations: {str(e)}")
            return {
                'industry': 'unknown',
                'recommendations': self._get_industry_recommendations('marketing')  # Default to marketing
            }

    def _detect_industry(self, content):
        """
        Simple keyword-based industry detection.
        """
        industry_keywords = {
            'technology': ['software', 'tech', 'digital', 'app', 'platform', 'cloud'],
            'ecommerce': ['shop', 'store', 'product', 'cart', 'buy', 'price'],
            'marketing': ['marketing', 'brand', 'social media', 'content', 'campaign']
        }

        # Count keyword matches for each industry
        scores = {industry: 0 for industry in industry_keywords}
        
        for industry, keywords in industry_keywords.items():
            for keyword in keywords:
                if keyword in content:
                    scores[industry] += 1

        # Return the industry with highest score, default to marketing
        return max(scores.items(), key=lambda x: x[1])[0] if any(scores.values()) else 'marketing'

    def _get_industry_recommendations(self, industry):
        """
        Get recommendations for a specific industry.
        Returns a subset of recommendations to avoid overwhelming the user.
        """
        recommendations = self.mock_recommendations.get(industry, self.mock_recommendations['marketing'])
        return random.sample(recommendations, min(3, len(recommendations)))
