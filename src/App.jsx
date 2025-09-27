import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Systems from "./pages/Systems/Systems";
import Insights from "./pages/Insights/Insights";
import Contact from "./pages/Contact/Contact";
import React from "react";
import Footer from "./components/Footer/Footer";
import Shell from "./pages/Systems/Shell";
import HVAC from "./pages/Systems/HVAC";
import IAQVentilation from "./pages/Systems/IAQVentilation";
import Water from "./pages/Systems/Water";
import Lightning from "./pages/Systems/Lightning";
import Electrical from "./pages/Systems/Electrical";
import RTEM from "./pages/Systems/RTEM";
import EnvironmentalSiteReview from "./pages/Insights/EnvironmentalSiteReview";
import HealthDrivenSystem from "./pages/Insights/HealthDrivenSystem";
import RTEMShowcase from "./pages/Insights/RTEMShowcase";
import CommercialProject from "./pages/Projects/CommercialProject";
import MultiFamilyProject from "./pages/Projects/MultiFamilyProject";
import HomesProject from "./pages/Projects/HomesProject";
import CommercialCategory from "./pages/Projects/CommercialCategory";
import MultiFamilyCategory from "./pages/Projects/MultiFamilyCategory";
import HomesCategory from "./pages/Projects/HomesCategory";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/commercial" element={<CommercialCategory />} />
        <Route path="/projects/multi-family" element={<MultiFamilyCategory />} />
        <Route path="/projects/homes" element={<HomesCategory />} />
        <Route path="/projects/commercial/:slug" element={<CommercialProject />} />
        <Route path="/projects/multi-family/:slug" element={<MultiFamilyProject />} />
        <Route path="/projects/homes/:slug" element={<HomesProject />} />
        <Route path="/systems" element={<Systems />} />
        <Route path="/systems/shell" element={<Shell />} />
        <Route path="/systems/hvac" element={<HVAC />} />
        <Route path="/systems/iaq-ventilation" element={<IAQVentilation />} />
        <Route path="/systems/water" element={<Water />} />
        <Route path="/systems/lightning" element={<Lightning />} />
        <Route path="/systems/electrical" element={<Electrical />} />
        <Route path="/systems/rtem" element={<RTEM />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/environmental-site-review" element={<EnvironmentalSiteReview />} />
        <Route path="/insights/health-driven-system" element={<HealthDrivenSystem />} />
        <Route path="/insights/rtem-showcase" element={<RTEMShowcase />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
