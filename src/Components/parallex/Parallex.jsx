import React from "react";
import "./parallex.css";
import hero from "../../assets/img/bg2.webp";
// import New from "../../pages/about-us/about/New"
// import { Link } from "react-router-dom";

export default function Parallex({page, details ,img}) {
  return (
    <div className="hero-p">
      <img fetchpriority='high' src={img ? img : hero} alt="img" />
      <div className="parallex-overlay">
        <div className="section section-3">
          <h1 className="heading mb-4">{page}</h1>
          <p className="details-for-paralax">
            {details}   
          </p>
        </div>
      </div>
    </div>
  );
}
