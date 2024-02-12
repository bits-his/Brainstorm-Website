import React from "react";
import murtala from "../../assets/team/murtala1.png";
import mary from "../../assets/team/marry1.png";
import isah from "../../assets/team/isah1.png";
import fahad from "../../assets/team/fahad1.png";
import ishaq from "../../assets/team/ishaq1.png";
import mustapha from "../../assets/team/musty1.png";
import TeamCard from "./TeamCard";
import Scroll from "../../Components/scroll/Scroll";

export default function TeamContainer() {
  const nam = "Mustapha";
  const role = "Senior Developer";
  return (
    <div className="container-fluid mt-5 pt-5 pb-5 bg-light">
      {/* <h2 className='s-heading'>Our Creative Team</h2> */}
      <Scroll title="MEET OUR TEAM" page="about" />
      <div className="container">
        <div className="team row pt-3">
          <TeamCard pic={isah} name="Isah" role="Ui/Ux Designer " ceo='Coo Brainstorm'  delay={50} />
          <TeamCard pic={mary} name={"Mary"} role='Graphic Designer' ceo='Manager' delay={100} />
          <TeamCard pic={mustapha} name={nam} role={role} ceo='Ceo Mylikita' delay={150} />
          <TeamCard pic={ishaq} name={"Ishaq"} role={role} ceo='Ceo Wonda Homes' delay={200} />
          <TeamCard pic={murtala} name="Murtala" role={role} ceo='Ceo Bitcoops' delay={250} />
          <TeamCard pic={fahad} name="Fahad" role={role} ceo='Cto MyLikita' delay={300} />
        </div>
      </div>
    </div>
  );
}
