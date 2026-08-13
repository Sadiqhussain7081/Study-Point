// frontend/src/pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [newNotice, setNewNotice] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (!loggedInUser) {
      navigate('/login');
    } else {
      setUser(loggedInUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleAddNotice = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/notices', newNotice);
    setNewNotice({ title: '', content: '' });
    alert("Notice added!");
  };

  if (!user) return null;

  return (
    <div className="dashboard page">
      <header className="dashboard-header">
        <h1>Welcome, {user.role} Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>

      {user.role === 'admin' && (
        <div className="admin-controls">
          <div className="card">
            <h3>Add New Notice</h3>
            <form onSubmit={handleAddNotice}>
              <input 
                type="text" 
                placeholder="Notice Title" 
                value={newNotice.title} 
                onChange={(e) => setNewNotice({...newNotice, title: e.target.value})} 
                required 
              />
              <textarea 
                placeholder="Notice Content" 
                value={newNotice.content} 
                onChange={(e) => setNewNotice({...newNotice, content: e.target.value})} 
                required 
              />
              <button type="submit">Post Notice</button>
            </form>
          </div>
        </div>
      )}
      
      {user.role !== 'admin' && (
        <div className="card">
          <p>Welcome to the {user.role} portal. View your schedule and notices here.</p>
        </div>
      )}
    </div>
  );
}