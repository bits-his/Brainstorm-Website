import React from "react";
import Card from "./Card";
import Scroll from "../../Components/scroll/Scroll";
import BC from './img/BC.png'
import MD from './img/MD.png'
import CT from './img/CT.png'
import CSD from './img/CSD.webp'
import DO from './img/DO.webp'
import WD from './img/WD.webp'
import SC from './img/SC.png'
import SM from './img/SM.png'

export default function CardContainer() {
  return (
    <div className=" my-5" id="service" >
      <Scroll title="Choose From Services" page='services' span='At Brainstorm, we go beyond providing services – we deliver solutions tailored to elevate your success. With a commitment to excellence and a passion for innovation, we stand as your partner in achieving your goals.' />
      <div className="row service-container" id='service'>
        {/* <h2 className='s-heading'>Services</h2> */}
        <Card
          heading="Website Development"
          describtion="Enhance your online presence with cutting-edge web applications. We specialize in creating dynamic and user-friendly web solutions that deliver seamless experiences across devices."
          img={WD}
          time={150}
        />
        <Card
          heading="Software Development"
          describtion="Empower your business with cutting-edge software solutions tailored to your unique needs. Our software development expertise ensures scalable and efficient solutions."
          img={CSD}
          time={200}
        />
        <Card
          heading="Co-operate Trainings"
          describtion="In addition to our development services, we offer corporate training programs designed to enhance the skills and capabilities of your team. From the latest technologies to industry best practices."
          img={CT}
          time={250}
        />
        <Card
          heading="Consultancy services"
          describtion="Struggling with technology decisions? Our experts offer strategic consultation to help you make informed choices, aligning your technology investments with your business goals."
          img={SC}
          time={300}
        />
        <Card
          heading="Mobile App"
          describtion="Stay connected with your audience on the go. Our mobile app development services cover iOS and Android platforms, ensuring your brand reaches users wherever they are."
          img={MD}
          time={350}
        />
        <Card
          heading="Blockchain Technology"
          describtion="Explore the benefits of transparent and secure transactions, decentralized data management, and enhanced traceability. Our blockchain solutions are designed to streamline and enhance security."
          img={BC}
          time={400}
        />
        <Card
          heading="Software Modernization"
          describtion="We revitalize legacy systems, enhancing performance, security, and user experiences. Our software modernization approach ensures seamless transitions, keeping your software at the forefront of industry standards."
          img={SM}
          time={450}
        />
        <Card
          heading="Software Consultancy"
          describtion="We advise on technology selection, architecture, implementation methodology, and best practices. Our expert team of engineers can advise on any aspect of software engineering development and improvement."
          img={SC}
          time={500}
        />
        <Card
          heading="DevOps"
          describtion="We enable faster, more reliable software delivery by integrating development and operations seamlessly. Our DevOps services optimize your workflow, fostering innovation and continuous improvement."
          img={DO}
          time={550}
        />
      </div>
    </div>
  );
}
