import React from "react";
import "./about-us.css";
// import Hero from '../../Components/Hero/Hero'
import TeamContainer from "./TeamContainer";
import Parallex from "../../Components/parallex/Parallex";
export default function AboutUs() {
  return (
    <>
      <Parallex
        page={"About Us"}
        details={
          "Brainstorm IT Solutions is a software solution company with a wide range of experience in different sectors of the economy. It was founded in 2006 and has since been working with different organizations in building reliable and innovative solutions Our goal is to exceed the expectations of every client by offering outstanding customer service, increased flexibility, and greater value, thus optimizing system functionality and improving operational efficiency. Our staffs are distinguished by their functional and technical expertise combined with their hands-on experience, thereby ensuring that our clients receive the most effective professional services."
        }
      />

      {/* <Hero page='About'/> */}

      <TeamContainer />
    </>
  );
}
