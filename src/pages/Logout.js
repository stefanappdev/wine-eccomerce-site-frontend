import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserAuth, } from '../contexts/UserContext'
import{ useCartContext } from '../contexts/CartContext'

function Logout() {
    const { setIsLoggedIn } = useUserAuth();
    const { ClearCart } = useCartContext();
    let navigate = useNavigate();
    const HandleLogout = () => {
        setIsLoggedIn(false);
        ClearCart();
        navigate('/login');
    }


  return (
    <div className='App-page'>
        <h1>Logout page</h1>



        <button onClick={HandleLogout}>Logout</button>
        
        
        
   </div>
  )
}

export default Logout