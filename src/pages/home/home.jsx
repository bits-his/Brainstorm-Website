import React from "react";
import "./home.css";
import image4 from "./img/3853675.jpg";
import Text from "./text/Text";
import Carousel from "./carousel/Carousel";
import Stories from './stories_home/Stories'
// import Soft from "./software/Soft";
import What from '../What -we-do/what'
import Trends from "./tabs/Trends";
import Faqs from "../../Components/Accordion/Faqs";
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
      <div
        className="home-page"
        style={{ backgroundImage: `url(${images})` }}
      >
        <h1>Welcome to the Innovation Hub</h1>
        <p>
          we are <Text /> digital success
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
      <What/>

      <Trends />

      <div>
        <Stories />
      </div>




     <Faqs />






   
    </>
  );
}
