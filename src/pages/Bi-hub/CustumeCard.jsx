thi is under Customcard.jsx

import React from "react";
import "./custumcard.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function CustumeCard({
  image = {},
  alt = "",
  title = "",
  text = "",
  col = "",
  col2 = "",
  number = "",
  handlebtnclick,
}) {
  return (
    <>
      <div className={col-lg-${col} col-md-${col2}}>
        <div className="carded">
          <div className="d-block">
            <img
              src={image}
              alt={alt}
              style={{ width: ${number}px, height: ${number}px }}
            />
            <span className="d-lg-none d-block text-center mt-3 ">
              Click Me
            </span>
          </div>
          <div className="carded__content">
            <p className="carded__title">{title}</p>
            <p className="carded__description">{text}</p>
            <div className="d-flex justify-content-center align-items-center my-btn-div">
              <Link to={handlebtnclick}>
                <Button className="my-btn" style={{background:''}}>Visit the Site</Button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}