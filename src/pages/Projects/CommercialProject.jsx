import React from 'react'
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail'
import hero from '../../assets/ComProjects.png'
import nyserda from '../../assets/Awards/nyserda.png'
import newyork from '../../assets/Awards/NewYork.png'

const CommercialProject = () => {
  console.log("CommercialProject component is rendering");
  return (
    <ProjectDetail
      breadcrumb="Projects / Commercial Buildings / Sleepy Hollow Hotel Retrofit"
      heroImage={hero}
      title="Sleepy Hollow Hotel Retrofit"
      location="📍Sleepy Hollow, NY"
      sectors="Commercial / Hospitality"
      outcomes={[
        { title: '34% Reduction', note: 'in annual energy usage' },
        { title: 'Real-time Monitoring', note: 'of peak load curves' },
        { title: 'Comfort', note: 'Improved Occupant' },
        { title: 'Enhanced', note: 'Indoor Air Quality' }
      ]}
      systems={[
        { label: 'Shell', note: 'Air Sealing + Insulation' },
        { label: 'HVAC', note: 'Fujitsu Heat Pumps' },
        { label: 'RTEM', note: 'Dashboards' },
        { label: 'IAQ', note: 'ERV + GPS' },
        { label: 'IAQ', note: 'ERV + GPS Air Treatment' }
      ]}
      incentives={[
        { title: 'LL97', note: 'Compliance Planning' },
        { title: '45L Tax Credit' },
        { title: 'NYSERDA Clean Heat' }
      ]}
    />
  )
}

export default CommercialProject


