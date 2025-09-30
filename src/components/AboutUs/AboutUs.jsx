import React from 'react'
import image from '../../assets/About.png'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <section className="section light">
      <div className="section-container">
        <div className="about-us-section">
          <div>
            <img 
              src={image}
              alt="Modern building" 
              className="about-us-image"
            />
          </div>
          <div className="about-us-content">
            <div className="about-us-decoration">
              <span className="about-us-line" />
              <span className="about-us-dot" />
              <span className="about-us-dot" />
            </div>
            <h2 className="section-title about-us-title">
              En-Tech is a mission-driven <span style={{ color: '#4a7d3b' }}>energy solutions</span> 
            </h2>
            <p className="section-subtitle about-us-subtitle">
            provider focused on improving building performance through holistic system design, diagnostics, and data-driven upgrades. We help properties meet modern energy codes, qualify for incentives, and achieve long-term resilience—without sacrificing comfort or usability.
            </p>
            <button className="about-us-button">
              Explore Our Systems
              <span className="about-us-button-arrow">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
