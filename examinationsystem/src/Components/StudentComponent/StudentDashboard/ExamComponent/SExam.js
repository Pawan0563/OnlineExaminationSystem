import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import examStyles from "./SExam.module.css";
import baseUrl from "../../../baseUrl";

function SExam() {
  let { category } = useParams();
  const [allExam, setAllExam] = useState([]);

  useEffect(() => {
    async function getAllExams() {
      let value = await axios.get(`${baseUrl}/exam`);
      setAllExam(value.data);
    }
    getAllExams();
  }, []);

  return (
    <>
      <div className={examStyles.heading}>
        <h1>All {category} Exam</h1>
      </div>
      {allExam.map((data, i) => {
        if (data.name.name === category) {
          return (
            <div className={examStyles.examBox} key={i}>
              <div>
                <span>{data.name.name}</span>
              </div>
              <div>
                <span>Exam ID: {data.id}</span>
              </div>
              <div>
                <span>Exam Description: {data.desc}</span>
              </div>
              <div>
                <span>Pass Marks: {data.passMarks}</span>
              </div>
              <div>
                <span>Total Marks: {data.marks}</span>
              </div>
              <div>
                {/* <NavLink exact to={`/StudentDashboard/Exam/Maths/${data.id}`}>
                                    <button>Go to Exam</button>
                                </NavLink> */}
                <NavLink
                  exact
                  to={`/StudentDashboard/Exam/${category}/${data.id}`}
                >
                  <button>Go to Exam</button>
                </NavLink>
              </div>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}

export default SExam;
