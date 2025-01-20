import React from "react";
// import murtala from "../../assets/team/murtala123.png";
import dangana from "../../assets/team/CEO.jpeg";
import jagaban from "../../assets/team/Jagaban.png";
import eucharia from "../../assets/team/eucharia.png";
// import fahad from "../../assets/team/fahad1.png";
// import ishaq from "../../assets/team/ishaq1.png";
import munzali from "../../assets/team/munzali.png";
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
            role="MD/CEO"
            delay={50}
            // mail={"mailto:dangana@brainstorm.ng"}
            // twitter={"https://x.com/Idris_Dangana"}
            linkedin={"https://www.linkedin.com/in/dangana/"}
          />
          <TeamCard
            pic={eucharia}
            name="Eucharia Ileka"
            role="Team Lead Operations"
            delay={100}
            mail={"mailto:eucharia.ileka@brainstorm.ng"}
            twitter={"https://www.twitter.com/IsahMuhammadRa3"}
            linkedin={"https://www.linkedin.com/in/eucharia-ileka-3161a316a"}
          />
          <TeamCard
            pic={jagaban}
            name="Ajisefinni Ayodeji Tajudeen"
            // last={true}
            role="Team Lead Business Development"
            delay={130}
            mail={"mailto:ayoyemm2010@brainstorm.com"}
            twitter={"#"}
            // linkedin={"https://www.linkedin.com/in/Ajisefinni Ayodeji/"}
          />
          <TeamCard
            pic={munzali}
            name="Munzali Muktar"
            role="Chief Finance Controller"
            delay={200}
            mail={"mailto:accountant@brainstorm.ng"}
            twitter={"https://x.com/Munzali531283"}
            // linkedin={"https://www.linkedin.com/in/munxali-idris-968093328/"}
          />
          {/* <TeamCard
            pic={ishaq}
            name={`Ishaq Ibrahim `}
            last={true}
            role="CTO Brainstorm"
            delay={250}
            mail={"mailto:ishaq@brainstorm.ng"}
            twitter={"https://x.com/ishaq191"}
            linkedin={"https://www.linkedin.com/in/ibagwai/"}
          /> */}
          {/* <TeamCard
            pic={murtala}
            name="Muritala Adewale Akinyemi"
            role="CFO Brainstorm"
            delay={300}
            mail={"mailto:murtala@brainstorm.ng"}
            twitter={"https://x.com/Akin__yemi"}
            linkedin={"https://www.linkedin.com/in/muritala/"}
          /> */}
          {/* <TeamCard
            pic={fahad}
            name="Fahad Ado Muhammad"
            role="CPO Brainstorm"
            delay={350}
            mail={"mailto:fahad@brainstorm.ng"}
            twitter={"https://x.com/8790Fahad"}
            linkedin={
              "https://www.linkedin.com/in/muhammad-fahad-ado-1506a31a0/"
            }
          /> */}
          {/* <TeamCard pic={daddy} name="Fahad" role={role} ceo='C' delay={400} /> */}
        </div>
      </div>
    </div>
  );
}
