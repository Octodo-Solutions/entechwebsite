import React from "react";
import PageHero from "../../components/PageHero/PageHero";
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import "./MultiFamilyCategory.css";
import { useNavigate } from "react-router-dom";
import imgMulti from "../../assets/imgMulti.png";
import ComProjects from "../../assets/ComProjects.png";

function MultiFamilyCategory() {
  const navigate = useNavigate();

  const projects = [
    { image: ComProjects, title: "84 Main Street Apartments", location: "Yonkers, NY", slug: "84-main" },
    { image: ComProjects, title: "Maple Court", location: "White Plains, NY", slug: "maple-court" },
    { image: ComProjects, title: "The Oaks", location: "Hastings, NY", slug: "the-oaks" },
    { image: ComProjects, title: "84 Main Street Apartments", location: "Yonkers, NY", slug: "84-main" },
    { image: ComProjects, title: "Maple Court", location: "White Plains, NY", slug: "maple-court" },
    { image: ComProjects, title: "The Oaks", location: "Hastings, NY", slug: "the-oaks" },
  ];

  return (
    <div>
      <PageHero
        image={imgMulti}
        title="Multi Family"
        subtitle="Apartments, condos"
        description="Low-rise and mid-rise apartments or condos with shared systems. Ventilation, heating, and electrical upgrades for comfort and utility savings."
      />

      <div className="category-content">
        <div className="category-info">
          <div className="category-image">
            <img src={imgMulti} alt="Multi Family" />
          </div>
          <div className="category-details">
            <h2>Multi Family</h2>
            <p className="category-subtitle">Apartments, condos</p>
            <p className="category-description">
              Low-rise and mid-rise apartments or condos with shared systems. 
              Ventilation, heating, and electrical upgrades for comfort and utility savings.
            </p>
          </div>
        </div>

        <ProjectGrid
          projects={projects}
          onProjectClick={(project) => {
            console.log("Navigating to multi-family project");
            navigate(`/projects/multi-family/${project.slug}`);
          }}
        />
      </div>
    </div>
  );
}

export default MultiFamilyCategory;
