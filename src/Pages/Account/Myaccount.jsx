import React from 'react'
import './myaccount.css'
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
    </div>
  )
}

export default Myaccount
