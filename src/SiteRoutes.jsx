import Home from './compoments/pages/Home'
import MeetOurTeam from './compoments/pages/MeetOurTeam'
import Contact from './compoments/pages/Contact'
import Gallery from './compoments/pages/Gallery'
import Products from './compoments/pages/Products'
import Services from './compoments/pages/Services'
import { Route, Routes } from 'react-router-dom'
function SiteRoutes() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/meetourteam" element={<MeetOurTeam/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/services" element={<Services/>}/>
  </Routes>
  )
}

export default SiteRoutes