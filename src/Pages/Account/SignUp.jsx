import React from 'react'
import "./registration.css"
// import MediLogo from '../Components/MediLogo'
import { Link } from 'react-router-dom'
import { Field, Formik, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
function SignUp() {
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  password: Yup.string()
  .min(6,"Password must be at least 6 characters")
  .required("Password is required"),
  whatsapp_number: Yup.number().required('Phone Number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  user_type: Yup.string().required('User type is required and should be either pharmacy or patient'),
})

  return (
    <div className='signup-container'>
    <Formik 
    initialValues={
      {
        name: '',
        password: '',
        whatsapp_number: '',
        email: '',
        user_type: '',
      }
    }
    validationSchema={validationSchema}
    validateOnChange={true}
    validateOnBlur={true}
    onSubmit={(values, {resetForm}) => {
      // form logic here
      console.log(values)
      resetForm()
    }}
    >
    {({handleSubmit,isValid,dirty}) =>(
            <Form className='signup-form' onSubmit={handleSubmit}>
              <div>
              <label htmlFor="l1">Name</label>
              <Field id='l1' type="text" placeholder='john' name='name'/>
              <ErrorMessage name='name' component="div" className='error' />
              </div>
              <div>
                <label htmlFor="l4">Email Address</label>
                <Field id='l4' type="email" placeholder='example@gmail.com' name='email'/>
                <ErrorMessage name='email' component="div" className='error' />
              </div>
              <div>
                <label htmlFor="l5">Password</label>
                <Field id='l5' type="password"  name='password'/>
                <ErrorMessage name='password' component="div" className='error' />
              </div>
              {/* if the user is a pharmacy it should log them to a different interface */}
              <div>
                <label htmlFor="l5">User Type</label>
                <Field id='l5' type="text" placeholder='pharmacy/patient' name='user_type'/>
                <ErrorMessage name='user_type' component="div" className='error' />
              </div>
              <div>
                <label htmlFor="l3">WhatsApp Number</label>
                <Field id='l3' type="text" name='whatsapp_number' placeholder='670483932'/>
                <ErrorMessage name='whatsapp_number' component="div" className='error' />
              </div>
              
              
              <button type='submit' disabled={isValid} >SignUp</button>
              <p>Already have an Account?</p>
              <Link to='/login'>Login</Link> 
            </Form>
            )}
    </Formik>
    </div> 
  )
}

export default SignUp
