import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <div className="logo-icon">✈</div>
        <div className="logo-text">Flight<span>Academy</span></div>
      </Link>

      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
      </ul>

      <div className={`navbar-auth ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/login">
          <button className="btn-login">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn-signup">Sign Up</button>
        </Link>
      </div>

      <div className="mobile-menu-btn" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar