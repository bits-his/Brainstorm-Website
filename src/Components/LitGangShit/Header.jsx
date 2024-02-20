// Header.js
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Your scroll logic here
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav>
        <ul>
          <HomeLink />
          <OurClientsLink />
          <ServicesLink />
          <BihubLink />
          <AboutLink />
          <BlogLink />
        </ul>
      </nav>
      {activeSection && <h2>Currently Viewing: {activeSection}</h2>}
    </header>
  );
};

export default Header;

const HomeLink = () => (
  <li>
    <NavLink exact to="/">
      Home
    </NavLink>
  </li>
);

const OurClientsLink = () => (
  <li>
    <NavLink to="/ourclients">Our Clients</NavLink>
  </li>
);

const ServicesLink = () => (
  <li>
    <NavLink to="/services">Services</NavLink>
  </li>
);

const BihubLink = () => (
  <li>
    <NavLink to="/bihub">Bihub</NavLink>
  </li>
);

const AboutLink = () => (
  <li>
    <NavLink to="/about">About</NavLink>
  </li>
);

const BlogLink = () => (
  <li>
    <NavLink to="/blog">Blog</NavLink>
  </li>
);
