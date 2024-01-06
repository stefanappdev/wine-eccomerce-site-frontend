import react from "react";
import {Outlet, Link } from "react-router-dom";
import { useUserAuth } from "../contexts/UserContext";
import "../styles/nav.css"


const Navbar = ()=>{
   let{IsLoggedIn,UserData}=useUserAuth();
    
    return(
        <nav id="profile-navbar">

        <Link to={"/"}>  
            home
        </Link>    

        <Link to="/about">  
           about Us
        </Link>  


        <Link to="/products">  
          products
        </Link>  

        
        <Link to={IsLoggedIn?`/users/${UserData._id}/home`:"/login"}>  
           profile
        </Link >  



        <Link id="shopping-cart-link" to={IsLoggedIn?`/users/${UserData._id}/checkout`:"/login"} >
         <img id="shopping-cart-icon" src="./images/shopping-cart.png" alt="checkout"/>    
        </Link>
        <div id="trolley-counter">0</div>

            
         <Link to="/login">
            <button >login</button>
         </Link>

    

       
        <Outlet/>

        </nav>
    )
}


export default Navbar