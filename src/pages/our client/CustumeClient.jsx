import React from "react";
import './custumclient.css'

export default function CustumeClient({
  col = "",
  alt = "",
  col2 = "",
  img = {},
  text = "",
  circle = "",
}) {
  // alert(`ol col2`)
  return (
    <>
      <div className={`col-lg-${col} col-sm-${col2}`}>
          <div className="d-flex align-items-center style">
            <div className="div">
              <img src={img} alt={alt} className={circle} />
            </div>
            <div className="text">
              <p>{text}</p>
            </div>
          </div>
      </div>
    </>
  );
}
