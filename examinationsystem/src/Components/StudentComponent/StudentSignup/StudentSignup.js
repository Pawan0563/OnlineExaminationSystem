

//  import { NavLink ,useNavigate } from "react-router-dom";

//  import axios from "axios";
//  import { useState } from "react";


//   import style from "./StudentSignup.module.css";


// function StudentSignup() {

//      const [userData , setUserData] = useState({
//         user_name: "",
//         user_regNo: "",
//         user_email: "",
//         user_mobno: "",
//         user_password: "",
//         user_coniformpassword: ""
        


//      });

//      function onTextFieldChange(e){
//          setUserData({
//              ...userData,
//              [e.target.name] : e.target.value
//          });
//      }


//       const [password , setPassword] = useState("");

//       function handlePassword(e){
//         setPassword( { "confirmPassword":e.target.value});
//     }
    

//     // let history = useHistory();
//     const navigate = useNavigate();

    
//    async function handleSignup(){
//         // console.log(userData);
//         // console.log(password);

//         if(userData.user_password === password.confirmPassword)
//         {
//             await axios.post("http://localhost:3333/user" , userData);
//             alert("Your account has created");
//             alert("Please Login");
//             navigate.push("/StudentLogin");
//         }
//         else alert("password did not match");
//     }



//     return (
//         <div id={style.container}>

//             <div id={style.formHeading}>
//                 <h1>Student Signup</h1>
//                 <p>Please complete the form below to register with us</p>
//             </div>

//             <div id={style.nameBox}>
//                 <label htmlFor="name">Name 
//                     <input onChange={(e) => onTextFieldChange(e)} 
//                     type="text" name="user_name"  required />
//                 </label>
//             </div>


//             <div id={style.emailBox}>
//                 <label htmlFor="email"> Email
//                     <input onChange={(e) => onTextFieldChange(e)}  
//                     type="text" name="user_email" required />
//                 </label>
//             </div>

//             <div id={style.passwordBox}>
//                 <label htmlFor="password"> Password
//                     <input onChange={(e) => onTextFieldChange(e)} 
//                     type="password" name="user_password" required />
//                 </label>
//             </div>


//             <div id={style.confirmPasswordBox}>
//                 <label htmlFor="confirmPassword">Confirm Password
//                     <input  onChange={(e) => handlePassword(e)}
//                      type="password" name="confirmPassword" required />
//                 </label>
//             </div>


//             {/* <button id={style.signup} onclick="signup()">Sign Up</button> */}
//             <button id={style.signup} onClick={handleSignup} >Sign Up</button>


//             <div id={style.login}>
//                 Have a Account?  <NavLink exact to="/StudentLogin"> Log in</NavLink>
//             </div>


//         </div>
//     );
// }

// export default StudentSignup;


import React from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState,useNavigate } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
//import { Navigate } from "react-router-dom";

function StudentSignup() {
 // const [id, setId] = useState("");
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function save(event) {
   //const navigate=useNavigate();
     event.preventDefault();
    
    
    try {
      await axios.post("http://localhost:8080/save", {
        firstName: fname,
        lastName: lname,
        email: email,
        password:password
      });
      alert("User Registation Successfully");
      setfName("");
      setlName("");
      setEmail("");
      setPassword(""); 
    } catch (err) {
      alert("User Registation Failed");
    }

    //navigate("/StudentLogin");

  }

  return (
    <MDBContainer
      fluid
      className="p-4 background-radial-gradient overflow-hidden"
    >
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1
            className="my-5 display-3 fw-bold ls-tight px-3"
            style={{ color: "red" }}
          >
          Online Examination System <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>
              {/* for your business */}
            </span>
          </h1>

          <p className="px-3"  style={{ color: "dark" }}>
          Online Examination System is a web-based examination system where examinations are given online. Either through the internet or internet using computer system. The main goal of this online examination system is to effectively evaluate the student thoroughly through a totally automated system that not only reduce the required time but also obtain fast and accurate results. The main objective of our software is to efficiently evaluate the candidate thoroughly through a fully automated system there is no need of paper and pen. The user can write exam without going to exam center. Also website will provide good.

</p>
        </MDBCol>

        <MDBCol md="6" className="position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>

          <MDBCard className="my-5 bg-glass">
            <MDBCardBody className="p-5">
              <h1 className="text-center ">Registration From</h1>

              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="First name"
                    required
                    value={fname}
                    onChange={(event) => {
                      setfName(event.target.value);
                    }}
                    id="form1"
                    type="text"
                  />
                </MDBCol>

                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Last name"
                    required
                    value={lname}
                    onChange={(event) => {
                      setlName(event.target.value);
                    }}
                    id="form2"
                    type="text"
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                value={email}
                required
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                id="form3"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                value={password}
                required
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                id="form4"
                type="password"
              />

              {/* <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div> */}

              <MDBBtn className="w-100 mb-4" size="md" onClick={save}>
                sign up
              </MDBBtn>
              <MDBBtn outline className="mx-2" color="success" >
                 <NavLink exact to="/StudentLogin"> Login Here</NavLink> 
              </MDBBtn>

              <div className="text-center">
                <p>or sign up with:</p>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "red" }}
                >
                  Facebook
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon='twitter' size="sm"/>
                  Twitter
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon='google' size="sm"/>
                  Google
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon='github' size="sm"/>
                  Github
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default StudentSignup;

