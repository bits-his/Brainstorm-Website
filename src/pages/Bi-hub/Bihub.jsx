import React from "react";
import "./bihub.css";
// import bihub from "../../assets/logos/BIHUB1.jpg";
import CustumeCard from "./CustumeCard";
import mylikita from "../../assets/logos/mlt.png";
import Bitcoops from "../../assets/logos/bit-removebg-preview.png";
import elite from "../../assets/elite.png";
import esterbuy from "../../assets/logos/estar.png";
import kasuwamall from "../../assets/kasuwa-removebg-preview.png";
import iventria from "../../assets/logos/inv.png";
import drugciper from "../../assets/logos/drugcipher-removebg-preview.png";
import pikme from "../../assets/logos/pick.png";
// import Parallex from "../../Components/parallex/Parallex";
import Scroll from "../../Components/scroll/Scroll";
import islahpay from "../../assets/logos/Islahpay logo No Background.png";
import knowtify from "../../assets/knowtify-removebg-preview.png";
import wonderhomes from "../../assets/logos/wondahomes-removebg-preview.png";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

// import Hero from "../../Components/Hero/Hero";
export default function Bihub({ refi }) {
  return (
    <>
      {/* <Parallex
        page="Bi-Hub"
        details="
        Brainstorm Innovation Hub is a dynamic space
        for young minds to engage with technology, gain insights,
        and develop entrepreneurial ventures, fostering collaboration
         and empowering aspiring innovators for success."
      /> */}
      <div className="container-fluid mt-5 pt-5" id="bihub" ref={refi}>
        <Scroll
          page="Bi-Hub"
          title="Get to Know Our Startups."
          span="
          Brainstorm Innovation Hub (Bi-Hub) is a dynamic space for young minds
          to engage with technology, gain insights, and develop entrepreneurial
          ventures,
          fostering collaboration and empowering aspiring innovators for success."
        />
      </div>
      {/* <div className="cared">
        <div className="img">
          <img src={bihub} alt="bihub" />
        </div>
        <div className="textBox">
          <p className="price">
            In order to give back to the society, we created an innovation space
            known as Bi-Hub where young innovative minds come to learn more
            about technology and create businesses out of it. Some of the
            innovations that are as a result of this initiative include Chiniki
            which raised over $50,000 in grants for its intelligent surveillance
            system. BCScan detects breast cancer at early stage; it bagged a
            million naira to proceed with its Research and development plan.
            With BI-Hub you can innovate and build on new solutions, connect,
            and share expertise with others.
          </p>
        </div>
      </div> */}

      <div className="container-fluid styled">
        <div className="row">
          <Row>
            <Col md={4}>
              {/* <Link to="https://mylikita.com"> */}
              <CustumeCard
                handlebtnclick="https://mylikita.com"
                alt="mylikita"
                image={mylikita}
                title="Mylikita"
                text="
            The EMR boosts teamwork, enhances patient care, and cuts costs by 
            fostering collaboration among medical professionals. Through strategic 
            partnerships and integrations, it ensures a user-friendly experience for seamless collaboration."
              />
              {/* </Link> */}
            </Col>
            <Col md={4}>
              {/* <Link to="https://www.bitcoops.com"> */}
              <CustumeCard
                handlebtnclick="https://www.bitcoops.com"
                alt="bitcoops"
                image={Bitcoops}
                title="Bitcoops"
                text="
            An automated system for cooperative societies manages funds, 
            contributions, loans, withdrawals, and tracks member payments through a 
            user-friendly dashboard with integrated payment options."
              />
              {/* </Link> */}
            </Col>
            <Col md={4}>
              {/* <Link to="https://inventria-new.netlify.app"> */}
              <CustumeCard
                handlebtnclick="https://inventria-new.netlify.app"
                alt="iventria"
                image={iventria}
                title="Inventria"
                text="Inventria is a platform that helps small and medium businesses owners to track
            their inventory, revenue, expenses, debtors, creditors in a few clicks."
              />
              {/* </Link> */}
            </Col>

            <Col md={4}>
              {/* <Link to="https://kasuwamall.com"> */}
              <CustumeCard
                handlebtnclick="https://kasuwamall.com"
                alt="Kasuwa Mall"
                image={kasuwamall}
                title="Kasuwa Mall"
                text="Kasuwa Mall is an online marketplace platform offering various products and services. It appears to have multiple interfaces, including a main site and a shop-specific portal."
              />
              {/* </Link> */}
            </Col>

            <Col md={4}>
              {/* <Link to="https://elite.brainstorm.ng/"> */}
              <CustumeCard
                handlebtnclick="https://elscholar.ng"
                alt="Elite Academic Tech"
                image={elite}
                title="Elite Academic Tech"
                text="
           Nigeria needs advanced Learning Management Software (LMS) to enhance education, training, and productivity across sectors, offering flexible and scalable e-learning solutions.
."
                number="140"
                number1="200"
              />
              {/* </Link> */}
            </Col>

            {/* <Col md={4}>
              <Link to="https://pharmpay.com">
                <CustumeCard
                  alt="pikme"
                  image={islahpay}
                  title="IslahPay"
                  text="
            Islahpay offers innovative Islamic fintech solutions like digital banking, 
            Sharia-compliant payments, crowdfunding, and Robo-advisors, ensuring transparency and 
            convenience for clients while adhering to ethical principles."
                  number="140"
                />
              </Link>
            </Col> */}
            <Col md={4}>
              {/* <Link to="https://www.knowtify.com.ng"> */}
              <CustumeCard
                handlebtnclick="https://www.knowtify.com.ng"
                alt="Knowtify"
                image={knowtify}
                title="Knowtify"
                text="Knowtify provide services like automated notifications via SMS and email, employee management, and business data organization. These platforms cater to businesses for seamless communication,"
                number="140"
                number1="200"
              />
              {/* </Link> */}
            </Col>
          </Row>
          {/* <CustumeCard
            
            
            alt="drugciper"
            image={drugciper}
            title="DrugCipher"
            text="DrugCipher introduces a safer and reliable means of 
            eradicating the problems of drug counterfeiting in an ever growing
              world of the pharmaceutical Industry."
            number="146"
          /> */}
          {/* <CustumeCard
            
            
            alt="pikme"
            image={pikme}
            title="Pikme"
            text="A ride hailing platform that enable users
            to book a ride at their convenience while improving the drivers’ 
            income generation as well as keep record of his/her earnings"
            number="140"
          /> */}
        </div>
      </div>
    </>
  );
}
