import React, { useState, useEffect } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logos/logo.png';
import { AiOutlineMenu,  AiOutlineClose} from "react-icons/ai"
// import {FaSearch } from 'react-icons/fa';



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
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={` ${isSticky ? 'isSticky' : ''}`} >
      <div className="header">
      <div className="logo-container">
      <NavLink to="/" className="logo-">
          <img src={Logo} alt="Brainstorm" fetchpriority='high' />
        </NavLink>
        </div>
      <div className={`head-main ${isMenuOpen ? 'open' : ''}`}>
      <div className="inner">
       <ul className={`navlist`} onClick={handleLinkClick}>
          <li>
            <NavLink to="/" >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/bi-hub" >
              Bi-Hub
            </NavLink>
          </li>
          <li>
            <NavLink to="/our-client" >
              Our Client
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" >
              Team
            </NavLink>
          </li>
        </ul>
       </div>
       <div className="last" onClick={handleMenuClick}>
        <ul>
        <li className='contact'>
              <NavLink to="/contact">
              Contact
              </NavLink>
            </li>
        </ul>
       </div>
      </div>
  
        <div className="header-icons">
          <button id="menu-icon" onClick={handleMenuClick}>
           {isMenuOpen ? <AiOutlineClose/> : < AiOutlineMenu/>}
          </button>
        </div>
      </div>
      </header>
    </>
  );
}
