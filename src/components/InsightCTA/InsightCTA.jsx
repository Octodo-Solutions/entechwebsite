import React from 'react'
import './InsightCTA.css'

const InsightCTA = ({ 
  title, 
  description, 
  buttonText, 
  onButtonClick,
  backgroundImage = "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
}) => {
  return (
    <section className="insight-cta">
      <div 
        className="cta-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="cta-overlay">
          <div className="cta-content">
            <h2 className="cta-title">{title}</h2>
            <p className="cta-description">{description}</p>
            <button className="cta-button" onClick={onButtonClick}>
              <span className="phone-icon">📞</span>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InsightCTA
