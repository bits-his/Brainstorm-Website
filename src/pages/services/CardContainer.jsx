import React from 'react'
import Card from './Card'
import Scroll from '../../Components/scroll/Scroll'
import { VscRemoteExplorer } from "react-icons/vsc";  

export default function CardContainer() {
  return (
    <div className="service-container mt-5">
       <Scroll title='Choose From Services' page='Services' span=' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
       <div className='row service-container'>
     
        {/* <h2 className='s-heading'>Services</h2> */}
       <Card heading='Web Decelopment' img={<VscRemoteExplorer />}/>
       <Card heading='Software Development' img={<VscRemoteExplorer />}/>
       <Card heading='Co-operate Trainings' img={<VscRemoteExplorer />}/>
       <Card heading='Consultancy services' img={<VscRemoteExplorer />}/>
       <Card heading='Lorem Ipsum' img={<VscRemoteExplorer />}/>
       <Card heading='Lorem Ipsum ' img={<VscRemoteExplorer />} />
    </div>  
    </div>
      
   
  )
}
