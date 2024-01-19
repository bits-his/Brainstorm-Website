import React from 'react'
import './testimonials.css'


function card3(props) {
  return (
    <div>
         <div className='card2'>
         <div className="card-container .testimonial-v2 mt-5">
          <div className="card">
          <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”</p>
          <div class="author d-flex">
<div class="author-pic d-flex align-items-center m-2 ">
<img src={props.Img} alt="Image" class="img-fluid card-img-top p-3"/>
<div class="author-name">
<h5>{props.name}</h5>
<span>Director at Google</span>
</div>
</div>

              <h5 className="card-title"></h5>
           
            </div>
          </div>
          </div>
    </div>
    </div>
  )
}

export default card3