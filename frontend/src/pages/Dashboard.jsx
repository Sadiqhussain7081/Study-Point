// frontend/src/pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [newNotice, setNewNotice] = useState({ title: '', content: '' });
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (!loggedInUser) {
      navigate('/login');
    } else {
      setUser(loggedInUser);
      // If admin logs in, fetch the admissions data!
      if (loggedInUser.role === 'admin') {
        fetchApplications();
      }
    }
  }, [navigate]);

  const fetchApplications = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admissions');
      setApplications(res.data);
    } catch (err) {
      console.error("Failed to load applications");
    }
  };

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
        <h1>Welcome, {user.full_name || user.username}</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>

      {/* ADMIN CONTROLS */}
      {user.role === 'admin' && (
        <div className="admin-controls" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div className="card">
            <h3>Add New Notice</h3>
            <form onSubmit={handleAddNotice} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <input type="text" placeholder="Notice Title" value={newNotice.title} onChange={(e) => setNewNotice({...newNotice, title: e.target.value})} required />
              <textarea placeholder="Notice Content" value={newNotice.content} onChange={(e) => setNewNotice({...newNotice, content: e.target.value})} required />
              <button type="submit">Post Notice</button>
            </form>
          </div>

          <div className="card">
            <h3>Recent Admission Applications</h3>
            {applications.length === 0 ? (
              <p>No applications received yet.</p>
            ) : (
              <div style={{ display: 'grid', gap: '15px' }}>
                {applications.map((app) => (
                  <div key={app.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
                    <strong>Student:</strong> {app.student_name} <br/>
                    <strong>Grade:</strong> {app.grade_applying} <br/>
                    <strong>Parent:</strong> {app.parent_name} <br/>
                    <strong>Contact:</strong> {app.email} | {app.phone} <br/>
                    <small style={{ color: 'gray' }}>Applied on: {app.date_submitted}</small>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      )}
      
      {/* STUDENT PROFILE (Kept exactly the same) */}
      {user.role === 'student' && (
        <div className="student-profile-container">
          <div className="card profile-card">
            <h3><i className="fa-solid fa-user-graduate"></i> Student Profile</h3>
            <div className="profile-details">
              <div className="detail-row"><span className="label">Full Name:</span><span className="value">{user.full_name}</span></div>
              <div className="detail-row"><span className="label">Student ID:</span><span className="value">STU-2026-{user.id.toString().padStart(3, '0')}</span></div>
              <div className="detail-row"><span className="label">Email Address:</span><span className="value">{user.email}</span></div>
              <div className="detail-row"><span className="label">Class / Grade:</span><span className="value">{user.class_grade}</span></div>
            </div>
          </div>
        </div>
      )}

      {/* TEACHER PROFILE */}
      {user.role === 'teacher' && (
        <div className="card">
          <h3>Staff Dashboard</h3>
          <p>Welcome back, {user.full_name}. View your schedule and class assignments here.</p>
        </div>
      )}
    </div>
  );
}