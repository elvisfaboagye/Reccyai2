import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = ({ userId, token }) => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [timeRange, setTimeRange] = useState('daily');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnalytics();
  }, [timeRange]);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:5000/analytics/${userId}?range=${timeRange}`,
        {
          headers: {
            'Authorization': token
          }
        }
      );
      setAnalyticsData(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch analytics data');
      console.error('Error fetching analytics:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="dashboard-loading">Loading analytics...</div>;
  }

  if (error) {
    return <div className="dashboard-error">{error}</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Recommendation Performance</h1>
        <div className="time-range-selector">
          <button
            className={timeRange === 'daily' ? 'active' : ''}
            onClick={() => setTimeRange('daily')}
          >
            Daily
          </button>
          <button
            className={timeRange === 'weekly' ? 'active' : ''}
            onClick={() => setTimeRange('weekly')}
          >
            Weekly
          </button>
          <button
            className={timeRange === 'monthly' ? 'active' : ''}
            onClick={() => setTimeRange('monthly')}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={analyticsData?.data || []}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="recommendations"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Recommendations</h3>
          <p>{analyticsData?.data?.reduce((sum, item) => sum + item.recommendations, 0) || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Average per {timeRange.slice(0, -2)}</h3>
          <p>
            {analyticsData?.data?.length
              ? (
                  analyticsData.data.reduce((sum, item) => sum + item.recommendations, 0) /
                  analyticsData.data.length
                ).toFixed(1)
              : 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
