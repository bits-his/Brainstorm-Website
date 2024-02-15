import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Scroll from '../../Components/scroll/Scroll'
import TeamCardsContainer from './TeamCardsContainer'

export default function Team() {
  return (
   <>
    <Hero page={'Team'}/>
    <div className="container pt-3">
    <Scroll title='Meet Our Developers' page=''/>
    <TeamCardsContainer />
    </div>
   </>
  )
}
