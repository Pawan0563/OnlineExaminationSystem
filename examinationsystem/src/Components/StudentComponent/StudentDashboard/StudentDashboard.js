import {
  NavLink,
  
  Route,
  BrowserRouter,
//   useHistory,
  Routes,
//   Navigate,
  useNavigate,
} from "react-router-dom";

import { useEffect } from "react";

import style from "./StudentDashboard.module.css";

import Subject from "./Subject/Subject";

// import Result from "./Resultelement/Result";
// import Exam from "./Examelement/Exam";
// import Test from "./Testelement/Test";

function StudentDashboard() {
  useEffect(() => {
    if (sessionStorage.getItem("user") == null) {
      alert("Detect Illegal Way of Entering");
    //   history.push("/StudentLogin");
    navigate("/StudentLogin");
    }
  });

//   let history = useHistory();
const navigate=useNavigate();
  function logout() {
    sessionStorage.clear();
    // history.push("/StudentLogin");
    navigate("/StudentLogin");
  }

  return (
    <>
      {/* <BrowserRouter> */}
        <div id={style.header}>
          {/* <div id={style.headerHeadingBox}>
            <h3>Online Exam System</h3>
          </div> */}

          <div id={style.headerMenuBox}>
            <NavLink exact to="/StudentDashboard">
              {" "}
              <span>Subject</span>{" "}
            </NavLink>
            <NavLink exact to="/StudentDashboard/Result">
              {" "}
              <span>My Result</span>
            </NavLink>
            <NavLink onClick={logout} exact to="/StudentLogin">
              {" "}
              <span>Logout</span>{" "}
            </NavLink>
          </div>
        </div>

        <div id={style.displayBox}>
          {/* <Switch> */}
          <Routes>
            <Route path="/StudentDashboard" element={<Subject />}></Route>
            {/* <Route path="/StudentDashboard/Result" element={<Result />}></Route>

            <Route
              path="/StudentDashboard/Exam/:category"
              element={<Exam />}
            ></Route>

            <Route
              path="/StudentDashboard/Exam/:category/:id"
              element={<Test />}
            ></Route> */}
            {/* </Switch> */}
          </Routes>
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default StudentDashboard;
