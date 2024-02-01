import React from "react";
import "./home.css";
import image4 from "../../assets/img/bg1.jpg";
import Text from "./text/Text";
import Carousel from "./carousel/Carousel";
import Stories from "./stories_home/Stories";
import What from "./What -we-do/what";
import Faqs from "../../Components/Accordion/Faqs";
import Responsive from "./Responsive Component/Responsive";
import GetInTouch from "./brief-contact-us/GetInTouch"
import Designed from "./Design/Designed";
// import image1 from "./img/1158893.jpg";
// import image2 from "./img/1158900.jpg";
// import image3 from "./img/1158937.jpg";
// import image5 from "./img/516089.png";

export default function Home() {
  // Array of background images
  const images = [image4];

  // Function to change the background image after a certain time
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     document.querySelector(".home-page").classList.add("animate");

  //     setTimeout(() => {
  //       setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
  //       document.querySelector(".home-page").classList.remove("animate");
  //     }, 2000);
  //   }, 4000);

  //   return () => clearInterval(intervalId);
  // }, [images.length]);

  return (
    <>
      <div className="home-page" style={{ backgroundImage: `url(${images})` }}>
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

      <Responsive />

      <div>
        <Stories />
      </div>
      <Designed />
      <Faqs />
      <GetInTouch />
    </>
  );
}
