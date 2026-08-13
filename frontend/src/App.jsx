// frontend/src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      {/* SHARED HEADER */}
      <header>
        <div className="logo">
          <i className="fa-solid fa-book-open-reader"></i> Study Point School
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/">Academics</Link></li>
            <li><Link to="/">Facilities</Link></li>
            <li><Link to="/">Admissions</Link></li>
            <li><Link to="/login">Portal Login</Link></li>
          </ul>
        </nav>
        <Link to="/login" className="btn-primary">Admin / Staff</Link>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      {/* SHARED FOOTER */}
      <footer id="contact">
        <div className="container footer-grid">
          <div className="footer-about">
            <div className="logo">
              <i className="fa-solid fa-book-open-reader"></i> Study Point School
            </div>
            <p>Empowering the next generation of leaders through quality education and unwavering dedication.</p>
            <div className="socials">
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/">Academics</Link></li>
              <li><Link to="/login">Admin Login</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p><i className="fa-solid fa-location-dot"></i> 123 Education Lane, Cityville, State, ZIP</p>
            <p><i className="fa-solid fa-phone"></i> +1 (555) 123-4567</p>
            <p><i className="fa-solid fa-envelope"></i> info@studypointschool.edu</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Study Point School. All rights reserved.</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;