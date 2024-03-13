import React from "react";
//import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "./AdminNavbar.css";
import logo from "../../../../Images/logos.png"
function AdminNavbar() {
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
              <Link class="nav-link" to="#">
                <h4>ManageFaculties</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>

            <li class="nav-item active mr-5 ">
              <Link class="nav-link" to="#">
                <h4>ManageStudents</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            
            <li class="nav-item active mr-5 ">
              <Link class="nav-link" to="#">
                <h4>Logout</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
         
        </div>
         
      </nav>
    </div>
  );
}

export default AdminNavbar;


