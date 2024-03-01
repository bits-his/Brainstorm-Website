import React from "react";
import "./ourclient.css";
import CustumeClient from "./CustumeClient";
import sirmas from "../../assets/logos/sirmas.png";
import tbeams from "../../assets/logos/T-beams.png";
import ebudget from "../../assets/logos/e-budget.png";
import EAS from "../../assets/logos/eas.png"
import e2e from "../../assets/logos/e2e.png"
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
            // number={100}
          />
          <CustumeClient col="4" col2="6" greyImg={tbeams} text="T-BEAMS" />

          <CustumeClient col="4" col2="6" greyImg={ebudget} text="E-BUDGET" />
          {/* <CustumeClient col="4" col2="6" greyImg={ebudget} text="SIPPIS" />
          <CustumeClient col="4" col2="6" greyImg={tbeams} text="SIPS" /> */}
          {/* <CustumeClient
            col="4"
            col2="6"
            greyImg={tbeams}
            text="PFMS"
            // text="public financial management suite"
          /> */}
          <CustumeClient
            col="4"
            col2="6"
            greyImg={EAS}
            text="EAS"
            // text="Enrollee Audit System"
          />
          <CustumeClient
            col="4"
            col2="6"
            greyImg={e2e}
            text="E2ERD"
            // text="End to End Remmitance Disbursement"
          />
        </div>
      </div>
    </>
  );
}
