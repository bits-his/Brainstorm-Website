import React from 'react'
import './portfolio.css'
import Scroll from '../../../Components/scroll/Scroll'
import { BiCheckDouble } from "react-icons/bi";

export default function Portfolio() {
  return (
    <div>
        <Scroll title={'Our Portfolio'} 
        span='A collection of our past and ongoing projects, each showcasing our commitment to innovation,
        quality, and client satisfaction. From cutting-edge technology solutions to creative design endeavors,
        our projects exemplify our passion for excellence and our dedication to delivering results that exceed
        expectations' />
        
        <div className="container">
            <div className="row">
                <div className="col-md-6 port">
                  <BiCheckDouble className="icon" />
                  Kano State E-Budget System
                </div>
                <div className="col-md-6 port">
                  <BiCheckDouble className="icon" />
                  Clinton Health International
                </div>
                <div className="col-md-6 port">
                  <BiCheckDouble className="icon" />
                  Kano Integrated Revenue Management Assurance System (KIRMAS)
                  </div>
                <div className="col-md-6 port">
                  <BiCheckDouble className="icon" />
                  Treasury - Budget Expenditure and Accountability System (T-BEAMS)
                </div>
                <div className="col-md-6 port">
                  <BiCheckDouble className="icon" />
                  Customization of Solutions for Open Land Administration GEMS3 Kano
                </div>
                <div className="col-md-6 port">
                  <BiCheckDouble className="icon" />
                  End-End Remittance Disbursement software (NHIS Head office Abuja)
                </div>
                <div className="col-md-6 port">
                  <BiCheckDouble className="icon" />
                  Taxpayers database for Niger State Government
                </div>
                <div className="col-md-6 port">
                  <BiCheckDouble className="icon" />
                  VSAT Installation and Configuration Federal University Duste
                </div>
                {/* <div className="col-md-6 port">
                  <BiCheckDouble className="icon" />
                  Contribution Management Software (NHIS Head office Abuja)
                </div> */}
                <div className="col-md-6 port">
                  <BiCheckDouble className="icon" />
                  Development of customized Health information system (Bits-HIS)
                  Aminu Kano Teaching Hospital
                </div>
                <div className="col-md-6 port">
                  <BiCheckDouble className="icon" />
                  Training of personnel Nigeria Immigration Service (Headquarters Abuja)
                </div>
                <div className="col-md-6 port">
                  <BiCheckDouble className="icon" />
                  Training for 50 Health Workers in the School of Nursing
                  Birnin Kudu funded by path2
                </div>
                <div className="col-md-6 port">
                  <BiCheckDouble className="icon" />
                  Enrollee Register Audit Management Software (NHIS Head office Abuja)
                </div>
                <div className="col-md-6 port">
                  <BiCheckDouble className="icon" />
                  Supply of computer systems scanner, printer Kano State Ministry
                  of Lands & Physical Planning
                </div>
                <div className="col-md-6 port">
                  <BiCheckDouble className="icon" />
                  Development of Phase III Land Information system at Kano State
                  Ministry of Lands and Physical Planning
                </div>
                
            </div>
        </div>
    </div>
  )
}
