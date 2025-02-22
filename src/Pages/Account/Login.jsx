import React from 'react'
import {Link} from 'react-router-dom'
import './registration.css'
function Login() {
  const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

  return (
    <div className='signup-container'>
      <Formik
      initialValues={{ email: '', password: '' }}
      >

      </Formik>
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
