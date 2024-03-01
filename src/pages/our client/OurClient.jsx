import React from "react";
import "./ourclient.css";
import CustumeClient from "./CustumeClient";
import sirmas from "../../assets/logos/sirmas.png";
import tbeams from "../../assets/logos/T-beams.png";
import ebudget from "../../assets/logos/e-budget.png";
import EAS from "../../assets/logos/eas.png";
import e2e from "../../assets/logos/e2e.png";
import pfm from "../../assets/logos/pfm.png";
export default function OurClient() {
  return (
    <>
      <div className="contain">
        <div className="row">
          <CustumeClient
            col="4"
            col2="6"
            greyImg={sirmas}
            text="SIRMAS"
            width={50}
          />
          <CustumeClient col="4" col2="6" greyImg={tbeams} text="T-beams" />
          <CustumeClient col="4" col2="6" greyImg={ebudget} text="e-budget" />
          <CustumeClient col="4" col2="6" greyImg={pfm} text="PFM" />
          <CustumeClient col="4" col2="6" greyImg={EAS} text="EAS" />
          <CustumeClient col="4" col2="6" greyImg={e2e} text="E2E" />
        </div>
      </div>
    </>
  );
}
