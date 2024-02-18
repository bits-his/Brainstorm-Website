import "./what.css";
import "../../..";
import Img from "../../../assets/usability-testing-concept_207579-29.avif";
import Img2 from "../../../assets/img2.svg";
// import { GoDotFill } from "react-icons/go";
import { BiCheckDouble } from "react-icons/bi";
// import { Link } from "react-router-dom";
function what() {
  return (
    <>
      <div className="bg-light ">
        <div className="container-fluid mt-5 d-flex p-4 what ">
          <div
            className="what-img m-3"
            data-aos="zoom-in-left"
            data-aos-once="true"
          >
            <img src={Img} alt="" className="img-fluid" />
          </div>
          <div className="what-text p-3">
            <h3 data-aos="fade-right" data-aos-once="true">
              Make your business more competitive and <br />
              sustainable.
            </h3>

            <div data-aos="fade-up" data-aos-once="true">
              <span className="span">
              Brainstorm IT Solutions has a wide range of experience in different sectors of the economy.
              </span>
              <ul>
                <li>
                  <BiCheckDouble className="icon" />
                  Ecommerce
                </li>
                <li>
                  <BiCheckDouble className="icon" />
                  Agritech
                </li>
                <li>
                  <BiCheckDouble className="icon" />
                  PharmaTech
                </li>
                <li>
                  <BiCheckDouble className="icon" />
                  Inventory
                </li>
                <li>
                  <BiCheckDouble className="icon" />
                  Real Estate
                </li>
                <li>
                  <BiCheckDouble className="icon" />
                  EduTech
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container d-flex p-4 mb-5 what">
          <div className="what-text p-3">
            <h3 data-aos="fade-right" data-aos-once="true">
              Focus on what counts while we manage the <br /> day-to-day
              operations.
            </h3>

            <div data-aos="fade-up" data-aos-once="true">
              <span className="span">
                We'll ensure your business runs smoothly, allowing you to
                dedicate your energy where it matters most.
              </span>
              <ul>
                <li>
                  <BiCheckDouble className="icon" />
                  consulting
                </li>
                <li>
                  <BiCheckDouble className="icon" />
                  implementation
                </li>
                <li>
                  <BiCheckDouble className="icon" />
                  Engaging Customer
                </li>
                <li>
                  <BiCheckDouble className="icon" />
                  security
                </li>
              </ul>
            </div>
          </div>
          <div
            className="what-img m-3"
            data-aos="zoom-in-left"
            data-aos-once="true"
          >
            <img src={Img2} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

export default what;
