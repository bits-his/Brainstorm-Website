import React from "react";
import "./parallex.css";
import hero from "../../assets/img/bg2.jpeg";
import { IoMdCheckmark } from "react-icons/io";
// import New from "../../pages/about-us/about/New"
// import { Link } from "react-router-dom";

export default function Parallex({page, details}) {
  return (
    <div className="hero-p">
      <img src={hero} alt="img" />
      <div className="parallex-overlay">
        <div class="section section-3">
          <h1 class="heading mb-4">{page}</h1>
          <p>
            {details}   
          </p>
          <ul class="list-check list-unstyled mb-5">
            <li>
              {" "}
              {}
            </li>
            <li>
              {}
            </li>
            <li>
              {" "}
              <IoMdCheckmark />
              Semantics, a large language
            </li>
          </ul>
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
