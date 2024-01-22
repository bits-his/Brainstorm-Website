import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import "./carousel.css";
import { VscRemoteExplorer } from "react-icons/vsc";
import "./soft.css";

<p>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae molestias,
  optio accusamus temporibus eum maxime, a fuga facere excepturi qui, sed
  deleniti dolores? Non quaerat amet veniam ipsam. Quasi, esse.
</p>;
export default function Soft() {
  const option = {
    items: 1,
    loop: false,
    autoplay: false,
    nav: false,
    dots: true,
    margin: 0,
  };
  return (
    <>
      <div className="tabs-container">
        <div className="taas">
          <OwlCarousel className="owl-theme" {...option}>
            <div className="item">
              <div className="soft">
                <div className="top">
                  <VscRemoteExplorer />
                </div>
                <h4>Software Development</h4>
                <p>
                  Software Development ipsum dolor sit amet consectetur
                  adipisicing elit. Quae molestias,
                </p>
              </div>
            </div>
            <div className="item">
              <div className="soft">
                <div className="top">
                  <VscRemoteExplorer />
                  <h4>Web Development</h4>
                </div>
                <p>
                  Web Development ipsum dolor sit amet consectetur adipisicing
                  elit. Quae molestias, optio accusamus temporibus eum maxime, a
                  fuga facere excepturi qui esse.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="soft">
                <div className="top">
                  <VscRemoteExplorer />
                  <h4>Machine learning</h4>
                </div>
                <p>
                  Machine learning dolor sit amet consectetur adipisicing elit.
                  Quae molestias, optio accusamus temporibus eum maxime, a fuga
                  facere excepturi
                </p>
              </div>
            </div>
            <div className="item">
              <div className="soft">
                <div className="top">
                  <VscRemoteExplorer />
                  <h4>Artficial Inteligence</h4>
                </div>
                <p>
                  Artficial Inteligence sit amet consectetur adipisicing elit.
                  Quae molestias, optio accusamus temporibus eum maxime, a fuga
                  facere excepturi qui
                </p>
              </div>
            </div>
            <div className="item">
              <div className="soft">
                <div className="top">
                  <VscRemoteExplorer />
                  <h4>Cooperate Training</h4>
                </div>
                <p>
                  Cooperate Training sit amet consectetur adipisicing elit. Quae
                  molestias, optio accusamus temporibus eum maxime, a fuga
                  facere excepturi qui
                </p>
              </div>
            </div>
            <div className="item">
              <div className="soft">
                <div className="top">
                  <VscRemoteExplorer />
                  <h4>Blockchain</h4>
                </div>
                <p>
                  Blockchain Molestias eligendi earum excepturi dicta libero
                  illum maiores nihil consequuntur?
                </p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}
