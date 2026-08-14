// frontend/src/pages/AdminLogin.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid admin credentials');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card" style={{ borderTop: '4px solid var(--dark-blue)' }}>
        <h2>Admin & Staff Portal</h2>
        <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--text-gray)' }}>
          Authorized personnel only
        </p>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Staff Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Enter staff username"
              required 
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter password"
              required 
            />
          </div>
          <button type="submit" className="login-btn">Secure Login</button>
        </form>
      </div>
    </div>
  );
}