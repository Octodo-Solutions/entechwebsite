import React from 'react'
import './CarbonNeutral.css'
import forest from '../../assets/forest.png'
import leaf from '../../assets/leaves.png'

const CarbonNeutral = () => {
  return (
    <section className="cn-section" style={{ backgroundImage: `url(${forest})` }}>
      <div className="cn-card">
        <img src={leaf} alt="leaf" className="cn-leaf" />
        <div className="cn-content">
          <h2 className="cn-title">Carbon Neutral</h2>
          <p className="cn-desc">
            En-Tech Associates helps clients achieve their goals of conserving energy and the environment using the latest
            technologies and practices available.
          </p>
          <p className="cn-desc small">
            Lead by example in reducing your building's carbon footprint and Build Green, Net Zero, LEED Certified, Energy Star, or
            Carbon Neutral.
          </p>
          <button className="cn-cta"><span className="cn-emoji" role="img" aria-label="earth">🌍</span><span>How?</span></button>
        </div>
      </div>
    </section>
  )
}

export default CarbonNeutral
