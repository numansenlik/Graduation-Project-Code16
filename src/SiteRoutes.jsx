import Home from './compoments/pages/Home'
import MeetOurTeam from './compoments/pages/MeetOurTeam'
import Contact from './compoments/pages/Contact'
import Gallery from './compoments/pages/Gallery'
import Products from './compoments/pages/Products'
import Services from './compoments/pages/Services'
import { Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function SiteRoutes() {
  const [data, setData] = useState([]);

  async function productsApi() {
    const options = {
      method: 'GET',
      url: 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline',
    };
    try {
      const response = await axios.request(options);
      await setData(response.data);
      console.log(response.data.slice(0,32));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    productsApi();
  }, []);

  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/meetourteam" element={<MeetOurTeam/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/products" element={<Products data={data}/>}/>
    <Route path="/services" element={<Services/>}/>
  </Routes>
  )
}

export default SiteRoutes