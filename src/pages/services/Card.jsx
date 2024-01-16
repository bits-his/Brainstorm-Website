import React from "react";
import './services.css'

export default function Card(props) {
  return (
    <div className="col-12 col-sm-6 col-md-4  col-lg-3 service-card">
      <div className="service-icon">
        <img src={props.img} alt={props.text ? `text` : `service`} />
      </div>
      <div className="service-info">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dicta
          consectetur 
        </p>
      </div>
    </div>
  );
}
