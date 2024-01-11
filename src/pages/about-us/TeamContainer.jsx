import React from 'react'
import Ahmad from '../../assets/team/musty.jpg'
// import murtala from '../../assets/team/musty.jpg'
// import dadi from '../../assets/team/musty.jpg'
// import isah from '../../assets/team/musty.jpg'
// import fahad from '../../assets/team/musty.jpg'
// import ishaq from '../../assets/team/musty.jpg'
// import mustapha from '../../assets/team/musty.jpg'
// import nagudu from '../../assets/team/musty.jpg'
// import Abdurahman from '../../assets/team/musty.jpg'
// import ahmad1 from '../../assets/team/musty.jpg'
// import nazif from '../../assets/team/musty.jpg'
// import bashir from '../../assets/team/musty.jpg'
// import mide from '../../assets/team/musty.jpg'
// import sadiq from '../../assets/team/musty.jpg'
import TeamCard from './TeamCard'

export default function TeamContainer() {
  return (
    <div className='Container'>
        <h2>Our Creative Team</h2>
        <div className="container-fluid">
        <div className="team-carousel">
        <TeamCard pic={Ahmad} />
        <TeamCard pic={Ahmad} />
        <TeamCard pic={Ahmad} />
        <TeamCard pic={Ahmad} />
        <TeamCard pic={Ahmad} />
        <TeamCard pic={Ahmad} />
        <TeamCard pic={Ahmad} />
        <TeamCard pic={Ahmad} />
        <TeamCard pic={Ahmad} />
        <TeamCard pic={Ahmad} />
        <TeamCard pic={Ahmad} />
        <TeamCard pic={Ahmad} />
        </div>
        </div>
    </div>
  )
}
