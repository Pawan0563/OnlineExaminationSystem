import React from "react";
//import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "./AdminNavbar.css";
import logo from "../../../../Images/logos.png"
function AdminNavbar() {
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

            <li class="nav-item active mr-5 ">
              <Link class="nav-link" to="/AdminDashboard">
                <h4>Dashboard</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item active mr-5 ">
              <Link class="nav-link" to="/ManageFaculty">
                <h4>ManageFaculty</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>

            <li class="nav-item active mr-5 ">
              <Link class="nav-link" to="/ManageStudent">
                <h4>ManageStudents</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            
            <li class="nav-item active mr-5 ">
              <Link class="nav-link" to="/FacultyLogin">
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

export default AdminNavbar;


