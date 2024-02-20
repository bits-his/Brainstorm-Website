import React from "react";
import ProgressBar from "./Roundedprogress/ProgressBar";
import { FaRegUserCircle } from "react-icons/fa";
import { BiCheckShield } from "react-icons/bi";
import { BiLayer } from "react-icons/bi";

export default function Designed() {
  return (
    <>
      <div className="design" data-aos="fade-up" data-aos-once="true">
        <div className="container mx-auto ">
          <div className="row justify">
            <ProgressBar
              icon={<BiCheckShield />}
              col={3}
              col2={6}
              span="Completed project dolor sit amet."
              h3="730"
            />
            <ProgressBar
              icon={<FaRegUserCircle />}
              col={3}
              col2={6}
              span="Satisfied clients dolor sit lorem amet."
              h3="620"
            />
            {/* <ProgressBar
              icon={95}
              col={3}
              col2={6}
              span="years of"
              h3="Experience"
            /> */}

            <ProgressBar
              icon={<BiCheckShield />}
              col={3}
              col2={6}
              span="Industries served dolor sit amet."
              h3="320"
            />
          </div>
        </div>
      </div>
    </>
  );
}
