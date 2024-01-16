import React, { useState } from "react"
import "./contact.css";
import { CiFacebook,} from "react-icons/ci"
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Img from '../../assets/img/about_1.png.webp'
const ContactFrom = () => {
 
  return (
    <>
     <div class="hero-section ">
<div class="container">
<div class="row justify-content-between">
<div class="col-lg-5">
<span class="subheading ">Contact</span>
<h1 class="heading mb-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">Get In Touch</h1>
<p class="mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
<p data-aos="fade-up" data-aos-delay="300" class="aos-init aos-animate"><a href="#" class="btn btn-primary mr-2">How we work</a> <a href="#" class="btn btn-outline-primary">Contact us</a></p>
</div>
<div class="col-lg-6">
<div class="img-wrap aos-init aos-animate" data-aos="fade-left">
<img src={Img} alt="Image" class="img-fluid"/>
</div>
</div>
</div>
</div>
</div>
<div class="container mt-5  pt-0">
<div class="row justify-content-center">
<div class="col-lg-6 order-lg-2 mb-5 mb-lg-0">
<div class="section-title mb-5">
<strong class="subtitle ">Contact Us</strong>
<h2 class="heading ">Let's have a talk</h2>
</div>
<form class="contact-form ">
<div class="row">
<div class="col-6">
<div class="form-group mb-3">
<label class="text-black" for="fname">First name</label>
<input type="text" class="form-control" id="fname"/>
</div>
</div>
<div class="col-6">
<div class="form-group mb-3">
<label class="text-black" for="lname">Last name</label>
<input type="text" class="form-control" id="lname"/>
</div>
</div>
</div>
<div class="form-group mb-3">
<label class="text-black" for="email">Email address</label>
<input type="email" class="form-control" id="email"/>
</div>
<div class="form-group mb-3">
<label class="text-black" for="message">Message</label>
<textarea name="" class="form-control" id="message" cols="30" rows="5"></textarea>
</div>
<button type="submit" class="btn btn-primary">Send Message</button>
</form>
</div>
</div>
</div>
    </>
  )
}

export default ContactFrom
