import React from 'react'
import './myaccount.css'
import { Link } from 'react-router-dom'
function Myaccount() {
  return (
    <div className='account-container'>
      {/* login
      logout
      userinfo
      favourites
      last visited */}
      {/* if user is logged in */}
      
      <h1>User Profile </h1>
     
      <p><span>Full Name</span> <span> name here</span> </p>
      <p><span>Email</span> <span> email here</span> </p>
      <p><span>Phone</span> <span> Phone number here</span> </p>
      <p><span>Address</span> <span> Address here</span> </p>
      
      {/* if user is not logged in */}
      <div><Link to='/login'>Login to see your info</Link></div> 
  
    </div>
  )
}

export default Myaccount
