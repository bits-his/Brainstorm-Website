import React, { useState, useEffect } from 'react';
import './navbar.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logos/logo.png';
import { AiOutlineMenu,  AiOutlineClose} from "react-icons/ai"
// import {FaSearch } from 'react-icons/fa';



export default function Navbar({sectionRefs}) {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Object.values(sectionRefs).forEach((ref) => {
    //   observer.observe(ref.current);
    // });
    Object.keys(sectionRefs).forEach((key) => {
      if (sectionRefs[key].current) {
        observer.observe(sectionRefs[key].current);
      }
    });


    return () => {
      observer.disconnect();
    };
  }, [activeSection, sectionRefs]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <>
    {/* {JSON.stringify(activeSection)} */}
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
          <li onClick={
            location.pathname==="/"?null:()=>navigate("/#home")
          }>
            <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
              Home
            </a>
          </li>
          <li>
            <a href="#clients" className={activeSection === 'clients' ? 'active' : ''}>
              Our Clients
            </a>
          </li>
          <li>
            <a href="#services" className={activeSection === 'services' ? 'active' : ''} >
              Services
            </a>
          </li>
          <li>
            <a href="#bihub" className={activeSection === 'bihub' ? 'active' : ''} >
              Bi-Hub
            </a>
          </li>
          <li>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''} >
              About
            </a>
          </li>
          <li>
            <a href="#products" className={activeSection === 'products' ? 'active' : ''}>
              Products
            </a>
          </li>
          <li>
            <a href="#blog" className={activeSection === 'blog' ? 'active' : ''}>
              Blog
            </a>
          </li>
        </ul>
       </div>
       <div className="last" onClick={handleMenuClick}>
        <ul>
        <li className='contact' onClick={()=>setActiveSection("")}>
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
