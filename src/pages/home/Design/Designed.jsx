import React from "react";
import ProgressBar from "./Roundedprogress/ProgressBar";
import { FaRegUserCircle } from "react-icons/fa";
import { BiCheckShield } from "react-icons/bi";
import { BiLayer } from "react-icons/bi";

export default function Designed() {
  let years = new Date().getFullYear() - 2009;
  return (
    <>
      <div className="design" data-aos="fade-up" data-aos-once="true">
        <div className="container mx-auto ">
          <div className="row justify">
            <ProgressBar
              icon={<BiCheckShield />}
              col={3}
              col2={6}
              span="Completed projects"
              target="70"
            />
            <ProgressBar
              icon={<FaRegUserCircle />}
              col={3}
              col2={6}
              span="Satisfied clients"
              target="50"
            />
            <ProgressBar
              icon={<BiLayer />}
              col={3}
              col2={6}
              span="Years of experience "
              target={years - 1}
            />

            <ProgressBar
              icon={<BiCheckShield />}
              col={3}
              col2={6}
              span="Industries served"
              target="10"
            />
          </div>
        </div>
      </div>
    </>
  );
}
