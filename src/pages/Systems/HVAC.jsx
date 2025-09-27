import React from 'react'
import SystemPage from '../../components/SystemPage/SystemPage'
import img from '../../assets/Hvac.png'

const HVAC = () => {
  return (
    <SystemPage
      breadcrumb="Systems / HVAC"
      image={img}
      title="HVAC (Heating, Ventilation & Cooling)"
      meta={["Smarter Comfort Control"]}
      description="We design HVAC systems that align with your building type, climate zone, and usage pattern — maximizing comfort while minimizing energy consumption."
      impacts={["Quiet, efficient systems with smart control", "NYSERDA Clean Heat compliant", "Up to 40% energy savings"]}
      services={["Centralized and zone-based HVAC layouts", "Variable refrigerant flow (VRF)", "Air-source & ground-source heat pumps", "Ductless systems (Mini-Splits)"]}
      linkText="See our heat pump solutions in action →"
    />
  )
}

export default HVAC


