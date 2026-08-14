// frontend/src/pages/Academics.jsx

export default function Academics() {
  return (
    <div className="academics-page">
      <section className="academics bg-light-blue" style={{ padding: '6rem 2rem' }}>
        <div className="container text-center">
          <h2>Academic Excellence</h2>
          <p>We offer a comprehensive curriculum designed to challenge and inspire our students at every level.</p>
          
          <div className="academic-grid">
            <div className="card">
              <h3>Primary Education (Grades 1-5)</h3>
              <p>Focusing on foundational skills, creativity, and interactive learning. Core subjects include Mathematics, Environmental Science, Language Arts, and Art.</p>
            </div>
            <div className="card">
              <h3>Middle School (Grades 6-8)</h3>
              <p>Encouraging critical thinking, scientific inquiry, and collaborative projects. Introduction to specialized sciences, literature, and computer basics.</p>
            </div>
            <div className="card">
              <h3>High School (Grades 9-12)</h3>
              <p>Rigorous preparation for board exams, career counseling, and advanced subjects including Physics, Chemistry, Biology, Commerce, and Computer Science.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '4rem 2rem' }}>
        <h2 className="text-center" style={{ color: 'var(--dark-blue)', marginBottom: '2rem' }}>Our Teaching Methodology</h2>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', color: 'var(--text-gray)' }}>
          <p style={{ marginBottom: '1rem' }}>
            At Study Point School, we go beyond textbook learning. Our dedicated faculty employs modern teaching techniques, combining traditional lectures with interactive digital learning, group discussions, and practical lab sessions.
          </p>
          <p>
            We maintain a low student-to-teacher ratio to ensure personalized attention, helping every child discover their unique strengths and achieve their highest potential.
          </p>
        </div>
      </section>
    </div>
  );
}