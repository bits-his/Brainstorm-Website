import React from 'react'
import Card from './Card'
import Scroll from '../../Components/scroll/Scroll'

export default function CardContainer() {
  return (
    <div className="service-container mt-5">
       <Scroll title='Choose From Services' />
       <h3 class="subheading mb-2">Services</h3>
       <h2 class="heading mb-4">Our Services</h2>
       <div className='row service-container'>
     
        {/* <h2 className='s-heading'>Services</h2> */}
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
    </div>


    </div>
      
   
  )
}
