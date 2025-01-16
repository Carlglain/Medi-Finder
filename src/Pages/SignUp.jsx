import React from 'react'
import "./registration.css"
// import MediLogo from '../Components/MediLogo'
import { Link } from 'react-router-dom'
import { Field, Formik, Form} from 'formik'
import * as Yup from 'yup'
function SignUp() {

  
  return (
    <div className='signup-container'>
    
      <form className='signup-form'>
        <label htmlFor="l1">First Name</label>
        <input id='l1' type="text" placeholder='john' name='FName'/>
        <label htmlFor="l2">Last Name</label>
        <input id='l2' type="text" placeholder='doe' name='LName'/>
        <br />
        <label htmlFor="l3">Phone Number</label>
        <input id='l3' type="number" name='phone' placeholder='670483932'/>
        <br />
        <label htmlFor="l4">Email Address</label>
        <input id='l4' type="text" placeholder='example@gmail.com' />
        <br />
        <label htmlFor="l5">Location/Address</label>
        <input id='l5' type="text" placeholder='molyko' />
        <button>Sign Up</button>
        <p>Already have an Account?</p>
        <Link to='/login'>Login</Link>
      </form>
    </div>
  )
}

export default SignUp
