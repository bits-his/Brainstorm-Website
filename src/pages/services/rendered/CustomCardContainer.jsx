import React from 'react'
import CustomCards from './CustomCards'
import './customcard.css'
import Scroll from '../../../Components/scroll/Scroll'

export default function CustomCardContainer() {
  return (
    <div className='container-fluid mb-5'>
       <Scroll title='Technologies We Use' span='We use a wide variety of technolies to give you the best treatment you deserve'/>
        <div className="row g-1">
        <CustomCards 
            title="Frontend"
            techie={['HTML', 'CSS', 'Javascript', 'Bootstrap']}
        />
        <CustomCards 
            title="Frameworks"
            techie={['React js', 'React Native', 'Angular js']}
        />
        <CustomCards 
            title="Security"
            techie={['Web 3.0', 'Nexus', 'Cisco']}
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
