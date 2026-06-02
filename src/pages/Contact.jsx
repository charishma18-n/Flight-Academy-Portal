import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="page">
      <div className="container">
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>Have questions? We are here to help you on your journey to becoming a pilot.</p>
        </section>

        <section className="contact-content">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h4>Address</h4>
                <p>123 Aviation Boulevard<br />Hyderabad, Telangana 500001</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-text">
                <h4>Phone</h4>
                <p>+91 98765 43210<br />+91 12345 67890</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉</div>
              <div className="info-text">
                <h4>Email</h4>
                <p>admissions@flightacademy.edu<br />support@flightacademy.edu</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕐</div>
              <div className="info-text">
                <h4>Working Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send Us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact