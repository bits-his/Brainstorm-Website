import React from "react";
import "./about-us.css";
// import Hero from '../../Components/Hero/Hero'
import Img from "../../assets/download.jpg";
import TeamContainer from "./TeamContainer";
import Parallex from "../../Components/parallex/Parallex";
export default function AboutUs() {
  let startYear = 2006;
  let currentYear = new Date().getFullYear();
  let years = currentYear - startYear;

  return (
    <>
      <Parallex
        page={"About Us"}
        details
      />
      <div className="container mt-5 d-flex p-4 mb-5 about-container what">
        <div className="what-text ">
          <h2
            data-aos="fade-right"
            data-aos-once="true"
            className="subheading mb-2"
          >
            About Us
          </h2>
          <div data-aos="fade-up" data-aos-once="true">
            <h1 className="spa">
              We have be Innovation for <span>{years}</span>
            </h1>
            <p>
              Brainstorm IT Solutions is a software solution company with a wide
              range of experience in different sectors of the economy. It was
              founded in 2006 and has since been working with different
              organizations in building reliable and innovative solutions Our
              goal is to exceed the expectations of every client by offering
              outstanding customer service, increased flexibility, and greater
              value, thus optimizing system functionality and improving
              operational efficiency. Our staffs are distinguished by their
              functional and technical expertise combined with their hands-on
              experience, thereby ensuring that our clients receive the most
              effective professional services.
            </p>
          </div>
        </div>
        <div
          className="what-img m-3"
          data-aos="zoom-in-left"
          data-aos-once="true"
        >
          <img src={Img} alt="" className />
        </div>
      </div>

      {/* <Hero page='About'/> */}

      <TeamContainer />
    </>
  );
}
