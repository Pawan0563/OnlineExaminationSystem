import axios from "axios";
import React, { useState, useEffect } from "react";
import style from "./Result.module.css"; // Import the module CSS file
import baseUrl from "../../../baseUrl";

function Result() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchResults() {
      try {
        const response = await axios.get(`${baseUrl}/result`); // Adjust the endpoint URL accordingly
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    }

    fetchResults();
  }, []);

  return (
    <div className={style.container}> {/* Add the container class */}
      <h2>Results</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Score</th>
            <th>Exam Date</th>
            <th>Total Marks</th>
            <th>Total Questions</th>
            <th>Subject Name</th>
            <th>User Email</th>
            <th>Exam ID</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id}>
              <td>{result.id}</td>
              <td>{result.status}</td>
              <td>{result.score}</td>
              <td>{result.edate}</td>
              <td>{result.totalMarks}</td>
              <td>{result.totalQuestion}</td>
              <td>{result.sname ? result.sname.name : ""}</td> {/* Conditional rendering for subject name */}
              <td>{result.email ? result.email.email : ""}</td> {/* Conditional rendering for user email */}
              <td>{result.examId ? result.examId.id : ""}</td> {/* Conditional rendering for exam ID */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Result;
