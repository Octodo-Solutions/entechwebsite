import React from 'react'
import './PageHero.css'

const PageHero = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  titleColor = '#9BFF17', // Default lime green color
  buttonText,
  onButtonClick
}) => {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="page-hero-overlay" />
      <div className="page-hero-container">
        <h1 className="page-hero-title" style={{ color: titleColor }}>
          {title}
        </h1>
        {subtitle && (
          <h2 className="page-hero-subtitle">
            {subtitle}
          </h2>
        )}
        {description && (
          <p className="page-hero-description">
            {description}
          </p>
        )}
        {buttonText && (
          <button className="page-hero-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </section>
  )
}

export default PageHero
