import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
//import Register from "./Components/Register";
//import Home from "./Components/Home";
import Logout from "./Components/Logout";
import AboutUs from "./Components/AboutUs";
import Service from "./Components/Service";
import Regist from "./Components/Regist";
import Lo from "./Components/Lo";
//import Footer from "./Components/Footer";
import Dashboard from "./Components/MainDashboard/Dashboard"
import Home from "./Components/HomeComponent/Home";
//import Dashboard from "./Components/Dashboard";
import AdminLogin from "./Components/AdminComponent/AdminLogin/AdminLogin";
import StudentLogin from "./Components/StudentComponent/StudentLogin/StudentLogin"
import StudentSignup from "./Components/StudentComponent/StudentSignup/StudentSignup"
import StudentDashboard from "./Components/StudentComponent/StudentDashboard/StudentDashboard";
function App() {
  return (
    <BrowserRouter>
      {/* <div className="App">
        <h1>Online Examination System</h1>
      </div> */}

      <Navbar />

      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
         <Route path="/" element={<Dashboard />}></Route>
         <Route path="/dashboard" element={<Dashboard />}></Route>
        {/* <Route path="/register" element={<Register />}></Route>  */}
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/regist" element={<Regist />}></Route>
        <Route path="/lo" element={<Lo />}></Route>
         <Route path="/home" element={<Home/>}></Route> 
         <Route path="/AdminLogin" element={<AdminLogin/>}></Route>
        <Route path="/StudentLogin" element={<StudentLogin/>}></Route> 
        <Route path="/StudentSignup" element={<StudentSignup/>}></Route> 
        <Route path="/StudentDashboard" element={<StudentDashboard/>}></Route> 

       
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
