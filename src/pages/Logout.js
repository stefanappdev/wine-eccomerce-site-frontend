import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserAuth, } from '../contexts/UserContext'

function Logout() {
    const { setIsLoggedIn } = useUserAuth();
    let navigate = useNavigate();
    const HandleLogout = () => {
        setIsLoggedIn(false);
        navigate('/login');
    }


  return (
    <div>
        <h1>Logout page</h1>



        <button onClick={HandleLogout}>Logout</button>
        
        
        
   </div>
  )
}

export default Logout