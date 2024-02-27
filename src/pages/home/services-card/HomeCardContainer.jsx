import React from "react";
import Scroll from "../../../Components/scroll/Scroll";
import WD from "../../services/img/WD.webp";
import CSD from "../../services/img/CSD.webp";
import CT from "../../services/img/CT.png";
import SC from "../../services/img/SC.png";
// import { HiArrowNarrowRight } from "react-icons/hi";

import HomeCard from "./HomeCard";
// import { Link } from "react-router-dom";

export default function HomeCardContainer({refi}) {
  return (
    <>
      <div className="row service-container my-5 py-5" id="services" ref={refi}>
        <Scroll title={"Our featured solutions"} page="Services" />
        <HomeCard
          heading="Software Development"
          describtion="Enhance your online presence with cutting-edge web applications. We specialize in creating dynamic and user-friendly web solutions that deliver seamless experiences across devices."
          img={WD}
          time={100}
        />
        <HomeCard
          heading="Consultancy Services"
          describtion="Empower your business with cutting-edge software solutions tailored to your unique needs. Our software development expertise ensures scalable and efficient solutions accross all devices."
          img={CSD}
          time={200}
        />
        <HomeCard
          heading="Co-operate Trainings"
          describtion="In addition to our development services, we offer corporate training programs designed to enhance the skills and capabilities of your team. From the latest technologies to industry best practices."
          img={CT}
          time={300}
        />
        <HomeCard
          heading="Mentorship"
          describtion="
          Experience personalized mentorship services for individuals and
          organizations in the tech industry. Our seasoned mentors provide 
          tailored guidance to help you reach your full potential."
          img={SC}
          time={500}
        />
        {/* <Link to='/services#service' className="more-service home-to-service">
            Find More{" "}
            <span className="arrow">
            <HiArrowNarrowRight size={20} fontWeight={600} />
          </span>
        </Link> */}
      </div>
    </>
  );
}
