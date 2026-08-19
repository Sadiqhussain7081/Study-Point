// frontend/src/pages/About.jsx
import campusImg from '../assets/campus.jpg';

export default function About() {
  return (
    <div className="page" style={{ padding: '2rem 5%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
        
        {/* Left Side: Mission & Vision Content */}
        <div>
          <span style={{ color: '#60a5fa', fontWeight: 'bold' }}>About Us</span>
          <h2 style={{ color: '#1e3a8a', fontSize: '32px', margin: '10px 0 20px 0' }}>Our Mission & Vision</h2>
          <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>
            At Study Point School, we believe in creating a nurturing environment where students can discover their true potential. Our mission is to provide world-class education combined with strong moral values.
          </p>
          <div style={{ backgroundColor: '#eff6ff', borderLeft: '4px solid #2563eb', padding: '15px 20px', borderRadius: '4px' }}>
            <p style={{ fontStyle: 'italic', color: '#1e3a8a', margin: 0 }}>
              "Education is not just about academics; it is about building character. We welcome you to join our family."
            </p>
            <strong style={{ color: '#2563eb', fontSize: '14px' }}>- Principal, Study Point School</strong>
          </div>
        </div>
{/* Right Side: REAL CAMPUS IMAGE */}
        <div style={{ 
          width: '100%', 
          height: '380px', 
          borderRadius: '12px', 
          overflow: 'hidden', 
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
          backgroundColor: '#ffffff', /* Keeps the background crisp white */
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '20px' /* Gives the logo some breathing room from the border */
        }}>
          <img 
            src={campusImg} 
            alt="Study Point School Logo" 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '100%', 
              objectFit: 'contain' /* This is the magic word that stops the cropping! */
            }}
          />
        </div>
      </div>
    </div>
  );
}