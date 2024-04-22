// FacultyLogin.js

import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import baseUrl from '../../baseUrl';
import style from './FacultyLogin.module.css';

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
      const response = await axios.post(`${baseUrl}/facultylogin`, credentials);
      if (response.data) {
        alert('Login Successful');
        navigate('/Facultydsh');
      } else {
        alert('Login Failed: Incorrect email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login');
    }
  };

  return (
    <div className={style.containers}>
      <MDBContainer fluid>
        <MDBRow className='justify-content-center align-items-center h-100'>
          <MDBCol sm='12' md='6'>
            <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem' }}>
              <MDBCardBody className='p-5'>
                <h2 className='fw-bold mb-4 text-center'>Faculty Sign in</h2>
                <p className='text-center text-muted mb-4'>Please enter your login and password!</p>
                <MDBInput
                  wrapperClass='mb-4'
                  id='email'
                  name='email'
                  type='email'
                  value={credentials.email}
                  onChange={handleInput}
                  label='Email'
                  size='lg'
                />
                <MDBInput
                  wrapperClass='mb-4'
                  id='password'
                  name='password'
                  type='password'
                  value={credentials.password}
                  onChange={handleInput}
                  label='Password'
                  size='lg'
                />
                <div className='d-grid gap-2'>
                  <MDBBtn onClick={login} size='lg'>
                    Login
                  </MDBBtn>
                 
                  <MDBBtn color='danger' size='lg'>
                    Sign in with Google
                  </MDBBtn>
                </div>
                <NavLink exact to='/FacultySignup'>
                    <MDBBtn color='warning' size='lg'>
                      Register Here
                    </MDBBtn>
                  </NavLink>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default FacultyLogin;
