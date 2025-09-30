import React from 'react'
import './WorkflowSteps.css'
import icon1 from '../../assets/Icons/image 7.png'
import icon2 from '../../assets/Icons/image 8.png'
import icon3 from '../../assets/Icons/image 9.png'
import icon4 from '../../assets/Icons/image 10.png'
import icon5 from '../../assets/Icons/water.png'
import icon6 from '../../assets/Icons/lightning.png'

const topItems = [
  { img: icon1, label: 'Lower Utility Bills' },
  { img: icon2, label: 'Increase Equipment Lifespan' },
  { img: icon3, label: 'Maximize Incentives' },
  { img: icon4, label: 'Improve Air Quality' },
  { img: icon6, label: 'Enhance Comfort' },
]

const bottomItems = [
  { img: icon5, label: 'Improve Air Quality' },
  { img: icon3, label: 'Reduce Carbon Footprint' },
  { img: icon2, label: 'Warranty' },
  { img: icon1, label: 'Trusted Network' },
  { img: icon4, label: 'Increase Productivity' },
]

function Track({ items }) {
  return (
    <div className="wf-track">
      {[...items, ...items].map((it, idx) => (
        <div className="wf-card" key={idx}>
          <img className="wf-icon" src={it.img} alt="" />
          <div className="wf-label">{it.label}</div>
        </div>
      ))}
    </div>
  )
}

const WorkflowSteps = () => {
  return (
    <section className="section light">
      <div className="section-container">
        <h2 className="section-title">29 years of experience</h2>
        <p className="section-subtitle" style={{ marginBottom: 40 }}>In the industry means the following unparalleled benefits for our clients</p>
        <div className="wf-marquee">
          <div className="wf-row wf-row-right">
            <Track items={topItems} />
          </div>
          <div className="wf-row wf-row-left">
            <Track items={bottomItems} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkflowSteps
