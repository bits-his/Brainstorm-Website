import React from 'react'

export default function TeamCard({pic,name,role,ceo}) {
  return (
    <>
     <div className="team-card col-12 col-md-6 col-lg-3 cards">
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
      <div className="info pt-3">
        <h4>{name}</h4>
        <p className="role"> {role} {ceo} </p>
      </div>
     </div>
    </>
  )
}
