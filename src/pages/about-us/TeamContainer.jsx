import React from "react";
import murtala from "../../assets/team/murtala123.png";
import dangana from "../../assets/team/mr-dangana.png";
import mary from "../../assets/team/mrs_mary.png";
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
      <div className="container-fluid">
        <div className="team row pt-3">
          <TeamCard
            pic={dangana}
            name="Idris Abdulkadir Dangana"
            role="CEO Brainstorm"
            delay={50}
            mail={"mailto:dangana@brainstorm.ng"}
            twitter={"https://x.com/Idris_Dangana"}
            linkedin={"https://www.linkedin.com/in/dangana/"}
          />
          <TeamCard
            pic={isah}
            name="Isah Muhammad Rabiu"
            role="COO Brainstorm"
            delay={100}
            mail={"mailto:isah@brainstorm.ng"}
            twitter={"https://www.twitter.com/IsahMuhammadRa3"}
            linkedin={"https://www.linkedin.com/in/isahmrabiu/"}
          />
          <TeamCard
            pic={mary}
            name="Mary Dania "
            // last={true}
            role="HUB Manager"
            delay={130}
            mail={"mailto:mary@brainstorm.ng"}
            twitter={"https://x.com/eversmiling_MD"}
            linkedin={"https://www.linkedin.com/in/mary-dania-80b60275/"}
          />
          <TeamCard
            pic={mustapha}
            name="Mustapha Issa Toyin"
            role="BDO Brainstorm"
            delay={200}
            mail={"mailto:mustapha@brainstorm.ng"}
            twitter={"https://x.com/dev_emaitee"}
            linkedin={"https://www.linkedin.com/in/issa-mustapha-67733489/"}
          />
          <TeamCard
            pic={ishaq}
            name={`Ishaq Ibrahim `}
            last={true}
            role="CTO Brainstorm"
            delay={250}
            mail={"mailto:ishaq@brainstorm.ng"}
            twitter={"https://x.com/ishaq191"}
            linkedin={"https://www.linkedin.com/in/ibagwai/"}
          />
          <TeamCard
            pic={murtala}
            name="Muritala Adewale Akinyemi"
            role="CFO Brainstorm"
            delay={300}
            mail={"mailto:murtala@brainstorm.ng"}
            twitter={"https://x.com/Akin__yemi"}
            linkedin={"https://www.linkedin.com/in/muritala/"}
          />
          <TeamCard
            pic={fahad}
            name="Fahad Ado Muhammad"
            role="CPO Brainstorm"
            delay={350}
            mail={"mailto:fahad@brainstorm.ng"}
            twitter={"https://x.com/8790Fahad"}
            linkedin={
              "https://www.linkedin.com/in/muhammad-fahad-ado-1506a31a0/"
            }
          />
          {/* <TeamCard pic={daddy} name="Fahad" role={role} ceo='C' delay={400} /> */}
        </div>
      </div>
    </div>
  );
}
