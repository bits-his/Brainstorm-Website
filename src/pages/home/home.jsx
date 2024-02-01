import React from "react";
import "./home.css";
import image from "../../assets/img/bg1.webp";
import Text from "./text/Text";
import Carousel from "./carousel/Carousel";
import Stories from "./stories_home/Stories";
import What from "./What -we-do/what";
import GetInTouch from "./brief-contact-us/GetInTouch"
import HomeCardContainer from "./services-card/HomeCardContainer";

export default function Home() {
  return (
    <>
      <div className="home-page" style={{ backgroundImage: `url(${image})` }}>
        <h1>Welcome to the Innovation Hub</h1>
        <p>
          We <Text /> digital solutions
        </p>
      </div>
      <div className="center-text">
        <p>
          Since 2006. For millions of users. We transform businesses with
          powerful and adaptable digital solutions that satisfy the needs of
          today and unlock the opportunities of tomorrow.
        </p>
        <Carousel />
      </div>
      <What />
      <HomeCardContainer />
      <div>
        <Stories />
      </div>

 
      <GetInTouch />
    </>
  );
}
