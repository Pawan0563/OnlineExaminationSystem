import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../Images/logos.png";
//import p1 from "../../../Images/1.png";
import "./DSh.css";
import Dashboard from "./Dashboard/Dashboard";
//import Card from "./Card";

function DSh() {
  const navigate = useNavigate();
  function goToFacultyLogin() {
    navigate("/FacultyLogin");
  }

  function logout() {
    sessionStorage.clear();
   
  }
  
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light  ">
        <Link class="navbar-brand" to="#">
          <img className="logo" src={logo} alt="logo" />
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

        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav  ">
            <li class="nav-item active  mr-5 ">
              <Link class="nav-link " to="/">
                <h4>Home</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>

            <li class="nav-item active mr-5 ">
              <Link class="nav-link" to="/FacultyDashboard/Subject">
                <h4>Subject</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>

            <li class="nav-item active mr-5 ">
              <Link class="nav-link" to="/FacultyDashboard/Exam">
                <h4>Exam</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item active mr-5 ">
              <Link class="nav-link" to="/FacultyDashboard/Question">
                <h4> Question</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item active mr-5 ">
              <Link class="nav-link" to="/FacultyDashboard/Result">
                <h4>Result</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item active mr-5 ">
              <Link class="nav-link" to="/FacultyDashboard/StudentList">
                <h4>Student List</h4>
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


<Dashboard/>
    
       
       
      </>

      
  
  );
}

export default DSh;
