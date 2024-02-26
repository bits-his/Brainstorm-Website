import React from "react";
import "./ourclient.css";
import CustumeClient from "./CustumeClient";
// import sanda from "../../assets/logos/sanda.png";
// import prime from "../../assets/logos/pscprime_logo.png";
// import pikme from "../../assets/logos/pick.png";
// import katsina from "../../assets/logos/sftas-katsina.png";
// import habeeby from "../../assets/logos/IMG_20220801_152803.e953f9f4c6e2120945f9-removebg-preview.png";
// import zagis from "../../assets/logos/sftas-zamf.jpg";
// import kano from "../../assets/logos/sftas.0be359df22c1da61850f-removebg-preview.png";
// import loogo from "../../assets/logos/loogo.png";
// import insurance from "../../assets/logos/1.jpg";
// import immigration from "../../assets/logos/2.jpg";
import aminu from "../../assets/logos/3.jpg";
import govt from "../../assets/logos/4.jpg";
import state from "../../assets/logos/5.jpg";
// import health from "../../assets/logos/6.jpg";
export default function OurClient() {
  return (
    <>
      {/* <div className="cl">
        <div className="clll">
          <h1 className="claye">Our Clients</h1>
          <p className="paragraph">
            Thank you for choosing Brainstorm as your trusted technology
            partner. At brainstorm, we are committed to delivering cutting-edge
            software solutions tailored to meet the unique needs of your
            business.
          </p>
        </div>
      </div> */}

      <div className="contain">
        <div className="row">
          <CustumeClient
            col="4"
            col2="6"
            greyImg={govt}
            colorImg={govt}
            text="KIRMAS"
          />
          <CustumeClient
            col="4"
            col2="6"
            greyImg={aminu}
            colorImg={aminu}
            text="T-BEAMS"
          />

          <CustumeClient
            col="4"
            col2="6"
            greyImg={state}
            colorImg={state}
            text="E-BUDGET"
          />
          {/* <CustumeClient
            col="3"
            col2="6"
            greyImg={health}
            colorImg={health}
            text="kSCHMA"
          />
          <CustumeClient
            col="3"
            col2="6"
            greyImg={sanda}
            colorImg={sanda}
            text="sanda tireda"
          />
          <CustumeClient
            col="3"
            col2="6"
            greyImg={zagis}
            colorImg={zagis}
            text="ZAGIS"
          /> */}

          {/* <CustumeClient
            col="3"
            col2="6"
            greyImg={pikme}
            colorImg={pikme}
            text="Pikme"
            circle="rounded-circle"
          /> */}
          {/* <CustumeClient
            col="3"
            col2="6"
            alt="sanda"
            greyImg={katsina}
            colorImg={katsina}
            text="Katsina State Govt"
          />

          <CustumeClient
            col="3"
            col2="6"
            alt="sanda"
            greyImg={insurance}
            colorImg={insurance}
            text="national health insurance scheme"
          />

          <CustumeClient
            col="3"
            col2="6"
            alt="sanda"
            greyImg={immigration}
            colorImg={immigration}
            text="immigration"
          />
          <CustumeClient
            col="3"
            col2="6"
            alt="sanda"
            greyImg={habeeby}
            colorImg={habeeby}
            text="habeeby health LTD"
          />

          <CustumeClient
            col="3"
            col2="6"
            alt="sanda"
            greyImg={kano}
            colorImg={kano}
            text="SFTAS Kano"
          />
          <CustumeClient
            col="3"
            alt="sanda"
            col2="6"
            greyImg={prime}
            colorImg={prime}
            text="prime Specialist clinic"
          /> */}
          {/* <CustumeClient
            col="3"
            col2="6"
            greyImg={loogo}
            colorImg={loogo}
            text="Remedix"
          /> */}
        </div>
      </div>
    </>
  );
}
