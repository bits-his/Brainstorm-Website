import React, { useState, useEffect, useRef } from "react";
import "./progress.css";

export default function ProgressBar({ percent, col, col2, h3, span }) {
  const svgRef = useRef(null);
  const [inView, setInView] = useState(false);
  const circumference = 2 * Math.PI * 45;
  const dashOffset = circumference - (percent / 100) * circumference;

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className={`col-lg-${col} col-sm-${col}  col-${col2} col-md-${col} round-pad`}>
        <div className="d-flex d-sm-block d-lg-flex align-items-center">
          <div className="circle-container">
            <svg className="circle-svg" viewBox="0 0 100 100" ref={svgRef}>
              <circle className="circle-background" cx="50" cy="50" r="45" />
              <circle
                className="circle-progress"
                cx="50"
                cy="50"
                r="45"
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: inView ? dashOffset : circumference,
                  transform: "rotate(-90deg)",
                  transformOrigin: "50% 50%",
                  transition: "stroke-dashoffset 1s ease",
                  fill: "none",
                  stroke: "var(--red-color)",
                  strokeWidth: 5,
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
          <div className="ms-1 progres-text">
            <span>{span}</span>
            <h3>{h3}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
