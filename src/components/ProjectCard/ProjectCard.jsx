import React from "react";
import "./ProjectCard.css";

function ProjectCard({ title, location, systems, outcome }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p className="location">{location}</p>
      <h4>Systems Implemented:</h4>
      <ul>
        {systems.map((sys, index) => (
          <li key={index}>{sys}</li>
        ))}
      </ul>
      <p className="outcome"><strong>Outcome:</strong> {outcome}</p>
    </div>
  );
}

export default ProjectCard;
