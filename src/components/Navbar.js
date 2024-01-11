import react from "react";
import {Outlet, Link } from "react-router-dom";
import { useUserAuth } from "../contexts/UserContext";
import { useCartContext } from "../contexts/CartContext";
import "../styles/nav.css"
import "../styles/dropdown.css"


const Navbar = ()=>{
   let{IsLoggedIn,UserData}=useUserAuth();
   let {Cart}=useCartContext();
   
    
    return(
      <div id="app-navbar">
         <div id="dropdown-menu">
                    <img src="./images/hamburger-menu.svg" alt="dropdown menu"/>
                        <div id="dropdown-content">
                            
                         <Link className="app-navlink" to="/about">  
                           <p >About Us</p>
                        </Link> 
                        
                        <Link className="app-navlink" to={IsLoggedIn?`/users/${UserData._id}/home`:"/"}>  
                        <p >{IsLoggedIn?"profile":"Home"}</p>
                        </Link>    


                        <Link className="app-navlink" to="/products">  
                           <p > Products</p>
                        </Link> 

                        
                        </div>
                </div>

        
        
          

      {!IsLoggedIn?<Link className="app-navlink" to="/login">
               <p >Login</p>
            </Link>:""}

            {!IsLoggedIn?<Link className="app-navlink" to="/signup">
                   <p>Signup</p>
            </Link>:<Link className="app-navlink" to="">
               <p >Logout</p>
            </Link>}
                           

        <Link id="shopping-cart-link" className="app-navlink" to={IsLoggedIn?`/users/${UserData._id}/checkout`:"/login"} >
         <img id="shopping-cart-icon" src="./images/shopping-cart.png" alt="checkout"/>    
        </Link>
        
        <div id="trolley-counter" >{Cart.length}</div>

            
       
        <Outlet/>

        </div>
    )
}


export default Navbar