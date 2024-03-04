import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React, { useLayoutEffect, useRef} from 'react';
import { useLocation } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
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
