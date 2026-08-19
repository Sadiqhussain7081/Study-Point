import React from 'react';
// Import the principal's image here! 
// (If your image is a .png, change the extension below to .png)
import principalImg from '../assets/principal.jpg'; 

export default function Home() {
  return (
    <div className="home-page">
      
      {/* 1. HERO SECTION (Welcome Banner) */}
      <section style={{ 
        backgroundColor: '#bae6fd', 
        padding: '6rem 2rem', 
        textAlign: 'center',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{ color: '#1e3a8a', fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
          Welcome to Study Point School
        </h1>
        <p style={{ color: '#334155', fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          Empowering young minds with excellence in education, character, and leadership.
        </p>
      </section>

      {/* 2. LATEST UPDATES TICKER */}
      <section style={{ 
        backgroundColor: '#1e3a8a', 
        color: 'white', 
        display: 'flex', 
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <div style={{ 
          backgroundColor: '#7dd3fc', 
          color: '#0f172a', 
          padding: '12px 24px', 
          fontWeight: 'bold',
          whiteSpace: 'nowrap'
        }}>
          Latest Updates
        </div>
        <div style={{ padding: '12px 20px', width: '100%' }}>
          <marquee scrollamount="6">
            Open for the upcoming academic year! | Mid-term examinations begin on October 15th
          </marquee>
        </div>
      </section>

      {/* 3. PRINCIPAL'S MESSAGE SECTION */}
      <section style={{ padding: '5rem 5%', backgroundColor: '#f8fafc' }}>
        <div style={{ 
          maxWidth: '1100px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '50px', 
          alignItems: 'center' 
        }}>

          {/* Left Side: Principal's Image */}
          <div style={{ 
            width: '100%', 
            maxWidth: '400px', 
            margin: '0 auto', 
            borderRadius: '12px', 
            overflow: 'hidden', 
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)' 
          }}>
            <img 
              src={principalImg} 
              alt="Principal Z. E. H. Amir Rizvi" 
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
            />
          </div>

          {/* Right Side: Message Content */}
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
              Principal's Message
            </h2>
            
            <blockquote style={{ 
              fontStyle: 'italic', 
              color: '#475569', 
              fontSize: '1.1rem', 
              borderLeft: '4px solid #2563eb', 
              paddingLeft: '15px', 
              marginBottom: '20px',
              backgroundColor: '#eff6ff',
              padding: '15px',
              borderRadius: '4px'
            }}>
              “Real education enhances the dignity of a human beings and increases his or her self-respect.” <br/>
              <strong style={{ color: '#1e3a8a', display: 'block', marginTop: '10px' }}>- APJ Abdul Kalam</strong>
            </blockquote>
            
            <p style={{ color: '#334155', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '15px' }}>
              <strong>Dear Parents,</strong>
            </p>
            
            <p style={{ color: '#334155', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '15px' }}>
              I am delighted to welcome you to our school website. The website exhibits the vast experiences we offer to the students to express their potentialities to the vast audience. JJCS has created its own infrastructure for the qualitative education and all round development of children. Every aspect of the individual is given attention with the goal to: Transmit Knowledge and Create New Knowledge, Impart Values and Prepare people for the Future.
            </p>
            
            <p style={{ color: '#334155', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '25px' }}>
              Education is not about knowing things and taking lessons but is about learning to use the three realities: Head, Heart and Hand. Hand stands for one’s skill, Head for Intellect and Heart for ethical and moral values. According to Pope Francis, the ultimate aim of education is: “unity with in a person”.
            </p>
            
            <div style={{ color: '#1e3a8a', fontWeight: 'bold', fontSize: '1.1rem' }}>
              <p style={{ margin: '0 0 5px 0' }}>Thanking you all,</p>
              <p style={{ margin: '0 0 15px 0' }}>With best wishes,</p>
              <p style={{ margin: '0 0 2px 0', fontSize: '1.3rem', color: '#2563eb' }}>Z. E. H. Amir Rizvi</p>
              <p style={{ margin: 0, color: '#64748b', fontWeight: 'normal', fontSize: '1rem' }}>Principal</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}