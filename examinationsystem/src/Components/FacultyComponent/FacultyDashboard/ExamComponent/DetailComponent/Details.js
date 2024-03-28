// Details.js

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import baseUrl from "../../../../baseUrl";
import "./Details.css";

function Details() {
  const { id } = useParams();

  const [exam, setExam] = useState({
    name: "",
    desc: "",
    level: "",
    passMarks: "",
    totalQuestion: "",
    marks: "",
    date: ""
  });

  useEffect(() => {
    async function getExamDetails() {
      const value = await axios.get(`${baseUrl}/exam/${id}`);
      setExam(value.data);
    }
    getExamDetails();
  }, [id]);

  const navigate = useNavigate();

  function handleGoBack() {
    navigate("/Facultydashboard/Exam");
  }

  return (
    <>
      <div className="displayHeadingBox11">
        <h2>Exam Details</h2>
      </div>

      <div className="tableBox11">
        <table>
          <tbody>
            <tr>
              <th>Exam Name</th>
              <td>{exam.name.name}</td>
            </tr>
            <tr>
              <th>Exam Description</th>
              <td>{exam.desc}</td>
            </tr>
            <tr>
              <th>Exam Creation Date</th>
              <td>{exam.date}</td>
            </tr>
            <tr>
              <th>Exam Total Marks</th>
              <td>{exam.marks}</td>
            </tr>
            <tr>
              <th>Exam Total Question</th>
              <td>{exam.totalQuestion}</td>
            </tr>
            <tr>
              <th>Exam Pass Marks</th>
              <td>{exam.passMarks}</td>
            </tr>
            <tr>
              <th>Exam Level</th>
              <td>{exam.level}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="addSubjectBox11">
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </>
  );
}

export default Details;
