import React from 'react'
import "./registration.css"
// import MediLogo from '../Components/MediLogo'
import { Link } from 'react-router-dom'
import { Field, Formik, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
function SignUp() {
const validationSchema = Yup.object({
  FName: Yup.string().required('First Name is required'),
  LName: Yup.string().required('Last Name is required'),
  phone: Yup.number().required('Phone Number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  address: Yup.string().required('Address is required'),
})

  return (
    <div className='signup-container'>
    <Formik 
    initialValues={
      {
        FName: '',
        LName: '',
        phone: '',
        email: '',
        address: '',
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
              <label htmlFor="l1">First Name</label>
              <Field id='l1' type="text" placeholder='john' name='FName'/>
              <ErrorMessage name='FName' component="div" className='error' />
              </div>
              <div>
                <label htmlFor="l2">Last Name</label>
                <Field id='l2' type="text" placeholder='doe' name='LName'/>
                <ErrorMessage name='LName' component="div" className='error' />
              </div>
              <div>
                <label htmlFor="l3">Phone Number</label>
                <Field id='l3' type="number" name='phone' placeholder='670483932'/>
                <ErrorMessage name='phone' component="div" className='error' />
              </div>
              <div>
                <label htmlFor="l4">Email Address</label>
                <Field id='l4' type="email" placeholder='example@gmail.com' name='email'/>
                <ErrorMessage name='email' component="div" className='error' />
              </div>
              <div>
                <label htmlFor="l5">Location/Address</label>
                <Field id='l5' type="text" placeholder='molyko' name='address'/>
                <ErrorMessage name='address' component="div" className='error' />
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
