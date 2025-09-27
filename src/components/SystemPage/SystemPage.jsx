import React from 'react'
import './SystemPage.css'


// Function to get impact icon based on content
const getImpactIcon = (text) => {
  if (text.toLowerCase().includes('energy') || text.toLowerCase().includes('utility') || text.toLowerCase().includes('demand')) {
    return '⚡' // Energy icon
  } else if (text.toLowerCase().includes('comfort') || text.toLowerCase().includes('temperature')) {
    return '🌡️' // Comfort/Temperature icon
  } else if (text.toLowerCase().includes('air') || text.toLowerCase().includes('quality') || text.toLowerCase().includes('ventilation')) {
    return '🌬️' // Air quality icon
  } else if (text.toLowerCase().includes('compliance') || text.toLowerCase().includes('code') || text.toLowerCase().includes('regulation')) {
    return '📋' // Compliance icon
  } else if (text.toLowerCase().includes('safety') || text.toLowerCase().includes('protection')) {
    return '🛡️' // Safety icon
  } else if (text.toLowerCase().includes('efficiency') || text.toLowerCase().includes('performance')) {
    return '📈' // Performance icon
  } else {
    return '✅' // Default success icon
  }
}

const SystemPage = ({
  breadcrumb,
  image,
  title,
  meta = [],
  description,
  impacts = [],
  services = [],
  linkText,
  onLinkClick
}) => {
  return (
    <section className="system-page">
      <div className="system-container">
        <p className="system-breadcrumb">{breadcrumb}</p>

        <div className="system-hero">
          <div className="system-image" style={{ backgroundImage: image ? `url(${image})` : undefined }} />
          <div className="system-heroContent">
            <h1 className="system-title">{title}</h1>
            {meta.length > 0 && (
              <p className="system-meta">{meta.join(', ')}</p>
            )}
            {description && (
              <p className="system-desc">{description}</p>
            )}
          </div>
        </div>

        {impacts.length > 0 && (
          <div className="system-block">
            <h3 className="system-blockTitle">Impact</h3>
            <div className="system-impacts">
              {impacts.map((text, i) => (
                <div key={i} className="impact-card">
                  <div className="impact-icon">
                    <span className="impact-emoji">{getImpactIcon(text)}</span>
                  </div>
                  <div className="impact-text">{text}</div>
                  <span className="impact-dot" />
                </div>
              ))}
            </div>
          </div>
        )}

        {services.length > 0 && (
          <div className="system-block">
            <h3 className="system-blockTitle">Key Services</h3>
            <div className="system-services">
              {services.map((svc, i) => (
                <div key={i} className="service-item">
                  <span className="service-check" />
                  <span>{svc}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {linkText && (
          <button className="system-link" onClick={onLinkClick}>
            <span className="link-circle">→</span>
            {linkText}
          </button>
        )}
      </div>
    </section>
  )
}

export default SystemPage


