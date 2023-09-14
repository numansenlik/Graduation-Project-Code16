import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const handleLogin = () => {
    const user = { id: 1, name: "lorem" }
    setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
    navigate('/')
  }
  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)

  }
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") ?? null))
  }, [])

  return <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
    {children}
  </UserContext.Provider>
}

export { UserContext, UserContextProvider }