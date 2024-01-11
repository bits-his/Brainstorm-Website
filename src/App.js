// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React, {useEffect} from 'react';
import Navbar from './Components/navbar/Navbar'
import Home from '../src/pages/home/home'
import Contact from './pages/contact/Contact';
import { BrowserRouter, Routes, Route , useLocation} from 'react-router-dom';
import Layout from './Components/Layout';
// import '@fortawesome/fontawesome-free/css/all.css';


function App() {
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
