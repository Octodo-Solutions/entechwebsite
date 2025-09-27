import React from "react";
import "./BuildingTypes.css";
import { useNavigate } from "react-router-dom";

function BuildingTypes() {
  const navigate = useNavigate();

  const buildingTypes = [
    {
      title: "1 - 4 Family Homes",
      description: "Single-family and small residential buildings.",
      icon: "🏠",
      route: "/projects/homes",
      isHighlighted: true
    },
    {
      title: "Commercial Properties", 
      description: "Offices, hospitality, retail, and more.",
      icon: "🏢",
      route: "/projects/commercial",
      isHighlighted: false
    },
    {
      title: "Multi Family",
      description: "Apartments, condos, and housing complexes.",
      icon: "🏘️",
      route: "/projects/multi-family",
      isHighlighted: false
    }
  ];

  return (
    <section className="section light building-types">
      <div className="section-container">
        <h2 className="section-title">Buildings We Work With</h2>
        <p className="section-subtitle">Whether you're managing a multifamily complex or a small commercial site, En-Tech Associates, Inc. customizes system solutions to your building type and performance goals.</p>
        <div className="cards">
          {buildingTypes.map((building, index) => (
            <div 
              key={index}
              className={`card card ${building.isHighlighted ? 'highlighted' : ''}`}
              onClick={() => navigate(building.route)}
            >
              <div className="card-arrow"><b>→</b></div>
              <div className="card-icon">{building.icon}</div>
              <h3>{building.title}</h3>
              <p>{building.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BuildingTypes;
