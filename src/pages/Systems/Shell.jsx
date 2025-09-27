import React from 'react'
import SystemPage from '../../components/SystemPage/SystemPage'
import img from '../../assets/Shell.png'

const Shell = () => {
  return (
    <SystemPage
      breadcrumb="Systems / Shell"
      image={img}
      title="Shell (Building Envelope)"
      meta={["Heating", "Filtration", "Safety"]}
      description="A building's envelope determines how much energy is retained or lost. En-Tech Associates, Inc. optimizes walls, roofs, and windows to deliver airtight, well-insulated environments."
      impacts={["Compliance with energy codes", "Reduced utility bills", "Lower heating & cooling demand"]}
      services={["Insulation upgrades", "Window retrofits", "Thermal bridging analysis", "Blower door testing", "Air sealing"]}
      linkText="Explore how Shell Measures can enhance comfort"
    />
  )
}

export default Shell


