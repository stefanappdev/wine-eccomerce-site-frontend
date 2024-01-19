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

         <Link className="app-navlink-dropdown" to="/">  
                 
                    
              <MenuItem onClick={handleClose}>
               
                <p>Home</p>
              
              </MenuItem>
            </Link> 


            <Link className="app-navlink-dropdown" to="/about">  
                 
                    
                 <MenuItem onClick={handleClose}>
                  
                   <p>About Us</p>
                 
                 </MenuItem>
               </Link> 
   


            <Link className="app-navlink-dropdown" id="cart-link-dropdown"  to={IsLoggedIn?`/users/${UserData._id}/checkout`:"/login"}>  
                 
              <MenuItem onClick={handleClose}>
    
                  <div id="cart-info-dropdown">
                       
                      
                       <p>Cart</p>
                       
                      <div id="cart-counter">{Cart.length}</div>
                      
                  </div>
             </MenuItem>
              </Link>
            
            


           

          <Link className="app-navlink-dropdown" to="/products">  
              <MenuItem onClick={handleClose}>
              
                     <p> Products</p>
                
               </MenuItem>  
               </Link> 

            {!IsLoggedIn?<Link className="app-navlink-dropdown"  to="/signup">   
              <MenuItem onClick={handleClose}>     
                     <p >Signup</p>
                 
               </MenuItem>
            </Link>:""}


            {!IsLoggedIn?<Link  className="app-navlink-dropdown" id="login-link-dropdown" to="/login">   
              <MenuItem onClick={handleClose}>     
                     <p >Login</p>
                 
               </MenuItem>
            </Link>:
            
            <Link className="app-navlink-dropdown" id="logout-link-dropdown" to="/logout">   
              <MenuItem onClick={handleClose}>     
                     <p >Logout</p>
                 
               </MenuItem>
            </Link>
            
            } 



            

            </Menu>



            
         
            {IsLoggedIn&&<h2 id="nav-username"> Hi {WhoIsLoggedIn}</h2>}
            


              <h1 id="navbar-logo">HighSpirits🥂</h1>

            <Link className="app-navlink-main"  to={IsLoggedIn?`/users/${UserData._id}/checkout`:"/login"}>  

                  <div id="cart-info-desktop">
                        <p>CART</p>
                      <div id="cart-counter">{Cart.length}</div>
                  </div>
            
              </Link>
          

            {IsLoggedIn?  
                 
                    
                 <Button id="logout-link-desktop" className="logout-login-btn">
                  <Link className="app-navlink-main" to="/logout">
                   <p>Logout</p>
                  </Link>
                 </Button>

              :

                 <Button id="login-link-desktop" className="logout-login-btn">
                  <Link className="app-navlink-main"  to="/login">  
                   <p>Login</p>
                  </Link>
                 </Button>
              }


    

      
    
         

      
      
     





            


          </div>
        );
      }
      
    


export default Navbar