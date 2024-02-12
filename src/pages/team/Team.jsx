import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Scroll from '../../Components/scroll/Scroll'
import TeamCardsContainer from './TeamCardsContainer'

export default function Team() {
  return (
   <>
    <Hero />
    <div className="container">
    <Scroll title='Meet Our Amazing teams'/>
    <TeamCardsContainer />
    </div>
   </>
  )
}
