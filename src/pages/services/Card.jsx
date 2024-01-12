import React from "react";

export default function Card({ img, text }) {
  return (
    <div className="col-md-3 service-card">
      <div className="service-icon">
        <img src={img} alt={text ? `text` : `service`} />
      </div>
      <div className="service-info">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dicta
          consectetur in possimus laudantium, molestias recusandae optio ut id
          suscipit
        </p>
      </div>
    </div>
  );
}
