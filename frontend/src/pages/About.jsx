// frontend/src/pages/About.jsx
export default function About() {
  return (
    <section id="about" className="about container">         
      <div className="about-text">             
          <h2>About Us</h2>             
          <h3>Our Mission & Vision</h3>             
          <p>At Study Point School, we believe in creating a nurturing environment where students can discover their true potential. Our mission is to provide world-class education combined with strong moral values.</p>             
          <blockquote className="principal-message">                 
              "Education is not just about academics; it is about building character. We welcome you to join our family."                  
              <br/><strong>- Principal, Study Point School</strong>             
          </blockquote>         
      </div>         
      <div className="about-image">             
          <div className="img-placeholder">Campus Image Placeholder</div>         
      </div>     
    </section>
  );
}