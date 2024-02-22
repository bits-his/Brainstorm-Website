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
// import Parallex from "../../Components/parallex/Parallex";
import Scroll from "../../Components/scroll/Scroll";
import islahpay from "../../assets/logos/Islahpay logo No Background.png";
import wonderhomes from "../../assets/logos/wondahomes-removebg-preview.png";

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

      <div className="container styled">
        <div className="row">
          <CustumeCard
            col="4"
            col2="6"
            alt="mylikita"
            image={mylikita}
            title="Mylikita"
            text="
            The EMR boosts teamwork, enhances patient care, and cuts costs by 
            fostering collaboration among medical professionals. Through strategic 
            partnerships and integrations, it ensures a user-friendly experience for seamless collaboration."
          />
          <CustumeCard
            col="4"
            col2="6"
            alt="bitcoops"
            image={Bitcoops}
            title="Bitcoops"
            text="
            An automated system for cooperative societies manages funds, 
            contributions, loans, withdrawals, and tracks member payments through a 
            user-friendly dashboard with integrated payment options."
          />
          <CustumeCard
            col="4"
            col2="6"
            alt="Pharmpay"
            image={pharmpay}
            title="Pharmpay"
            text="
            Pharmpay simplifies payment management for associations, handling dues 
            and providing reporting. It also offers features like voting, announcements, 
            and event management for improved efficiency."
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
          <CustumeCard
            col="4"
            col2="6"
            alt="pikme"
            image={islahpay}
            title="IslahPay"
            text="
            Islahpay offers innovative Islamic fintech solutions like digital banking, 
            Sharia-compliant payments, crowdfunding, and Robo-advisors, ensuring transparency and 
            convenience for clients while adhering to ethical principles."
            number="250"
          />
          <CustumeCard
            col="4"
            col2="6"
            alt="pikme"
            image={wonderhomes}
            title="Wonda Homes"
            text="
            WondaHomes Unlock access to homes and properties from anywhere, right at 
            your fingertips."
          />
        </div>
      </div>
    </>
  );
}
