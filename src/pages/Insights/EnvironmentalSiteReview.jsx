import React, { useState, useEffect } from 'react'
import PageHero from '../../components/PageHero/PageHero'
import Footer from '../../components/Footer/Footer'
import InsightCTA from '../../components/InsightCTA/InsightCTA'
import banner from '../../assets/forest.png'
import commercialImage from '../../assets/imgCommercial.png'
import './EnvironmentalSiteReview.css'

const EnvironmentalSiteReview = () => {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % 4)
    }, 3000) // Change step every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <PageHero
        image={banner}
        title="Environmental Site Review"
        subtitle="Preliminary assessments for site risks, remediation, and compliance."
        description="Comprehensive environmental evaluations to identify potential risks, develop sampling strategies, and ensure regulatory compliance for your building projects."
        buttonText="Request Site Review"
        onButtonClick={() => console.log('Request Site Review clicked')}
      />
      
      {/* Section 1: Targeted Environmental Assessments for Safer Buildings */}
      <section className="environmental-section">
        <div className="section-container">
          <h2 className="section-main-title">Targeted Environmental Assessments for Safer Buildings</h2>
          <p className="section-description">
            Before you design or retrofit, En-Tech Associates, Inc. performs on-site evaluations to uncover invisible risks. 
            Our findings inform better mechanical design, protect future occupants, and support incentive eligibility.
          </p>
          
          <div className="key-areas-section">
            <h3 className="key-areas-title">Key Areas of Review</h3>
            <div className="key-areas-grid">
              <div className="key-area-item">
                <div className="key-area-icon">🎯</div>
                <span>Radon gas testing & mitigation</span>
              </div>
              <div className="key-area-item">
                <div className="key-area-icon">🎯</div>
                <span>VOC presence in air, water, and soil</span>
              </div>
              <div className="key-area-item">
                <div className="key-area-icon">🌊</div>
                <span>Drainage and water table mapping</span>
              </div>
              <div className="key-area-item">
                <div className="key-area-icon">🌊</div>
                <span>Soil stability and subgrade review</span>
              </div>
              <div className="key-area-item">
                <div className="key-area-icon">🌊</div>
                <span>Septic & well water quality checks</span>
              </div>
              <div className="key-area-item">
                <div className="key-area-icon">🌊</div>
                <span>Hazard history from prior land use</span>
              </div>
            </div>
          </div>
          
          <div className="compliance-note">
            <h4 className="compliance-title">Compliance Note:</h4>
            <p className="compliance-text">
              All findings are mapped against applicable standards: 
              <span className="standards">LL97 | 45L | 179D | DEC / DOH / EPA</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: From Site Risk to Safe Design — Here's How We Work */}
      <section className="process-section">
        <div className="section-container">
          <h2 className="process-title">From Site Risk to Safe Design — Here's How We Work</h2>
          
          <div className="process-flow">
            <div className={`process-step ${activeStep === 0 ? 'active' : ''}`}>
              <div className="process-circle"></div>
              <div className="process-content">
                <h3 className="process-step-title">Initial Intake</h3>
                <p className="process-step-description">Client uploads site plan or location info.</p>
              </div>
            </div>
            
            <div className={`process-step ${activeStep === 1 ? 'active' : ''}`}>
              <div className="process-circle"></div>
              <div className="process-content">
                <h3 className="process-step-title">On-Site Review</h3>
                <p className="process-step-description">We visit or analyze soil, water, and airflow data for risk areas.</p>
              </div>
            </div>
            
            <div className={`process-step ${activeStep === 2 ? 'active' : ''}`}>
              <div className="process-circle"></div>
              <div className="process-content">
                <h3 className="process-step-title">Diagnostics + Lab Tests</h3>
                <p className="process-step-description">Optional radon, VOC, and water sampling conducted.</p>
              </div>
            </div>
            
            <div className={`process-step ${activeStep === 3 ? 'active' : ''}`}>
              <div className="process-circle"></div>
              <div className="process-content">
                <h3 className="process-step-title">Report + Recommendations</h3>
                <p className="process-step-description">You receive a visual site map + summary PDF with mitigation strategies and compliance notes</p>
              </div>
            </div>
          </div>
          
          <div className="process-cta">
            <button className="upload-button">
              <span className="upload-icon">↑</span>
              Upload Your Site Plan for Review
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: What Do We Catch? Here's a Real Example */}
      <section className="example-section">
        <div className="section-container">
          <h2 className="example-title">What Do We Catch? Here's a Real Example</h2>
          
          <div className="example-card">
            <div className="example-image">
              <img src={commercialImage} alt="Commercial Project Example" className="project-example-image" />
            </div>
            <div className="example-content">
              <h3 className="project-name">Suburban Multifamily Development</h3>
              <div className="project-details">
                <div className="project-detail">
                  <span className="detail-icon">📍</span>
                  <span>Yonkers, NY</span>
                </div>
                <div className="project-detail">
                  <span className="detail-icon">🏢</span>
                  <span>Multifamily (16 Units)</span>
                </div>
              </div>
              <div className="project-results">
                <strong>Results: LL97 & NYSERDA Approved Air Quality Strategy</strong>
              </div>
            </div>
          </div>
          
          <div className="example-findings">
            <ul className="findings-list">
              <li>Sub-slab radon levels &gt; 4 pCi/L → Mitigation installed</li>
              <li>Water table issue detected → Sump + barrier design added</li>
              <li>VOC traces from former dry cleaning site → Material selection adjusted</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Health & Compliance Start With the Ground Beneath You */}
      <section className="compliance-section">
        <div className="section-container">
          <h2 className="compliance-main-title">Health & Compliance Start With the Ground Beneath You</h2>
          <p className="compliance-description">
            Environmental issues don't just cause discomfort — they cause code violations, litigation risk, and lost funding. 
            Early review ensures your building is eligible for:
          </p>
          
          <div className="compliance-benefits">
            <div className="compliance-benefit">
              <div className="benefit-icon">🎯</div>
              <span>Clean Heat + Comfort Home programs</span>
            </div>
            <div className="compliance-benefit">
              <div className="benefit-icon">🎯</div>
              <span>LL97 compliance pathways</span>
            </div>
            <div className="compliance-benefit">
              <div className="benefit-icon">🌊</div>
              <span>45L and 179D tax credits</span>
            </div>
            <div className="compliance-benefit">
              <div className="benefit-icon">🌊</div>
              <span>HUD, DEC, and EPA environmental standards</span>
            </div>
          </div>
        </div>
      </section>
        
        <InsightCTA
          title="Ready to Start Your Environmental Site Review?"
          description="Get a comprehensive assessment of your site's environmental conditions and compliance requirements."
          buttonText="Request Site Review"
          onButtonClick={() => console.log('Request Site Review clicked')}
        />
      
      
    </div>
  )
}

export default EnvironmentalSiteReview