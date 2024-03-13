import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import baseUrl from '../../baseUrl';

function FacultyLogin() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const login = async () => {
    try {
      const response = await axios.post(`${baseUrl}/adminlogin`, credentials);
      if (response.data) {
        alert('Login Successful');
        navigate('/AdminDashboard');
      } else {

        alert('Login Failed: Incorrect email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login');
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
              <h2 className='fw-bold mb-2 text-center'>Admin Sign in</h2>
              <p className='text-white-50 mb-3'>Please enter your login and password!</p>
              <MDBInput
                wrapperClass='mb-4 w-100'
                id='email'
                name='email'
                type='email'
                value={credentials.email}
                onChange={handleInput}
                label='Email'
                size='lg'
              />
              <MDBInput
                wrapperClass='mb-4 w-100'
                id='password'
                name='password'
                type='password'
                value={credentials.password}
                onChange={handleInput}
                label='Password'
                size='lg'
              />
              <MDBBtn size='lg' onClick={login}>
                Login
              </MDBBtn>
              <hr className='my-4' />
              
              <MDBBtn className='mb-2 w-100' size='lg' style={{ backgroundColor: '#dd4b39' }}>
                Sign in with Google
              </MDBBtn>
             
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default FacultyLogin;
