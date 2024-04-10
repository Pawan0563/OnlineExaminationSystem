import React, { useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "../../../baseUrl";
import "./Question.css";
// import FacultyNavbar from "../FacultyNavbar/FacultyNavbar";

function Question() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getAllQuestions() {
      try {
        const value = await axios.get(`${baseUrl}/question`);
        setQuestions(value.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    }
    getAllQuestions();
  }, []);

  return (
    <>
    {/* <FacultyNavbar/> */}
      <div className="questionListHeading">
        <h2>Question List</h2>
      </div>

      <div className="questionTable">
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="center">Question Name</th>
              <th className="center">Option one</th>
              <th className="center">Option two</th>
              <th className="center">Option three</th>
              <th className="center">Option Four</th>
              <th className="center">Question Answer</th>
              <th className="center">Subject Name</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((data, i) => (
              <tr key={i}>
                <td>{data.qname}</td>
                <td>{data.optionOne}</td>
                <td>{data.optionTwo}</td>
                <td>{data.optionThree}</td>
                <td>{data.optionFour}</td>
                <td>{data.answer}</td>
                <td>{data.sname ? data.sname.name : "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Question;
