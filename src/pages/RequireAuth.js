import { Navigate, useLocation } from 'react-router-dom'
import { useUserAuth } from '../contexts/UserContext'

const RequireAuth = ({ children }) => {
  const location = useLocation()
  const auth = useUserAuth()
  if (!auth.IsLoggedIn) {
    return <Navigate to='/login' state={{ path: location.pathname }} />
  }
  return children
}

export default RequireAuth