import React from 'react'
import './Certifications.css'
import bgPattern from '../../assets/Awards/awardsback.png'
import wreathLeft from '../../assets/Awards/left-wing.png'
import wreathRight from '../../assets/Awards/right-wing.png'
import nys from '../../assets/Awards/NewYork.png'
import normi from '../../assets/Awards/Normi.png'
import nyserda from '../../assets/Awards/nyserda.png'

const awards = [
  {
    image: nys,
    title: 'NYS Certified / Licensed',
    subtitle: 'Mold Assessor',
  },
  {
    image: normi,
    title: 'NORMI CERTIFIED',
    subtitle: 'Mold Remediation',
  },
  {
    image: nyserda,
    title: 'NYS Certified / Licensed',
    subtitle: 'Mold Assessor',
  },
  {
    image: nyserda,
    title: 'NYS Certified / Licensed',
    subtitle: 'Mold Assessor',
  },
]

const Certifications = () => {
  return (
    <section className="section light awards-section" style={{ backgroundImage: `url(${bgPattern})` }}>
      <div className="section-container">
        <div className="awards-header">
          <img className="wreath wreath-left" src={wreathLeft} alt="left wreath" />
          <div className="awards-text">
            <div className="awards-eyebrow">We are Affiliated</div>
            <h2 className="section-title" style={{ margin: '4px 0' }}>Recognized. Certified. Trusted.</h2>
            <div className="awards-sub">to the highest industry standards</div>
          </div>
          <img className="wreath wreath-right" src={wreathRight} alt="right wreath" />
        </div>

        <div className="awards-grid">
          {awards.map((a, i) => (
            <div key={i} className="award-card">
              <img src={a.image} alt={a.title} className="award-img" />
              <div className="award-title">{a.title}</div>
              <div className="award-sub">{a.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
