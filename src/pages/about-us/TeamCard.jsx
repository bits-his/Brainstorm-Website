import React from 'react'

export default function TeamCard({pic,name,role,ceo,delay}) {
  return (
    <>
     <div data-aos="fade-right" data-aos-once='true' data-aos-delay={`${delay}` } className='col-12 col-sm-6 col-md-4 col-lg-3'>
     <div className="team-card cards">
      <div className="connect">
      <img src={pic} alt="team" />
      <div className="social">  
        <ul>
          <li>L</li>
          <li>T</li>
          <li>F</li>
        </ul>
      </div>
      </div>
      <div className="info">
        <h4>{name}</h4>
        <p className="role"> {role} {ceo} </p>
      </div>
     </div> 
     </div>
    </>
  )
}
