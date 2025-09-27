import React from 'react'
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail'
import hero from '../../assets/imgHomes.png'

const HomesProject = () => {
  console.log("HomesProject component is rendering");
  return (
    <ProjectDetail
      breadcrumb="Projects / Commercial Buildings / Riverview Home"
      heroImage={hero}
      title="Riverview Home"
      location="📍Manhattan, NY"
      sectors="Residential"
      outcomes={[
        { title: 'Live Dasboards', note: 'displaying energy use and savings' },
        { title: '21% Decrease', note: 'in peak demand charges' },
        { title: 'Seamless Remote', note: 'load control integration' },
      ]}
      systems={[
        { label: 'Water Systems', note: 'Radon Mitigation' },
        { label: 'HVAC', note: 'LG Ductless Mini-Splits' },
        { label: 'IAQ', note: 'ERV' }
      ]}
      incentives={[
        { title: 'LL97 Pathway' },
        { title: 'Clean Heat Program' },
        { title: '179D Deduction' }
      ]}
    />
  )
}

export default HomesProject


