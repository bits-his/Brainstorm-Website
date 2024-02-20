// App.js
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import BlogContainer from "../../pages/home/blogs/BlogsContainer.jsx";
// import What from "./What -we-do/what";
import GetInTouch from "../../pages/home/brief-contact-us/GetInTouch.jsx";
import Designed from "../../pages/home/Design/Designed.jsx";
import HomeCardContainer from "../../pages/home/services-card/HomeCardContainer.jsx";
import Bihub from "../../pages/Bi-hub/Bihub.jsx";
import Home from "../../pages/home/home.jsx";
import Footer from "../footer/Footer";

export default function Shit() {
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/ourclients" component={HomeCardContainer} />
      <Route path="/services" component={Bihub} />
      <Route path="/bihub" component={Designed} />
      <Route path="/about" component={BlogContainer} />
      <Route path="/blog" component={GetInTouch} />
      <Footer />
    </div>
  </Router>;
};

