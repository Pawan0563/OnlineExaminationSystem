 
//    import axios from "axios";

//    import {useEffect , useState} from "react";

   
//    import style from "../SubjectComponent/Subject.module.css"

//    import baseUrl from "../../../baseUrl";
// // import FacultyNavbar from "../FacultyNavbar/FacultyNavbar";
   


//     function Result(){

//         const [results , setResults] = useState([]);

//         useEffect(()=>{
           
//            async function getAllResults(){
//                let value = await axios.get(`${baseUrl}/result`);
//                setResults(value.data);
//                //console.log(value.data[0]);
//            }
//                getAllResults();
//         },[]);

//         return (
//             <>
            
//                <div id={style.displayHeadingBox}> 
//                    <h2>Result List</h2>     
//                 </div>

//                 <div id="table">
//                 <table class="table table-striped">
//                        <thead>
//                            <tr>
//                              <th id="center">User Email</th>
//                              <th id="center">Exam Name</th>
//                              <th id="center">Exam Date</th>
//                              <th id="center">Result Status</th>
//                              <th id="center">Your Score</th>  
//                              <th id="center">Total Marks</th>
//                              <th id="center">Total Question</th>  
//                           </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 results.map((data , i) => {
//                                     return(
//                                           <tr key={i}>
//                                               <td>{data.email.email}</td>
//                                               <td>{data.sname.name}</td>
//                                               <td>{data.edate}</td>
//                                               <td>{data.status}</td>
//                                               <td>{data.score}</td>
//                                               <td>{data.totalMarks}</td>
//                                               <td>{data.totalQuestion}</td>
//                                           </tr>
//                                     );
//                                 })
//                             }
                               
//                         </tbody>
//                      </table>
//                 </div>
//             </>
//         );
//     }

//     export default Result;
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Result.module.css"; // Corrected import path
import baseUrl from "../../../baseUrl";
import FacultyNavbar from "../FacultyNavbar/FacultyNavbar";

function Result() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getAllResults() {
      try {
        const response = await axios.get(`${baseUrl}/result`);
        setResults(response.data); // Simplified data assignment
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    }
    getAllResults();
  }, []);

  return (
    <>
    <FacultyNavbar/>
      <div className={styles.displayHeadingBox}>
        <h2>Result List</h2>
      </div>

      <div id="table">
        <table className={`${styles.table} table-striped`}>
          <thead>
            <tr>
              <th className={styles.center}>User Email</th>
              <th className={styles.center}>Exam Name</th>
              <th className={styles.center}>Exam Date</th>
              <th className={styles.center}>Result Status</th>
              <th className={styles.center}>Your Score</th>
              <th className={styles.center}>Total Marks</th>
              <th className={styles.center}>Total Question</th>
            </tr>
          </thead>
          <tbody>
            {results.map((data, i) => (
              <tr key={i}>
                <td>{data.email?.email ?? "N/A"}</td> {/* Using optional chaining and nullish coalescing */}
                <td>{data.sname?.name ?? "N/A"}</td>
                <td>{data.edate}</td>
                <td>{data.status}</td>
                <td>{data.score}</td>
                <td>{data.totalMarks}</td>
                <td>{data.totalQuestion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Result;

