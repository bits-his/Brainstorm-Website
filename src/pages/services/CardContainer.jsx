import React from 'react'
import Card from './Card'
import './services.css'
import { TbBrandTorchain } from "react-icons/tb";

export default function CardContainer() {
  return (
    
    <div class="col-lg-6 mx-auto text-center">
    <h3 class="subheading mb-2">Services</h3>
    <h2 class="heading mb-4">Our Services</h2>
    <div className='services d-flex justify-content-center  '>
    <Card 
    icon={< TbBrandTorchain/>}
    title='web develpoment'
    />
    <Card
    icon={< TbBrandTorchain/>}
    title='software develpoment'
     />
    <Card
   icon={< TbBrandTorchain/>}
    title='app develpoment'
     />
    <Card 
    icon={< TbBrandTorchain/>}
    title='App development'/>
    </div>


    </div>
      
   
  )
}
