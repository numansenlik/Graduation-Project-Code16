import Home from './compoments/pages/Home'
import MeetOurTeam from './compoments/pages/MeetOurTeam'
import Contact from './compoments/pages/Contact'
import Gallery from './compoments/pages/Gallery'
import Products from './compoments/pages/Products'
import Services from './compoments/pages/Services'
import { Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import productsApi from './customHooks/productsApi'
import contactsGetApi from './customHooks/contacts/contactsGetApi'
function SiteRoutes() {
const productsData = productsApi();
const [data,isActive] = contactsGetApi();
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/meetourteam" element={<MeetOurTeam/>}/>
    <Route path="/contact" element={<Contact data = {data} isActive={isActive} />}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/products" element={<Products data={productsData}/>}/>
    <Route path="/services" element={<Services/>}/>
  </Routes>
  )
}

export default SiteRoutes