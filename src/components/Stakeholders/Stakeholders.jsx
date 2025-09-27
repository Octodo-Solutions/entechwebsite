import React from 'react'
import './Stakeholders.css'
import iconOwners from '../../assets/Icons/image 7.png'
import iconArchitects from '../../assets/Icons/image 8.png'
import iconEngineers from '../../assets/Icons/image 9.png'
import iconContractors from '../../assets/Icons/image 10.png'

const stakeholders = [
  { name: 'Building Owners', icon: iconOwners },
  { name: 'Architects', icon: iconArchitects },
  { name: 'Engineers', icon: iconEngineers },
  { name: 'Contractors', icon: iconContractors }
]

const Stakeholders = () => {
  return (
    <section className="section light">
      <div className="section-container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 20 }}>
          Working with each <span style={{ color: '#2b3a2f' }}>stakeholder</span> to ensure all project goals and objectives are met.
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, minmax(0,1fr))', 
          gap: '20px',
          marginTop: '32px'
        }}>
          {stakeholders.map(stakeholder => (
            <div key={stakeholder.name} className="stk-card">
              <img className="stk-icon" src={stakeholder.icon} alt={stakeholder.name} />
              <div className="stk-label">{stakeholder.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stakeholders
