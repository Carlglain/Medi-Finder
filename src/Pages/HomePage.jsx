import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
     <h1>Welcome to medifinder </h1>
      <p>Find hospitals and pharmacies around you easily</p> 
      <p>For Personalized experience Login</p>
      <Link to='/login'>Login </Link>
    </div>
  )
}

export default HomePage
