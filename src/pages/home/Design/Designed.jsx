import React from "react";
import ProgressBar from "./Roundedprogress/ProgressBar";

export default function Designed() {
  return (
    <>
      <div className="design">
        <div className="container">
          <div className="row">
            <ProgressBar
              percent={85}
              col={3}
              col2={6}
              span="Design"
              h3="Coding"
            />
            <ProgressBar
              percent={96}
              col={3}
              col2={6}
              span="our happy"
              h3="clients"
            />
            <ProgressBar
              percent={95}
              col={3}
              col2={6}
              span="projects"
              h3="Design"
            />

            <ProgressBar
              percent={80}
              col={3}
              col2={6}
              span="Completed"
              h3="projects"
            />
          </div>
        </div>
      </div>
    </>
  );
}
