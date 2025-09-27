import React from "react";
import PageHero from "../../components/PageHero/PageHero";
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import "./HomesCategory.css";
import { useNavigate } from "react-router-dom";
import imgHomes from "../../assets/imgHomes.png";

function HomesCategory() {
  const navigate = useNavigate();

  const projects = [
    { image: imgHomes, title: "Riverview Home", location: "Sleepy Hollow, NY", slug: "riverview" },
    { image: imgHomes, title: "Cedar Lane", location: "Irvington, NY", slug: "cedar-lane" },
    { image: imgHomes, title: "Park View", location: "Tarrytown, NY", slug: "park-view" },
    { image: imgHomes, title: "Riverview Home", location: "Sleepy Hollow, NY", slug: "riverview" },
    { image: imgHomes, title: "Cedar Lane", location: "Irvington, NY", slug: "cedar-lane" },
    { image: imgHomes, title: "Park View", location: "Tarrytown, NY", slug: "park-view" },
  ];

  return (
    <div>
      <PageHero
        image={imgHomes}
        title="1–4 Family Homes"
        subtitle="Single-family and small residential"
        description="Single-family and small residential buildings where comfort, cost savings, and compliance upgrades are priorities."
      />

      <div className="category-content">
        <div className="category-info">
          <div className="category-image">
            <img src={imgHomes} alt="1–4 Family Homes" />
          </div>
          <div className="category-details">
            <h2>1–4 Family Homes</h2>
            <p className="category-subtitle">Single-family and small residential</p>
            <p className="category-description">
              Single-family and small residential buildings where comfort, cost savings, 
              and compliance upgrades are priorities.
            </p>
          </div>
        </div>

        <ProjectGrid
          projects={projects}
          onProjectClick={(project) => {
            console.log("Navigating to homes project");
            navigate(`/projects/homes/${project.slug}`);
          }}
        />
      </div>
    </div>
  );
}

export default HomesCategory;
