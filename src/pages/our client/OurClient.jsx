import React from "react";
import "./ourclient.css";
import CustumeClient from "./CustumeClient";
import sanda from '../../assets/logos/sanda.png'
import prime from '../../assets/logos/pscprime_logo.png'
import pikme from '../../assets/logos/pick.png'
import katsina from '../../assets/logos/sftas-katsina.png'
import habeeby from '../../assets/logos/IMG_20220801_152803.jpg'
import zagis from '../../assets/logos/sftas-zamf.jpg'
import kano from '../../assets/logos/sftas.png'
import loogo from '../../assets/logos/loogo.png'
import insurance from '../../assets/logos/1.jpg'
import immigration from '../../assets/logos/2.jpg'
import aminu from '../../assets/logos/3.jpg'
import govt from '../../assets/logos/4.jpg'
import state from '../../assets/logos/5.jpg'
import health from '../../assets/logos/6.jpg'
import Hero from "../../Components/Hero/Hero";

export default function OurClient() {
  return (
    <>
      <Hero page="our client" />
      <h3>Our Clients</h3>
      <p className="paragraph">
        Thank you for choosing Brainstorm as your trusted technology partner. At
        brainstorm, we are committed to delivering cutting-edge software
        solutions tailored to meet the unique needs of your business.
      </p>
      <p className="paragraph">
        Our journey with clients like you has been both inspiring and rewarding.
        Your success stories motivate us to continually innovate and exceed your
        expectations. As we work together to navigate the dynamic landscape of
        the digital world, we are grateful for the trust you place in our team.
      </p>
      <div className="contain">
        <div className="row">
          <CustumeClient
            col="3"
            col2="6"
            alt="sanda"
            img={govt}
            text="Kano State Govt"
          />
          <CustumeClient
            col="3"
            col2="6"
            alt="sanda"
            img={aminu}
            text="Aminu Kano"
          />

          <CustumeClient
            col="3"
            col2="6"
            alt="sanda"
            img={state}
            text="sanda tireda"
          />
          <CustumeClient
            col="3"
            col2="6"
            alt="sanda"
            img={health}
            text="sanda tireda"
          />
          <CustumeClient
            col="3"
            alt="sanda"
            col2="6"
            img={sanda}
            text="sanda tireda"
          />
          <CustumeClient
            col="3"
            col2="6"
            alt="sanda"
            img={zagis}
            text="sanda tireda"
          />

          <CustumeClient
            col="3"
            alt="sanda"
            col2="6"
            img={pikme}
            text="Pikme"
            circle="rounded-circle"
          />
          <CustumeClient
            col="3"
            col2="6"
            alt="sanda"
            img={katsina}
            text="Katsina State Govt"
          />

          <CustumeClient
            col="3"
            col2="6"
            alt="sanda"
            img={insurance}
            text="sanda tireda"
          />

          <CustumeClient
            col="3"
            col2="6"
            alt="sanda"
            img={immigration}
            text="sanda tireda"
          />
          <CustumeClient
            col="3"
            col2="6"
            alt="sanda"
            img={habeeby}
            text="sanda tireda"
          />

          <CustumeClient
            col="3"
            col2="6"
            alt="sanda"
            img={kano}
            text="sanda tireda"
          />
          <CustumeClient
            col="3"
            alt="sanda"
            col2="6"
            img={prime}
            text="sanda tireda"
          />
          <CustumeClient
            col="3"
            col2="6"
            alt="sanda"
            img={loogo}
            text="sanda tireda"
          />
        </div>
      </div>
    </>
  );
}
