import { Navigate } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function PrivateRoutes({children}) {
  const {user} = useContext( UserContext )
  if (!user?.id) {
    return(<Navigate to="/login" replace/>)
  }
  return children

}

export default PrivateRoutes