import React, { useState, useEffect } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logos/logo.png';
import { AiOutlineMenu,  AiOutlineClose} from "react-icons/ai"
import { FaBell, FaSearch } from 'react-icons/fa';



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
        <div className="logo-container">
        <NavLink to="home" className="logo-">
          <img src={Logo} alt="" />
        </NavLink>
        </div>

        <ul className={`navlist ${isMenuOpen ? 'open' : ''}`} onClick={handleLinkClick}>
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
            <NavLink to="/contact" >
              Contact
            </NavLink>
          </li>
          <li>
          <NavLink className='nav-icon-div' activeClassName='active ' to="/contact" onClick={handleLinkClick}>
              <FaSearch  className='nav-icon'/>
            </NavLink>
          </li>
          <li>
          <NavLink className='nav-icon-div' activeClassName='active ' to="/contact" onClick={handleLinkClick}>
              <FaBell  className='nav-icon'/>
            </NavLink>
          </li>
        </ul>
        <div className="noti">
          <ul>
            <li>
              Contact
            </li>
          </ul>
        </div>
        <div className="header-icons">
          <div id="menu-icon" onClick={handleMenuClick}>
           {isMenuOpen ? <AiOutlineClose/> : < AiOutlineMenu/>}
          </div>
        </div>
      </header>
    </>
  );
}
