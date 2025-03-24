import React, { useState } from 'react';
import './registration.css';
import { Link, useNavigate } from 'react-router-dom';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    password_confirmation: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
    whatsapp_number: Yup.string() // Changed to string to accommodate various formats
      .required('Phone Number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    user_type: Yup.string()
      .required('User type is required')
      .oneOf(['finder','medical_facility'],"Invalid Option"),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className='signup-container'>
      <Formik
        initialValues={{
          name: '',
          password:"",
          password_confirmation:"",
          whatsapp_number: '',
          email: '',
          user_type: '',
        }}
        validationSchema={validationSchema}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={ async(values) => {
          console.log(values)
          setIsLoading(true);
          setErrorMessage('');
          if(values.password!== values.password_confirmation){
            setErrorMessage('Passwords do not match');
            setIsLoading(false);
            return;
          }
          try {
            const response =await  axios.post("http://rrn24.techchantier.site/Medi-finder/public/api/auth/register", 
              values,
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                }
              }
            );
            const data = response.data
            localStorage.setItem(data.token);
            console.log("this is the token: " + data.token)
            // Handle successful response here
            console.log(response);
            navigate("/pharmacy"); // Redirect after successful sign-up
            resetForm(); // Reset form only on success
        
          } catch (error) {
            if (error.response) {
              console.log(error.response.data);  // Log the full response for debugging
              setErrorMessage(error.response.data.message || 'Sign-up failed. Please try again.');
            } else if (error.request) {
              setErrorMessage('No response from server. Please try again later.');
            } else {
              setErrorMessage('Request setup error. Please try again.');
            }
          }
           finally {
            setIsLoading(false);
          }
        }}
           
      >
        {({ handleSubmit, isValid, dirty,handleChange }) => (
          <Form className='signup-form' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <Field id='name' type="text" placeholder='John' name='name' />
              <ErrorMessage name='name' component="div" className='error' />
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <Field id='email' type="email" placeholder='example@gmail.com' name='email' />
              <ErrorMessage name='email' component="div" className='error' />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field id='password' type="password" name='password' />
              <ErrorMessage name='password' component="div" className='error' />
            </div>
            <div>
              <label htmlFor="password_confirmation">Confirm Password</label>
              <Field id='password_confirmation' type="password" name='password_confirmation' />
              <ErrorMessage name='password_confirmation' component="div" className='error' />
            </div>
            <div>
              <Field as="select" id='user_type' name='user_type' className="select">
              <option value="">Select user type </option>
              <option value="finder">finder</option>
              <option value="medical_facility">medical_facility</option>
              </Field>
              <ErrorMessage name='user_type' component="div" className='error' />
            </div>
            <div>
              <label htmlFor="whatsapp_number">WhatsApp Number</label>
              <Field id='whatsapp_number' type="text" name='whatsapp_number' placeholder='670483932' />
              <ErrorMessage name='whatsapp_number' component="div" className='error' />
            </div>

            {errorMessage && <div className='error'>{errorMessage}</div>}
            <button type='submit' disabled={!isValid || !dirty || isLoading}>
              {isLoading ? 'Signing up...' : 'Sign Up'}
            </button>
            <p>Already have an Account?</p>
            <Link to='/login'>Login</Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;