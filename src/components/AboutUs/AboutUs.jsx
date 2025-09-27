import React from 'react'
import image from '../../assets/About.png'

const AboutUs = () => {
  return (
    <section className="section light">
      <div className="section-container" style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: '70px', alignItems: 'center' }}>
        <div>
          <img 
            src={image}
            alt="Modern building" 
            style={{ 
              width: '100%', 
              height: '520px', 
              objectFit: 'contain', 
              borderRadius: '0 0 0 0' 
            }} 
          />
        </div>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: 14 }}>
            <span style={{ width: 42, height: 6, borderRadius: 999, background: '#7fbf86', display: 'inline-block' }} />
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#7fbf86', display: 'inline-block' }} />
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#7fbf86', display: 'inline-block' }} />
          </div>
          <h2 className="section-title" style={{ margin: '0 0 8px 0' }}>
            En-Tech is a mission-driven <span style={{ color: '#4a7d3b' }}>energy solutions</span> 
          </h2>
          <p className="section-subtitle" style={{ margin: '10px 0 24px 0', lineHeight: '1.9' , textAlign: 'justify'}}>
          provider focused on improving building performance through holistic system design, diagnostics, and data-driven upgrades. We help properties meet modern energy codes, qualify for incentives, and achieve long-term resilience—without sacrificing comfort or usability.
          </p>
          <button style={{
            background: '#f5f5f5',
            color: '#2b3a2f',
            border: 'none',
            borderRadius: '24px',
            padding: '12px 20px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            Explore Our Systems
            <span style={{ 
              background: '#2b3a2f', 
              color: '#ffffff', 
              borderRadius: '50%', 
              width: '26px', 
              height: '26px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontSize: '14px'
            }}>
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
