import React from "react";
import "./custumclient.css";

export default function CustumeClient({
  col = "",
  col2 = "",
  greyImg = {},
  colorImg = {},
  text = "",
  circle = "",
  number = "",
}) {
  // alert(`ol col2`)
  return (
    <>
      <div className={`col-lg-${col} col-sm-${col2}`}>
        <div className="d-flex align-items-center style">
          <div className="div">
            <img
              src={greyImg}
              alt={text}
              // className={`${circle}`}
            />
          </div>
          <div className="text">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
