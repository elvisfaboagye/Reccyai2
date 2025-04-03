from datetime import datetime, timedelta
from backend.database import db

class AnalyticsService:
    def __init__(self):
        self.analytics = db.analytics
        self.recommendations = db.recommendations

    def track_recommendation(self, user_id, recommendations):
        """Track when recommendations are generated for a user"""
        analytics_data = {
            'user_id': user_id,
            'recommendations': recommendations,
            'timestamp': datetime.utcnow(),
            'status': 'generated'  # Can be 'generated', 'viewed', 'implemented'
        }
        self.analytics.insert_one(analytics_data)

    def get_recommendation_performance(self, user_id, time_range='daily'):
        """Get recommendation performance analytics for a user"""
        now = datetime.utcnow()
        
        # Set time range
        if time_range == 'daily':
            start_date = now - timedelta(days=1)
            interval = timedelta(hours=1)
            format_string = '%Y-%m-%d %H:00'
        elif time_range == 'weekly':
            start_date = now - timedelta(days=7)
            interval = timedelta(days=1)
            format_string = '%Y-%m-%d'
        else:  # monthly
            start_date = now - timedelta(days=30)
            interval = timedelta(days=1)
            format_string = '%Y-%m-%d'

        # Get analytics data
        analytics_data = list(self.analytics.find({
            'user_id': user_id,
            'timestamp': {'$gte': start_date}
        }).sort('timestamp', 1))

        # Process data for graph
        data_points = []
        current_date = start_date

        while current_date <= now:
            end_date = current_date + interval
            
            # Count recommendations in this interval
            count = sum(1 for data in analytics_data 
                       if current_date <= data['timestamp'] < end_date)
            
            data_points.append({
                'date': current_date.strftime(format_string),
                'recommendations': count
            })
            
            current_date = end_date

        return {
            'time_range': time_range,
            'data': data_points
        }

    def get_industry_distribution(self, user_id):
        """Get distribution of recommendations across industries"""
        analytics_data = list(self.analytics.find({
            'user_id': user_id,
            'timestamp': {'$gte': datetime.utcnow() - timedelta(days=30)}
        }))

        industry_counts = {}
        for data in analytics_data:
            for rec in data['recommendations']:
                industry = rec.get('industry', 'Unknown')
                industry_counts[industry] = industry_counts.get(industry, 0) + 1

        return {
            'industries': list(industry_counts.keys()),
            'counts': list(industry_counts.values())
        }
