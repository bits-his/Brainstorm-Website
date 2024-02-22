import React from 'react'
import Scroll from '../../../Components/scroll/Scroll'

export default function Products({refi}) {
  return (
    <div id='products' ref={refi} className='pt-5'>
        <Scroll title={'Our Products'} page={'products'}/>
    </div>
  )
}
