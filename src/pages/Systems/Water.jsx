import React from 'react'
import SystemPage from '../../components/SystemPage/SystemPage'
import img from '../../assets/Water.png'

const Water = () => {
  return (
    <SystemPage
      breadcrumb="Systems / Water"
      image={img}
      title="Water Systems"
      meta={["Hot Water", "Conservation"]}
      description="Hot water systems, conservation, and leak prevention technologies."
      impacts={["Qualified for water-saving incentives", "Reduced boiler loads", "Safer water systems"]}
      services={["Point-of-entry filtration", "Radon mitigation", "Leak detection systems", "Domestic hot water heat pumps", "Legionella-preventive circulation"]}
      linkText="Optimize water systems"
    />
  )
}

export default Water


