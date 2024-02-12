import React from 'react'
import { FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function TeamCard({pic,name,role,ceo,delay}) {
  return (
    <>
     <div data-aos="fade-right" data-aos-once='true' data-aos-delay={`${delay}` } className='col-12 col-sm-6 col-md-4 col-lg-3'>
     <div className="team-card cards">
      <div className="connect">
      <img src={pic} alt="team" loading='lazy'/>
      <div className="social">  
        <ul>
          <li><FaWhatsapp /></li>
          <li><FaTwitter/></li>
          <li><FaLinkedin/></li>
        </ul>
      </div>
      </div>
      <div className="info">
        <h4>{name}</h4>
        <p className="role"> {role} <br/>{ceo} </p>
      </div>
     </div> 
     </div>
    </>
  )
}
