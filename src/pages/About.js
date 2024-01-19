import React from 'react'
import "../styles/about.css"

function About() {
  return (
    <div id="about-page">
        
        
        <h1 id="about-header"> About Us </h1>

        <img src="./images/serving-wine.jpg" id="serving-wine" alt="wine being served at a table"/>


        <br/>

        <div id="about-history" class="about-page-section">

        <h2 id="about-history">Our History</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, 

       </div>

       

       <div id="about-mission" class="about-page-section">

        <h2 id="about-mission">Our Mission</h2>
       Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       </div>




       <div id="founders" class="about-page-section">


       <h2>Our Founders</h2>
       <img src="./images/founder2.jpg" alt="charles Ford"/>
       <br/>
       <strong className='founder-name'>Lei Loi</strong>
       
       <em class="role">ceo/founder</em>
       <img src="./images/founder1.jpg" alt="Lei Loi"/>
       <br/>
       <strong className='founder-name'>Charles Ford</strong>
       <em class="role">ceo/founder</em>
       </div>


       <div id="socials" class="about-page-section">
       <img src="./images/facebook.webp" alt="facebook"/>
       <img src="./images/tiktok.webp" alt="tiktok"/>
       <img src="./images/insta.jpg" alt="instagram"/>
       </div>







    </div>
  )
}

export default About