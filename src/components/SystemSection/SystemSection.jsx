import React from 'react'
import './SystemSection.css'
import iconShell from '../../assets/Icons/shell.png'
import iconHvac from '../../assets/Icons/hvac.png'
import iconIaq from '../../assets/Icons/iaq.png'
import iconLightning from '../../assets/Icons/lightning.png'
import iconWater from '../../assets/Icons/water.png'
import iconElectrical from '../../assets/Icons/image 9.png'

const systems = [
  { name: 'Shell', icon: iconShell },
  { name: 'HVAC', icon: iconHvac },
  { name: 'IAQ', icon: iconIaq },
  { name: 'Lightning', icon: iconLightning },
  { name: 'Water', icon: iconWater },
  { name: 'Electrical', icon: iconElectrical },
 
  { name: 'IAQ', icon: iconIaq },
  { name: 'Lightning', icon: iconLightning },
  { name: 'Shell', icon: iconShell },
  { name: 'Water', icon: iconWater },
  { name: 'Electrical', icon: iconElectrical },
   
  { name: 'HVAC', icon: iconHvac },
]

const SystemSection = () => {
  return (
    <section className="section light">
      <div className="section-container">
        <h2 className="section-title">Our Integrated Building Systems</h2>
        <p className="section-subtitle">We design and deliver smart, efficient systems that work together to reduce energy use, improve health, and meet compliance standards like LL97, ASHRAE, and more.</p>
        <div className="sys-grid">
          {systems.map(s => (
            <div key={s.name} className="sys-item">
              <img className="sys-icon" src={s.icon} alt={s.name} />
              <div className="sys-label">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SystemSection
