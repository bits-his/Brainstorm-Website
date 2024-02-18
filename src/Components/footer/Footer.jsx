import React from "react";
import Logo from "../../assets/logos/logo.png";
import { Link } from "react-router-dom";
import map from "../../assets/logos/map.webp";
import call from "../../assets/logos/call.webp";
import message from "../../assets/logos/message.webp";
import "./footer.css";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

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
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.linkedin.com/company/brainstorm-innovation-hub/">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 ps-sm-5 col-lg-3 col-xl-3">
                <div className="single-footer-widget">
                  <h5 className="mt-5">Fast links</h5>
                  <div
                    className="underline w-25"
                    style={{
                      marginTop: "-20px",
                    }}
                  ></div>

                  <ul>
                    <li className="mb-2">
                      <Link to="/about-us">About us</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/services">Services</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/our-client">Our clients</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/Bi-hub">Bi-hub</Link>
                    </li>
                    <li>
                      <Link to="/Contactus">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 ps-sm-5 col-lg-3 col-xl-3">
                <div className="single-footer-widget">
                  <h5 className="mt-5">Our startups</h5>
                  <div
                    className="underline w-25"
                    style={{ marginTop: "-20px" }}
                  ></div>

                  <ul>
                    <li className="mb-2">
                      <a
                        href="https://mylikita.clinic"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Mylikita
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://www.bitcoops.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Bitscoops
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.psn_payment"
                        target="_blank"
                        rel="noreferrer"
                      >
                        PharmPay
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://estarbuy.ng/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Estarbuy
                      </a>
                    </li>
                    <li className="mb-2">
                      <b>
                        <Link to="/Bi-hub">Click to see more</Link>
                      </b>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 ps-sm-5 col-lg-3 col-xl-3">
                <div className="footer-contact">
                  <h5 className="mt-5">Contact </h5>
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
                  <div className="tel d-flex">
                    <img src={call} alt="call" />
                    <a href="tel: +234 903 281 8956" className="mb-3">
                      +234 903 281 8956
                    </a>
                  </div>
                  <div className="mail d-flex">
                    <img src={message} alt="message" />
                    <a href="mailto:hello@brainstorm.ng" className="">
                      hello@brainstorm.ng
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="copy">
            <p>
              Copyright &copy;{date} All right reserved | Brainstorm IT
              Solution.
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
