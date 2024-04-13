// import React, { useState } from "react";
// import axios from "axios";
// import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from "mdb-react-ui-kit";
// import { NavLink } from "react-router-dom";
// import baseUrl from "../../baseUrl";

// function FacultySignup() {
//   const [fname, setfName] = useState("");
//   const [lname, setlName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState(""); // Added mobile state
//   const [password, setPassword] = useState("");

//   async function save(event) {
//     event.preventDefault();

//     try {
//       await axios.post(`${baseUrl}/facultysignup`, {
//         firstName: fname,
//         lastName: lname,
//         email: email,
//         mobile: mobile, // Include mobile in the request payload
//         password: password
//       });
//       alert("User Registration Successfully");
//       setfName("");
//       setlName("");
//       setEmail("");
//       setMobile(""); // Reset mobile state
//       setPassword("");
//     } catch (err) {
//       alert("User Registration Failed");
//     }
//   }

//   return (
//     <MDBContainer fluid className="p-4 background-radial-gradient overflow-hidden">
//       <MDBRow>
//         <MDBCol md="6" className="text-center text-md-start d-flex flex-column justify-content-center">
//           <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: "red" }}>
//             Online Examination System <br />
//             <span style={{ color: "hsl(218, 81%, 75%)" }}>
//               {/* for your business */}
//             </span>
//           </h1>
//           <p className="px-3" style={{ color: "dark" }}>
//             Online Examination System is a web-based examination system where examinations are given online. Either through the internet or internet using computer system. The main goal of this online examination system is to effectively evaluate the student thoroughly through a totally automated system that not only reduce the required time but also obtain fast and accurate results. The main objective of our software is to efficiently evaluate the candidate thoroughly through a fully automated system there is no need of paper and pen. The user can write exam without going to exam center. Also website will provide good.
//           </p>
//         </MDBCol>

//         <MDBCol md="6" className="position-relative">
//           <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
//           <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

//           <MDBCard className="my-5 bg-glass">
//             <MDBCardBody className="p-5">
//               <h1 className="text-center">Faculty Registration Form</h1>

//               <MDBRow>
//                 <MDBCol col="6">
//                   <MDBInput
//                     wrapperClass="mb-4"
//                     label="First name"
//                     required
//                     value={fname}
//                     onChange={(event) => {
//                       setfName(event.target.value);
//                     }}
//                     id="form1"
//                     type="text"
//                   />
//                 </MDBCol>

//                 <MDBCol col="6">
//                   <MDBInput
//                     wrapperClass="mb-4"
//                     label="Last name"
//                     required
//                     value={lname}
//                     onChange={(event) => {
//                       setlName(event.target.value);
//                     }}
//                     id="form2"
//                     type="text"
//                   />
//                 </MDBCol>
//               </MDBRow>

//               <MDBInput
//                 wrapperClass="mb-4"
//                 label="Email"
//                 value={email}
//                 required
//                 onChange={(event) => {
//                   setEmail(event.target.value);
//                 }}
//                 id="form3"
//                 type="email"
//               />

//               <MDBInput
//                 wrapperClass="mb-4"
//                 label="Mobile"
//                 value={mobile}
//                 required
//                 onChange={(event) => {
//                   setMobile(event.target.value);
//                 }}
//                 id="form4"
//                 type="tel" // Changed type to 'tel' for mobile input
//               />

//               <MDBInput
//                 wrapperClass="mb-4"
//                 label="Password"
//                 value={password}
//                 required
//                 onChange={(event) => {
//                   setPassword(event.target.value);
//                 }}
//                 id="form5"
//                 type="password"
//               />

//               <MDBBtn className="w-100 mb-4" size="md" onClick={save}>
//                 Sign up
//               </MDBBtn>
//               <NavLink exact to="/FacultyLogin">
//                 <MDBBtn outline color="success">Login Here</MDBBtn>
//               </NavLink>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

// export default FacultySignup;

// FacultySignup.js

import React, { useState } from "react";
import axios from "axios";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import baseUrl from "../../baseUrl";
import style from './FacultySignup.module.css';

function FacultySignup() {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(""); // Added mobile state
  const [password, setPassword] = useState("");

  async function save(event) {
    event.preventDefault();

    try {
      await axios.post(`${baseUrl}/facultysignup`, {
        firstName: fname,
        lastName: lname,
        email: email,
        mobile: mobile, // Include mobile in the request payload
        password: password
      });
      alert("User Registration Successfully");
      setfName("");
      setlName("");
      setEmail("");
      setMobile(""); // Reset mobile state
      setPassword("");
    } catch (err) {
      alert("User Registration Failed");
    }
  }

  return (
    <div className={style.container}>
      <MDBContainer fluid>
        <MDBRow className='justify-content-center align-items-center h-100'>
          <MDBCol md="6" className="text-center text-md-start d-flex flex-column justify-content-center">
            <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: "red" }}>
              Online Examination System <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                {/* for your business */}
              </span>
            </h1>
            <p className="px-3" style={{ color: "dark" }}>
              Online Examination System is a web-based examination system where examinations are given online. Either through the internet or internet using computer system. The main goal of this online examination system is to effectively evaluate the student thoroughly through a totally automated system that not only reduce the required time but also obtain fast and accurate results. The main objective of our software is to efficiently evaluate the candidate thoroughly through a fully automated system there is no need of paper and pen. The user can write exam without going to exam center. Also website will provide good.
            </p>
          </MDBCol>

          <MDBCol md="6" className="position-relative">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <MDBCard className="my-5 bg-glass">
              <MDBCardBody className="p-5">
                <h1 className="text-center">Faculty Registration Form</h1>

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
                  label="Mobile"
                  value={mobile}
                  required
                  onChange={(event) => {
                    setMobile(event.target.value);
                  }}
                  id="form4"
                  type="tel" // Changed type to 'tel' for mobile input
                />

                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  value={password}
                  required
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  id="form5"
                  type="password"
                />

                <MDBBtn className="w-100 mb-4" size="md" onClick={save}>
                  Sign up
                </MDBBtn>
                <NavLink exact to="/FacultyLogin">
                  <MDBBtn outline color="success">Login Here</MDBBtn>
                </NavLink>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default FacultySignup;

