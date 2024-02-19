import 'bootstrap/dist/css/bootstrap.min.css'
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import React, { useLayoutEffect} from 'react';
import {  useLocation} from 'react-router-dom';
import Layout from './Components/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  AOS.init()
  const{pathname} = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);
  return (
    <div className="App">
        <Layout />
    </div>
  );
}

export default App;
