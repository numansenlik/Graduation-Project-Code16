import { Navigate } from "react-router-dom"

function PrivateRoutes({user,children}) {
  if (!user?.id) {
    return(<Navigate to="/login" replace/>)
  }
  return children

}

export default PrivateRoutes