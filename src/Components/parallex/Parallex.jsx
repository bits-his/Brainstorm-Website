import React from "react";
import "./parallex.css";
import hero from "../../assets/img/bg2.webp";
// import New from "../../pages/about-us/about/New"
// import { Link } from "react-router-dom";

export default function Parallex({ page, details, img, strip }) {
  return (
    <div className="hero-p" style={{backgroundImage:`url{${strip ? img : ''}}`}}>
      <img fetchpriority="high" src={img ? img : hero} alt="img" />
      {strip ? (
        <div className="parallex-strip">
          <h1 className="heading mb-4">{page}</h1>
        </div>
      ) : (
        <div>
          <div className="rounded-circle balls-one-about-us"></div>
          <div className="rounded-circle balls-two-about-us"></div>
          <div className="rounded-circle balls-three-about-us"></div>
          <div className="rounded-circle balls-four-about-us"></div>
          <div className="rounded-circle balls-five-about-us"></div>
          <div className="rounded-circle balls-six-about-us"></div>
          <div className="rounded-circle balls-seven-about-us"></div>
        </div>
      )}
      <div className="parallex-overlay">
        <div className="container">
          <div className="section section-3">
            {strip ? <></> : <h1 className="heading mb-4">{page}</h1>}
            <p className="details-for-paralax">{details}</p>
          </div>
        </div>
      </div>
      {strip ? (
        <>
        <div className="strip blue"></div>
        <div className="strip red"></div>
        </>
      ) :
      (
        <>
        
        </>
      )}
    </div>
  );
}
