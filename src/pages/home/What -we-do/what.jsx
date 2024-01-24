import "./what.css";
import "../../..";
import Img from "../../../assets/img/ensuring.jpg";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";

function what() {
  return (
    <>
      <div className="container bg-light mt-5 d-flex p-4 mb-5 what">
        <div className="what-text p-3">
          <h2>
            Ensuring the Well-being of Every Aspect in Your
            IT Environment.
          </h2>
          <div className="underline"></div>
          <span className="span">
            Holistic Management for Your Cloud or On-Premises Infrastructure and
            Applications.
          </span>
          <ul>
            <li>
              <GoDotFill className="icon" />
              consulting
            </li>
            <li>
              <GoDotFill className="icon" />
              implementation
            </li>
            <li>
              <GoDotFill className="icon" />
              maganagement and support
            </li>
            <li>
              <GoDotFill className="icon" />
              security
            </li>
            <li>
              <GoDotFill className="icon" />
              help desk and services
            </li>
            <li>
              <GoDotFill className="icon" />
              migration
            </li>
          </ul>
          <div className="btns">
            explore <IoIosArrowRoundForward />
          </div>
        </div>
        <div className="what-img">
          <img src={Img} alt="" className="img-fluid" />
        </div>
      </div>
    </>
  );
}

export default what;
