// frontend/src/pages/Facilities.jsx

export default function Facilities() {
  return (
    <div className="facilities-page">
      <section className="facilities container" style={{ padding: '4rem 2rem' }}>
        <h2 className="text-center">World-Class Facilities</h2>
        <p className="text-center" style={{ marginBottom: '3rem', color: 'var(--text-gray)' }}>
          At Study Point School, we provide an environment that fosters growth, safety, and innovation. 
          Explore the amenities designed to give your child everything they need to succeed.
        </p>
        
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
            <div className="facility-card">
                <i className="fa-solid fa-bus"></i>
                <h3>Transport Services</h3>
                <p>Safe and reliable GPS-enabled school bus network.</p>
            </div>
            <div className="facility-card">
                <i className="fa-solid fa-briefcase-medical"></i>
                <h3>Medical Room</h3>
                <p>On-campus first aid and certified nursing staff available all day.</p>
            </div>
            <div className="facility-card">
                <i className="fa-solid fa-utensils"></i>
                <h3>Cafeteria</h3>
                <p>Hygienic, nutritious, and delicious meals prepared daily.</p>
            </div>
        </div>
      </section>
    </div>
  );
}