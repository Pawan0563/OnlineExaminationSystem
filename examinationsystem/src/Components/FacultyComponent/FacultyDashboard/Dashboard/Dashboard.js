// Dashboard.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./Dashboard.module.css"; // Import the CSS module

import baseUrl from "../../../baseUrl";

function Dashboard() {
  const [exam, setExam] = useState("Updating...");
  const [question, setQuestion] = useState("Updating...");
  const [user, setUser] = useState("Updating...");

  useEffect(() => {
    async function getAllExam() {
      let value = await axios.get(`${baseUrl}/exam`);
      setExam("We have Total " + value.data.length + " exam");
    }
    getAllExam();

    async function getAllQuestions() {
      let value = await axios.get(`${baseUrl}/question`);
      setQuestion("We have Total " + value.data.length + " question");
    }
    getAllQuestions();

    async function getAllUsers() {
      let value = await axios.get(`${baseUrl}/users/`);
      setUser("We have Total " + value.data.length + " user");
    }
    getAllUsers();
  }, []);

  const navigate = useNavigate();

  function showExam() {
    navigate("/FacultyDashboard/Exam");
  }

  function showQuestions() {
    navigate("/FacultyDashboard/Question");
  }

  function showUsers() {
    navigate("/FacultyDashboard/StudentList");
  }

  return (
    <div className={style.dashboardContainer}>
      <div className={style.overlay}>
        <div className={style.displayHeadingBox}>
          <div className={style.box1}>
            <p className={style.countOfExam}>{exam}</p>
            <button  className={style.button} onClick={showExam}>View Details</button>
          </div>

          <div className={style.box2}>
            <p className={style.countOfQuestion}>{question}</p>
            <button className={style.button} onClick={showQuestions}>View Details</button>
          </div>

          <div className={style.box3}>
            <p className={style.countOfUser}>{user}</p>
            <button className={style.button} onClick={showUsers}>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
