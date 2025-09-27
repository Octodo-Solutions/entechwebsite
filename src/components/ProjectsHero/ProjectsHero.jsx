import React from 'react'
import './ProjectsHero.css'

const ProjectsHero = ({ title, subtitle, description, image }) => {
  return (
    <section className="projects-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="projects-heroOverlay" />
      <div className="projects-heroContainer">
        <h1 className="projects-heroTitle">{title}</h1>
        {subtitle && <p className="projects-heroSubtitle">{subtitle}</p>}
        {description && <p className="projects-heroDescription">{description}</p>}
      </div>
    </section>
  )
}

export default ProjectsHero


