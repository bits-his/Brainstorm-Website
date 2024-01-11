import React from 'react'
import './home.css'
import Contact from '../contact/Contact'
import Card from './services-card/cards'
import Img from '../../assets/img/hero.png'
// import Teem from '../home/teem-card/teem'
// import Img1 from '../../assets/img/murtala1.jpg'

import { AiFillProject , AiFillSnippets , AiFillSignal } from "react-icons/ai";



export default function Home() {
  return (
    <>
   <section className="home" id="home">
<div className="home-text">
  <div className='text'>
    <h1>Branstorm <br/><span>Innovation </span>hub</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
    <a href="a" className="btn">Explore</a>
    </div>
    <div className="hero">
      <img src={Img} alt="" />
    </div>
    
</div>

</section>
<div>
<div className="card-title">
  <span>services</span>
  <h3>With more than 20 years of <br /> experience we can deliver the best <br /> product design.</h3>

</div>
<div className="flex">
<Card 
title='graphic' 
icon={<AiFillProject/>}
/>
<Card
title ='web development'
icon={< AiFillSignal/>}

/>
<Card 
title= 'app development'
icon ={<AiFillSnippets />}

/>
</div>

</div>
{/* <div className="teem">
  <h3>Our Teem</h3>
  <p>Tour function information without cross action media value quickly maximize timely deliverables.</p>
<div className=" flex d">
 
  <Teem 
  img ={Img1}
  title = 'ADEWALE MURTALA'

  />

<Teem 
  img ={Img1}
  title = 'ADEWALE MURTALA'

  />
  <Teem 
  img ={Img1}
  title = 'ADEWALE MURTALA'

  />
  </div>
</div> */}
<Contact />
  </>
  )
}
