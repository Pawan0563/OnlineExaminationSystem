// Subject.js

import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import baseUrl from "../../../baseUrl";
import styles from "./Subject.module.css"; // Import CSS module

function Subject() {
  const [allSubject, setAllSubject] = useState([]);

  useEffect(() => {
    async function getAllSubject() {
      let value = await axios.get(`${baseUrl}/subject`);
      setAllSubject(value.data);
    }
    getAllSubject();
  }, []);

  return (
    <>
      <div className={styles.displayBoxHeadingBox}>
        <h1>Choose Subjects</h1>
      </div>
      <div className={styles.subjectContainer}>
            {allSubject.map((data, i) => (
                <div className={styles.subjectCard} key={i}>
                    <div className={styles.subjectName}>{data.name}</div>
                    <NavLink exact to={`/StudentDashboard/Exam/${data.name}`}>
                        <button className={styles.goToExamButton}>Go to Exam</button>
                    </NavLink>
                </div>
            ))}
        </div>
    </>
  );
}

export default Subject;
