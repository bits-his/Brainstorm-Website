import React from "react";
import Card from "./Card";
import Scroll from "../../Components/scroll/Scroll";
import { VscRemoteExplorer } from "react-icons/vsc";

export default function CardContainer() {
  return (
    <div className="service-container mt-5">
      <Scroll title="Choose From Services" />
      <div className="row service-container">
        {/* <h2 className='s-heading'>Services</h2> */}
        <Card
          heading="Web Development"
          describtion="Enhance your online presence with cutting-edge web applications. We specialize in creating dynamic and user-friendly web solutions that deliver seamless experiences across devices."
          img={<VscRemoteExplorer />}
        />
        <Card
          heading="Software Development"
          describtion="Empower your business with cutting-edge software solutions tailored to your unique needs. Our software development expertise ensures scalable and efficient solutions."
          img={<VscRemoteExplorer />}
        />
        <Card
          heading="Co-operate Trainings"
          describtion="In addition to our development services, we offer corporate training programs designed to enhance the skills and capabilities of your team. From the latest technologies to industry best practices."
          img={<VscRemoteExplorer />}
        />
        <Card
          heading="Consultancy services"
          describtion="Struggling with technology decisions? Our experts offer strategic consultation to help you make informed choices, aligning your technology investments with your business goals."
          img={<VscRemoteExplorer />}
        />
        <Card
          heading="Mobile App"
          describtion="Stay connected with your audience on the go. Our mobile app development services cover iOS and Android platforms, ensuring your brand reaches users wherever they are."
          img={<VscRemoteExplorer />}
        />
        <Card
          heading="Blockchain Technology"
          describtion="Explore the benefits of transparent and secure transactions, decentralized data management, and enhanced traceability. Our blockchain solutions are designed to streamline and enhance security."
          img={<VscRemoteExplorer />}
        />
      </div>
    </div>
  );
}
