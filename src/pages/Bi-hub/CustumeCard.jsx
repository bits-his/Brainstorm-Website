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
        <div className="carded">
          <div className="d-block">
            <img src={image} alt={alt} style={{ width: `${number}px` }} />
            <span className="d-lg-none d-block text-center mt-3 ">
              Click Me
            </span>
          </div>
          <div className="carded__content">
            <p className="carded__title">{title}</p>
            <p className="carded__description">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
