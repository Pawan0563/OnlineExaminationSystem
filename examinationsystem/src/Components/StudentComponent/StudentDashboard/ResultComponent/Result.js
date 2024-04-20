import axios from "axios";
import React, { useState, useEffect } from "react";
import style from "./Result.module.css";
import baseUrl from "../../../baseUrl";

function Result() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchResults() {
      try {
        const response = await axios.get(`${baseUrl}/result`); 
        setResults(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    }

    fetchResults();
  }, []);

  return (
    <div className={style.container}> 
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
              <td>{result.sname ? result.sname.name : ""}</td> 
              <td>{result.email ? result.email.email : ""}</td>
              <td>{result.examId ? result.examId.id : ""}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Result;
