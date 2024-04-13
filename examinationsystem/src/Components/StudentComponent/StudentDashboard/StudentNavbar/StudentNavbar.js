import React from "react";
//import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "./StudentNavbar.css";
import logo from "../../../../Images/logos.png"
function StudentNavbar() {
 // const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

 function logout() {
  sessionStorage.clear();
 
}


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
            <li class="nav-item active  mr-5 ">
              <Link class="nav-link " to="/StudentDsh">
                <h4>Dashboard</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>

            <li class="nav-item active mr-5 ">
              <Link class="nav-link" to="/StudentDsh/Subject">
                <h4>Subject</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item active mr-5 ">
              <Link class="nav-link" to="/StudentDsh/Subject">
                <h4>Registration</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>

            <li class="nav-item active mr-5 ">
              <Link class="nav-link" to="/StudentDsh/Result">
                <h4> Result</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            
            <li class="nav-item active mr-5 ">
              <Link class="nav-link" to="/StudentLogin">
                <h4 onClick={logout}>Logout</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
         
        </div>
         
      </nav>
    </div>
  );
}

export default StudentNavbar;


