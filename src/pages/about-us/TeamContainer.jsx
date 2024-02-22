import React from "react";
import murtala from "../../assets/team/murtala1.png";
import dangana from '../../assets/team/mr-dangana.png'
import mary from "../../assets/team/marry1.png";
import isah from "../../assets/team/isah1.png";
import fahad from "../../assets/team/fahad1.png";
import ishaq from "../../assets/team/ishaq1.png";
import mustapha from "../../assets/team/musty1.png";
// import daddy from '../../assets/team/daddy.jpg'
import TeamCard from "./TeamCard";
import Scroll from "../../Components/scroll/Scroll";

export default function TeamContainer() {
  return (
    <div className="container-fluid mt-5 pt-5 pb-5 bg-ligh">
      {/* <h2 className='s-heading'>Our Creative Team</h2> */}
      <Scroll title="Management Team" page="about" />
      <div className="container">
        <div className="team row pt-3">
          <TeamCard
            pic={dangana}
            name="Idris Abdulkadir Dangana"
            role="CEO Brainstorm"
            delay={50}
          />
          <TeamCard
            pic={isah}
            name="Isah Muhammad Rabiu"
            role="COO Brainstorm"
            delay={100}
          />
          <TeamCard
            pic={mary}
            name="Mary Festus Daniel"
            // last={true}
            role="HUB Manager"
            delay={130}
          />
          <TeamCard
            pic={mustapha}
            name="Mustapha Issa Toyin"
            role="BDO Brainstorm"
            delay={200}
          />
          <TeamCard
            pic={ishaq}
            name="Ishaq Ibrahim Bagwai"
            // last={true}
            role="CTO Brainstorm"
            delay={250}
          />
          <TeamCard
            pic={murtala}
            name="Murtala Adewale Akinyemi"
            role="CFO barinstorm"
            delay={300}
          />
          <TeamCard
            pic={fahad}
            name="Fahad Ado Muhammad"
            role="CPO Brainstorm"
            delay={350}
          />
          {/* <TeamCard pic={daddy} name="Fahad" role={role} ceo='C' delay={400} /> */}
        </div>
      </div>
    </div>
  );
}
