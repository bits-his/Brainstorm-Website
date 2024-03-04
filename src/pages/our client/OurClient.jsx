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
            content="The State Integrated Revenue Management and Assurance System (SIRMAS) 
            is a comprehensive revenue management system designed
            and developed to streamline and optimize revenue collection processes."
            width={50}
          />
          <CustumeClient
            col="4"
            col2="6"
            greyImg={tbeams}
            text="T-beams"
            content="Treasury – Budget Expenditure and Accountability Management
             System (T-BEAMS) is a comprehensive budget and expenditure management system
              designed
             and developed to oversee budget allocations, track expenditures, and ensure fiscal discipline. "
          />
          <CustumeClient
            col="4"
            col2="6"
            greyImg={ebudget}
            text="E-budget"
            content="Electronic Budgeting (E-Budget) system is a modern
            technological solution aimed at revolutionizing the traditional budgetary
            processes by introducing automation in budget preparation, execution,
            and monitoring."
          />
          <CustumeClient
            col="4"
            col2="6"
            greyImg={pfm}
            text="PFMS"
            content="The Public Financial Management Suite (PFMS) is a robust
            software solution tailored for effective governance and financial
            oversight in public institutions."
            width={70}
          />
          <CustumeClient
            col="4"
            col2="6"
            greyImg={EAS}
            text="EAS"
            content="Enrollee Audit Software streamlines the process 
            of verifying and managing enrollee data within educational 
            institutions, ensuring accuracy and compliance with enrollment
            standards.
"
          />
          <CustumeClient
            col="4"
            col2="6"
            greyImg={e2e}
            text="E2ERD"
            content="Our End-to-End Remittance Disbursement Software revolutionizes
             payment processing by offering a comprehensive solution for disbursing funds
             securely and efficiently."
          />
        </div>
      </div>
    </>
  );
}
