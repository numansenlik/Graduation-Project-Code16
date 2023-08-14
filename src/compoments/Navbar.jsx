import React from 'react'
import { NavLink } from 'react-router-dom'
import Themeicon from './Themeicon'

function Navbar() {
  return (
    <header>
    <div className="navbar">
        <div className="logoClass col-3"> 
            <img src="./src/images/logo.png" alt="logo" />
        </div>
        <div className="navs ">
             <ul>
                <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                <li><NavLink className="nav-link" to="/meetourteam">Meet Our Team</NavLink></li>
                <li><NavLink className="nav-link" to="/services">Services</NavLink></li>
                <li><NavLink className="nav-link" to="/products">Products</NavLink></li>
                <li><NavLink className="nav-link" to="/gallery">Gallery</NavLink></li>
                <li><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                <li><NavLink className='nav-link' to="#"><Themeicon/></NavLink></li>
             </ul>
        </div>
    </div>
    </header>
  )
}

export default Navbar