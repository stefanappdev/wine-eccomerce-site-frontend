import React from "react";
import { useUserAuth } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import '../styles/home.css'


const Home = () => {
    let {IsLoggedIn,WhoIsLoggedIn} = useUserAuth();
        return (<div id="startup-page">
            <nav id="navbar">
                <div id="dropdown-menu">
                    <img src="./images/hamburger-menu.svg" alt="dropdown menu"/>
                        <div id="dropdown-content">
                            <Link to="/products">
                                
                                <p>see all products </p>   
                            </Link>
                            <Link to="/products/wines">
                                
                                <p>Wines </p>   
                            </Link>

                            <Link to="/products/beers">
                                
                                <p>Beers </p>   
                            </Link>
                         
                            
                        </div>
                </div>

               

         
            </nav>



            <div id="main-content">

                    <h1 id="site-title">
                    <em>Welcome to In HighSpirits🍷</em>
                    </h1>

                    <h5>{IsLoggedIn?`logged in as ${WhoIsLoggedIn}`:"not logged in"}</h5>

                    

               <img src="./images/logo.jpg" id="logo" alt="logo"/>
                <p><em>supplying your alcohol needs to keep you in High Spirits</em></p>



               



                <br/>
               {!IsLoggedIn? <strong> <p id="greeting-msg"> 
                
                <a href="/login">Login</a> or <a href="/signup">Signup</a> to get started  
                
                </p> </strong>:""}
                



            </div>
        
        
  
  


               
               
                  
               
        
        </div>)
        
        }


export default Home