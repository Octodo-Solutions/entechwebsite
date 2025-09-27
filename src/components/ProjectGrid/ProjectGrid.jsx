import React from 'react'
import './ProjectGrid.css'

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

const ProjectGrid = ({
  projects = [],
  onProjectClick
}) => {
  return (
    <div className="project-grid-container">
      <h3 className="projects-grid-title">Our Projects</h3>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCardMini key={i} {...project} onClick={() => onProjectClick && onProjectClick(project)} />
        ))}
      </div>
    </div>
  )
}

export default ProjectGrid
