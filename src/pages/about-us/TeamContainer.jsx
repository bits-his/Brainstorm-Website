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
  const nam = "Mustapha";
  return (
    <div className="container-fluid mt-5 pt-5 pb-5 bg-light">
      {/* <h2 className='s-heading'>Our Creative Team</h2> */}
      <Scroll title="Managemet" page="about" />
      <div className="container">
        <div className="team row pt-3">
          <TeamCard pic={dangana} name="Idris Abdulkadir Dangana" role='Ceo Brainstorm' delay={50} />
          <TeamCard pic={isah} name="Isah Muhd Rabiu" role='Ceo Islahpay'  delay={100} />
          <TeamCard pic={mary} name={"Mary"} role='Manager' delay={130} />
          <TeamCard pic={mustapha} name={nam} role='Ceo Mylikita' delay={200} />
          <TeamCard pic={ishaq} name={"Ishaq"} role='Ceo Wonda Homes' delay={250} />
          <TeamCard pic={murtala} name="Murtala" role='Ceo Bitcoops' delay={300} />
          <TeamCard pic={fahad} name="Fahad" role='Cto MyLikita' delay={350} />
          {/* <TeamCard pic={daddy} name="Fahad" role={role} ceo='C' delay={400} /> */}
        </div>
      </div>
    </div>
  );
}
