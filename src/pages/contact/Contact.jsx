import React from 'react';
import './contact.css';

const Contact = () => {
  return (
  <div className='contact-form'>
    <h2>Contact Us</h2>
    <p>Reach out to us to learn more about <br /> our services and lots more.</p>
    <div class="row justify-content-center">
<div className="col-lg-8">
<div className="touch_form">
<form action="#">
<div className="row ">
<div className="col-md-5 ">
<div className="single_input ">
<input type="text" placeholder="Your Name"/>
</div>
</div>
<div className="col-md-5">
<div className="single_input ">
<input type="email" placeholder="Email"/>
</div>
</div>
<div className="col-md-12">
<div className="single_input" >
<input type="email" placeholder="Subject" />
</div>
</div>
<div className="col-md-12">
<div className="single_input "  >
<textarea name="" id="" cols="30" placeholder="Message" rows="10"></textarea>
</div>
</div>
<div className="col-lg-12">
<div className="submit_btn" >
<button className="boxed-btn3" type="submit">Send Message</button>
</div>
</div>
</div>
</form>
</div>
</div>
</div>

  </div>
  
 
  );
};

export default Contact;
