import React from "react";
import background from "../../assets/team/new york.jpg";
import "./ourclient.css";

export default function OurClient() {
  return (
    <div>
      <img src={background} alt="background" className="background" />
      <h3>Our Clients</h3>
      <p className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum
        modi nihil temporibus. Mollitia et quaerat obcaecati consequuntur
      </p>
      <p className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi
        quam, consequuntur quaerat similique, consectetur magni ratione
        accusantium in optio omnis eius necessitatibus sunt obcaecati rem
        repellendus hic laboriosam sequi.
      </p>
    </div>
  );
}
