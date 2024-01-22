import React from "react";
import "./parallex.css";
// import { Link } from "react-router-dom";

export default function Parallex({page, details, img}) {
  return (
    <div className="hero-p">
      <img src={img} alt="img" />
      <div className="parallex-overlay">
        <div class="section section-3">
          <h1 class="heading mb-4">{page}</h1>
          <div>
            {details}   
          </div>
        </div>

        {/* <p className="history">
          We pride our selfs in delivering the best services for more than 15+
          years in the industry
        </p> */}
        {/* <Link to='about-us' >Explore </Link> */}
      </div>
    </div>
  );
}
