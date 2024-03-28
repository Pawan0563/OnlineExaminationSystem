// ViewQuestion.js

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../../../baseUrl";
import "./ViewQuestion.css";

function ViewQuestion() {
  const [display, setDisplay] = useState({
    display: "none"
  });

  function handleEditQuestion(questionId) {
    setDisplay({ display: "block" });
    setDataInInputField(questionId);
  }

  function handleClose() {
    setDisplay({ display: "none" });
  }

  const { id } = useParams();

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getAllQuestions() {
      try {
        const response = await axios.get(`${baseUrl}/exam/${id}/question`);
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    }
    getAllQuestions();
  }, [id]);

  const [updatedQ, setUpdatedQ] = useState({
    qname: "",
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
    answer: "",
    ename: id,
    sname: ""
  });

  function onTextFieldChange(e) {
    setUpdatedQ({
      ...updatedQ,
      [e.target.name]: e.target.value
    });
  }

  const [qId, setQId] = useState();

  function setDataInInputField(questionId) {
    setQId(questionId);
    for (let i = 0; i < questions.length; i++) {
      if (parseInt(questions[i].id) === parseInt(questionId)) {
        setUpdatedQ(questions[i]);
      }
    }
  }

  const [check, setCheck] = useState();
  async function updateQuestion() {
    await axios.put(`${baseUrl}/question/${qId}`, updatedQ);
    setCheck(true);
  }

  let navigate = useNavigate();
  function handleGoBack() {
    navigate("/Facultydashboard/Exam");
  }

  const [d, setD] = useState();
  async function deleteQuestion(id) {
    await axios.delete(`${baseUrl}/question/${id}`);
    setD(true);
  }

  if (check) return <ViewQuestion />;

  if (d) return <ViewQuestion />;

  return (
    <>
      <div className="displayHeadingBox23">
        <h2>Question List</h2>
      </div>

      <div className="tableBox23">
        <table>
          <thead>
            <tr>
              <th>Question Name</th>
              <th>Option one</th>
              <th>Option two</th>
              <th>Option three</th>
              <th>Option four</th>
              <th>Question Answer</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.qname}</td>
                  <td>{data.optionOne}</td>
                  <td>{data.optionTwo}</td>
                  <td>{data.optionThree}</td>
                  <td>{data.optionFour}</td>
                  <td>{data.answer}</td>
                  <td>
                    <button onClick={() => handleEditQuestion(data.id)}>
                      Edit
                    </button>
                    <button onClick={() => deleteQuestion(data.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="addSubjectBox23">
        <button onClick={handleGoBack}>Go Back</button>
      </div>

      <div className="addBox23" style={display}>
        <label>Enter Question </label>
        <input
          value={updatedQ.qname}
          onChange={(e) => onTextFieldChange(e)}
          name="qname"
          type="text"
          placeholder="Enter Question "
        />

        {/* Other input fields... */}

        <div className="buttonBox23">
          <button onClick={updateQuestion}>Update Question</button>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </>
  );
}

export default ViewQuestion;
