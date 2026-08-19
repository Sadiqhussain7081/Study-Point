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
      setStatus('Application submitted successfully! We will review and contact you soon.');
      setFormData({ student_name: '', parent_name: '', email: '', phone: '', grade_applying: '' }); // Clear form
    } catch (err) {
      setStatus('Error submitting application. Please ensure the backend is running.');
    }
  };

  return (
    <div className="page" style={{ padding: '4rem 5%', backgroundColor: '#f4f7fa' }}>
      <h1 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '2.5rem', marginBottom: '3rem' }}>Admissions</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Left Side: Admission Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ color: '#1e3a8a', fontSize: '1.5rem' }}>Join Study Point School</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px', color: '#334155' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#60a5fa', fontSize: '1.2rem' }}>✔️</span> Fill out the online application form.
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#60a5fa', fontSize: '1.2rem' }}>✔️</span> Submit required documents.
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#60a5fa', fontSize: '1.2rem' }}>✔️</span> Schedule an interactive session/interview.
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#60a5fa', fontSize: '1.2rem' }}>✔️</span> Complete fee payment upon selection.
            </li>
          </ul>
          <button style={{ marginTop: '20px', padding: '12px 24px', backgroundColor: 'transparent', color: '#1e3a8a', border: '2px solid #1e3a8a', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', width: 'fit-content' }}>
            Download Fee Structure (PDF)
          </button>
        </div>

        {/* Right Side: Working Application Form */}
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#1e3a8a', marginBottom: '20px' }}>Online Application Form</h3>
          
          {status && <div style={{ padding: '12px', backgroundColor: '#dcfce3', color: '#166534', marginBottom: '20px', borderRadius: '6px', fontWeight: 'bold', borderLeft: '4px solid #166534' }}>{status}</div>}
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="text" placeholder="Student's Full Name" value={formData.student_name} onChange={(e) => setFormData({...formData, student_name: e.target.value})} required style={{ padding: '14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
            <input type="text" placeholder="Parent/Guardian Name" value={formData.parent_name} onChange={(e) => setFormData({...formData, parent_name: e.target.value})} required style={{ padding: '14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
            <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required style={{ padding: '14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
            <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required style={{ padding: '14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
            
            <select value={formData.grade_applying} onChange={(e) => setFormData({...formData, grade_applying: e.target.value})} required style={{ padding: '14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem', backgroundColor: 'white' }}>
              <option value="" disabled>Select Grade Applying For</option>
              <option value="9th Grade">9th Grade</option>
              <option value="10th Grade">10th Grade</option>
              <option value="11th Grade">11th Grade</option>
              <option value="12th Grade">12th Grade</option>
            </select>
            
            <button type="submit" style={{ padding: '14px', backgroundColor: '#1e3a8a', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem', marginTop: '10px', transition: 'background-color 0.3s' }}>
              Submit Application
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}