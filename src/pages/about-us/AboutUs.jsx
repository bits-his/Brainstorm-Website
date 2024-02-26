import React from "react";
import "./about-us.css";
// import Hero from '../../Components/Hero/Hero'
// import Img from "../../assets/download.jpg";
import TeamContainer from "./TeamContainer";
import Parallex from "../../Components/parallex/Parallex";
import Designed from "../home/Design/Designed";
import AboutCard from "./AboutCard";
import Scroll from "../../Components/scroll/Scroll";
// import WD from '../../pages/services/img/WD.webp'
// import CSD from '../../pages/services/img/CSD.webp'
// import CT from '../../pages/services/img/CT.png'

export default function AboutUs() {
  let startYear = 2009;
  let currentYear = new Date().getFullYear();
  let years = currentYear - startYear;

  return (
    <>
      <Parallex
        page="About Us"
        details="
     Brainstorm registered since 2009 has been a customized software
     solutions provider to its clients using the state-of-the-art technology,
     corporate training, consultancy and other I.T related services."
      />
      <div className="container mt-5 d-flex p-4 mb-5 about-container wha">
        <div className="what-text ">
          <h2
            data-aos="fade-righ"
            data-aos-once="true"
            className="subheading mb-2"
          >
            About Us
          </h2>
          <div data-aos="fade-u" data-aos-once="true" className="about-text">
            <h1 className="spa">
              We have been Innovating for over{" "}
              <span className="years">{years}</span> years
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
          className=" about-img"
          data-aos="zoom-in-left"
          data-aos-once="true"
        >
          {/* <img src={Img} alt="aboutplaceholder" /> */}
        </div>
      </div>

      <div className="row service-container container">
        <AboutCard
          heading="Our Mission"
          describtion="
          Our mission is to deliver budget-friendly solutions 
          in custom software development, training, and consultancy services, 
          to meet the needs of our clients while 
          adhering to industry-standard computing practices."
          // img={WD}
          time={100}
        />
        <AboutCard
          heading="Our Vision"
          describtion="We aspire to be a distinct pace setter ICT Company, 
          dedicated to providing sophisticated and innovative customized 
          software solutions, and exceptional ICT service delivery."
          // img={CSD}
          time={200}
        />
        <AboutCard
          heading="Core Values "
          describtion="Brainstorm introduces ingenuity and
          environment friendly projects into
          the IT industry to enhance the
          general welfare of the client
          communities on the basis of a
          mutual benefits and dignity."
          time={300}
        />
      </div>

      <Designed />

      <TeamContainer />
    </>
  );
}
