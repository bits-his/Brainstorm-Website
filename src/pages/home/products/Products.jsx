import React from 'react'
import Scroll from '../../../Components/scroll/Scroll'
import OurClient from '../../our client/OurClient'

export default function Products({refi}) {
  return (
    <div id='products' ref={refi} className='pt-5'>
        <Scroll title={'Our Products'} page={'products'}/>
        <OurClient />
    </div>
  )
}
