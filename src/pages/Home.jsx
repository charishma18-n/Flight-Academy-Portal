import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page">
      <div className="container">
        <section className="home-hero">
          <div className="hero-content">
            <h1>Begin Your Journey to <span>Become a Pilot</span></h1>
            <p>
              Welcome to the Flight Academy Admission Portal. Apply for admission, 
              track your application status, and take the first step towards your 
              aviation career.
            </p>
            <div className="hero-buttons">
              <Link to="/signup">
                <button className="btn-primary">Apply Now</button>
              </Link>
              <Link to="/about">
                <button className="btn-secondary">Learn More</button>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-visual">
              <span className="plane-icon">✈</span>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2 className="section-title">Why Choose Our Portal?</h2>
          <p className="section-subtitle">
            Streamlined admission process designed for aspiring pilots
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Easy Application</h3>
              <p>
                Simple online application process with step-by-step guidance. 
                Complete your admission form in minutes.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>Eligibility Check</h3>
              <p>
                Instant eligibility verification to ensure you meet all 
                requirements before applying.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📄</div>
              <h3>Document Upload</h3>
              <p>
                Secure document upload system for all required certificates 
                and identification documents.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Test Scheduling</h3>
              <p>
                Schedule your entrance examination at your convenience 
                from available slots.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Track Progress</h3>
              <p>
                Real-time application status tracking. Know exactly where 
                your application stands.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3>Instant Notifications</h3>
              <p>
                Receive updates about your application status, test results, 
                and important announcements.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home