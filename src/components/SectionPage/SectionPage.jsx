import React from 'react'
import './SectionPage.css'

const SectionPage = ({
  title,
  subtitle,
  image,
  bullets = [],
  children,
  ctaText,
  onCtaClick
}) => {
  return (
    <section className="section-page">
      {image && (
        <div className="section-hero" style={{ backgroundImage: `url(${image})` }} />
      )}
      <div className="section-container">
        <h1 className="section-title">{title}</h1>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        {bullets.length > 0 && (
          <ul className="section-bullets">
            {bullets.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
        {children}
        {ctaText && (
          <button className="section-cta" onClick={onCtaClick}>{ctaText}</button>
        )}
      </div>
    </section>
  )
}

export default SectionPage


