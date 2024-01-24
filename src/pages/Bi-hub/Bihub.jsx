import React from "react";
import "./bihub.css";
// import bihub from "../../assets/logos/BIHUB1.jpg";
import CustumeCard from "./CustumeCard";
import mylikita from "../../assets/logos/mlt.png";
import Bitcoops from "../../assets/logos/bit-removebg-preview.png";
import pharmpay from "../../assets/logos/P-P.png";
import esterbuy from "../../assets/logos/estar.png";
import iventria from "../../assets/logos/inv.png";
import drugciper from "../../assets/logos/drugcipher-removebg-preview.png";
import pikme from "../../assets/logos/pick.png";
import background from "../../assets/img/260168 (2).jpg";
import Parallex from "../../Components/parallex/Parallex";
import Scroll from "../../Components/scroll/Scroll";
import Hero from "../../Components/Hero/Hero";
export default function Bihub() {
  return (
    <>
      <Parallex
        page={<Hero page={"Bihub"} />}
        img={background}
        details="In order to give back to the society, we created an innovation space
            known as Bi-Hub where young innovative minds come to learn more
            about technology and create businesses out of it. Some of the
            innovations that are as a result of this initiative include Chiniki
            which raised over $50,000 in grants for its intelligent surveillance
            system. BCScan detects breast cancer at early stage; it bagged a
            million naira to proceed with its Research and development plan.
            With BI-Hub you can innovate and build on new solutions, connect,
            and share expertise with others."
      />
      <Scroll
        title="Get to Know Our Startup."
        page="bihub"
        span="Welcome to Bihub - your go-to destination for top-tier software solutions. We turn ideas into reality, delivering innovative and user-friendly software that sets you apart in the digital realm. Join us on this exciting journey of transformation through technology."
      />
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

      <div className="styled">
        <div className="row">
          <CustumeCard
            col="4"
            col2="6"
            alt="mylikita"
            image={mylikita}
            title="Mylikita"
            text="An EMR that improves teamwork enables better patient care and improves patient satisfaction, all while reducing the cost of care, through partnerships and integrations to deliver a superior,
             user-centric experience and enable seamless
             collaboration with a team of medical professionals."
          />
          <CustumeCard
            col="4"
            col2="6"
            alt="bitcoops"
            image={Bitcoops}
            title="Bitcoops"
            text="An automated Cooperative Society management system 
            that helps cooperative societies manages their funds, contributions,
            loans, withdrawals etc. It includes dashboard for tracking payments made
             by the cooperators using the integrated payment gateway or other methods of payment."
          />
          <CustumeCard
            col="4"
            col2="6"
            alt="Pharmpay"
            image={pharmpay}
            title="Pharmpay"
            text="Pharmpay is payment system for associations to manage their
            members’ monthly, annual dues as well as providing adequate reporting. Other services it provides include association voting, announcements and 
            association events registration and management."
            number="146"
          />
          <CustumeCard
            col="4"
            col2="6"
            alt="Estarbuy"
            image={esterbuy}
            title="Estarbuy"
            text="Estarbuy is a utility app for purchase of electricity units
            and payment of electricity bills for both prepaid and postpaid consumers."
          />
          <CustumeCard
            col="4"
            col2="6"
            alt="iventria"
            image={iventria}
            title="Inventria"
            text="Inventria is a platform that helps small and medium businesses owners to track
            their inventory, revenue, expenses, debtors, creditors in a few clicks."
          />
          <CustumeCard
            col="4"
            col2="6"
            alt="drugciper"
            image={drugciper}
            title="DrugCipher"
            text="DrugCipher introduces a safer and reliable means of 
            eradicating the problems of drug counterfeiting in an ever growing
              world of the pharmaceutical Industry."
            number="146"
          />
          <CustumeCard
            col="4"
            col2="6"
            alt="pikme"
            image={pikme}
            title="Pikme"
            text="A ride hailing platform that enable users
            to book a ride at their convenience while improving the drivers’ 
            income generation as well as keep record of his/her earnings"
            number="146"
          />
        </div>
      </div>
    </>
  );
}
