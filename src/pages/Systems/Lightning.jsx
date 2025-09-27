import React from 'react'
import SystemPage from '../../components/SystemPage/SystemPage'
import img from '../../assets/Lightning.png'

const Lightning = () => {
  return (
    <SystemPage
      breadcrumb="Systems / Lighting"
      image={img}
      title="Lighting Systems"
      meta={["Efficiency", "Controls"]}
      description="Lighting and controls for efficiency and visual comfort."
      impacts={["Lighting credits in green certifications", "Enhanced safety & ambiance", "60–80% reduction in lighting energy"]}
      services={["Daylight harvesting systems", "Exterior safety lighting", "LED retrofits", "Bi-level & occupancy-based controls"]}
      linkText="Plan lighting upgrade"
    />
  )
}

export default Lightning


