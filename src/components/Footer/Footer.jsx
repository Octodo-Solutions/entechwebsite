import React from 'react'
import './Footer.css'
import logo from '../../assets/EntechLogo.png'

const Footer = () => {
  return (
    <footer className="ft">
      <div className="section-container">
        <div className="ft-top">
          <div className="ft-brand">
            <img src={logo} alt="En-Tech Associates, Inc." className="ft-logo" />
          </div>
          <nav className="ft-nav">
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            {/* <a href="/systems">Systems</a>
            <a href="/insights">Insights</a> */}
          </nav>
          <div className="ft-cta">
            <div className="ft-cta-title">Contact us Today →</div>
            <div className="ft-cta-sub">For Unparalleled Service & Support, Guaranteed</div>
          </div>
        </div>

        <div className="ft-info">
          <div><span className="ft-label">Office:</span> 9XXXXXXXX <span className="ft-sep">|</span> <span className="ft-label">E-Mail:</span> <a href="mailto:Entecq45@gmail.com">Entecq45@gmail.com</a></div>
          <div className="ft-address"><span className="ft-label">Address:</span> En-Tech Associates, Inc. 1111 West High Terrace Syracuse, NY 13219</div>
        </div>

        <div className="ft-bottom">
          <div className="ft-links">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
           
          </div>
          <div className="ft-copy">© {new Date().getFullYear()} EN-TECH ASSOCIATES, INC.</div>
          <div className="ft-social">
            <a className="ft-circle" href="#" aria-label="LinkedIn">in</a>
            <a className="ft-circle" href="#" aria-label="Facebook">f</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
