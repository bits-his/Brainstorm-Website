import React from "react";
import "./progress.css";

export default function ProgressBar({ percent, col, col2, h3, span }) {
  // Calculate the circumference of the circle
  const circumference = 2 * Math.PI * 45;
  // Calculate the dash offset based on the percentage
  const dashOffset = circumference - (percent / 100) * circumference;

  return (
    <>
      <div className={`col-lg-${col} col-sm-${col}  col-${col2} col-md-${col}`}>
        <div className="d-flex d-sm-block d-lg-flex align-items-center">
          <div className="circle-container">
            <svg className="circle-svg" viewBox="0 0 100 100">
              <circle className="circle-background" cx="50" cy="50" r="45" />
              <circle
                className="circle-progress"
                cx="50"
                cy="50"
                r="45"
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: dashOffset,
                  transform: "rotate(-90deg)", 
                  transformOrigin: "50% 50%",
                  animation: "fillAnimation 1s ease forwards",
                }}
              />
              <text
                className="circle-text"
                x="50%"
                y="50%"
                textAnchor="middle"
                dy="0.3em"
              >
                {`${percent}%`}
              </text>
            </svg>
          </div>
          <div className="ms-3 progres-text">
            <span>{span}</span>
            <h3>{h3}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
