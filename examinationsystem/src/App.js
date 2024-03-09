import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import "./App.css";
 import Login from "./Components/Login";
 //import Navbar from "./Components/Navbar";
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
import FacultyDashboards from "./Components/FacultyComponent/FacultyDashboard/Dashboard/Dashboard";
import Exam from "./Components/FacultyComponent/FacultyDashboard/ExamComponent/Exam";
import Result from "./Components/FacultyComponent/FacultyDashboard/ResultComponent/Result";
import StudentList from "./Components/FacultyComponent/FacultyDashboard/StudentList/StudentList";
import Details from "./Components/FacultyComponent/FacultyDashboard/ExamComponent/DetailComponent/Details";
import ViewQuestion from "./Components/FacultyComponent/FacultyDashboard/ExamComponent/ViewQuestion/ViewQuestion";
import AddQuestion from "./Components/FacultyComponent/FacultyDashboard/ExamComponent/AddQuestion/AddQuestion";
import Student from "./Components/FacultyComponent/FacultyDashboard/StudentList/Student/Student";
import Subject from "./Components/StudentComponent/StudentDashboard/Subject/Subject";
import Question from "./Components/FacultyComponent/FacultyDashboard/QuestionComponent/Question";
import FacultySignup from "./Components/FacultyComponent/FacultySignup/FacultySignup";
import DSh from "./Components/FacultyComponent/FacultyDashboard/DSh";


function App() {
  return (
    <BrowserRouter>
      {/* <div className="App">
        <h1>Online Examination System</h1>
      </div> */}

      {/* <Navbar /> */}

      <Routes>
         <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Dashboard />}></Route>
        {/* <Route path="/" element={<Dashboard />}></Route> */}
         {/* <Route path="/register" element={<Register />}></Route>   */}
       <Route path="/logout" element={<Logout />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/regist" element={<Regist />}></Route>
        <Route path="/lo" element={<Lo />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/FacultyLogin" element={<FacultyLogin />}></Route>
        <Route path="/FacultySignup" element={<FacultySignup />}></Route>

        <Route path="/StudentLogin" element={<StudentLogin />}></Route>
        <Route path="/StudentSignup" element={<StudentSignup />}></Route>
        <Route path="/StudentDashboard" element={<StudentDashboard />}></Route>
        <Route path="/FacultyDashboard" element={<FacultyDashboard />}></Route> 
        <Route path="/dsh" element={<DSh/>}></Route>


        <Route path="/FacultyDashboards" element={<FacultyDashboards />}></Route>

        <Route exact  path="/FacultyDashboard/Subject" element={<Subject />}></Route>
        <Route  exact path="/FacultyDashboard/Exam" element={<Exam />}></Route>
        <Route  exact path="/FacultyDashboard/Question" element={<Question />}></Route>
        
       
        <Route exact path="/FacultyDashboard/Result" element={<Result />}></Route>
        <Route exact
          path="/FacultyDashboard/StudentList"
          element={<StudentList />}
        ></Route> 

         <Route
          path="/FacultyDashboard/Exam/Details/:id"
          component={<Details />}
        ></Route>
        <Route exact
          path="/FacultyDashboard/Exam/ViewQuestion/:id"
          element={<ViewQuestion />}
        ></Route>
        <Route exact
          path="/FacultyDashboard/Exam/AddQuestion/:id"
          element={<AddQuestion />}
        ></Route> 

         <Route exact
          path="/FacultyDashboard/StudentList/Details/:id"
          element={<Student />}
        ></Route>  


 <Route exact
          path="/FacultyDashboard/Question"
          element={<Question />}
        ></Route> 
      </Routes>
      {/* <Footer />  */}
     
    </BrowserRouter>
  );
}

export default App;
