import 'bootstrap/dist/css/bootstrap.min.css'
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import React, { useLayoutEffect, useRef} from 'react';
import {  useLocation} from 'react-router-dom';
// import Layout from './Components/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Components/navbar/Navbar';
import Home from './pages/home/home';
import Footer from './Components/footer/Footer';



function App() {
  AOS.init()
  const{pathname} = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);
  const sectionRefs = {
    home: useRef(),
    clients: useRef(),
    services: useRef(),
    bihub: useRef(),
    about: useRef(),
    products: useRef(),
    blog: useRef(),
    
  };

  return (
    <div className="App">
        {/* <Layout /> */}
        <Navbar sectionRefs = {sectionRefs}/>
        <Home sections={sectionRefs}/>
        <Footer />
    </div>
  );
}

export default App;
