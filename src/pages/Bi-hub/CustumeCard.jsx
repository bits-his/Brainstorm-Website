import React from "react";
import "./custumcard.css";

export default function CustumeCard({
  image = {},
  alt = "",
  title = "",
  text = "",
  col = "",
  col2 = "",
  number = "",
}) {
  return (
    <>
      <div className={`col-lg-${col} col-md-${col2}`}>
        <div class="carded">
          <div className="d-block">
            <img src={image} alt={alt} style={{ width: `${number}px` }} />
            <span className="d-lg-none d-block text-center mt-3 ">
              Click Me
            </span>
          </div>
          <div class="carded__content">
            <p class="carded__title">{title}</p>
            <p class="carded__description">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
