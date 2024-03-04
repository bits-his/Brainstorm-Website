import React from "react";
import "./custumclient.css";

export default function CustumeClient({
  col = "",
  col2 = "",
  greyImg = {},
  text = "",
  content = "",
  width = ""
}) {
  // alert(`ol col2`)
  return (
    <>
      <div className={`col-lg-${col} col-sm-${col2}`}>
        <div className="d-flex align-items-center style">
          <div className="product">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <img src={greyImg} alt={text} className="product__image" style={{ width: `${width}%`}} />
              <span className="d-lg-none d-block text-center mt-3 ">
                Click Me
              </span>
            </div>
            <div className="product__content">
              <p className="product__title">{text}</p>
              <p className="product__description">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
