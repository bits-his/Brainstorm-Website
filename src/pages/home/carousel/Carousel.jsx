import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./carousel.css";
import sanda from "../../../assets/logos/sanda.png";
import prime from "../../../assets/logos/pscprime_logo.png";
import pikme from "../../../assets/logos/pick.png";
import katsina from "../../../assets/logos/sftas-katsina.png";
import habeeby from "../../../assets/logos/IMG_20220801_152803.jpg";
import zagis from "../../../assets/logos/sftas-zamf.jpg";
import kano from "../../../assets/logos/sftas.png";
import loogo from "../../../assets/logos/loogo.png";
import insurance from "../../../assets/logos/1.jpg";
import immigration from "../../../assets/logos/2.jpg";
import aminu from "../../../assets/logos/3.jpg";
import govt from "../../../assets/logos/4.jpg";
import state from "../../../assets/logos/5.jpg";
import health from "../../../assets/logos/6.jpg";

export default function Carousel() {
  const options = {
    items: 7,
    slideBy: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: "slideOutUp",
    nav: false,
    dots: false,
    margin: 0,
    responsive: {
      1100: {
        items: 6,
      },

      724: {
        items: 5,
      },
      500: {
        items: 4,
      },
      270: {
        items: 3,
      },
    },
  };
  return (
    <>
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item" style={{ width: 100 }}>
          <div className="caro">
            <img src={state} alt="sii" />
          </div>
        </div>
        <div className="item" style={{ width: 100 }}>
          <div className="caro">
            <img src={kano} alt="sii" />
          </div>
        </div>
        <div className="item" style={{ width: 100 }}>
          <div className="caro">
            <img src={katsina} alt="sii" />
          </div>
        </div>
        <div className="item" style={{ width: 100 }}>
          <div className="caro">
            <img src={aminu} alt="sii" />
          </div>
        </div>
        <div className="item" style={{ width: 100 }}>
          <div className="caro">
            <img src={insurance} alt="sii" />
          </div>
        </div>
        <div className="item" style={{ width: 100 }}>
          <div className="caro">
            <img src={health} alt="sii" />
          </div>
        </div>
        <div className="item" style={{ width: 100 }}>
          <div className="caro">
            <img src={govt} alt="sii" />
          </div>
        </div>
        <div className="item" style={{ width: 100 }}>
          <div className="caro">
            <img src={immigration} alt="sii" />
          </div>
        </div>
        <div className="item" style={{ width: 100 }}>
          <div className="caro">
            <img src={pikme} alt="sii" />
          </div>
        </div>
        <div className="item" style={{ width: 100 }}>
          <div className="caro">
            <img src={prime} alt="sii" />
          </div>
        </div>
        <div className="item" style={{ width: 100 }}>
          <div className="caro">
            <img src={sanda} alt="sii" />
          </div>
        </div>
        <div className="item" style={{ width: 100 }}>
          <div className="caro">
            <img src={zagis} alt="sii" />
          </div>
        </div>
        <div className="item" style={{ width: 100 }}>
          <div className="caro">
            <img src={loogo} alt="sii" />
          </div>
        </div>
        <div className="item" style={{ width: 100 }}>
          <div className="caro">
            <img src={habeeby} alt="sii" />
          </div>
        </div>
      </OwlCarousel>

      {/* alan walker faded
      love the way you lie
      airplanes ft hayley williams
      ELIIE FOLDING love me like you do
      SHONTELLE impossible
      see you again
      diamonds rihanna
      human nature micheal
      stay with me sam smith  
      justin bieber sorry
      dead madison
      zayn - dusk till dawn */}
    </>
  );
}
