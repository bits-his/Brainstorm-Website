import React from "react";
import ProgressBar from "./Roundedprogress/ProgressBar";

export default function Designed() {
  return (
    <>
      <div className="design" data-aos="fade-up" data-aos-once="true">
        <div className="container mx-auto">
          <div className="row justify">
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
              span=" happy"
              h3="clients"
            />
            {/* <ProgressBar
              percent={95}
              col={3}
              col2={6}
              span="years of"
              h3="Experience"
            /> */}

            <ProgressBar
              percent={80}
              col={3}
              col2={6}
              span="project"
              h3="Completed"
            />
          </div>
        </div>
      </div>
    </>
  );
}
