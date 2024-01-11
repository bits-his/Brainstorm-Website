import React from 'react'
import { Outlet, Route, Routes } from 'react-router'
import Home from '../pages/home/home'
import Contact from '../pages/contact/Contact'
import AboutUs from '../pages/about-us/AboutUs'
import OurClient from '../pages/our client/OurClient'

export default function Navigations() {
  return (
    <>
     <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/our-client' element={<OurClient />} />
        <Route path='/' element />
     </Routes>
     <Outlet />
    </>
  )
}
