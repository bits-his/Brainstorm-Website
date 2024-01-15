import React from "react";
import "./custumcard.css";

export default function CustumeCard({ image = {}, alt = "", title = "", text = "", col = "", col2 = ""}) {
  return (
    <>
      <div className={`col-lg-${col} col-md-${col2}`}>
        <div class="carded">
          <img src={image} alt={alt} />
          <div class="carded__content">
            <p class="carded__title">{title}</p>
            <p class="carded__description">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
