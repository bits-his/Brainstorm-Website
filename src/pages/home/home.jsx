import React from "react";
import "./home.css";
import Carousel from "./carousel/Carousel";
import BlogContainer from "./blogs/BlogsContainer";
// import What from "./What -we-do/what";
import GetInTouch from "./brief-contact-us/GetInTouch";
import Designed from "./Design/Designed";
import HomeCardContainer from "./services-card/HomeCardContainer.jsx";
import Hero from "./hero/Hero";
import Bihub from "../Bi-hub/Bihub.jsx";
import AboutCard from "../about-us/AboutCard.jsx";
import '../about-us/about-us.css'
import '../services/services.css'
import Scroll from "../../Components/scroll/Scroll.jsx";
import TeamContainer from '../about-us/TeamContainer.jsx'
import Products from "./products/Products.jsx";

export default function Home({sections}) {
  let years = new Date().getFullYear() - 2009;

  return (
    <div id="">
      <Hero sectionRef={sections.home}/>
      <div className="center-text" id="clients" ref={sections.clients}>
        {/* <h3 className='sub-heading'>Client</h3>
         <h3 className="heading my-2 text-center">Our Clients</h3> */}
         <Scroll title={'Our Clients'} page={'client'}/>
        <p className="p">
          We transform businesses with
          powerful and adaptable digital solutions that satisfy the needs of
          today and unlock the opportunities of tomorrow.
        </p>
        <Carousel />
      </div>
      {/* <What /> */}
      <HomeCardContainer refi={sections.services}/>
      <Bihub  refi={sections.bihub}/>
      <div className="container mt-5 d-flex p-4 mb-5 about-container wha" id="about" ref={sections.about}>
        <div className="what-text pt-5">
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
            <p style={{ textAlign: "justify" }}>
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
        <TeamContainer />
      </div>

      <Designed />
      <Products refi={sections.Products}/>
      <BlogContainer refi={sections.blog}/>

      <GetInTouch />
    </div>
  );
}
