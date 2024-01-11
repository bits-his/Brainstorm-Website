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
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="main-footer">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 ps-sm-5 col-lg-3 col-xl-3">
                <div className="single-footer-widget">
                  <Link to="/">
                    <img src={Logo} alt="Logo" className="logo mb-4" />
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident itaque facilis obcaecati? Veritatis id blanditiis,
                    aperiam saepe aliquid.
                  </p>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 ps-sm-5 col-lg-3 col-xl-3">
                <div className="single-footer-widget">
                  <h5 className="mt-5">Fast links</h5>
                  <ul>
                    <li className="mb-2">
                      <Link to="/about-us">About us</Link>
                    </li>

                    <li className="mb-2">
                      <Link to="/services">Services</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/Our client">Our client</Link>
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
                  <h5 className="mt-5">Our startup</h5>
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
          <div className="bottom-footer">
            <div className="copy">
              <p>
                Copyright &copy;{date} All right reserved | Brainstorm IT
                Solution.
              </p>
            </div>
            <div className="social-icon">
              <Link to="https://www.facebook.com/BrainstormInnovationHub?_rdc=1&_rdr">
                <IoLogoFacebook />
              </Link>
              <Link to="https://twitter.com/brainstorm_Hub">
                <FaTwitter />
              </Link>
              <Link to="https://www.linkedin.com/company/brainstorm-innovation-hub/">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
