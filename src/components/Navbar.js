import react from "react";
import {Outlet, Link } from "react-router-dom";
import { useUserAuth } from "../contexts/UserContext";
import { useCartContext } from "../contexts/CartContext";
import "../styles/nav.css"
import "../styles/dropdown.css"
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = ()=>{
         let{IsLoggedIn,UserData,WhoIsLoggedIn}=useUserAuth();
         let {Cart}=useCartContext();
   
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };
      
        return (
          <div id="app-navbar">
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
             <img id="menu-icon" src="./images/hamburger-menu.svg" alt="dropdown menu"/>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >

         <Link className="app-navlink" to="/">  
                 
                    
              <MenuItem onClick={handleClose}>
               
                <p>Home</p>
              
              </MenuItem>
            </Link> 


           

          <Link className="app-navlink" to="/products">  
              <MenuItem onClick={handleClose}>
              
                     <p> Products</p>
                
               </MenuItem>  
               </Link> 

            <Link className="app-navlink" to="/about">   
              <MenuItem onClick={handleClose}>     
                     <p >About Us</p>
                 
               </MenuItem>
            </Link> 



            

            </Menu>



            
           {IsLoggedIn&&<h2 id="username"> Hi {WhoIsLoggedIn}</h2>}

            <Link className="app-navlink" id="navbar-logo" to="/">
                  <h1>HighSpirits🥂</h1>
            </Link>



            <Link className="app-navlink"  to={IsLoggedIn?`/users/${UserData._id}/checkout`:"/login"}>  
                   <img id="shopping-cart-icon" src="./images/shopping-cart.png" alt="shopping cart"/>
                  </Link>
            
            <div id="cart-counter">{Cart.length}</div>


            {IsLoggedIn?  
                 
                    
                 <Button className="logout-login-btn">
                  <Link className="app-navlink" to="/logout">
                   <p>Logout</p>
                  </Link>
                 </Button>

              :

                 <Button className="logout-login-btn">
                  <Link className="app-navlink"  to="/login">  
                   <p>Login</p>
                  </Link>
                 </Button>
              }


            


          </div>
        );
      }
      
    


export default Navbar