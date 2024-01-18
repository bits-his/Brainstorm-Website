import React from 'react'
import { Outlet, Route, Routes } from 'react-router'
import Home from '../pages/home/home'
import Contact from '../pages/contact/Contact'
import AboutUs from '../pages/about-us/AboutUs'
import OurClient from '../pages/our client/OurClient'
import Services from '../pages/services/Services'
import NotFound from '../pages/errors/NotFound'
import Bihub from '../pages/Bi-hub/Bihub'

export default function Navigations() {
  return (
    <>
     <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/our-client' element={<OurClient />} />
        <Route path='/services' element={<Services /> } />
        <Route path='/blog' element/>
        <Route path='/bi-hub' element={<Bihub />} />
        <Route path='*' element={<NotFound />} />
     </Routes>
     <Outlet />
    </>
  )
}
