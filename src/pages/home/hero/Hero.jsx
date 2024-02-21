import React from "react";
import "./hero.css";
import Text from "../text/Text";
import image from "../../../assets/img/bg1.webp";

export default function Hero({sectionRef}) {
  return (
    <div className="home-page" style={{ backgroundImage: `url(${image})` }} id='home' ref={sectionRef}>
        <div className="box1">
        </div>
        <div className="box2"></div>
        <div className="box3"></div>
        <div className="box4"></div>
        <div className="box">
        </div>
      <div className="overlay-hero">
        <h1>Welcome to Brainstorm I.T Solutions</h1>
        <p>
          We <Text /> digital solutions
        </p>
      </div>

      {/* <h1>Welcome to the Innovation Hub</h1>
        <p>
          We <Text /> digital solutions
        </p> */}
    </div>
  );
}
