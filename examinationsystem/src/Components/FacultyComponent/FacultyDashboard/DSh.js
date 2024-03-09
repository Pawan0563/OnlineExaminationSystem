import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../Images/logos.png";
//import p1 from "../../../Images/1.png";
import "./DSh.css";
//import Card from "./Card";

function DSh() {
  const navigate = useNavigate();
  function goToFacultyLogin() {
    navigate("/FacultyLogin");
  }

  return (
    <div>
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
              <Link class="nav-link " to="/FacultyDashboards">
                <h4>Dashboard</h4>
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
                <h4>Logout</h4>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>


{/* Card Components */}

      <div className="cardcontainer">
        <div class="card c1">
          <img
            src="https://media.istockphoto.com/id/1398462038/photo/online-exam-or-test.webp?b=1&s=170667a&w=0&k=20&c=rPmfkbaVJ5zY_WcFe5TV9LfLGaamTIW6F-YGrC1jzmc="
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card">
          <img
            src="https://media.istockphoto.com/id/1398462038/photo/online-exam-or-test.webp?b=1&s=170667a&w=0&k=20&c=rPmfkbaVJ5zY_WcFe5TV9LfLGaamTIW6F-YGrC1jzmc="
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card">
          <img
            src="https://media.istockphoto.com/id/1398462038/photo/online-exam-or-test.webp?b=1&s=170667a&w=0&k=20&c=rPmfkbaVJ5zY_WcFe5TV9LfLGaamTIW6F-YGrC1jzmc="
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card">
          <img
            src="https://media.istockphoto.com/id/1398462038/photo/online-exam-or-test.webp?b=1&s=170667a&w=0&k=20&c=rPmfkbaVJ5zY_WcFe5TV9LfLGaamTIW6F-YGrC1jzmc="
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card">
          <img
            src="https://media.istockphoto.com/id/1398462038/photo/online-exam-or-test.webp?b=1&s=170667a&w=0&k=20&c=rPmfkbaVJ5zY_WcFe5TV9LfLGaamTIW6F-YGrC1jzmc="
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/home" class="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DSh;
