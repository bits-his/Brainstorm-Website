// ContactForm.js
import React, { useState } from "react";

import "./contact.css";
import Img from "../../assets/img/about_1.png.webp";
import { Link } from "react-router-dom";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://server.brainstorm.ng/bits-blog/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Form submitted successfully!");
        setFormData({ firstname: "", lastname: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to submit form. Please try again later.");
      });

    
  };






  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <span className="subheading">Contact</span>
              <h1 className="heading mb-3">Get In Touch</h1>
              <p className="mb-5  contact-message">
                If you have any questions, need assistance, or require further
                information, we are here to help! Please don’t hesitate to reach
                out to us. To ensure we can address your concerns efficiently,
                we kindly ask that you take a moment to fill out the form below
                with your details and the nature of your inquiry. Our team is
                committed to providing prompt and comprehensive support, and we
                will get back to you as soon as possible. Thank you for reaching
                out to us, and we look forward to assisting you!{" "}
              </p>
              {/* <p>
                <Link to="#" className="btn btn-primary me-2">
                  How we work
                </Link>
                <button className="btn btn-outline-primary">Contact us</button>
              </p> */}
            </div>
            <div className="col-lg-6">
              <div
                className="img-wrap aos-init aos-animate"
                data-aos="fade-left"
              >
                <img src={Img} alt="pic" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mt-5 mb-5  pt-0">
          <div className="row justify-content-center">
            <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
              <div className="section-title mb-5 text-center">
                <strong className="subtitle">Contact Us</strong>
                <h2 className="heading">Let's have a talk</h2>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group mb-3">
                      <label className="text-black" htmlFor="firstname">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group mb-3">
                      <label className="text-black" htmlFor="lastname">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label className="text-black" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
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
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-lg-6 order-lg-1 mb-5 mb-lg-0 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.4710534319565!2d8.540019475051109!3d12.011057535208982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81417f09d5cb%3A0xc3df479c6725e7af!2sBrainstorm%20IT%20Solutions!5e0!3m2!1sen!2sng!4v1705913940974!5m2!1sen!2sng"
                width="100%"
                height="500"
                allowFullScreen=""
                loading="lazy"
                title="map"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
