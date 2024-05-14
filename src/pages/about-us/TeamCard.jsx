import React from 'react'
import { FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function TeamCard({pic,name,role,ceo,delay,last,whatsapp,twitter,linkedin}) {
  return (
    <>
     <div 
      data-aos="fade-right" data-aos-once='true' 
      data-aos-delay={`${delay}` } 
      className='col-12 col-sm-6 col-md-4 col-lg-3 hmm'
      >
     <div className="team-card cards">
      <div className="connect">
      <img src={pic} alt="team" loading='lazy'/>
      <div className="social">  
        <ul>
          <a href={whatsapp}><li><FaWhatsapp /></li></a>
          <a href={twitter}><li><FaTwitter/></li></a>
          <a href={linkedin}><li><FaLinkedin/></li></a>
        </ul>
      </div>
      </div>
      <div className="info">
        <h4>{name} {last? <span><br/> <br/> </span>: ''}</h4>
        <p className="role"> {role} <br/>{ceo} </p>
      </div>
     </div> 
     </div>
    </>
  )
}
