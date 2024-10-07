import React from "react";
import { Outlet, Route, Routes } from "react-router";
import Home from "../pages/home/home";
import Contact from "../pages/contact/Contact";
import AboutUs from "../pages/about-us/AboutUs";
import OurClient from "../pages/our client/OurClient";
import Services from "../pages/services/Services";
import NotFound from "../pages/errors/NotFound";
import Bihub from "../pages/Bi-hub/Bihub";
import Team from "../pages/team/Team";
import Blogs from "../pages/blog/Blogs";
import BlogDetails from "../pages/blog/BlogDetails";
import Tech from "../pages/Tech/Tech";

export default function Navigations() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-clients" element={<OurClient />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/blogdetails/:id" element={<BlogDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/bi-hub" element={<Bihub />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Outlet />
    </>
  );
}
