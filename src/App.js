import 'bootstrap/dist/css/bootstrap.min.css'
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import React, { useLayoutEffect, useRef} from 'react';
import {  useLocation} from 'react-router-dom';
// import Layout from './Components/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from "../src/pages/home/Nav"




function App() {
  

  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
