import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import testStyles from "./Test.module.css";
import baseUrl from "../../../baseUrl";

function Test() {
    let { id } = useParams();
    let { category } = useParams();
    const [allQuestions, setAllQuestions] = useState([]);
    const [answer, setAnswer] = useState({
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
    });
    let correctAnswer = [];
    function onRadioButtonChange(e) {
        setAnswer({
            ...answer,
            [e.target.name]: e.target.value,
        });
    }
    let count = 0;
    const navigate = useNavigate();
    async function submitTest() {
        for (let i = 0; i < allQuestions.length; i++) {
            correctAnswer.push(allQuestions[i].answer);
        }
        let score = 0;
        let status = "";
        if (correctAnswer[0] === answer.answer1) score++;
        if (correctAnswer[1] === answer.answer2) score++;
        if (correctAnswer[2] === answer.answer3) score++;
        if (correctAnswer[3] === answer.answer4) score++;
        if (correctAnswer[4] === answer.answer5) score++;
        if (score >= 3) status = "Pass";
        else status = "Fail";
        var date = new Date();
        var d = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
        var t = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        let data = {
            status: status,
            score: score,
            email: { email: sessionStorage.getItem("user") },
            edate: d + " " + t,
            sname: { name: category },
            totalMarks: "5",
            examId: { id: id },
            totalQuestion: "5",
        };
        await axios.post(`${baseUrl}/result`, data);
        navigate("/StudentDsh/Result");
    }
    useEffect(() => {
        async function getAllQuestions() {
            let value = await axios.get(`${baseUrl}/exam/${id}/question`);
            setAllQuestions(value.data);
        }
        getAllQuestions();
    }, [id]);
    return (
        <div className={testStyles.testContainer}>
            <div className={testStyles.questionHeadingBox}>
                <h1>Answer all the questions</h1>
            </div>
            {allQuestions.map((data, i) => {
                count++;
                return (
                    <div className={testStyles.questionCard} key={i}>
                        <div>
                            <span>{data.qname}</span>
                        </div>
                        <div>
                            <input
                                onChange={(e) => onRadioButtonChange(e)}
                                value={data.optionOne}
                                id={testStyles.option1}
                                name={"answer" + count}
                                type="radio"
                            />
                            <label htmlFor="option1">{data.optionOne}</label>
                        </div>
                        <div>
                            <input
                                onChange={(e) => onRadioButtonChange(e)}
                                value={data.optionTwo}
                                id={testStyles.option2}
                                name={"answer" + count}
                                type="radio"
                            />
                            <label htmlFor="option2">{data.optionTwo}</label>
                        </div>
                        <div>
                            <input
                                onChange={(e) => onRadioButtonChange(e)}
                                value={data.optionThree}
                                id={testStyles.option3}
                                name={"answer" + count}
                                type="radio"
                            />
                            <label htmlFor="option3">{data.optionThree}</label>
                        </div>
                        <div>
                            <input
                                onChange={(e) => onRadioButtonChange(e)}
                                value={data.optionFour}
                                id={testStyles.option4}
                                name={"answer" + count}
                                type="radio"
                            />
                            <label htmlFor="option4">{data.optionFour}</label>
                        </div>
                    </div>
                );
            })}
            <div className={testStyles.submitExam}>
                <button onClick={submitTest}>Submit Exam</button>
            </div>
        </div>
    );
}
export default Test;
