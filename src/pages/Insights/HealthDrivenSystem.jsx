import React from 'react'
import PageHero from '../../components/PageHero/PageHero'
import InsightCTA from '../../components/InsightCTA/InsightCTA'
import banner from '../../assets/IAQ.png'
import iaq1 from '../../assets/IAQ1.png'
import iaq2 from '../../assets/IAQ2.png'
import iaq3 from '../../assets/IAQ3.png'
import equip1 from '../../assets/Equip1.png'
import equip2 from '../../assets/Equip2.png'
import equip3 from '../../assets/Equip3.png'
import imgCommercial from '../../assets/imgCommercial.png'
import imgMulti from '../../assets/imgMulti.png'
import './HealthDrivenSystem.css'

const HealthDrivenSystem = () => {
  return (
    <div>
      <PageHero
        image={banner}
        title="Health Driven System"
        subtitle="Buildings that Breathe Better. Live Better."
        description="We integrate indoor air quality (IAQ), lighting, and material choices from the start not as an afterthought."
        buttonText="Learn How We Design Healthier Spaces"
        onButtonClick={() => console.log('Learn How We Design Healthier Spaces clicked')}
      />
      
      {/* Section 1: Our IAQ-First Strategies */}
      <section className="iaq-strategies-section">
        <div className="section-container">
          <h2 className="section-main-title">Our IAQ-First Strategies</h2>
          
          <div className="strategies-grid">
            <div className="strategy-card">
              <div className="strategy-image">
                <img src={iaq1} alt="Ventilation Right Sizing" />
              </div>
              <h3 className="strategy-title">Ventilation Right Sizing</h3>
              <p className="strategy-description">No more overdesign. We balance airflow using right-sized ERVs that optimize air exchange based on occupancy and room type.</p>
            </div>
            <div className="strategy-card">
              <div className="strategy-image">
                <img src={iaq2} alt="Material & Paint Selection" />
              </div>
              <h3 className="strategy-title">Material & Paint Selection</h3>
              <p className="strategy-description">We eliminate high-VOC materials and use vetted low-toxicity products backed by certifications like GREENGUARD or Declare.</p>
            </div>
            <div className="strategy-card">
              <div className="strategy-image">
                <img src={iaq3} alt="Air Purification" />
              </div>
              <h3 className="strategy-title">Air Purification</h3>
              <p className="strategy-description">From kitchen hoods to ionization devices, we design to remove pollutants before they reach the air you breathe.</p>
            </div>
          </div>
          
          <div className="strategies-cta">
            <span className="cta-arrow">→</span>
            <span className="cta-text">See IAQ in Action in Our Projects</span>
          </div>
        </div>
      </section>

      {/* Section 2: What We Measure, Improves */}
      <section className="measurement-section">
        <div className="section-container">
          <h2 className="measurement-title">What We Measure, Improves.</h2>
          <p className="measurement-description">
            Our IAQ commissioning process validates air quality after project completion using tools like
          </p>
          
          <div className="measurement-tools">
            <div className="measurement-tool">
              <div className="tool-image">
                <img src={equip1} alt="CO2 and PM2.5 sensors" />
              </div>
              <h3 className="tool-title">CO2 and PM2.5 sensors</h3>
            </div>
            <div className="measurement-tool">
              <div className="tool-image">
                <img src={equip2} alt="Differential pressure readings" />
              </div>
              <h3 className="tool-title">Differential pressure readings</h3>
            </div>
            <div className="measurement-tool">
              <div className="tool-image">
                <img src={equip3} alt="Airflow verification reports" />
              </div>
              <h3 className="tool-title">Airflow verification reports</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Health Outcomes in Real Projects */}
      <section className="projects-section">
        <div className="section-container">
          <h2 className="section-main-title">Health Outcomes in Real Projects</h2>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src={imgCommercial} alt="Sleepy Hollow Hotel" />
                <div className="project-overlay">COMMERCIAL HOTEL</div>
                <div className="project-arrow">→</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Sleepy Hollow Hotel</h3>
                <div className="project-type">
                  <span className="building-icon">🏢</span>
                  Commercial / Hospitality
                </div>
                <ul className="project-outcomes">
                  <li>Added ERV + GPS bipolar ionization</li>
                  <li>Guest satisfaction on air quality improved by 2.3x</li>
                </ul>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <img src={imgMulti} alt="84 Main Street Apartments" />
                <div className="project-overlay">MULTIFAMILY BUILDING</div>
                <div className="project-arrow">→</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">84 Main Street Apartments</h3>
                <div className="project-type">
                  <span className="building-icon">🏢</span>
                  Multifamily (16 Units)
                </div>
                <ul className="project-outcomes">
                  <li>CO2 reduced by 40% indoors</li>
                  <li>IAQ sensors added to all guest rooms</li>
                  <li>Verified ASHRAE 62.1 compliance</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="projects-cta">
            <span className="cta-arrow">→</span>
            <span className="cta-text">See Our Projects</span>
          </div>
        </div>
      </section>
        
      <InsightCTA
        title="Want to Put Wellness at the Core of Your Project?"
        description="We can help you meet WELL and Fitwel standards without over complicating your design."
        buttonText="Talk to Our IAQ Team"
        onButtonClick={() => console.log('Talk to Our IAQ Team clicked')}
      />
      
    </div>
  )
}

export default HealthDrivenSystem


