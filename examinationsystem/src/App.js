import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";

import Regist from "./Components/Regist";
import AdminLogin from "./Components/AdminComponent/AdminLoginRegister/AdminLogin";
import Lo from "./Components/Lo";
//import Footer from "./Components/Footer";
import Home from "./Components/HomeComponent/home/Home";
import SHome from "./Components/HomeComponent/Home"
//import Dashboard from "./Components/Dashboard";
// import FacultyLogin from "./Components/FacultyComponent/FacultyLogin";
import FacultyLogin from "./Components/FacultyComponent/FacultyLogin/FacultyLogin";
import StudentLogin from "./Components/StudentComponent/StudentLogin/StudentLogin";
import StudentSignup from "./Components/StudentComponent/StudentSignup/StudentSignup";
import StudentDashboard from "./Components/StudentComponent/StudentDashboard/StudentDashboard";
import FacultyDashboard from "./Components/FacultyComponent/FacultyDashboard/FacultyDashboard";
import FacultyDashboards from "./Components/FacultyComponent/FacultyDashboard/Dashboard/Dashboard";
import FExam from "./Components/FacultyComponent/FacultyDashboard/ExamComponent/Exam";
import SExam from "./Components/StudentComponent/StudentDashboard/ExamComponent/SExam";
import Result from "./Components/FacultyComponent/FacultyDashboard/ResultComponent/Result";
import Result1 from "./Components/StudentComponent/StudentDashboard/ResultComponent/Result";
import StudentList from "./Components/FacultyComponent/FacultyDashboard/StudentList/StudentList";
import Details from "./Components/FacultyComponent/FacultyDashboard/ExamComponent/DetailComponent/Details";
import ViewQuestion from "./Components/FacultyComponent/FacultyDashboard/ExamComponent/ViewQuestion/ViewQuestion";
import AddQuestion from "./Components/FacultyComponent/FacultyDashboard/ExamComponent/AddQuestion/AddQuestion";
import Student from "./Components/FacultyComponent/FacultyDashboard/StudentList/Student/Student";
import Subject from "./Components/FacultyComponent/FacultyDashboard/SubjectComponent/Subject";
import Question from "./Components/FacultyComponent/FacultyDashboard/QuestionComponent/Question";
import FacultySignup from "./Components/FacultyComponent/FacultySignup/FacultySignup";
import DSh from "./Components/FacultyComponent/FacultyDashboard/DSh";
import AdminNavbar from "./Components/AdminComponent/AdminDashboard/AdminNavbar/AdminNavbar";
import AdminDashboard from "./Components/AdminComponent/AdminDashboard/AdminDashboard";
import StudentDsh from "./Components/StudentComponent/StudentDashboard/StudentDsh";
import ManageStudent from "./Components/AdminComponent/ManageStudent/ManageStudent";
import ManageFaculty from "./Components/AdminComponent/ManageFaculty/ManageFaculty";
import Subject1 from "./Components/StudentComponent/StudentDashboard/Subject/Subject";
import Test from "./Components/StudentComponent/StudentDashboard/TestComponent/Test";
import Footer from "./Components/HomeComponent/common/footer/Footer";
// import Header from "./Components/HomeComponent/common/header/Header";
import About from "./Components/HomeComponent/about/About";
import Team from "./Components/HomeComponent/team/Team"
import Developer from "./Components/HomeComponent/developer/Developer"
import Contact from "./Components/HomeComponent/contact/Contact"
import CourseCard from "./Components/StudentComponent/StudentDashboard/CourseComponent/CourseCard";
import AddCourse from "./Components/AdminComponent/ManageCourse/addcourse/AddCourse"
import ManageCourse from "./Components/AdminComponent/ManageCourse/ManageCourse"

function App() {
  return (
    <BrowserRouter>
            {/* <Header /> */}
          

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route  path='/shome' element={<SHome/>} />
          <Route  path='/about' element={<About/>} />
          <Route  path='/team' element={<Team/>} />
          <Route  path='/developer' element={<Developer/>} />
          <Route  path='/contact' element={<Contact/>} />
        
        {/* <Route path="/home" element={<Home />}></Route> */}
        <Route path="/login" element={<Login />}></Route>

        <Route path="/regist" element={<Regist />}></Route>
        <Route path="/lo" element={<Lo />}></Route>
        <Route path="/FacultyLogin" element={<FacultyLogin />}></Route>
        <Route path="/FacultySignup" element={<FacultySignup />}></Route>

        <Route path="/StudentLogin" element={<StudentLogin />}></Route>
        <Route path="/StudentSignup" element={<StudentSignup />}></Route>
        <Route path="/StudentDashboard" element={<StudentDashboard />}></Route>
        <Route path="/FacultyDashboard" element={<FacultyDashboard />}></Route>
        <Route path="/Facultydsh" element={<DSh />}></Route>
        <Route path="/AdminLogin" element={<AdminLogin />}></Route>
        <Route path="/AdminNavbar" element={<AdminNavbar />}></Route>
        <Route path="/AdminDashboard" element={<AdminDashboard />}></Route>
        <Route path="/StudentDsh" element={<StudentDsh />}></Route>
        <Route path="/ManageStudent" element={<ManageStudent />} />
        <Route path="/ManageFaculty" element={<ManageFaculty />} />
        <Route path="/AddCourse" element={<AddCourse/>}/>
        <Route path="/ManageCourse" element={<ManageCourse/>}/>

        <Route
          path="/FacultyDashboards"
          element={<FacultyDashboards />}
        ></Route>

        <Route
          exact
          path="/FacultyDashboard/Subject"
          element={<Subject />}
        ></Route>
        <Route exact path="/StudentDsh/Subject" element={<Subject1 />}></Route>
        <Route exact path="/FacultyDashboard/Exam" element={<FExam />}></Route>
        <Route
          exact
          path="/FacultyDashboard/Question"
          element={<Question />}
        ></Route>

        <Route
          exact
          path="/FacultyDashboard/Result"
          element={<Result />}
        ></Route>
        <Route exact path="/StudentDsh/Result" element={<Result1 />}></Route>
        <Route
          exact
          path="/FacultyDashboard/StudentList"
          element={<StudentList />}
        ></Route>

        <Route
          path="/FacultyDashboard/Exam/Details/:id"
          element={<Details />}
        ></Route>
        <Route
          exact
          path="/FacultyDashboard/Exam/ViewQuestion/:id"
          element={<ViewQuestion />}
        ></Route>
        <Route
          exact
          path="/FacultyDashboard/Exam/AddQuestion/:id"
          element={<AddQuestion />}
        ></Route>

        <Route
          exact
          path="/FacultyDashboard/StudentList/Details/:id"
          element={<Student />}
        ></Route>

        <Route
          exact
          path="/FacultyDashboard/Question"
          element={<Question />}
        ></Route>
        <Route
          exact
          path="/Registration"
          element={<CourseCard />}
        ></Route>


<Route exact path="/StudentDashboard/Exam/:category" element={<SExam/>} ></Route>

<Route exact path="/StudentDashboard/Exam/:category/:id" element={<Test/>} ></Route>

       </Routes>
       <Footer />

    </BrowserRouter>
  );
}

export default App;
