import React from "react";
import "./custumclient.css";

export default function CustumeClient({
  col = "",
  col2 = "",
  greyImg = {},
  text = "",
  width="",
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
              style={{width: `${width}%` }}
              // className={`${circle}`}
            />
          </div>
          {/* <div className="text">
            <p>{text}</p>
          </div> */}
        </div>
      </div>
    </>
  );
}
