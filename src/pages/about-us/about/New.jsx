import React from 'react'
import Img from '../../../assets/img/about_1.png.webp'
import { IoMdCheckmark } from "react-icons/io";
export default function AboutUs() {
  return (
    <>
      {/* <Hero page='About'/> */}

      <div class="section section-3">
<div class="container">
<div class="row justify-content-between">
<div class="col-lg-7 ">
<img className="img-fluid" src={Img} alt="Im" />
</div>
<div class="col-lg-4 ">
<h3 class="subheading mb-2">About us</h3>
<h2 class="heading mb-4">Why our agency?</h2>
<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
<p class="mb-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
<ul class="list-check list-unstyled mb-5">
<li> <IoMdCheckmark/>Behind the word mountains</li>
<li><IoMdCheckmark/>Bookmarksgrove right at the coast</li>
<li> <IoMdCheckmark/>Semantics, a large language</li>
</ul>
<p><button class="btn btn-primary">About us</button></p>
</div>
</div>
</div>
</div>

     {/* <TeamContainer /> */}
    </>
  )
}
