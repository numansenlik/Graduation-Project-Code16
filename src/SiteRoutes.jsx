import Home from './compoments/pages/Home'
import MeetOurTeam from './compoments/pages/MeetOurTeam'
import Contact from './compoments/pages/contact/Contact'
import Gallery from './compoments/pages/Gallery'
import Products from './compoments/pages/Products'
import Services from './compoments/pages/Services'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './compoments/user/UserLogin'
import Fav from './compoments/pages/Fav'
import PrivateRoutes from './compoments/PrivateRoutes'
function SiteRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meetourteam" element={<MeetOurTeam />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/fav" element={<PrivateRoutes ><Fav /></PrivateRoutes>} />
    </Routes>
  )
}

export default SiteRoutes