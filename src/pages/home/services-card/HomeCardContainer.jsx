import React from "react";
import Scroll from "../../../Components/scroll/Scroll";
import WD from "../../services/img/WD.webp";
import CSD from "../../services/img/CSD.webp";
import CT from "../../services/img/CT.png";
import { HiArrowNarrowRight } from "react-icons/hi";

import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";

export default function HomecardContainer() {
  return (
    <>
      <div className="row service-container mb-5 pb-5">
        <Scroll
          page={"home"}
          title={"Our featured solutions"}
          span={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <HomeCard
          heading="Website Development"
          describtion="Enhance your online presence with cutting-edge web applications. We specialize in creating dynamic and user-friendly web solutions that deliver seamless experiences across devices."
          img={WD}
        />
        <HomeCard
          heading="Software Development"
          describtion="Empower your business with cutting-edge software solutions tailored to your unique needs. Our software development expertise ensures scalable and efficient solutions accross all devices."
          img={CSD}
        />
        <HomeCard
          heading="Co-operate Trainings"
          describtion="In addition to our development services, we offer corporate training programs designed to enhance the skills and capabilities of your team. From the latest technologies to industry best practices."
          img={CT}
        />
        <Link to='/services#service'>
          <span className="arrow">
            Find More{" "}
            <HiArrowNarrowRight size={20} color="black" fontWeight={600} />
          </span>
        </Link>
      </div>
    </>
  );
}
