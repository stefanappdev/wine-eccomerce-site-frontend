import React from "react";
import { useUserAuth } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import '../styles/home.css'
import '../styles/dropdown.css'

const Home = () => {
    let {IsLoggedIn,WhoIsLoggedIn} = useUserAuth();
        return (<div id="startup-page">
            



            <div id="main-content">

                    <h1 id="site-title">
                    <em>Welcome to In HighSpirits🍷</em>
                    </h1>

                    <h5>{IsLoggedIn?`logged in as ${WhoIsLoggedIn}`:"not logged in"}</h5>

                    

               <img src="./images/logo.jpg" id="logo" alt="logo"/>
                <p><em>supplying your alcohol needs to keep you in High Spirits</em></p>



               



                <br/>
               {!IsLoggedIn? <strong> <p id="greeting-msg"> 
                
                <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to get started  
                
                </p> </strong>:""}
                



            </div>
        
        
  
  


               
               
                  
               
        
        </div>)
        
        }


export default Home