import React from 'react'
import SystemPage from '../../components/SystemPage/SystemPage'
import img from '../../assets/IAQ.png'

const IAQVentilation = () => {
  return (
    <SystemPage
      breadcrumb="Systems / IAQ & Ventilation"
      image={img}
      title="IAQ & Ventilation (Indoor Air Quality)"
      meta={["Health", "Fresh Air"]}
      description="Indoor air quality monitoring, ERV/HRV, and balanced ventilation."
      impacts={["Wellness-centric certification points", "Improved productivity", "Fewer respiratory complaints"]}
      services={["MERV-13+ filtration", "CO₂ and VOC sensors", "ERVs (Energy Recovery Ventilators)", "GPS bipolar ionization", "ASHRAE standard ventilation design"]}
      linkText="Improve IAQ"
    />
  )
}

export default IAQVentilation


