import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserAuth, } from '../contexts/UserContext'
import{ useCartContext } from '../contexts/CartContext'
import '../styles/logout.css'

function Logout() {
    const { setIsLoggedIn } = useUserAuth();
    const { ClearCart } = useCartContext();
    let navigate = useNavigate();
    const HandleLogout = () => {
        setIsLoggedIn(false);
        ClearCart();
        alert('you have logged out,redirecting to login page');

        setTimeout(() => {

            navigate('/login');
        },2000)
      
    }


  return (
    <div id='logout-page'>
        <h1>Logout page</h1>



        <button id="logout-button" onClick={HandleLogout}>Logout</button>
        
        
        
   </div>
  )
}

export default Logout