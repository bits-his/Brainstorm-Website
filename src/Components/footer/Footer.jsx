import React from "react";
import logo from "../../assets/logos/logo.png";
// import LINK from "react-router-dom";
export default function Footer() {
    const date = new Date().getFullYear()
    return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="main-footer">
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget">
                 
                    <img src={logo} alt="brainstorm" />
                 
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident itaque facilis obcaecati? Veritatis id blanditiis,
                    aperiam saepe aliquid, numquam accusamus culpa recusandae
                    modi neque voluptatum sapiente voluptas rerum perferendis
                    quasi.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget">
                        <h5>Fast links</h5>
                    <ul>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Our client</li>
                        <li>Bi-hub</li>
                        <li>Contact us</li>
                    </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget">
                    <h5>Our startup</h5>
                    <ul>
                        <li>Mylikita</li>
                        <li>Bitscoops</li>
                        <li>PharmPay</li>
                        <li>Estarbuy</li>
                        <li><b>Click to see more</b></li>
                    </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="footer-contact">
                    <div className="location d-flex">
                        icon
                        <p>
                        Floor 1, African Alliance Building, No 1 Sani Abacha Way, Kano
                        </p>
                    </div>
                    <div className="tel d-flex">
                        icon
                      <a href="tel: +234 903 281 8956">+234 903 281 8956</a>
                    </div>
                    <div className="mail d-flex">
                        icon
                        <a href="mailto:hello@brainstorm.ng">hello@brainstorm.ng</a>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <div className="social-icon">

            </div>
            <p>Copyright &copy;{date} All right reserved | Brainstorm IT Solution. </p>
          </div>
        </div>
      </footer>
    </>
  );
}
