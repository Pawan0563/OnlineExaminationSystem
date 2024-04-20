 
   import { useState ,useEffect} from "react";
   import axios from "axios";

   import {NavLink} from "react-router-dom";


    import style from "./Exam.module.css"

    import baseUrl from "../../../baseUrl";
import FacultyNavbar from "../FacultyNavbar/FacultyNavbar";

    function Exam(){

//  ---------------------- add Exam & close buttton working  -------------------------------------
        const [display , setDisplay]  = useState({
            display:"none"
        });

         function handleAddExam()
         {
            setDisplay({display:"block"});
         }

         function handleCloseExam(){
             setDisplay({display:"none"});
         }

// --------------- Fetching all Exam from db.json file-------------------------

      const [exams , setExams] = useState([]);

      useEffect(()=>{
         
         async function getAllExam(){
             let value = await axios.get(`${baseUrl}/exam`);
             setExams(value.data);
             //console.log(value.data[0].name);
         }
             getAllExam();
      },[]);


// --------------------Adding Exam And re-render Exam component-----------------

     var date = new Date();
     var d =  date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() ;
     var t =  date.getHours() + ":" + date.getMinutes() +  ":" + date.getSeconds() ;


      const [exam , setExam] = useState({
        name:"",
        desc:"",
        level:"",
        passMarks:"",
        totalQuestion:"",
        marks:"",
        date: d+" "+t
    });
   
   function handleInput(e){
        setExam({ 
            ...exam,
            [e.target.name]: e.target.value
        });
        // console.log(exam);
    }

    async function handleAddNewExam(){

        setExam(
            exam.name = {name: document.getElementById("nameFiled").value}
        );

        await axios.post(`${baseUrl}/exam` , exam);
        setStatus(true);
    }

    const [status , setStatus] = useState();


    // ----------------------------Deleting Exam-----------------------------------------------

       const [questions , setQuestions] = useState([]);

       useEffect(() => {
           async function getAllQuestions(){
               let value = await axios.get(`${baseUrl}/question`);
               setQuestions(value.data);
            }
            getAllQuestions();
       },[])


       const [statusDeleteExam , setStatusDeleteExam] = useState();


       async function deleteExam(id){
        //    console.log(id);
           
            for(let i=0; i<questions.length ;i++)
            {
                if( parseInt( questions[i].exam_id) === parseInt( id )){
                    // console.log(questions[i].id);
                    await axios.delete(`${baseUrl}/question/${questions[i].id}`);
                } 
            }
            await axios.delete(`${baseUrl}/exam/${id}`);
            setStatusDeleteExam(true);
       }

      if(status) return <Exam />

      if(statusDeleteExam) return <Exam />

        return (
            <>
            <FacultyNavbar/>
               <div id={style.hd}> 
                    <h2>Exam List</h2>     
               </div>

                <div id={style.td}>
                <table class="table table-success table-striped">
                        <thead >
                            <tr>
                                <th className="cc">Exam Name</th>
                                <th className="cc">Exam Desc.</th>
                                <th className="cc">Exam Creation Date</th>
                                <th className="cc">Exam Level</th>
                                <th className="cc">Options</th>
                            </tr>
                          </thead>
                          <tbody id={style.tbody}>
                              {
                                  exams.map((data ,i) => {
                                      return(
                                        <tr key={i}>
                                           <td>{data.name.name}</td>
                                           <td>{data.desc}</td>
                                           <td>{data.date}</td>
                                           <td>{data.level}</td>
                                           <td>
                                               <NavLink exact to={`/FacultyDashboard/Exam/Details/${data.id}`}>
                                                 <button className={style.bb}>Details</button>  
                                               </NavLink> 

                                          <NavLink exact to={`/FacultyDashboard/Exam/ViewQuestion/${data.id}`}>
                                                 <button className={style.bb}>View Question</button>  
                                               </NavLink> 

                                             <NavLink exact to={`/FacultyDashboard/Exam/AddQuestion/${data.id}`}>
                                                 <button className={style.bb}>  Add Question</button>  
                                               </NavLink> 

                                             <button className={style.bb} onClick={() => deleteExam(data.id)}>Delete</button>
                                          </td>
                                        </tr>
                                      );
                                  })
                              }
                              
                          </tbody>
                     </table>
                 </div>

                 <div id={style.addSubjectBox}>
                      <button onClick={handleAddExam}>Add Exam</button>
                 </div>

                  <div id={style.addBox12} style={display}>   
                     <label htmlFor="">Enter Subject Name </label>
                     <input id={style.nameFiled} onChange={(e) => handleInput(e)} name="name" type="text" 
                     placeholder="Enter Subject Name" /> 

                     <label htmlFor="">Enter Exam desc </label>
                     <input onChange={(e) => handleInput(e)} name="desc"  type="text" 
                     placeholder="Enter Exam des" /> 

                     <label htmlFor="">Enter Exam Level </label>
                      <input onChange={(e) => handleInput(e)} name="level"   type="text" placeholder="Enter Exam Level" /> 

                      <label htmlFor="">Enter Total Question </label>
                      <input onChange={(e) => handleInput(e)} name="totalQuestion"   
                      type="text" placeholder="Enter Total Question" /> 

                     <label htmlFor="">Enter Total Marks </label>
                      <input onChange={(e) => handleInput(e)} name="marks"   
                      type="text" placeholder="Enter Total Marks" /> 

                     <label htmlFor="">Enter Pass Marks </label>
                     <input onChange={(e) => handleInput(e)} name="passMarks"   
                     type="text" placeholder="Enter Pass Marks" /> 

                      <div id={style.buttonBox76}>
                         <button  className="b12" onClick={handleAddNewExam} >Add</button>
                         <button  className="b12" onClick= {handleCloseExam}  >Close</button>
                       </div>
                  </div>
            </>
        );
    }

    export default Exam;