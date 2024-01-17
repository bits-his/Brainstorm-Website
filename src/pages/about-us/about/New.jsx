import React from 'react'
// import Img from '../../../assets/img/about_1.png.webp'
import { IoMdCheckmark } from "react-icons/io";
export default function AboutUs({page}) {
  return (
    <>
      {/* <Hero page='About'/> */}

      <div class="section section-3">

<h2 class="heading mb-4">{page ? page : 'Services'}</h2>
<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
<p class="mb-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
<ul class="list-check list-unstyled mb-5">
<li> <IoMdCheckmark/>Behind the word mountains</li>
<li><IoMdCheckmark/>Bookmarksgrove right at the coast</li>
<li> <IoMdCheckmark/>Semantics, a large language</li>
</ul>
</div>
     {/* <TeamContainer /> */}
    </>
  )
}
