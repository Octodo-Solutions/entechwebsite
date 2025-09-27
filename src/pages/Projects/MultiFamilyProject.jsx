import React from 'react'
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail'
import hero from '../../assets/ComProjects.png'

const MultiFamilyProject = () => {
  console.log("MultiFamilyProject component is rendering");
  return (
    <ProjectDetail
      breadcrumb="Projects / Multi Family / 84 Main Street Apartments"
      heroImage={hero}
      title="84 Main Street Apartments"
      location="📍Yonkers, NY"
      sectors="Multi Family / Residential"
      outcomes={[
        { title: '28% Reduction', note: 'in annual energy usage' },
        { title: 'Utility Bill Reductions', note: 'by $900/ unit annually' },
        { title: 'Verified Radon Levels', note: 'Under EPA thresholds' },
      ]}
      systems={[
        { label: 'Water Systems', note: 'Radon Mitigation' },
        { label: 'HVAC', note: 'LG Ductless Mini-Splits' },
        { label: 'IAQ', note: 'ERV' }
      ]}
      incentives={[
        { title: 'Empower NY' },
        { title: 'FlexTech Study Grant' },
        { title: '179D Deduction' }
      ]}
    />
  )
}

export default MultiFamilyProject


