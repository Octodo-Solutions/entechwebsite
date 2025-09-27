import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/EntechLogo.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  // Check if any systems page is active
  const isSystemsActive = () => {
    return location.pathname.startsWith('/systems/');
  };

  // Check if any insights page is active
  const isInsightsActive = () => {
    return location.pathname.startsWith('/insights/');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={dropdownRef}>
      <div className="navbar-container">
        <div className="navbar-left">
          <NavLink to="/" onClick={closeMobileMenu}>
            <img src={logo} alt="En-Tech Associates, Inc." className="navbar-logo" />
          </NavLink>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? "active" : undefined} onClick={closeMobileMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : undefined} onClick={closeMobileMenu}>Projects</NavLink>
          </li>
          <li className="has-caret">
            <button 
              className={`dropdown-toggle ${activeDropdown === 'systems' || isSystemsActive() ? 'active' : ''}`}
              onClick={() => toggleDropdown('systems')}
            >
              Systems
              <span className="caret">▾</span>
            </button>
            <ul className={`dropdown ${activeDropdown === 'systems' ? 'show' : ''}`}>
              <li><NavLink to="/systems/shell" className={({ isActive }) => isActive ? "active" : undefined} onClick={() => { closeMobileMenu(); closeDropdown(); }}>Shell</NavLink></li>
              <li><NavLink to="/systems/hvac" className={({ isActive }) => isActive ? "active" : undefined} onClick={() => { closeMobileMenu(); closeDropdown(); }}>HVAC</NavLink></li>
              <li><NavLink to="/systems/iaq-ventilation" className={({ isActive }) => isActive ? "active" : undefined} onClick={() => { closeMobileMenu(); closeDropdown(); }}>IAQ & Ventilation</NavLink></li>
              <li><NavLink to="/systems/water" className={({ isActive }) => isActive ? "active" : undefined} onClick={() => { closeMobileMenu(); closeDropdown(); }}>Water</NavLink></li>
              <li><NavLink to="/systems/lightning" className={({ isActive }) => isActive ? "active" : undefined} onClick={() => { closeMobileMenu(); closeDropdown(); }}>Lightning</NavLink></li>
              <li><NavLink to="/systems/electrical" className={({ isActive }) => isActive ? "active" : undefined} onClick={() => { closeMobileMenu(); closeDropdown(); }}>Electrical</NavLink></li>
              <li><NavLink to="/systems/rtem" className={({ isActive }) => isActive ? "active" : undefined} onClick={() => { closeMobileMenu(); closeDropdown(); }}>RTEM</NavLink></li>
            </ul>
          </li>
          <li className="has-caret">
            <button 
              className={`dropdown-toggle ${activeDropdown === 'insights' || isInsightsActive() ? 'active' : ''}`}
              onClick={() => toggleDropdown('insights')}
            >
              Insights
              <span className="caret">▾</span>
            </button>
            <ul className={`dropdown ${activeDropdown === 'insights' ? 'show' : ''}`}>
              <li><NavLink to="/insights/environmental-site-review" className={({ isActive }) => isActive ? "active" : undefined} onClick={() => { closeMobileMenu(); closeDropdown(); }}>Environmental Site Review</NavLink></li>
              <li><NavLink to="/insights/health-driven-system" className={({ isActive }) => isActive ? "active" : undefined} onClick={() => { closeMobileMenu(); closeDropdown(); }}>Health Driven System</NavLink></li>
              <li><NavLink to="/insights/rtem-showcase" className={({ isActive }) => isActive ? "active" : undefined} onClick={() => { closeMobileMenu(); closeDropdown(); }}>RTEM showcase</NavLink></li>
            </ul>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : undefined} onClick={closeMobileMenu}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
