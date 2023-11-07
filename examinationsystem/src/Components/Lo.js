import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

function Lo() {
  // const navigate=useNavigate();
  // const abc=(e)=>{
  //   e.preventDefault()
  //   navigate('/')
  // }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/login", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message == "Email not exits") {
              alert("Email not exits");
            } else if (res.data.message == "Login Success") {
              navigate("/home");
            } else {
              alert("Incorrect Email and Password not match");
            }
          },
          (fail) => {
            console.error(fail); // Error!
          }
        );
    } catch (err) {
      alert(err);
    }
  }


  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: "185px" }}
                alt="logo"
              />
              <h4 className="mt-1 mb-5 pb-1">We are Dabbang Chhora Team</h4>
            </div>

            <p>Please login to your account</p>

            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="form1"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form2"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2"  onClick={login}>Sign in</MDBBtn>
              <a className="text-muted" href="#!">
                Forgot password?
              </a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn outline className="mx-2" color="success" >
                Register Here
              </MDBBtn>
            </div>
          </div>
        </MDBCol>

        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4" >Online Examination System </h4>
              <p class="small mb-0">
              Online Examination arrangement is a multiple choice questions and subjective questions based examination framework. It gives a simple way to utilize the environment for both test-conductors and understudies showing up for examination. Online Examination System is a web application that sets up a system between the establishments and understudies. Establishments enter on the site the inquiries they need in the exam. These inquiries are shown as a test to the qualified              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Lo;
