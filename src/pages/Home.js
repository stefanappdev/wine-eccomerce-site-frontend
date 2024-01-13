import React from "react";
import { useUserAuth } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import '../styles/home.css'


const Home = () => {
    let {IsLoggedIn,WhoIsLoggedIn} = useUserAuth();
        return (<div id="startup-page">
            



            <div id="main-content">

                    <h1 id="site-title">
                    <em>HighSpirits</em>
                    </h1>

                    {!IsLoggedIn?
                    
                 <p  id="greeting-msg">Not logged in,  
                
                    <Link to="/login">  <strong> Login</strong></Link> or <Link to="/signup"><strong>Signup</strong></Link> to get started  
                
                    </p> :""}

                    

               <img src="./images/logo.jpg" id="logo" alt="logo"/>
                <p><em>supplying your alcohol needs to keep you in High Spirits</em></p>



               



                
                
                



            </div>
        
        
  
  


               
               
                  
               
        
        </div>)
        
        }


export default Home