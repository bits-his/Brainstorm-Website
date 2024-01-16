import React from "react";
import './services.css'

export default function Card(props) {
  return (
    <div class="col-lg-4  border  m-3 p-5">
<div class="feature text-center d-flex">
<div class="icon">{props.icon} </div>
<div className="i">
<h4>{props.title}</h4>
<p className="text-wrap">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
</div>
</div>
</div>
   
  );
}
