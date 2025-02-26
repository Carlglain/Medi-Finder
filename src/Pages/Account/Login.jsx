import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './registration.css'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
function Login() {
  const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const navigate =useNavigate()
  

  return (
    <div className='signup-container'>
      <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={ async(values, {resetForm}) => {
        try{
        const response = await axios.post( "http://localhost/api/auth/login", values)
        console.log("Login successfull")
          navigate('/pharmacy') 
      }
      catch(err){
        console.log("Error:" + err)
      }
        console.log(values)
        resetForm()
      }}
      >
        {({handleSubmit,isValid,dirty}) =>(
          <Form className='signup-form' onSubmit={handleSubmit}>
            <div>
            <label htmlFor="l1">Email</label>
            <Field id='l1' type="text" placeholder='example@gmail.com' name='email'/>
            <ErrorMessage name="email" component="div"  className='error' />
            </div>

            <div>
            <label htmlFor="l2">Password</label>
            <Field type="password" id='l2' placeholder='1tHis97semo.' name='password'/>
            <ErrorMessage name="password" component="div" className='error' />
            </div>
            
            <button type='submit' disabled={!isValid || !dirty}>Login</button>
            <div>Or register <Link to='/signup'>here</Link></div>

          
          </Form>
          )}
      </Formik>

    </div>
  )
}

export default Login
