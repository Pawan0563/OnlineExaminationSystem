import React from "react";
//import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Images/logos.png"
function Navbar() {
 // const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light  ">
        <Link class="navbar-brand" to="/">
          <img  className ="logo" src={logo} alt="logo" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav  ">
            <li class="nav-item active  mr-5 ">
              <Link class="nav-link " to="/">
                <h4>Home</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>

            <li class="nav-item active mr-5 ">
              <Link class="nav-link" to="/service">
                <h4>Service</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>

            <li class="nav-item active mr-5 ">
              <Link class="nav-link" to="/developer">
                <h4>Developer</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item active mr-5 ">
              <Link class="nav-link" to="/about">
                <h4> About Us</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item active mr-5 ">
              <Link class="nav-link" to="/contact">
                <h4>Contect Us</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item active mr-5 ">
              <Link class="nav-link" to="/shome">
                <h4>Sign In</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
         
        </div>
         
      </nav>
    </div>
  );
}

export default Navbar;




// <form class="form-inline my-2 my-lg-0">
// {/* <ul class="nav-item">
//   <Link class="nav-link" to="/lo">
//    <b>Login</b> 
//   </Link>
// </ul>
// <ul class="nav-item">
//   <Link class="nav-link" to="/regist">
//     Register
//   </Link>
// </ul>  */}

// {isAuthenticated && (
//   <ul class="nav-item">
//     <div>
//       {/* <img src={user.picture} alt={user.name} /> */}
//       <h2>{user.name}</h2>
//       <p>{user.email}</p>
//     </div>
//   </ul>
// )}

// <ul>
//   {isAuthenticated ? (
//     <ul>
//       <button
//         class="btn btn-outline-danger my-2 my-sm-0 nav-item"
//         onClick={() =>
//           logout({
//             logoutParams: { returnTo: window.location.origin },
//           })
//         }
//       >
//         Log Out
//       </button>
//     </ul>
//   ) : (
//     <ul>
//       <button onClick={() => loginWithRedirect()}>Log In</button>
//     </ul>
//   )}
// </ul>
// </form>