// // import style from "./FacultyDashboard.module.css";
import style from "./FacultyDashboard.module.css";

import { Route, Routes, useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";

//import pic4 from "../../../images/logo.png";
import pic4 from "../../../Images/logo.png";

// import Dashboard from "./Dashboard/Dashboard";
// import Subject from "./SubjectComponent/Subject";

// import Exam from "./ExamComponent/Exam";
// import Question from "./QuestionComponent/Question";
// import Result from "./ResultComponent/Result";
// import StudentList from "./StudentList/StudentList";
// import Student from "./StudentList/Student/Student";

// import Details from "./ExamComponent/DetailComponent/Details";
// import ViewQuestion from "./ExamComponent/ViewQuestion/ViewQuestion";
// import AddQuestion from "./ExamComponent/AddQuestion/AddQuestion";

function FacultyDashboard() {
  // let history = useHistory();
  const nevigate = useNavigate();

  function goToAdminLogin() {
    nevigate("/FacultyLogin");
  }

  return (
    <>
      <div id={style.header}>
        <div id={style.headerHeadingBox}>
          <h3>Online Exam System</h3>
        </div>

        <div id={style.headerMenuBox}>
          <NavLink to="/FacultyDashboard">
            {" "}
            <span> Dashboard</span>{" "}
          </NavLink>
          <a>
            {" "}
            <span onClick={goToAdminLogin}> Logout</span>
          </a>
        </div>
      </div>

      <div id={style.content}>
        <div id={style.sideMenubar}>
          <div id={style.sideMenubarImageBox}>
            <img src={pic4} alt="" />
          </div>

          <div id={style.sideMenubarList}>
            <NavLink
              className={style.removeUnderline}
              to="/FacultyDashboard/Subject"
            >
              {" "}
              <button>
                {" "}
                <span> Subject </span>
              </button>
            </NavLink>
            <NavLink
              className={style.removeUnderline}
              to="/FacultyDashboard/Exam"
            >
              {" "}
              <button>
                {" "}
                <span> Exam </span>
              </button>
            </NavLink>
            <NavLink
              className={style.removeUnderline}
              to="/FacultyDashboard/Question"
            >
              {" "}
              <button>
                {" "}
                <span> Question </span>
              </button>
            </NavLink>
            <NavLink
              className={style.removeUnderline}
              to="/FacultyDashboard/Result"
            >
              {" "}
              <button>
                {" "}
                <span> Result </span>
              </button>
            </NavLink>
            <NavLink
              className={style.removeUnderline}
              to="/FacultyDashboard/StudentList"
            >
              {" "}
              <button>
                {" "}
                <span> StudentList </span>
              </button>
            </NavLink>
          </div>
        </div>

        <div id={style.display}>
          {/* <Routes>
            
        

          </Routes> */}
        </div>
      </div>
    </>
  );
}

export default FacultyDashboard;
