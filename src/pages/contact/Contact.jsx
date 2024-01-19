// import React, { useState } from "react";
import "./contact.css";
// import { CiFacebook } from "react-icons/ci";
// import { FaInstagram } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
import Img from "../../assets/img/about_1.png.webp";
const ContactFrom = () => {
  return (
    <>
      <div className="hero-section ">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <span className="subheading ">Contact</span>
              <h1
                className="heading mb-3 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Get In Touch
              </h1>
              <p
                className="mb-5 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="aos-init aos-animate"
              >
                <a href="a" className="btn btn-primary mr-2">
                  How we work
                </a>{" "}
                <a href="a" className="btn btn-outline-primary">
                  Contact us
                </a>
              </p>
            </div>
            <div className="col-lg-6">
              <div
                className="img-wrap aos-init aos-animate"
                data-aos="fade-left"
              >
                <img src={Img} alt="Imag" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5  pt-0">
        <div className="row justify-content-center">
          <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
            <div className="section-title mb-5">
              <strong className="subtitle ">Contact Us</strong>
              <h2 className="heading ">Let's have a talk</h2>
            </div>
            <form className="contact-form ">
              <div className="row">
                <div className="col-6">
                  <div className="form-group mb-3">
                    <label className="text-black" htmlFor="fname">
                      First name
                    </label>
                    <input type="text" className="form-control" id="fname" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group mb-3">
                    <label className="text-black" htmlFor="lname">
                      Last name
                    </label>
                    <input type="text" className="form-control" id="lname" />
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <label className="text-black" htmlFor="email">
                  Email address
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group mb-3">
                <label className="text-black" htmlFor="message">
                  Message
                </label>
                <textarea
                  name=""
                  className="form-control"
                  id="message"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFrom;
