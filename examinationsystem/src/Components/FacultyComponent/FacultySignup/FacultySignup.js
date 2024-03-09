import React, { useState } from 'react';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
}
from 'mdb-react-ui-kit';
import baseUrl from '../../baseUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FacultySignup() {

  // const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [password, setPassword] = useState("");
  const [cnfpassword, setcnfPassword] = useState("");
  const navigate=useNavigate();


  
  async function save(event) {
   //const navigate=useNavigate();
navigate("/FacultyLogin")
    
    try {
      await axios.post(`${baseUrl}/facultysignup`, {
        name: name,
        username:username,
        email: email,
        mobile: mobile,
        password:password,
        cnfpassword:cnfpassword

      });
      alert("User Registation Successfully");
     
      setName("");
      setUsername("");
      setEmail("");
      setMobile("");
      setPassword(""); 
      setcnfPassword(""); 
    } catch (err) {
      alert("User Registation Failed");
    }
  }
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-3' style={{borderRadius: '85px', }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Faculty Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput 
                label='Your Name' 
                id='form1'
                 type='text'
               required
                 value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
              </div>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput 
                label='Your Username' 
                id='form7'
                 type='text'
               required
                 value={username}
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                  />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput 
                label='Your Email'
                 id='form2'
                  type='email'
                  required
                  value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  
                  />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput 
                label='Mobile No' 
                id='form3' 
                type='mobile'
                required
                value={mobile}
                    onChange={(event) => {
                      setMobile(event.target.value);
                    }}
                
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput
                 label='Password'  
                  id='form4'
                  required
                  value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  type='password'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput  
                label='Repeat your password' 
                id='form5' 
                 type='password' 
                 required
                 value={cnfpassword}
                    onChange={(event) => {
                      setcnfPassword(event.target.value);
                    }}
                 
                 />
              </div>


              <MDBBtn className='mb-4' size='lg' onClick={save}>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default FacultySignup;