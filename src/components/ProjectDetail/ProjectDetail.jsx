import React from 'react'
import './ProjectDetail.css'
// Import icons
import iconShell from '../../assets/Icons/shell.png'
import iconHvac from '../../assets/Icons/hvac.png'
import iconIaq from '../../assets/Icons/iaq.png'
import iconLightning from '../../assets/Icons/lightning.png'
import iconWater from '../../assets/Icons/water.png'
import iconElectrical from '../../assets/Icons/image 9.png'
import iconRtem from '../../assets/Icons/image 7.png'
// Import incentive images
import nyserdaImg from '../../assets/Awards/nyserda.png'
import newyorkImg from '../../assets/Awards/NewYork.png'

// Function to get system icon
const getSystemIcon = (label) => {
  const iconMap = {
    'Shell': iconShell,
    'HVAC': iconHvac,
    'IAQ': iconIaq,
    'Lightning': iconLightning,
    'Water': iconWater,
    'Electrical': iconElectrical,
    'RTEM': iconRtem
  }
  return iconMap[label] || iconShell
}

// Function to get outcome icon based on content
const getOutcomeIcon = (title) => {
  if (title.toLowerCase().includes('energy') || title.toLowerCase().includes('reduction')) {
    return '⚡' // Energy/Reduction icon
  } else if (title.toLowerCase().includes('comfort')) {
    return '🏠' // Comfort icon
  } else if (title.toLowerCase().includes('air') || title.toLowerCase().includes('iaq')) {
    return '🌬️' // Air quality icon
  } else if (title.toLowerCase().includes('monitoring') || title.toLowerCase().includes('real-time')) {
    return '📊' // Monitoring icon
  } else {
    return '✅' // Default success icon
  }
}

// Function to get incentive image
const getIncentiveImage = (title) => {
  if (title.includes('NYSERDA')) {
    return nyserdaImg
  } else if (title.includes('LL97')) {
    return newyorkImg
  } else if (title.includes('45L')) {
    return newyorkImg
  } else if (title.includes('179D')) {
    return newyorkImg
  } else if (title.includes('Empower')) {
    return newyorkImg
  } else if (title.includes('FlexTech')) {
    return newyorkImg
  } else if (title.includes('Clean Heat')) {
    return nyserdaImg
  } else {
    return newyorkImg
  }
}

const MetricCard = ({ title, note }) => (
  <div className="pd-metric">
    <div className="pd-metricIcon">
      <span className="pd-outcome-emoji">{getOutcomeIcon(title)}</span>
    </div>
    <div className="pd-metricBody">
      <div className="pd-metricTitle">{title}</div>
      {note && <div className="pd-metricNote">{note}</div>}
    </div>
  </div>
)

const SystemIcon = ({ label, note }) => (
  <div className="pd-system">
    <div className="pd-systemIcon">
      <img src={getSystemIcon(label)} alt={label} className="pd-system-icon-img" />
    </div>
    <div className="pd-systemLabel">{label}</div>
    {note && <div className="pd-systemNote">{note}</div>}
  </div>
)

const IncentiveCard = ({ title, note }) => (
  <div className="pd-incentive">
    <div className="pd-incentiveLogo">
      <img src={getIncentiveImage(title)} alt={title} className="pd-incentive-image" />
    </div>
    <div className="pd-incentiveTitle">{title}</div>
    {note && <div className="pd-incentiveNote">{note}</div>}
  </div>
)

const ProjectDetail = ({
  breadcrumb,
  heroImage,
  title,
  location,
  sectors,
  outcomes = [],
  systems = [],
  incentives = []
}) => {
  return (
    <section className="project-detail">
      <div className="pd-container">
        <p className="pd-breadcrumb">{breadcrumb}</p>

        <div className="pd-hero">
          <img className="pd-heroImage" src={heroImage} alt={title} />
          <div className="pd-header">
            <h1 className="pd-title">{title}</h1>
            <div className="pd-metaRow">
              <span className="pd-dot" />
              <span>{location}</span>
            </div>
            <div className="pd-metaRow">
              <span className="pd-hash" />
              <span>{sectors}</span>
            </div>
          </div>
        </div>

        {outcomes.length > 0 && (
          <div className="pd-block">
            <h3 className="pd-blockTitle">Project Outcomes</h3>
            <div className="pd-metrics">
              {outcomes.map((m, i) => (
                <MetricCard key={i} title={m.title} note={m.note} />
              ))}
            </div>
          </div>
        )}

        {systems.length > 0 && (
          <div className="pd-block">
            <h3 className="pd-blockTitle">Systems Implemented</h3>
            <div className="pd-systems">
              {systems.map((s, i) => (
                <SystemIcon key={i} label={s.label} note={s.note} />
              ))}
            </div>
          </div>
        )}

        {incentives.length > 0 && (
          <div className="pd-block">
            <h3 className="pd-blockTitle">Incentives Secured</h3>
            <div className="pd-incentives">
              {incentives.map((x, i) => (
                <IncentiveCard key={i} title={x.title} note={x.note} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectDetail


