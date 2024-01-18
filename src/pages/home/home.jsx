import React from "react";
import { useState} from "react";
import "./home.css";
import image4 from "./img/3853675.jpg";
import Text from "./Text";
import Carousel from "./Carousel";
import Stories from './stories_home/Stories'
// import image1 from "./img/1158893.jpg";
// import image2 from "./img/1158900.jpg";
// import image3 from "./img/1158937.jpg";
// import image5 from "./img/516089.png";
// import Features from "../home/features/Features";
// import Img from "../../assets/img/hero_1.png.webp";
// import Testimonials from './te/Testimonials'
// import { AiFillProject, AiFillSnippets, AiFillSignal } from "react-icons/ai";

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0);

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
        style={{ backgroundImage: `url(${images[bgIndex]})` }}
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
      <div>
        <Stories />
      </div>

      {/* <section className="home bg-light " id="home">
        <div class="hero-section">
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-lg-5">
                <span class="subheading mb-2 ">Welcome to our site</span>
                <h1 class="heading mb-3 ">Expert in, software development</h1>
                <p class="mb-3 ">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p>
                  <button class="btn ">Learn More</button>{" "}
                  <button class="btn2 ">Contact us</button>
                </p>
              </div>
              <div class="col-lg-6">
                <div class="img-wrap ">
                  <img src={Img} alt="Ima" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-5 pt-3">
        <div className="card-title">
          <div class="section pt-0 section-2">
            <div class="container">
              <div class="row mb-5">
                <div
                  class="col-lg-5 mx-auto text-center aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <span class="subheading mb-2">Features</span>
                  <h1 class="heading mb-3">Our Features</h1>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                </div>
              </div>

              <div class="row g-5 text-center">
                <Features
                  icon={<AiFillProject />}
                  title="web development"
                  p=""
                />
                <Features icon={<AiFillSnippets />} title="security" p="" />
                <Features icon={<AiFillSignal />} title="SCO" p="" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
