import React from 'react'
import './testimonials.css'
import Img from '../../../assets/team/daddy2.jpg'
import Img2 from '../../../assets/team/ahmad.jpg'
import Img3 from '../../../assets/team/fahad.jpg'

function card2(props) {
  return (
    <div className='card2'>
         <div className="card-container .testimonial-v2 mt-5">
          <div className="card">
          <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”</p>
          <div class="author d-flex">
<div class="author-pic d-flex align-items-center m-2 ">
<img src={Img} alt="Image" class="img-fluid card-img-top p-3"/>
<div class="author-name">
<h5>abdulsalam abubakar</h5>
<span>Director at Google</span>
</div>
</div>

              <h5 className="card-title"></h5>
           
            </div>
          </div>
        </div>
        <div className="card-container .testimonial-v2 mt-5">
          <div className="card">
          <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”</p>
          <div class="author d-flex">
<div class="author-pic d-flex align-items-center m-2 ">
<img src={Img2} alt="Image" class="img-fluid card-img-top p-3"/>
<div class="author-name">
<h5>Ahmerd </h5>
<span>snr developer at Google</span>
</div>
</div>

              <h5 className="card-title"></h5>
           
            </div>
          </div>
        </div>
        <div className="card-container .testimonial-v2 mt-5">
          <div className="card">
          <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”</p>
          <div class="author d-flex">
<div class="author-pic d-flex align-items-center m-2 ">
<img src={Img3} alt="Image" class="img-fluid card-img-top p-3"/>
<div class="author-name">
<h5>Fahad</h5>
<span>snr developer at Google</span>
</div>
</div>

              <h5 className="card-title"></h5>
           
            </div>
          </div>
        </div>
    </div>
  )
}

export default card2