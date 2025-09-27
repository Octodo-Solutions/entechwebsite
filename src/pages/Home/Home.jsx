import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutUs from "../../components/AboutUs/AboutUs";
import BuildingTypes from "../../components/BuildingTypes/BuildingTypes";
import SystemSection from "../../components/SystemSection/SystemSection";
import Certifications from "../../components/Certifications/Certifications";
import WorkflowSteps from "../../components/WorkflowSteps/WorkflowSteps";
import CarbonNeutral from "../../components/CarbonNeutral/CarbonNeutral";
import Stakeholders from "../../components/Stakeholders/Stakeholders";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div>
      <HeroSection
        title="Redefining Smart, Sustainable Buildings"
        subtitle="En-Tech Associates, Inc. delivers whole-system energy solutions—from diagnostics to compliance."
        ctaText="Upload Your Project"
      />

      <AboutUs />

      <BuildingTypes />

      <SystemSection />

      <Certifications />

      <WorkflowSteps />

      <CarbonNeutral />

      <Stakeholders />

    </div>
  );
}

export default Home;
