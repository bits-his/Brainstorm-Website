import React from "react";
import "./home.css";
import Carousel from "./carousel/Carousel";
import BlogContainer from "./blogs/BlogsContainer";
import What from "./What -we-do/what";
import GetInTouch from "./brief-contact-us/GetInTouch";
import Designed from "./Design/Designed";
import HomecardContainer from "./services-card/HomecardContainer.jsx";
import Hero from "./hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="center-text">
        <p>
          Since 2006. For millions of users. We transform businesses with
          powerful and adaptable digital solutions that satisfy the needs of
          today and unlock the opportunities of tomorrow.
        </p>
        <Carousel />
      </div>
      <What />
      <HomecardContainer />

      <BlogContainer />

      <Designed />

      <GetInTouch />
    </>
  );
}
