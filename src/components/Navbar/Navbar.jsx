import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/EntechLogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [systemsOpen, setSystemsOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (dropdown) => {
    if (dropdown === "systems") setSystemsOpen(!systemsOpen);
    if (dropdown === "insights") setInsightsOpen(!insightsOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-left">
          <img src={logo} alt="EnTech" className="navbar-logo" />
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Links */}
        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" end onClick={() => setIsOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
          </li>

          {/* Systems dropdown */}
          <li className="has-caret">
            <button
              className="dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown("systems");
              }}
            >
              Systems <span className="caret">▾</span>
            </button>
            <ul className={`dropdown ${systemsOpen ? "open" : ""}`}>
              <li><NavLink to="/systems/shell" onClick={() => setIsOpen(false)}>Shell</NavLink></li>
              <li><NavLink to="/systems/hvac" onClick={() => setIsOpen(false)}>HVAC</NavLink></li>
              <li><NavLink to="/systems/iaq-ventilation" onClick={() => setIsOpen(false)}>IAQ & Ventilation</NavLink></li>
              <li><NavLink to="/systems/water" onClick={() => setIsOpen(false)}>Water</NavLink></li>
              <li><NavLink to="/systems/lightning" onClick={() => setIsOpen(false)}>Lightning</NavLink></li>
              <li><NavLink to="/systems/electrical" onClick={() => setIsOpen(false)}>Electrical</NavLink></li>
              <li><NavLink to="/systems/rtem" onClick={() => setIsOpen(false)}>RTEM</NavLink></li>
            </ul>
          </li>

          {/* Insights dropdown */}
          <li className="has-caret">
            <button
              className="dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown("insights");
              }}
            >
              Insights <span className="caret">▾</span>
            </button>
            <ul className={`dropdown ${insightsOpen ? "open" : ""}`}>
              <li><NavLink to="/insights/environmental-site-review" onClick={() => setIsOpen(false)}>Environmental Site Review</NavLink></li>
              <li><NavLink to="/insights/health-driven-system" onClick={() => setIsOpen(false)}>Health Driven System</NavLink></li>
              <li><NavLink to="/insights/rtem-showcase" onClick={() => setIsOpen(false)}>RTEM Showcase</NavLink></li>
            </ul>
          </li>

          <li>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
