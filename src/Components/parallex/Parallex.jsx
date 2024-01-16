import React from "react";
import "./parallex.css";
import hero from "../../assets/img/bg2.jpeg";
import { Link } from "react-router-dom";

export default function Parallex() {
  return (
    <div className="hero-p">
      <img src={hero} alt="img" />
      <div className="parallex-overlay">
        <h1> BRAINSTORM INNOVATION HUB</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          laboriosam sed in praesentium cum blanditiis, esse dolores illum
          obcaecati nam tenetur quia cumque molestiae inventore nisi similique
          itaque ab repellendus!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          laboriosam sed in praesentium cum blanditiis, esse dolores illum
          obcaecati nam tenetur quia cumque molestiae inventore nisi similique
          itaque ab repellendus!
        </p>
    
        {/* <p className="history">
          We pride our selfs in delivering the best services for more than 15+
          years in the industry
        </p> */}
        {/* <Link to='about-us' >Explore </Link> */}
      </div>
    </div>
  );
}
