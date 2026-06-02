function About() {
  return (
    <div className="page">
      <div className="container">
        <section className="about-hero">
          <h1>About Flight Academy</h1>
          <p>
            Empowering the next generation of aviation professionals through 
            world-class training and education.
          </p>
        </section>

        <section className="about-content">
          <div className="about-image">
            <span className="about-image-icon">🎓</span>
          </div>
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              The Flight Academy Admission Portal is designed to simplify and 
              automate the airline training academy admission process. We believe 
              that becoming a pilot should be accessible to everyone with the 
              passion and dedication.
            </p>
            <p>
              Our digital platform allows aspiring candidates to apply for admission, 
              verify eligibility, upload required documents, schedule entrance tests, 
              and monitor their admission status in real time.
            </p>
            <p>
              By digitizing the admission workflow, we improve transparency, reduce 
              processing time, minimize human errors, and enable better communication 
              between applicants and academy administrators.
            </p>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Graduates</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Placement Rate</p>
            </div>
            <div className="stat-item">
              <h3>20+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Expert Instructors</p>
            </div>
          </div>
        </section>

        <section className="about-content">
          <div className="about-text">
            <h2>What We Offer</h2>
            <p>
              <strong>User Registration and Authentication:</strong> Secure signup and 
              login system for applicants to manage their admission journey.
            </p>
            <p>
              <strong>Application Management:</strong> Comprehensive application forms 
              with eligibility checking and status tracking features.
            </p>
            <p>
              <strong>Document Management:</strong> Secure upload system for all required 
              documents including certificates, ID proofs, and medical records.
            </p>
            <p>
              <strong>Test Scheduling:</strong> Flexible scheduling system for entrance 
              examinations with real-time slot availability.
            </p>
          </div>
          <div className="about-image">
            <span className="about-image-icon">✈</span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About