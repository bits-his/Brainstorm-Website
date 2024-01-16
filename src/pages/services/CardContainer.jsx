import React from 'react'
import Card from './Card'
import Scroll from '../../Components/scroll/Scroll'

export default function CardContainer() {
  return (
    <div className="service-container mt-5">
       <Scroll title='Choose From Services' />
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
