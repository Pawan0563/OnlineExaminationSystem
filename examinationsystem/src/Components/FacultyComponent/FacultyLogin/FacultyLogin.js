
 
//   import style from "./FacultyLogin.module.css";

 //import {NavLink} from "react-router-dom";

  import { useState } from "react";   
   import baseUrl from "../../baseUrl";  
  import axios from "axios";
 import { NavLink, useNavigate } from "react-router-dom";

   import {usenavigate} from "react-router-dom";


// //      function FacultyLogin(){



// //          const[admin , setAdmin] = useState({
// //              admin_name:"",
// //              admin_password:""
// //          });

// //         function handleInput(e){
// //               setAdmin({
// //                   ...admin,
// //                   [e.target.name] : e.target.value
// //               },[]);
// //         }
// //          //let history = useHistory();
// //         const navigate = useNavigate()

  
// //          async function login(e){
// //              const value = await axios.get(`${baseUrl}/admin/${admin.admin_name}`); 

// //              console.log(value.data[0].admin_name);
// //              console.log(admin.admin_name);
// //              if(value.data[0].admin_name === admin.admin_name)
// //              {
// //                 if(value.data[0].admin_password === admin.admin_password){
// //                     alert("success");
// //                     navigate.push("/FacultyDashboard");
// //                 }
// //                 else{
// //                     alert("Wrong Password");
// //                 }
// //              }
// //              else{
// //                  alert("Wrong Admin name");
// //              }
// //          }


// //          return (
// //             <div id={style.container}>

            
// //             <div id={style.containerHeadingBox}>
// //                 <h1>Faculty Login</h1>
// //             </div>


// //             <div id={style.emailBox}>
// //                 <label htmlFor="email"> Email
// //                     <input name="admin_name" onChange={(e) => handleInput(e)} type="text" id={style.email} />
// //                 </label>
// //             </div>


// //             <div id={style.passwordBox}>
// //                 <label htmlFor="password"> Password
// //                     <input name="admin_password" onChange={(e) => handleInput(e)} type="password" id={style.password} />
// //                 </label>
// //             </div>

// //             <button onClick={(e) => login(e)}    id={style.login}>Login</button>
             

// //             <NavLink to="/" id={style.goBackLink}> Go Back</NavLink> 


// //             </div>
// //          );
// //      }

// //      export default FacultyLogin;




 
// import style from "./FacultyLogin.module.css";

// import { useNavigate,NavLink} from "react-router-dom";

// import { useState } from "react";

// import axios from "axios";

// // import {useHistory} from "react-router-dom";

// import baseUrl from "../../baseUrl";


//    function FacultyLogin(){



//        const[admin , setAdmin] = useState({
//            admin_name:"",
//            admin_password:""
//        });

//       function handleInput(e){
//             setAdmin({
//                 ...admin,
//                 [e.target.name] : e.target.value
//             },[]);
//       }
//     //  let history = useHistory();
//     const navigate=useNavigate();

//        async function login(e){
//            const value = await axios.get(`${baseUrl}/faculty/${admin.admin_name}`); 

//         //    console.log(value.data[0].admin_name);
//         //    console.log(admin.admin_name);
//         //  console.log(value.data);

//            if(value.data.name === admin.admin_name)
//            {
//               if(value.data.password === admin.admin_password){
//                   alert("success");
//                   navigate("/FacultyDashboard");
//               }
//               else{
//                   alert("Wrong Password");
//               }
//            }
//            else{
//                alert("Wrong Admin name");
//            }
//        }


//        return (
//           <div id={style.container}>

          
//           <div id={style.containerHeadingBox}>
//               <h1>Faculty Login</h1>
//           </div>


//           <div id={style.emailBox}>
//               <label htmlFor="email"> Email
//                   <input name="admin_name" onChange={(e) => handleInput(e)} type="text" id={style.email} />
//               </label>
//           </div>


//           <div id={style.passwordBox}>
//               <label htmlFor="password"> Password
//                   <input name="admin_password" onChange={(e) => handleInput(e)} type="password" id={style.password} />
//               </label>
//           </div>

//           <button onClick={(e) => login(e)}    id={style.login}>Login</button>
           

//           <NavLink to="/" id={style.goBackLink}> Go Back</NavLink> 


//           </div>
//        );
//    }

//    export default FacultyLogin;




import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function FacultyLogin() {

    const[admin , setAdmin] = useState({
                   admin_name:"",
                   admin_password:""
               });
        
              function handleInput(e){
                    setAdmin({
                        ...admin,
                        [e.target.name] : e.target.value
                    },[]);
              }
            //  let history = useHistory();
            const navigate=useNavigate();
         async function login(e){
             const value = await axios.get(`${baseUrl}/admin/${admin.admin_name}`); 

             console.log(value.data[0].admin_name);
             console.log(admin.admin_name);
             if(value.data[0].admin_name === admin.admin_name)
             {
                if(value.data[0].admin_password === admin.admin_password){
                    alert("success");
                    navigate.push("/FacultyDashboard");
                }
                else{
                    alert("Wrong Password");
                }
             }
             else{
                 alert("Wrong Admin name");
             }
         }




  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100'
              
                id='formControlLg'
                type='email' size="lg"
                />
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

              <MDBBtn size='lg'  onClick={(e) => login(e)}    id={login}>
                Login
              </MDBBtn>
             

              <hr className="my-4" />

              <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#de9b39'}}>
                <NavLink fab icon="google" className="mx-2"/>
                <NavLink exact to="/FacultySignup"> Register Here</NavLink> 
               
              </MDBBtn>
              <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
                <MDBIcon fab icon="google" className="mx-2"/>
                Sign in with google
              </MDBBtn>

              <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
                <MDBIcon fab icon="facebook-f" className="mx-2"/>
                Sign in with facebook
              </MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default FacultyLogin;
   