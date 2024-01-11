import React, { useState, useEffect } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logos/logo.png';
import { AiOutlineMenu,  AiOutlineClose} from "react-icons/ai"



export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={` ${isSticky ? 'isSticky' : ''} ${isMenuOpen ? 'open' : ''}`}>
        <a href="home" className="logo">
          <img src={Logo} alt="" />
        </a>

        <ul className={`navlist ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" onClick={handleLinkClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" onClick={handleLinkClick}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={handleLinkClick}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/our-client" onClick={handleLinkClick}>
              Our Client
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleLinkClick}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="header-icons">
          <div id="menu-icon" onClick={handleMenuClick}>
           {isMenuOpen ? <AiOutlineClose/> : < AiOutlineMenu/>}
          </div>
        </div>
      </header>
    </>
  );
}
