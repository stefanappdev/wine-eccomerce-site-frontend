import React from 'react'
import { useUserAuth } from '../contexts/UserContext'
import "../styles/about.css"
function AboutPage() {
    let {WhoIsLoggedIn,IsLoggedIn} = useUserAuth()

  return (
    <div className='about'> 
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
         Sit amet justo donec enim diam. </p>


    </div>
  )
}

export default AboutPage