import SiteRoutes from './SiteRoutes'
import Navbar from './compoments/Navbar'
import Footer from './compoments/Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


function App() {
  const [user,setUser] = useState(null)
  const navigate = useNavigate()
  const handleLogin = () =>{
    const user = {id:1 , name : "lorem"}
    setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
    navigate('/')
  }
  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)

  }
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("user") ?? null))
  },[])
  return (
    <>
    <Navbar user = {user} handleLogout={handleLogout} />
    <SiteRoutes handleLogin = {handleLogin} user={user}/>
    <Footer/>
    </>
  )
}

export default App
