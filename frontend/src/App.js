import React, { useState } from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/signup', {
        email,
        password,
        website_url: url
      });

      setUserId(response.data.user_id);
      setToken(response.data.token);
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred during signup');
      console.error('Signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleScrape = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        'http://localhost:5000/scrape',
        { url },
        {
          headers: {
            'Authorization': token
          }
        }
      );

      console.log('Scrape results:', response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred while scraping');
      console.error('Scrape error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      {!userId ? (
        <div className="signup-container">
          <h1>Reccy AI</h1>
          <form onSubmit={handleSignup} className="signup-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="url"
              placeholder="Website URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
          </form>
        </div>
      ) : (
        <div className="main-container">
          <nav className="navbar">
            <h1>Reccy AI Dashboard</h1>
            <form onSubmit={handleScrape} className="scrape-form">
              <input
                type="url"
                placeholder="Enter URL to scrape"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? 'Scraping...' : 'Scrape'}
              </button>
            </form>
          </nav>

          <Dashboard userId={userId} token={token} />
        </div>
      )}

      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default App;
