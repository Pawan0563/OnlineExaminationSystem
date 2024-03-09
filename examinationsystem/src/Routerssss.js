import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";

//import Register from "./Components/Register";
//import Home from "./Components/Home";
import Logout from "./Components/Logout";
import AboutUs from "./Components/AboutUs";
import Service from "./Components/Service";
import Regist from "./Components/Regist";
import Lo from "./Components/Lo";
//import Footer from "./Components/Footer";
import Dashboard from "./Components/MainDashboard/MainDashboard";
import Home from "./Components/HomeComponent/Home";
//import Dashboard from "./Components/Dashboard";
// import FacultyLogin from "./Components/FacultyComponent/FacultyLogin";
import FacultyLogin from "./Components/FacultyComponent/FacultyLogin/FacultyLogin";
import StudentLogin from "./Components/StudentComponent/StudentLogin/StudentLogin";
import StudentSignup from "./Components/StudentComponent/StudentSignup/StudentSignup";
import StudentDashboard from "./Components/StudentComponent/StudentDashboard/StudentDashboard";
import FacultyDashboard from "./Components/FacultyComponent/FacultyDashboard/FacultyDashboard";
import Exam from "./Components/FacultyComponent/FacultyDashboard/ExamComponent/Exam";
import Question from "./Components/FacultyComponent/FacultyDashboard/QuestionComponent/Question";
import Student from "./Components/FacultyComponent/FacultyDashboard/StudentList/Student/Student";

import AddQuestion from"./Components/FacultyComponent/FacultyDashboard/ExamComponent/AddQuestion/AddQuestion";
import Details from"./Components/FacultyComponent/FacultyDashboard/ExamComponent/DetailComponent/Details";
import ViewQuestion from"./Components/FacultyComponent/FacultyDashboard/ResultComponent/Result";
import Subject from"./Components/FacultyComponent/FacultyDashboard/SubjectComponent/Subject";
import Result from"./Components/FacultyComponent/FacultyDashboard/ResultComponent/Result";
import StudentList from"./Components/FacultyComponent/FacultyDashboard/StudentList/StudentList";



function Routerssss() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/login" element={<Login />}></Route>

          <Route exact path="/" element={<Dashboard />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          {/* <Route path="/register" element={<Register />}></Route>  */}
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/regist" element={<Regist />}></Route>
          <Route path="/lo" element={<Lo />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/FacultyLogin" element={<FacultyLogin />}></Route>

          <Route path="/StudentLogin" element={<StudentLogin />}></Route>
          <Route path="/StudentSignup" element={<StudentSignup />}></Route>
          <Route
            path="/StudentDashboard"
            element={<StudentDashboard />}
          ></Route>
          <Route
            path="/FacultyDashboard"
            element={<FacultyDashboard />}
          ></Route>
          {/* <Route path="/FacultyDashboard/Exam" element={<FExam />}></Route> */}
          {/* <Route
            path="/FacultyDashboard/Question"
            element={<FQuestion />}
          ></Route>
          <Route
            path="/FacultyDashboard/StudentList"
            element={<FUser />}
          ></Route> */}
          {/* <Route path="/Dashboard" component={<Dashboard />}></Route> */}

          <Route
            path="/FacultyDashboard/Subject"
            component={<Subject />}
          ></Route>
          <Route path="/FacultyDashboard/Exam" component={<Exam />}></Route>
          <Route
            path="/FacultyDashboard/Question"
            component={<Question />}
          ></Route>
          <Route path="/FacultyDashboard/Result" component={<Result />}></Route>
          <Route
            path="/FacultyDashboard/StudentList"
            component={<StudentList />}
          ></Route>

          <Route
            path="/FacultyDashboard/Exam/Details/:id"
            component={<Details />}
          ></Route>
          <Route
            path="/FacultyDashboard/Exam/ViewQuestion/:id"
            component={<ViewQuestion />}
          ></Route>
          <Route
            path="/FacultyDashboard/Exam/AddQuestion/:id"
            component={<AddQuestion />}
          ></Route>

          <Route
            path="/FacultyDashboard/StudentList/Details/:id"
            component={<Student />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routerssss;
