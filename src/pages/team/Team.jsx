import React from 'react'
import Scroll from '../../Components/scroll/Scroll'
import TeamCardsContainer from './TeamCardsContainer'
import Parallex from '../../Components/parallex/Parallex'

export default function Team() {
  return (
   <>
    <Parallex page={'Team'} details />
    <div className="container pt-3">
    <Scroll title='Meet Our Developers' page=''/>
    <TeamCardsContainer />
    </div>
   </>
  )
}
