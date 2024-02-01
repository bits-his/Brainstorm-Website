import React from 'react'
import CustomCards from './CustomCards'
import './customcard.css'

export default function CustomCardContainer() {
  return (
    <div className='container-fluid'>
       <h2 className='s-heading'>Technologies We Use</h2>
        <div className="row g-1">
        <CustomCards 
            title="Frontend"
            techie={['HTML', 'CSS', 'Javascript', 'Bootstrap']}
        />
        <CustomCards 
            title="Frameworks"
            techie={['Vue js', 'React js', 'React Native', 'Angular js']}
        />
        <CustomCards 
            title="Security"
            techie={['Web 3.0', 'Nexus', 'Acunetix', 'Machine Learning']}
        />
        <CustomCards 
            title="Mobility"
            techie={['Android', 'IOS', 'Kotlin', 'React Native']}
        />
        <CustomCards 
            title="Backend"
            techie={['Node js', 'Express js', 'PHP', 'Python']}
        />
        <CustomCards 
            title="Blockchain"
            techie={['Etherium', 'Rust', 'Solidity', ]}
        />
        </div>
    </div>
  )
}
