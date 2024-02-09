import React from "react";
import murtala from "../../assets/team/murtala1.jpg";
import mary from "../../assets/team/marry.jpg";
import isah from "../../assets/team/ishah3.jpg";
import fahad from "../../assets/team/fahad3.jpg";
import ishaq from "../../assets/team/ishaqtg.jpg";
import mustapha from "../../assets/team/mustyy.jpg";
// import  from '../../assets/team/.jpg'
import dadi from "../../assets/team/daddy2.jpg";
// import nazif from '../../assets/team/musty.jpg'
// import bashir from '../../assets/team/musty.jpg'
// import mide from '../../assets/team/musty.jpg'
import sadiq from "../../assets/team/mide4.jpg";
import TeamCard from "./TeamCard";
import Scroll from "../../Components/scroll/Scroll";

export default function TeamContainer() {
  const nam = "Mustapha";
  const role = "Senior Developer";
  return (
    <div className="container-fluid mt-5 pt-5 mb-5 bg-light">
      {/* <h2 className='s-heading'>Our Creative Team</h2> */}
      <Scroll title="MEET OUR TEAM" page="about" />
      <div className="container">
        <div className="team row pt-3">
          <TeamCard pic={isah} name="Isah" role="COO" delay={50} />
          <TeamCard pic={mary} name={"Mary"} role={role} delay={100} />
          <TeamCard pic={mustapha} name={nam} role={role} delay={150} />
          <TeamCard pic={ishaq} name={"Ishaq"} role={role} delay={200} />
          <TeamCard pic={sadiq} name={"Sadiq"} role={role} delay={250} />
          <TeamCard pic={murtala} name="Murtala" role={role} delay={300} />
          <TeamCard pic={fahad} name="Fahad" role={role} delay={350} />

          <TeamCard pic={dadi} name={"Abdussalam"} role={role} delay={400} />
          {/* <TeamCard pic={} name={nam} role={role} />
        <TeamCard pic={} name={nam} role={role} />
        <TeamCard pic={} name={nam} role={role} /> */}
        </div>
      </div>
    </div>
  );
}
