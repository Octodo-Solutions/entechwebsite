import React from 'react'
import SystemPage from '../../components/SystemPage/SystemPage'
import img from '../../assets/Electrical.png'

const Electrical = () => {
  return (
    <SystemPage
      breadcrumb="Systems / Electrical"
      image={img}
      title="Electrical Systems"
      meta={["Safer", "Smarter", "Sustainable"]}
      description="From panel upgrades to smart metering, our electrical work ensures code compliance, safety, and future-readiness."
      impacts={["LL97 & Clean Heat support", "Live energy monitoring", "Enables electrification"]}
      services={["Load shedding & demand control", "Surge protection", "SPAN smart panels", "Submetering", "Panel resizing for heat pump loads"]}
      linkText="Review electrical scope"
    />
  )
}

export default Electrical


