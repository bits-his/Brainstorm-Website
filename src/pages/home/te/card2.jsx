import React from 'react'
import Card3 from './card3'
import Img from '../../../assets/team/daddy2.jpg'
import Img2 from '../../../assets/team/ahmad.jpg'
import Img3 from '../../../assets/team/fahad.jpg'



function card2() {
  return (
  
   <>

   <Card3
   Img={Img}
   name='abudulsalam abubarbar'
   />
   <Card3
      Img={Img2}
      name='ahmerd'
   />
     <Card3
      Img={Img3}
      name='fahad'
   />
   </>
  )
}

export default card2