import { useNavigate,useParams } from 'react-router-dom'
import { useUserAuth } from '../contexts/UserContext'

 const Profile = () => {
  const navigate = useNavigate()
  const auth = useUserAuth()
  let Params = useParams();


  const handleLogout = () => {
    auth.setIsLoggedIn(false)
    navigate('/login')
  }
  
  return (
    <div>
      Welcome {auth.WhoIsLoggedIn}<button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile