import React from "react";
import PageHero from "../../components/PageHero/PageHero";
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import "./CommercialCategory.css";
import { useNavigate } from "react-router-dom";
import imgCommercial from "../../assets/imgCommercial.png";
import MultiProjects from "../../assets/MultiProjects.png";

function CommercialCategory() {
  const navigate = useNavigate();

  const projects = [
    { image: MultiProjects, title: "Sleepy Hollow Hotel Retrofit", location: "Sleepy Hollow, NY", slug: "sleepy-hollow-hotel" },
    { image: MultiProjects, title: "Hudson Medical Office", location: "Tarrytown, NY", slug: "hudson-medical-office" },
    { image: MultiProjects, title: "Rivertown Retail", location: "Dobbs Ferry, NY", slug: "rivertown-retail" },
    { image: MultiProjects, title: "Sleepy Hollow Hotel Retrofit", location: "Sleepy Hollow, NY", slug: "sleepy-hollow-hotel" },
    { image: MultiProjects, title: "Hudson Medical Office", location: "Tarrytown, NY", slug: "hudson-medical-office" },
    { image: MultiProjects, title: "Rivertown Retail", location: "Dobbs Ferry, NY", slug: "rivertown-retail" },
  ];

  return (
    <div>
      <PageHero
        image={imgCommercial}
        title="Commercial Properties"
        subtitle="Offices, hospitals, retail"
        description="Offices, hotels, schools, and retail spaces requiring performance-focused retrofits. Envelope, HVAC, lighting, and controls tailored for high-usage zones and compliance."
      />

      <div className="category-content">
        <div className="category-info">
          <div className="category-image">
            <img src={imgCommercial} alt="Commercial Properties" />
          </div>
          <div className="category-details">
            <h2>Commercial Properties</h2>
            <p className="category-subtitle">Offices, hospitals, retail</p>
            <p className="category-description">
              Offices, hotels, schools, and retail spaces requiring performance-focused retrofits. 
              Envelope, HVAC, lighting, and controls tailored for high-usage zones and compliance.
            </p>
          </div>
        </div>

        <ProjectGrid
          projects={projects}
          onProjectClick={(project) => {
            console.log("Navigating to commercial project");
            navigate(`/projects/commercial/${project.slug}`);
          }}
        />
      </div>
    </div>
  );
}

export default CommercialCategory;
