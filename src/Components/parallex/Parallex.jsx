import React from "react";
import "./parallex.css";
import hero from "../../assets/img/bg2.jpeg";
// import New from "../../pages/about-us/about/New"
// import { Link } from "react-router-dom";

export default function Parallex({page, details}) {
  return (
    <div className="hero-p">
      <img src={hero} alt="img" />
      <div className="parallex-overlay">
        <div class="section section-3">
          <h1 class="heading mb-4">{page}</h1>
          <p className="details-for-paralax">
            {details}   
          </p>
        </div>
      </div>
    </div>
  );
}
