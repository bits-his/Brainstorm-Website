import React, { useState, useEffect, useRef} from "react";
import "./progress.css";

export default function ProgressBar({ icon, col, col2, target, span }) {
  // const countRef = useRef(null);
  // const [inView, setInView] = useState(false);
  // const circumference = 2 * Math.PI * 45;
  // const dashOffset = circumference - (percent / 100) * circumference;

  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.5,
  //   };

  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       setInView(true);
  //       observer.unobserve(entry.target);
  //     }
  //   });
  // }, []);

  // if (svgRef.current) {
  //   observer.observe(svgRef.current);
  // }

  //   return () => {
  //     if (svgRef.current) {
  //       observer.unobserve(svgRef.current);
  //     }
  //   };
  // }, []);

  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting) {
        startAnimation();
        observer.unobserve(entry.target);
      }
    }, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startAnimation = () => {
    let currentCount = 0;
    const increment = Math.ceil(target / 5); // Adjust the increment as needed
    const speed = 30; // Adjust the speed as needed

    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount > target) {
        currentCount = target;
        clearInterval(timer);
      }
      setCount(currentCount);
    }, speed);
  };



  return (
    <>
      <div
        className={`col-lg-${col} col-sm-${col2}  col-${col2} col-md-${col} round-pad  ps-3 pb-3`}
      >
        {/* <div className="d-flex d-sm-block d-lg-flex align-items-center">
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
        </div> */}

        <div class="counter-card d-flex align-items-center">
          <div class="counter-icon">{icon}</div>
          <div className="d-block">
            <h3 ref={counterRef}>
              {isVisible ? count : 0} <span>+</span>{" "}
            </h3>
            <p>{span}.</p>
          </div>
        </div>
      </div>
    </>
  );
}
