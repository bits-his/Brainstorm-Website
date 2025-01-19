import React from "react";
import Logo from "../../assets/logos/logo.png";
import { Link } from "react-router-dom";
import map from "../../assets/logos/map.webp";
import call from "../../assets/logos/call.webp";
// import message from "../../assets/logos/message.webp";
import "./footer.css";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


export default function Footer() {
  const date = new Date().getFullYear();
  // const footerStyle = {
  //   backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%' height='100%' id='svg' viewBox='0 0 1440 690' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0,700 L 0,337 C 296.5,327.75 593,318.5 833,306 C 1073,293.5 1256.5,277.75 1440,262 L 1440,700 L 0,700 Z' stroke='none' stroke-width='0' fill='%23ebebeb' fill-opacity='1'%3E%3C/path%3E%3C/svg%3E")`,
  //   backgroundSize: "cover", // Ensure the SVG covers the entire footer area
  //   height: "70vh", // Set the height to 70vh
  //   color: "#000", // Set text color
  //   display: "flex", // Set display to flex
  //   alignItems: "center", // Center content vertically
  //   justifyContent: "center",
  // };
  return (
    <>
      <footer>
        <div className="container">
          <div className="main-footer">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 ps-sm-5 col-lg-3 col-xl-3">
                <div className="single-footer-widget">
                  <Link to="/">
                    <img src={Logo} alt="Logo" className="logo mb-4" />
                  </Link>

                  <p>
                    Discover the power of customized software at brainstorm.
                  </p>

                  <ul className="footer-social">
                    <li>
                      <Link to="https://www.facebook.com/BrainstormInnovationHub?_rdc=1&_rdr">
                        <IoLogoFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://twitter.com/brainstorm_Hub">
                        <BsTwitterX />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.linkedin.com/company/brainstorm-innovation-hub/">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <a href="mailto:hello@brainstorm.ng">
                        <FaMailBulk />
                      </a>
                    </li>
                  </ul>
                  <div className="tel d-flex">
                    <img src={call} alt="call" />
                    <a href="tel: +234 903 281 8956" className="mb-">
                      +234 903 281 8956
                    </a>
                  </div>
                  {/* <div className="mail d-flex">
                    <img src={message} alt="message" />
                    <a href="mailto:hello@brainstorm.ng" className="">
                      hello@brainstorm.ng
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 ps-sm-5 col-lg-3 col-xl-3">
                <div className="single-footer-widget">
                  <h5 className="mt-3">Fast links</h5>
                  <div
                    className="underline w-25"
                    style={{
                      marginTop: "-20px",
                    }}
                  ></div>

                  <ul>
                    <li className="mb-2">
                      <a href="#about">About us</a>
                    </li>
                    <li className="mb-2">
                      <a href="#services">Services</a>
                    </li>
                    <li className="mb-2">
                      <a href="#client">Our clients</a>
                    </li>
                    <li className="mb-2">
                      <a href="#bihub">Bi-hub</a>
                    </li>
                    <li className="mb-2">
                      <a href="#blog">Blog</a>
                    </li>
                    <li>
                      <a href="/contact">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 ps-sm-5 col-lg-3 col-xl-3">
                <div className="single-footer-widget">
                  <h5 className="mt-3">Our Products</h5>
                  <div
                    className="underline w-25"
                    style={{ marginTop: "-20px" }}
                  ></div>

                  <ul>
                    <li className="mb-2">
                      <a href="#" target="_blank" rel="noreferrer">
                        Sirmas
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" target="_blank" rel="noreferrer">
                        T-beams
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="#"
                        // target="_blank"
                        rel="noreferrer"
                      >
                        E-budget
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="#"
                        // target="_blank"
                        rel="noreferrer"
                      >
                        PFMS
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="#"
                        // target="_blank"
                        rel="noreferrer"
                      >
                        EAS
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="#"
                        // target="_blank"
                        rel="noreferrer"
                      >
                        E2ERD
                      </a>
                    </li>
                    {/* <li className="mb-2">
                      <b>
                        <Link to="#ihub">Click to see more</Link>
                      </b>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 ps-sm-1 col-lg-3 col-xl-3">
                <div className="footer-contact">
                  <h5 className="mt-3">Contact </h5>
                  <div
                    className="underline w-25"
                    style={{ marginTop: "-20px" }}
                  ></div>

                  <div className="location d-flex">
                    <img src={map} alt="map" />
                    <p>
                      Floor 1, African Alliance Building, No 1 Sani Abacha Way,
                      Kano
                    </p>
                  </div>
                  {/* <div className="location d-flex">
                    <img src={map} alt="map" />
                    <p>7 Bell Yard London WC2A 2JR United Kingdom</p>
                  </div> */}
                  {/* <div className="location d-flex">
                    <img src={map} alt="map" />
                    <p>
                      16192 Coastal Highway, LewesCounty Essex,
                      DE.19958-9776.USA
                    </p>
                  </div> */}
                  {/* <div className="location d-flex">
                    <img src={map} alt="map" />
                    <p>
                      104/105 Level1, Emaar Square Building 4 Sheikh Muhammad
                      Bin Rashid Boulevard Dubai, United Arab Emirates
                    </p>
                  </div> */}
                  <div className="location d-flex">
                    <img src={map} alt="map" />
                    <p>
                      Behind Olu Wheel Balances Workshop, Gidan Dawa, Katsina
                      State,Nigeria
                    </p>
                  </div>
                  <div className="location d-flex">
                    <img src={map} alt="map" />
                    <p>Flat 42, DROL Estate Wuye Abuja,Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="copy">
            <p className="ms-2">
              Copyright &copy;{date} All right reserved | Brainstorm IT
              Solutions.
            </p>
          </div>
          <div>
            <ul className="footer-nav">
              <li>
                <Link to="#">Terms of Service</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
