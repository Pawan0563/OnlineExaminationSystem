
    
//     import style from "../../SubjectComponent/Subject.module.css";

//     import {useState} from "react";

//     import { useNavigate, useParams} from "react-router-dom";
// import axios from "axios";
// import baseUrl from "../../../../baseUrl";

    
//     function AddQuestion(){

//       const {id} = useParams();

//        const [question , setQuestion] = useState({
//           qname: "",
//           optionOne: "",
//           optionTwo: "",
//           optionThree: "",
//           optionFour: "",
//           answer: "",
//           ename: id,
//           sname:""
//        });

//         function onInputChange(e){
//                  setQuestion({
//                      ...question ,
//                      [e.target.name] : e.target.value
//                  });

//                 // console.log(question);
//         }

         
//           let navigate = useNavigate();
         
//           function handleGoBack(){
//               navigate(`/Facultydashboard/Exam`);
//           }


//           async function addnewQuestion(){
//             setQuestion(question.ename={id:id});

//             setQuestion(question.sname={name:document.getElementById("subjectField").value});

            
//               await axios.post(`${baseUrl}/question` , question);
//               navigate(`/Facultydashboard/Exam/ViewQuestion/${id}`);
//           }



//         return (
//             <>
//               <div id={style.displayHeadingBox}> 
//                           <h2>Adding Question</h2>     
//                        </div>

//                    <div id={style.addBox} className={style.addQuestion}>   
//                        <label >Question Name </label>
//                        <input onChange={(e) => onInputChange(e)} 
//                        name="qname"
//                         type="text" placeholder="Enter Question" /> 

//                       <label >Enter Option A </label>
//                       <input onChange={(e) => onInputChange(e)} 
//                        name="optionOne"
//                        type="text" placeholder="Enter Option A" /> 

//                       <label >Enter Option B</label>
//                       <input onChange={(e) => onInputChange(e)} 
//                       name="optionTwo"
//                          type="text" placeholder="Enter Option B" /> 

//                       <label >Enter Option C</label>
//                       <input onChange={(e) => onInputChange(e)} 
//                       name="optionThree"
//                         type="text" placeholder="Enter Option C" /> 

//                       <label >Enter Option D</label>
//                       <input onChange={(e) => onInputChange(e)}  
//                       name="optionFour"
//                        type="text" placeholder="Enter Option D" /> 

//                       <label >Enter Question Answer</label>
//                       <input  onChange={(e) => onInputChange(e)}
//                       name="answer"
//                         type="text" placeholder="Enter Question answer (don't write option A,B,C,D)" /> 

                        
//                       <label >Enter Subject</label>
//                       <input  onChange={(e) => onInputChange(e)}
//                       name="sname" id="subjectField"
//                         type="text" placeholder="Enter Subject" /> 

//                      <div id={style.buttonBox}>
//                        <button onClick={addnewQuestion} >Add</button>
//                        <button onClick={handleGoBack}>Go back</button>
//                      </div>

//                  </div>
//             </>
//         );
//     }

//     export default AddQuestion;


import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../../../baseUrl";
import "./AddQuestion.css"; // Import your custom CSS file

function AddQuestion() {
  const { id } = useParams();

  const [question, setQuestion] = useState({
    qname: "",
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
    answer: "",
    ename: id,
    sname: ""
  });

  function onInputChange(e) {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value
    });
  }

  let navigate = useNavigate();

  function handleGoBack() {
    navigate(`/Facultydashboard/Exam`);
  }

  async function addnewQuestion() {
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      ename: id,
      sname: document.getElementById("subjectField").value
    }));

    await axios.post(`${baseUrl}/question`, question);
    navigate(`/Facultydashboard/Exam/ViewQuestion/${id}`);
  }

  return (
    <>
    <div className="container123">
      <div id="displayHeadingBox123">
        <h2>Adding Question</h2>
      </div>

      <div id="addBox123" className="addQuestion123">
        <label>Question Name</label>
        <input
          onChange={(e) => onInputChange(e)}
          name="qname"
          type="text"
          placeholder="Enter Question"
        />

        <label>Enter Option A</label>
        <input
          onChange={(e) => onInputChange(e)}
          name="optionOne"
          type="text"
          placeholder="Enter Option A"
        />

        <label>Enter Option B</label>
        <input
          onChange={(e) => onInputChange(e)}
          name="optionTwo"
          type="text"
          placeholder="Enter Option B"
        />

        <label>Enter Option C</label>
        <input
          onChange={(e) => onInputChange(e)}
          name="optionThree"
          type="text"
          placeholder="Enter Option C"
        />

        <label>Enter Option D</label>
        <input
          onChange={(e) => onInputChange(e)}
          name="optionFour"
          type="text"
          placeholder="Enter Option D"
        />

        <label>Enter Question Answer</label>
        <input
          onChange={(e) => onInputChange(e)}
          name="answer"
          type="text"
          placeholder="Enter Question answer (don't write option A,B,C,D)"
        />

        <label>Enter Subject</label>
        <input
          onChange={(e) => onInputChange(e)}
          name="sname"
          id="subjectField"
          type="text"
          placeholder="Enter Subject"
        />

        <div id="buttonBox123">
          <button onClick={addnewQuestion}>Add</button>
          <button onClick={handleGoBack}>Go back</button>
        </div>
      </div>
      </div>
    </>
  );
}

export default AddQuestion;
