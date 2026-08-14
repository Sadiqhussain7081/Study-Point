// frontend/src/pages/Admissions.jsx
import { useState } from 'react';
import axios from 'axios';

export default function Admissions() {
  const [formData, setFormData] = useState({
    student_name: '',
    parent_name: '',
    email: '',
    phone: '',
    grade_applying: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admissions', formData);
      setStatus('Application submitted successfully! We will contact you soon.');
      setFormData({ student_name: '', parent_name: '', email: '', phone: '', grade_applying: '' }); // Clear form
    } catch (err) {
      setStatus('Error submitting application. Please try again.');
    }
  };

  return (
    <div className="page">
      <h1>Admissions Open</h1>
      <p>Join Study Point School for the upcoming academic year.</p>
      
      <div className="card" style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <h3>Online Application Form</h3>
        {status && <div style={{ padding: '10px', backgroundColor: '#e2e8f0', marginBottom: '15px', borderRadius: '5px', color: '#1e3a8a', fontWeight: 'bold' }}>{status}</div>}
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" placeholder="Student's Full Name" value={formData.student_name} onChange={(e) => setFormData({...formData, student_name: e.target.value})} required />
          <input type="text" placeholder="Parent/Guardian Name" value={formData.parent_name} onChange={(e) => setFormData({...formData, parent_name: e.target.value})} required />
          <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
          <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
          <select value={formData.grade_applying} onChange={(e) => setFormData({...formData, grade_applying: e.target.value})} required style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}>
            <option value="" disabled>Select Grade Applying For</option>
            <option value="9th Grade">9th Grade</option>
            <option value="10th Grade">10th Grade</option>
            <option value="11th Grade">11th Grade</option>
            <option value="12th Grade">12th Grade</option>
          </select>
          <button type="submit" className="btn-primary">Submit Application</button>
        </form>
      </div>
    </div>
  );
}