import React from "react";
import './services.css'

export default function Card(props) {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-4 service-card " data-aos="fade-up" data-aos-once="true" data-aos-delay={props.time}>
      <div className="inner-service">
      <div className="service-icon">
        <img src={props.img} alt="" />
      </div>
      <div className="service-info">
        <h4>{props.heading}</h4>
        <p>
         {props.describtion} 
        </p>
      </div>
      </div>
    </div>
  );
}
