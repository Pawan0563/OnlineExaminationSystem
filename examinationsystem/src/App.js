import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Home from './Components/Home';
import Logout from './Components/Logout'

function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <h1>Online Examination System</h1>
    </div> 
<Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/logout" element={<Logout/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
