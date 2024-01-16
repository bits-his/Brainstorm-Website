import React from 'react'
import murtala from '../../assets/team/murtala.jpg'
import mary from '../../assets/team/marry.jpg'
import isah from '../../assets/team/isah.jpg'
import fahad from '../../assets/team/fahad.jpg'
import ishaq from '../../assets/team/ishaq1.jpg'
import mustapha from '../../assets/team/musty.jpg'
// import  from '../../assets/team/.jpg'
import ahmad1 from '../../assets/team/musty.jpg'
// import nazif from '../../assets/team/musty.jpg'
// import bashir from '../../assets/team/musty.jpg'
// import mide from '../../assets/team/musty.jpg'
import sadiq from '../../assets/team/sadiq.jpg'
import TeamCard from './TeamCard'
import Scroll from '../../Components/scroll/Scroll'

export default function TeamContainer() {
  const nam = 'Mustapha'
  const role ='Senoir Developer'
  return (
    <div className='container-fluid mt-5 pt-5'>
        {/* <h2 className='s-heading'>Our Creative Team</h2> */}
      <Scroll title='MEET OUR TEAM' />
        <div className="contain r">
        <div className="team pt-3">
        <TeamCard pic={murtala} name='Murtala' role={role} />
        <TeamCard pic={fahad} name='Fahad' role={role} />
        <TeamCard pic={mustapha} name={nam} role={role} />
        <TeamCard pic={isah} name='Isah' role='COO' />
        <TeamCard pic={mary} name={nam} role={role} />
        <TeamCard pic={ishaq} name={nam} role={role} />
        <TeamCard pic={sadiq} name={nam} role={role} />
        <TeamCard pic={ahmad1} name={nam} role={role} />
        {/* <TeamCard pic={} name={nam} role={role} />
        <TeamCard pic={} name={nam} role={role} />
        <TeamCard pic={} name={nam} role={role} /> */}
        </div>
        </div>
    </div>
  )
}
