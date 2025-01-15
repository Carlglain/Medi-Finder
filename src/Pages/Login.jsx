import React from 'react'
import {Link} from 'react-router-dom'
import './registration.css'
function Login() {
  return (
    <div className='signup-container'>
      <form className='signup-form' >
        <label htmlFor="l1">Email</label>
        <input type="text" placeholder='example@gmail.com' name='email'/>
        <label htmlFor="l2">Password</label>
        <input type="text" id='l2' placeholder='@tHis97semo.' name='password'/>
        <button>Login</button>
        <div>Or register <Link to='/signup'>here</Link></div>
      </form>
    </div>
  )
}

export default Login
