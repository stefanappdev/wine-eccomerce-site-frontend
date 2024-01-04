import React from 'react'
import { useUserAuth } from '../contexts/UserContext'

function AboutPage() {
    let {WhoIsLoggedIn,IsLoggedIn} = useUserAuth()

  return (
    <div> {IsLoggedIn && WhoIsLoggedIn?`logged in as ${WhoIsLoggedIn}`:"not logged in"}</div>
  )
}

export default AboutPage