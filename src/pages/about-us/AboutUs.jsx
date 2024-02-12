import React from "react";
import "./about-us.css";
// import Hero from '../../Components/Hero/Hero'
// import Img from "../../assets/download.jpg";
import TeamContainer from "./TeamContainer";
// import Parallex from "../../Components/parallex/Parallex";
import Designed from "../home/Design/Designed";
import AboutCard from "./AboutCard";
// import WD from '../../pages/services/img/WD.webp'
// import CSD from '../../pages/services/img/CSD.webp'
// import CT from '../../pages/services/img/CT.png'

export default function AboutUs() {
  let startYear = 2006;
  let currentYear = new Date().getFullYear();
  let years = currentYear - startYear;

  return (
    <>
      <div className="about-head-img">
        <div className="container">
          <div>About Us</div>
        </div>
        <div className="strip blue"></div>
        <div className="strip red"></div>
      </div>
      <div className="container mt-5 d-flex p-4 mb-5 about-container what">
        <div className="what-text ">
          <h2
            data-aos="fade-right"
            data-aos-once="true"
            className="subheading mb-2"
          >
            About Us
          </h2>
          <div data-aos="fade-up" data-aos-once="true" className="about-text">
            <h1 className="spa">
              We have been Innovating for over{" "}
              <span className="years">{years}</span>
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
          describtion="Enhance your online presence with cutting-edge web applications. We specialize in creating dynamic and user-friendly web solutions that deliver seamless experiences across devices."
          // img={WD}
          time={100}
        />
        <AboutCard
          heading="Our History"
          describtion="Empower your business with cutting-edge software solutions tailored to your unique needs. Our software development expertise ensures scalable and efficient solutions accross all devices."
          // img={CSD}
          time={200}
        />
        <AboutCard
          heading="Who we are "
          describtion="In addition to our development services, we offer corporate training programs designed to enhance the skills and capabilities of your team. From the latest technologies to industry best practices."
          // img={CT}
          time={300}
        />
      </div>

      <Designed />
      {/* <Hero page='About'/> */}

      <TeamContainer />
    </>
  );
}
