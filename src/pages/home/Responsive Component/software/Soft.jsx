import React from "react";
import "./soft.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Soft() {
const options = {
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  animateOut: "slideOutUp",
  nav: false,
  margin: 0,
 
};
  return (
    <>
      <OwlCarousel className="owl-theme" {...options}>
        <div class="item" style={{ width: 100 }}>
          <div className="caro">
              <h1>hggs</h1>
          </div>
        </div>
        <div class="item" style={{ width: 100 }}>
          <div className="caro">
              <h1>hggshfhfh</h1>
          </div>
        </div>
        <div class="item" style={{ width: 100 }}>
          <div className="caro">
              <h1>hggshfhfh</h1>
          </div>
        </div>
        <div class="item" style={{ width: 100 }}>
          <div className="caro">
              <h1>hggshfhfh</h1>
          </div>
        </div>
        <div class="item" style={{ width: 100 }}>
          <div className="caro">
              <h1>hggsff</h1>
          </div>
        </div>
        <div class="item" style={{ width: 100 }}>
          <div className="caro">
              <h1>hggs</h1>
          </div>
        </div>
        <div class="item" style={{ width: 100 }}>
          <div className="caro">
              <h1>hggs</h1>
          </div>
        </div>
        <div class="item" style={{ width: 100 }}>
          <div className="caro">
              <h1>hggs</h1>
          </div>
        </div>
        <div class="item" style={{ width: 100 }}>
          <div className="caro">
              <h1>hggs</h1>
          </div>
        </div>
        <div class="item" style={{ width: 100 }}>
          <div className="caro">
              <h1>hggs</h1>
          </div>
        </div>
        <div class="item" style={{ width: 100 }}>
          <div className="caro">
              <h1>hggs</h1>
          </div>
        </div>
        <div class="item" style={{ width: 100 }}>
          <div className="caro">
              <h1>hggs</h1>
          </div>
        </div>
        <div class="item" style={{ width: 100 }}>
          <div className="caro">
              <h1>hggs</h1>
          </div>
        </div>
        <div class="item" style={{ width: 100 }}>
          <div className="caro">
              <h1>hggs</h1>
          </div>
        </div>
      </OwlCarousel>
    </>
  );
}
