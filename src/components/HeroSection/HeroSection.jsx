import React, { useEffect, useMemo, useRef, useState } from "react";
import "./HeroSection.css";
import logo from "../../assets/EntechLogo.png";
import banner1 from "../../assets/Banner1.png";
import banner2 from "../../assets/Banner2.jpg";
import banner3 from "../../assets/Banner3.jpg";


function HeroSection({ title, subtitle, ctaText }) {
  const slides = useMemo(
    () => [banner1, banner2, banner3],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // auto-advance slides every 5 seconds
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [slides.length]);

  return (
    <section className="hero-section">
      {/* background carousel */}
      <div className="hero-carousel">
        {slides.map((src, idx) => {
          let slideClass = "hero-slide";
          if (idx === activeIndex) {
            slideClass += " active";
          } else if (idx === (activeIndex - 1 + slides.length) % slides.length) {
            slideClass += " prev";
          } else {
            slideClass += " next";
          }
          
          return (
            <div
              key={idx}
              className={slideClass}
              style={{ 
                backgroundImage: `url(${src})`,
                zIndex: idx === activeIndex ? 2 : 1
              }}
              aria-hidden={idx !== activeIndex}
            />
          );
        })}
      </div>

      <div className="container">
        <img src={logo} alt="En-Tech Associates, Inc." style={{ height: 55, marginBottom: 14, marginLeft: -18, opacity: 1 }} />
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {ctaText && <button className="cta-button-hero">{ctaText}</button>}

        <div className="hero-dots" role="tablist" aria-label="Hero slides">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === activeIndex ? "active" : ""}`}
              aria-selected={idx === activeIndex}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
