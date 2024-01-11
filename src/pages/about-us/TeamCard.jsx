import React from 'react'

export default function TeamCard({pic,name,role}) {
  return (
    <>
     <div className="card col-12 col-md-6">
      <img src={pic} alt="team" />
      <div className="info">
        <h3>{name}</h3>
        <p className="role">{role}</p>
      </div>
     </div>
    </>
  )
}
