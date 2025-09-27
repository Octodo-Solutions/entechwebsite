import React from 'react'
import SystemPage from '../../components/SystemPage/SystemPage'
import img from '../../assets/RTEM.png'

const RTEM = () => {
  return (
    <SystemPage
      breadcrumb="Systems / RTEM"
      image={img}
      title="RTEM (Real-Time Energy Monitoring)"
      meta={["Metering", "Analytics"]}
      description="Real Time Energy Management: metering, analytics, and optimization."
      impacts={["Required for NYSERDA programs", "Informed energy decisions", "Transparent performance", "Fault detection before failure", "Tenant comfort tracking"]}
      services={["Peak load monitoring", "Utility integration", "Custom alerts & analytics", "Energy dashboards with live feeds", "Historical vs real-time comparisons"]}
      linkText="Explore RTEM"
    />
  )
}

export default RTEM


