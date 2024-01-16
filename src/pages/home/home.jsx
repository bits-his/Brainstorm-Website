import React from 'react'
import './home.css'
import Features from '../home/features/Features'
import Img from '../../assets/img/hero_1.png.webp'
import Testimonials from './te/Testimonials'


import { AiFillProject , AiFillSnippets , AiFillSignal } from "react-icons/ai";




export default function Home() {
  return (
    <div>
   <section className="home bg-light " id="home">
   <div class="hero-section">
<div class="container">
<div class="row justify-content-between">
<div class="col-lg-5">
<span class="subheading mb-2 ">Welcome to our site</span>
<h1 class="heading mb-3 ">Expert in, software development</h1>
<p class="mb-3 ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
<p ><button class="btn ">Learn More</button> <button class="btn2 ">Contact us</button></p>
</div>
<div class="col-lg-6">
<div class="img-wrap ">
<img src={Img} alt="Ima" class="img-fluid" />
</div>
</div>
</div>
</div>
</div>
</section>
<div className='mt-5 pt-3'>
<div className="card-title">
<div class="section pt-0 section-2">
<div class="container">
<div class="row mb-5">
<div class="col-lg-5 mx-auto text-center aos-init aos-animate" data-aos="fade-up">
<span class="subheading mb-2">Features</span>
<h1 class="heading mb-3">Our Features</h1>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
</div>
</div>

<div class="row g-5 text-center">
<Features 
icon={<AiFillProject/>}
title='web development'
p=''
 />
<Features 
icon={< AiFillSnippets/>}
title='security'
p=''
/>
<Features icon={<AiFillSignal/>}
title='SCO'
p=''
 />
</div>
</div>
</div>

</div>


</div>
{/* <About/> */}
<Testimonials/>

  </div>
  )
}
