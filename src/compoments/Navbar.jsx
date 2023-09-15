import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { NavLink } from 'react-router-dom'
import Themeicon from './Themeicon'

function Navbar() {
  const { user, handleLogout } = useContext(UserContext)
  return (
    <header>

      <nav className="navbar navbar-expand-lg bg-body-tertiary   ">
        <div className="container ">
          <NavLink className="navbar-brand " to="/">
            <div className="logoClass">
              <img src="https://i.hizliresim.com/4ijkm23.png" alt="logo" />
            </div>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className='navbar-nav' data-bs-auto-close="true">
              <li className='nav-item'><NavLink className="nav-link" to="/"><span>Home</span></NavLink></li>
              <li className='nav-item'><NavLink className="nav-link" to="/meetourteam"><span>Meet Our Team</span></NavLink></li>
              <li className='nav-item'><NavLink className="nav-link" to="/services"><span>Services</span></NavLink></li>
              <li className='nav-item'><NavLink className="nav-link" to="/products"><span>Products</span></NavLink></li>
              <li className='nav-item'><NavLink className="nav-link" to="/gallery"><span>Gallery</span></NavLink></li>
              <li className='nav-item'><NavLink className="nav-link" to="/contact"><span>Contact</span></NavLink></li>
              {user && <li className='nav-item'><NavLink className="nav-link" to="/fav" ><span>Favorites</span></NavLink></li>}
              {
                user ? <>
                  <li className='nav-item'><button className="nav-link" onClick={handleLogout}><span>LogOut</span></button></li>

                </>
                  :
                  <li className='nav-item'><NavLink className="nav-link" to="/login"><span>Login</span></NavLink></li>
              }

              <li className='nav-item'><NavLink className='nav-link' to="#"><Themeicon /></NavLink></li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Navbar