import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  
  // Simple user state
  const [user, setUser] = useState({
    name: 'Student',
    email: 'student@example.com'
  })

  // Application state
  const [applicationSubmitted, setApplicationSubmitted] = useState(false)
  const [selectedTestSlot, setSelectedTestSlot] = useState(null)

  // Application form state
  const [applicationForm, setApplicationForm] = useState({
    fullName: '',
    age: '',
    qualification: '',
    phone: '',
    email: ''
  })

  const handleLogout = () => {
    navigate('/login')
  }

  const handleApplicationSubmit = (e) => {
    e.preventDefault()
    setApplicationSubmitted(true)
    setUser({ ...user, name: applicationForm.fullName || 'Student' })
    alert('Application submitted successfully!')
    setActiveTab('overview')
  }

  const handleBookTest = () => {
    if (selectedTestSlot) {
      alert(`Test booked for ${selectedTestSlot}`)
    }
  }

  const testSlots = [
    '2025-06-15 - 10:00 AM',
    '2025-06-15 - 02:00 PM',
    '2025-06-20 - 09:00 AM',
    '2025-06-20 - 03:00 PM',
  ]

  return (
    <div className="dashboard">
      {/* Top Navbar */}
      <header className="dash-navbar">
        <div className="dash-logo">
          <span className="logo-icon">✈</span>
          <span>Flight Academy</span>
        </div>
        <div className="dash-user">
          <span className="user-avatar">{user.name.charAt(0)}</span>
          <span className="user-name">{user.name}</span>
          <button className="btn-logout" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <div className="dash-container">
        {/* Sidebar */}
        <aside className="dash-sidebar">
          <nav>
            <button 
              className={`nav-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`nav-btn ${activeTab === 'apply' ? 'active' : ''}`}
              onClick={() => setActiveTab('apply')}
            >
              Apply
            </button>
            <button 
              className={`nav-btn ${activeTab === 'test' ? 'active' : ''}`}
              onClick={() => setActiveTab('test')}
            >
              Test Schedule
            </button>
            <button 
              className={`nav-btn ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="dash-main">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="tab-content">
              <div className="welcome-box">
                <h1>Welcome, {user.name}!</h1>
                <p>
                  {applicationSubmitted 
                    ? 'Your application has been submitted. Check your status below.'
                    : 'Start your journey by submitting an application.'}
                </p>
                {!applicationSubmitted && (
                  <button className="btn-primary" onClick={() => setActiveTab('apply')}>
                    Start Application
                  </button>
                )}
              </div>

              <div className="status-cards">
                <div className="status-card">
                  <h3>Application</h3>
                  <p className={applicationSubmitted ? 'status-success' : 'status-pending'}>
                    {applicationSubmitted ? 'Submitted' : 'Not Submitted'}
                  </p>
                </div>
                <div className="status-card">
                  <h3>Test Date</h3>
                  <p className={selectedTestSlot ? 'status-success' : 'status-pending'}>
                    {selectedTestSlot || 'Not Scheduled'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Apply Tab */}
          {activeTab === 'apply' && (
            <div className="tab-content">
              <h1>Admission Application</h1>
              <p>Fill in your details to apply for admission.</p>

              {applicationSubmitted ? (
                <div className="success-message">
                  <h3>Application Already Submitted</h3>
                  <p>You have already submitted your application. Check the overview for status.</p>
                </div>
              ) : (
                <form className="simple-form" onSubmit={handleApplicationSubmit}>
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      value={applicationForm.fullName}
                      onChange={(e) => setApplicationForm({...applicationForm, fullName: e.target.value})}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Age *</label>
                    <input
                      type="number"
                      value={applicationForm.age}
                      onChange={(e) => setApplicationForm({...applicationForm, age: e.target.value})}
                      placeholder="Enter your age"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Educational Qualification *</label>
                    <select
                      value={applicationForm.qualification}
                      onChange={(e) => setApplicationForm({...applicationForm, qualification: e.target.value})}
                      required
                    >
                      <option value="">Select qualification</option>
                      <option value="10+2">10+2 with Physics & Maths</option>
                      <option value="graduate">Graduate</option>
                      <option value="postgraduate">Post Graduate</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      value={applicationForm.phone}
                      onChange={(e) => setApplicationForm({...applicationForm, phone: e.target.value})}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      value={applicationForm.email}
                      onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                      placeholder="Enter email"
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary">Submit Application</button>
                </form>
              )}
            </div>
          )}

          {/* Test Schedule Tab */}
          {activeTab === 'test' && (
            <div className="tab-content">
              <h1>Test Schedule</h1>
              <p>Select a date and time for your entrance test.</p>

              {!applicationSubmitted && (
                <div className="warning-box">
                  Please submit your application first before scheduling a test.
                </div>
              )}

              <div className="slots-list">
                {testSlots.map((slot, index) => (
                  <div 
                    key={index}
                    className={`slot-item ${selectedTestSlot === slot ? 'selected' : ''}`}
                    onClick={() => setSelectedTestSlot(slot)}
                  >
                    {slot}
                  </div>
                ))}
              </div>

              <button 
                className="btn-primary"
                onClick={handleBookTest}
                disabled={!selectedTestSlot}
              >
                Confirm Booking
              </button>
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="tab-content">
              <h1>My Profile</h1>
              
              <div className="profile-card">
                <div className="profile-avatar-large">{user.name.charAt(0)}</div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>

              <div className="profile-details">
                <div className="detail-item">
                  <span className="detail-label">Application Status:</span>
                  <span className={applicationSubmitted ? 'status-success' : 'status-pending'}>
                    {applicationSubmitted ? 'Submitted' : 'Pending'}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Test Scheduled:</span>
                  <span>{selectedTestSlot || 'Not yet scheduled'}</span>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  )
}

export default Dashboard