import React from "react";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import PageHero from "../../components/PageHero/PageHero";
import "./Projects.css";
import { useNavigate } from "react-router-dom";
import imgCommercial from "../../assets/imgCommercial.png";
import MultiProjects from "../../assets/MultiProjects.png";
import imgMulti from "../../assets/imgMulti.png";
import ComProjects from "../../assets/ComProjects.png";
import imgHomes from "../../assets/imgHomes.png";

import banner from "../../assets/imgCommercial.png";

function Projects() {
  const navigate = useNavigate();
  return (
    <div>
      <PageHero
        image={banner}
        title="Projects"
        subtitle="Projects That Perform. Designs That Deliver."
        description="Explore how En-Tech Associates, Inc. helps different building types achieve better comfort, compliance, and efficiency — with real results."
      />

      <div className="projects-intro">
        <h2>Buildings We Work With</h2>
        <p>Whether you're managing a multifamily complex or a small commercial site, En-Tech Associates, Inc. customizes system solutions to your building type and performance goals.</p>
      </div>
      <ProjectSection
        image={imgCommercial}
        title="Commercial Properties"
        subtitle="Offices, hospitals, retail"
        description="Offices, hotels, schools, and retail spaces requiring performance-focused retrofits. Envelope, HVAC, lighting, and controls tailored for high-usage zones and compliance."
        projects={[
          { image: MultiProjects, title: "Sleepy Hollow Hotel Retrofit", location: "Sleepy Hollow, NY", slug: "sleepy-hollow-hotel" },
          { image: MultiProjects, title: "Hudson Medical Office", location: "Tarrytown, NY", slug: "hudson-medical-office" },
          { image: MultiProjects, title: "Rivertown Retail", location: "Dobbs Ferry, NY", slug: "rivertown-retail" },
          { image: MultiProjects, title: "Sleepy Hollow Hotel Retrofit", location: "Sleepy Hollow, NY", slug: "sleepy-hollow-hotel" },
          { image: MultiProjects, title: "Hudson Medical Office", location: "Tarrytown, NY", slug: "hudson-medical-office" },
          { image: MultiProjects, title: "Rivertown Retail", location: "Dobbs Ferry, NY", slug: "rivertown-retail" },
        ]}
        onProjectClick={(p) => {
          console.log("Navigating to commercial project");
          navigate("/projects/commercial/sleepy-hollow-hotel");
        }}
      />

      <ProjectSection
        image={imgMulti}
        title="Multi Family"
        subtitle="Apartments, condos"
        description="Low-rise and mid-rise apartments or condos with shared systems. Ventilation, heating, and electrical upgrades for comfort and utility savings."
        projects={[
          { image: ComProjects, title: "84 Main Street Apartments", location: "Yonkers, NY", slug: "84-main" },
          { image:  ComProjects, title: "Maple Court", location: "White Plains, NY", slug: "maple-court" },
          { image: ComProjects, title: "The Oaks", location: "Hastings, NY", slug: "the-oaks" },
          { image: ComProjects, title: "84 Main Street Apartments", location: "Yonkers, NY", slug: "84-main" },
          { image:  ComProjects, title: "Maple Court", location: "White Plains, NY", slug: "maple-court" },
          { image: ComProjects, title: "The Oaks", location: "Hastings, NY", slug: "the-oaks" },
        ]}
        onProjectClick={(p) => {
          console.log("Navigating to multi-family project");
          navigate("/projects/multi-family/84-main");
        }}
      />

      <ProjectSection
        image={imgHomes}
        title="1–4 Family Homes"
        subtitle="Single-family and small residential"
        description="Single-family and small residential buildings where comfort, cost savings, and compliance upgrades are priorities."
        projects={[
          { image: imgHomes, title: "Riverview Home", location: "Sleepy Hollow, NY", slug: "riverview" },
          { image: imgHomes, title: "Cedar Lane", location: "Irvington, NY", slug: "cedar-lane" },
          { image: imgHomes, title: "Park View", location: "Tarrytown, NY", slug: "park-view" },
          { image: imgHomes, title: "Riverview Home", location: "Sleepy Hollow, NY", slug: "riverview" },
          { image: imgHomes, title: "Cedar Lane", location: "Irvington, NY", slug: "cedar-lane" },
          { image: imgHomes, title: "Park View", location: "Tarrytown, NY", slug: "park-view" },
        ]}
        onProjectClick={(p) => {
          console.log("Navigating to homes project");
          navigate("/projects/homes/riverview");
        }}
      />
    </div>
  );
}

export default Projects;
