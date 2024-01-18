import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import React, {useEffect} from 'react';
import {  useLocation} from 'react-router-dom';
import Layout from './Components/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import '@fortawesome/fontawesome-free/css/all.css';


function App() {
  AOS.init()
  const ScrollToTop = () => {
    const{pathname} =useLocation()
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;  
  };
  return (
    <div className="App">
        <ScrollToTop />
        <Layout />
    </div>
  );
}

export default App;
