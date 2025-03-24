import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './registration.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const navigate = useNavigate();

  return (
    <div className='signup-container'>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={async (values, { resetForm }) => {
          setLoading(true);
          setErrorMessage('');
          try {
            const response = await axios.post("https://rrn24.techchantier.site/Medi-finder/public/api/auth/login",
             values,
            {headers:{
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }});
            console.log("Login successful");
            const data = response.data
            
            localStorage.getItem(data.token)
            navigate('/pharmacy');
          } catch (err) {
            console.error("Login error:", err);
            setErrorMessage('Login failed. Please check your credentials.');
          } finally {
            setLoading(false);
            resetForm();
          }
        }}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <Form className='signup-form' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <Field id='email' type="text" placeholder='example@gmail.com' name='email' />
              <ErrorMessage name="email" component="div" className='error' />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id='password' placeholder='1tHis97semo.' name='password' />
              <ErrorMessage name="password" component="div" className='error' />
            </div>

            {errorMessage && <div className='error'>{errorMessage}</div>}
            
            <button type='submit' disabled={!isValid || !dirty || loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <div>Or register <Link to='/signup'>here</Link></div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;