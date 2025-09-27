import React, { useRef } from 'react'
import './ProjectSection.css'

const ProjectCardMini = ({ image, title, location, onClick }) => {
  return (
    <button className="proj-mini" onClick={onClick}>
      <div className="proj-miniImage" style={{ backgroundImage: `url(${image})` }} />
      <div className="proj-miniMeta">
        <span className="proj-miniTitle">{title}</span>
        <span className="proj-miniLocation">{location}</span>
      </div>
    </button>
  )
}

const ProjectSection = ({
  image,
  title,
  subtitle,
  description,
  projects = [],
  onProjectClick
}) => {
  const carouselRef = useRef(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -240, // Scroll by one card width + gap
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 240, // Scroll by one card width + gap
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="project-section">
      <div className="proj-grid">
        <div className="proj-hero" style={{ backgroundImage: `url(${image})` }} />
        <div className="proj-copy">
          <h3 className="proj-title">{title}</h3>
          {subtitle && <p className="proj-subtitle">{subtitle}</p>}
          <p className="proj-desc">{description}</p>
        </div>
      </div>

      <div className="proj-carousel-container">
        <button className="carousel-arrow carousel-arrow-left" onClick={scrollLeft} aria-label="Scroll left">
          ‹
        </button>
        <div className="proj-carousel" ref={carouselRef}>
          {projects.map((p, i) => (
            <ProjectCardMini key={i} {...p} onClick={() => onProjectClick && onProjectClick(p)} />
          ))}
        </div>
        <button className="carousel-arrow carousel-arrow-right" onClick={scrollRight} aria-label="Scroll right">
          ›
        </button>
      </div>
    </section>
  )
}

export default ProjectSection


