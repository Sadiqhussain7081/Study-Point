// frontend/src/pages/Home.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // Fetches live notices from the backend
    axios.get('http://localhost:5000/api/notices')
      .then(res => setNotices(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to Study Point School</h1>
          <p>Empowering young minds with excellence in education, character, and leadership.</p>
          <a href="#admissions" className="btn-primary hero-btn">Begin Your Journey</a>
        </div>
      </section>

      <section id="notices" className="notices">         
        <div className="notice-label">Latest Updates</div>         
        <div className="notice-ticker">
            <div className="ticker-content">
                {notices.length === 0 ? "Admissions open for the upcoming academic year! | Mid-term examinations begin on October 15th" : 
                  notices.map(n => `${n.title}: ${n.content} | `)
                }
            </div>
        </div>     
      </section> 

      <section id="academics" className="academics bg-light-blue">
          <div className="container text-center">
              <h2>Academic Excellence</h2>
              <p>We offer a comprehensive curriculum designed to challenge and inspire our students at every level.</p>
              <div className="academic-grid">
                  <div className="card">
                      <h3>Primary Education</h3>
                      <p>Focusing on foundational skills, creativity, and interactive learning.</p>
                  </div>
                  <div className="card">
                      <h3>Middle School</h3>
                      <p>Encouraging critical thinking, scientific inquiry, and collaborative projects.</p>
                  </div>
                  <div className="card">
                      <h3>High School</h3>
                      <p>Rigorous preparation for board exams, career counseling, and advanced subjects.</p>
                  </div>
              </div>
          </div>
      </section>

      <section id="facilities" className="facilities container">
          <h2 className="text-center">World-Class Facilities</h2>
          <p className="text-center">Everything your child needs to succeed in a safe and supportive environment.</p>
          
          <div className="facilities-grid">
              <div className="facility-card">
                  <i className="fa-solid fa-chalkboard-user"></i>
                  <h3>Smart Classrooms</h3>
                  <p>Interactive digital boards and high-speed internet for modern learning.</p>
              </div>
              <div className="facility-card">
                  <i className="fa-solid fa-flask"></i>
                  <h3>Computer & Science Labs</h3>
                  <p>Fully equipped laboratories for physics, chemistry, biology, and IT.</p>
              </div>
              <div className="facility-card">
                  <i className="fa-solid fa-book"></i>
                  <h3>Well-stocked Library</h3>
                  <p>Thousands of books, journals, and digital resources.</p>
              </div>
              <div className="facility-card">
                  <i className="fa-solid fa-futbol"></i>
                  <h3>Sports Grounds</h3>
                  <p>Dedicated spaces for cricket, football, and basketball.</p>
              </div>
          </div>
      </section>

      <section id="admissions" className="admissions bg-light-blue">
          <div className="container">
              <h2 className="text-center">Admissions</h2>
              <div className="admissions-content">
                  <div className="admission-info">
                      <h3>Join Study Point School</h3>
                      <ul>
                          <li><i className="fa-solid fa-check"></i> Fill out the online application form.</li>
                          <li><i className="fa-solid fa-check"></i> Submit required documents.</li>
                          <li><i className="fa-solid fa-check"></i> Schedule an interactive session/interview.</li>
                          <li><i className="fa-solid fa-check"></i> Complete fee payment upon selection.</li>
                      </ul>
                      <a href="#" className="btn-secondary">Download Fee Structure (PDF)</a>
                  </div>
                  <div className="admission-form">
                      <h3>Request Information</h3>
                      <form>
                          <input type="text" placeholder="Parent's Name" required />
                          <input type="email" placeholder="Email Address" required />
                          <input type="tel" placeholder="Phone Number" required />
                          <select required>
                              <option value="">Select Grade Applying For</option>
                              <option value="primary">Primary</option>
                              <option value="middle">Middle School</option>
                              <option value="high">High School</option>
                          </select>
                          <button type="submit" className="btn-primary">Submit Inquiry</button>
                      </form>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}