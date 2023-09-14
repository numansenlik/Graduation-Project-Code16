import Home from './compoments/pages/Home'
import MeetOurTeam from './compoments/pages/MeetOurTeam'
import Contact from './compoments/pages/contact/Contact'
import Gallery from './compoments/pages/Gallery'
import Products from './compoments/pages/Products'
import Services from './compoments/pages/Services'
import { Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import productsApi from './customHooks/productsApi'
import contactsGetApi from './customHooks/contacts/contactsGetApi'
import UserLogin from './compoments/user/UserLogin'
import Fav from './compoments/pages/Fav'
import PrivateRoutes from './compoments/PrivateRoutes'
function SiteRoutes({handleLogin, user}) {
const productsData = productsApi();
const [data,isActive,setData] = contactsGetApi();
  return (
    <Routes>
    <Route path="/" element={<Home data={data}/>}/>
    <Route path="/meetourteam" element={<MeetOurTeam/>}/>
    <Route path="/contact" element={<Contact data = {data} isActive={isActive} setData={setData} />}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/products" element={<Products data={productsData}/>}/>
    <Route path="/services" element={<Services/>} />
    <Route path="/login" element={<UserLogin handleLogin={handleLogin}/>}/>
    <Route path="/fav" element={<PrivateRoutes user={user}><Fav /></PrivateRoutes>}/>
  </Routes>
  )
}

export default SiteRoutes