import Home from './components/pages/Home'
import MeetOurTeam from './components/pages/MeetOurTeam'
import Contact from './components/pages/contact/Contact'
import Gallery from './components/pages/Gallery'
import Products from './components/pages/Products'
import Services from './components/pages/Services'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './components/user/UserLogin'
import Fav from './components/pages/Fav'
import PrivateRoutes from './components/PrivateRoutes'
function SiteRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meetourteam" element={<MeetOurTeam />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/fav" element={<PrivateRoutes ><Fav /></PrivateRoutes>} />
    </Routes>
  )
}

export default SiteRoutes