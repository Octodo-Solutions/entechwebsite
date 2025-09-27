import React from 'react'
import './RTEMShowcase.css'
import dashboard from '../../assets/dashboard.png'
import PageHero from '../../components/PageHero/PageHero'
import InsightCTA from '../../components/InsightCTA/InsightCTA'
import banner from '../../assets/Rtem.png'

const RTEMShowcase = () => {
  return (
    <div>
      <PageHero
        image={banner}
        title="RTEM Showcase"
        subtitle="Real-Time Visibility. Smarter Building Performance."
        description="RTEM lets building owners and engineers monitor usage, detect issues, and verify performance with comprehensive real-time data and analytics."
        buttonText="Explore RTEM System"
        onButtonClick={() => console.log('Explore RTEM System clicked')}
      />

      {/* Section 1: Smarter Operations Start With Real-Time Data */}
      <section className="rtem-section">
        <div className="section-container">
          <h2 className="section-main-title">Smarter Operations Start With Real-Time Data</h2>
          <p className="section-description">
            En-Tech Associates, Inc. installs RTEM platforms that track energy usage, HVAC performance, air quality, and load patterns. 
            These systems not only help with ongoing maintenance, they also verify compliance and incentive performance.
          </p>
          
          <div className="key-benefits-section">
            <h3 className="key-benefits-title">Key Benefits</h3>
            <div className="key-benefits-grid">
              <div className="key-benefit-item">
                <div className="key-benefit-icon">🎯</div>
                <span>Fault detection before failure</span>
              </div>
              <div className="key-benefit-item">
                <div className="key-benefit-icon">🌊</div>
                <span>Tenant comfort tracking in multifamily buildings</span>
              </div>
              <div className="key-benefit-item">
                <div className="key-benefit-icon">🎯</div>
                <span>Continuous verification of efficiency measures</span>
              </div>
              <div className="key-benefit-item">
                <div className="key-benefit-icon">🌊</div>
                <span>Carbon and utility reporting for LL97, 45L, NYSERDA RTEM programs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: See it in Action */}
      <section className="dashboard-section">
        <div className="section-container">
          <h2 className="section-main-title">See it in Action</h2>
          <p className="section-description">
            Our IAQ commissioning process validates air quality after project completion using tools like
          </p>
          
          <div className="dashboard-features">
            <div className="feature-boxes">
              <div className="feature-box">
                <h4>Energy Usage Heatmap</h4>
                <p>Tracks consumption by zone or system over 24 hours</p>
              </div>
              <div className="feature-box">
                <h4>Peak Load Chart</h4>
                <p>Flags spikes and compares to demand thresholds</p>
              </div>
              <div className="feature-box">
                <h4>Air Quality Monitor</h4>
                <p>CO₂, humidity, VOC graphs with live trend lines</p>
              </div>
              <div className="feature-box">
                <h4>Alert Panel</h4>
                <p>Real-time fault alerts (e.g., filter clogged, compressor overrun)</p>
              </div>
            </div>
            
            <div className="dashboard-mockup">
              <div className="dashboard-image">
                <img src={dashboard} alt="RTEM Dashboard" />
                <div className="dummy-data-note">Dummy Data*</div>
              </div>
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
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sleepy Hollow Hotel" />
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
                  <li>RTEM installed across HVAC, lighting, and ventilation</li>
                  <li>Detected early refrigerant leak and reduced service call time by 40%</li>
                  <li>Verified 32% HVAC energy savings post-retrofit</li>
                </ul>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Midtown Office Retrofit" />
                <div className="project-overlay">MULTIFAMILY BUILDING</div>
                <div className="project-arrow">→</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Midtown Office Retrofit</h3>
                <div className="project-type">
                  <span className="building-icon">🏢</span>
                  Multifamily (16 Units)
                </div>
                <ul className="project-outcomes">
                  <li>Dashboard installed with SPAN panel integration</li>
                  <li>Identified peak demand trend at 4 PM daily → shifted load</li>
                  <li>Lowered monthly demand charges by $2,800</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="projects-cta">
            <span className="cta-arrow">→</span>
            <span className="cta-text">View All RTEM Projects</span>
          </div>
        </div>
      </section>

      {/* Section 4: Track What Incentives Require */}
      <section className="incentives-section">
        <div className="section-container">
          <h2 className="section-main-title">Track What Incentives Require</h2>
          <p className="section-description">
            RTEM is not just a tool, it's often a requirement. We install systems that help clients comply with:
          </p>
          
          <div className="incentives-grid">
            <div className="incentive-card">
              <div className="incentive-image">
                <img src="/src/assets/Awards/nyserda.png" alt="NYSERDA" />
              </div>
              <p>NYSERDA RTEM Incentive</p>
            </div>
            <div className="incentive-card">
              <div className="incentive-image">
                <img src="/src/assets/Awards/NewYork.png" alt="Local Law 97" />
              </div>
              <p>Local Law 97 (GHG Reporting)</p>
            </div>
            <div className="incentive-card">
              <div className="incentive-image">
                <img src="/src/assets/Awards/nyserda.png" alt="DOE 45L" />
              </div>
              <p>DOE 45L Verification</p>
            </div>
            <div className="incentive-card">
              <div className="incentive-image">
                <img src="/src/assets/Awards/nyserda.png" alt="FlexTech" />
              </div>
              <p>FlexTech-supported metering programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <InsightCTA
        title="Want to See a Live RTEM Dashboard in Action?"
        description="We can walk you through a sample dashboard and help scope your project's monitoring"
        buttonText="Request an RTEM Demo"
        onButtonClick={() => console.log('Request an RTEM Demo clicked')}
      />
    </div>
  )
}

export default RTEMShowcase
