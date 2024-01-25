import React from 'react'
import CustomCards from './CustomCards'
import './customcard.css'

export default function CustomCardContainer() {
  return (
    <div className='container'>
        <div className="row g-1">
        <CustomCards 
            title="Frontend"
            techie={['HTML', 'CSS', 'Javascript', 'Bootstrap']}
        />
        <CustomCards 
            title="Javascript"
            techie={['Node.js', 'React.js', 'React Native']}
        />
        <CustomCards 
            title="Security"
            techie={['Web 3.0', 'Etherum', 'Machine Learning']}
        />
        <CustomCards 
            title="Mobility"
            techie={['Android', 'IOS', 'Kotlin', 'React Native']}
        />
        <CustomCards 
            title="Backend"
            techie={['Node.js', 'Express.js', 'PHP']}
        />
        <CustomCards 
            title="window"
            techie={['text', 'title again', 'another']}
        />
        </div>
    </div>
  )
}
