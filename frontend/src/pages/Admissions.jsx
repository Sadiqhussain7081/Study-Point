// frontend/src/pages/Admissions.jsx

export default function Admissions() {
  return (
    <div className="admissions-page">
      <section className="admissions bg-light-blue" style={{ padding: '4rem 2rem', minHeight: '80vh' }}>
        <div className="container">
          <h2 className="text-center">Admissions</h2>
          <div className="admissions-content">
            
            <div className="admission-info">
              <h3>Join Study Point School</h3>
              <ul>
                <li><i className="fa-solid fa-check"></i> Fill out the online application form.</li>
                <li><i className="fa-solid fa-check"></i> Submit required documents (Birth Certificate, Previous Marksheets).</li>
                <li><i className="fa-solid fa-check"></i> Schedule an interactive session/interview.</li>
                <li><i className="fa-solid fa-check"></i> Complete fee payment upon selection.</li>
              </ul>
              <a href="#" className="btn-secondary">Download Fee Structure (PDF)</a>
            </div>

            <div className="admission-form">
              <h3>Request Information</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert("Inquiry submitted!"); }}>
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
    </div>
  );
}