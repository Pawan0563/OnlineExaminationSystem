import React, { useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "../../../baseUrl";
import "./Subject.css";
import FacultyNavbar from "../FacultyNavbar/FacultyNavbar";
// import FacultyNavbar from "../FacultyNavbar/FacultyNavbar";

function Subject() {
  const [display, setDisplay] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState("");
  const [status, setStatus] = useState(false);
  const [statusDelete, setStatusDelete] = useState(false);

  useEffect(() => {
    async function getAllSubject() {
      try {
        const response = await axios.get(`${baseUrl}/subject`);
        // Filter out any null subjects
        const filteredSubjects = response.data.filter(subject => subject !== null);
        setSubjects(filteredSubjects);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    }
    
    getAllSubject();
  }, [status, statusDelete]); // Re-fetch subjects when status or statusDelete changes

  const handleAddSubject = () => {
    setDisplay(true);
  };

  const handleCloseAdd = () => {
    setDisplay(false);
  };

  const handleInput = (e) => {
    setSubjectName(e.target.value);
  };

  const handleAddNewSubject = async () => {
    try {
      await axios.post(`${baseUrl}/subject`, { name: subjectName });
      setStatus(true);
    } catch (error) {
      console.error("Error adding subject:", error);
    }
  };

  const deleteSubject = async (name) => {
    try {
      await axios.delete(`${baseUrl}/subject/${name}`);
      setStatusDelete(true);
    } catch (error) {
      console.error("Error deleting subject:", error);
    }
  };

  if (statusDelete || status) return <Subject />; // Reload component after adding or deleting subject

  if (subjects.length === 0) {
    return (
        
      <div id="content" className="content">
        <div className="displayHeadingBox">
          <h2>No Subject Available</h2>
        </div>
        <div className="addSubjectBox">
          <button onClick={handleAddSubject}>Add Subject</button>
        </div>
        {/* Add Subject */}
        <div className={`addBox ${display ? "show" : "hide"}`}>
          <label htmlFor="">Enter Subject</label>
          <input onChange={handleInput} type="text" placeholder="Enter Subject name" />
          <div className="buttonBox">
            <button onClick={handleAddNewSubject}>Add</button>
            <button onClick={handleCloseAdd}>Close</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
     <FacultyNavbar/> 
    <div id="content" className="content">
      <div className="displayHeadingBox">
        <h2>Subject List</h2>
      </div>
      <div className="tableBox">
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th>Subject Name</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((data, i) => (
              <tr key={i}>
                <td>{data.name}</td>
                <td>
                  <button onClick={() => deleteSubject(data.name)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="addSubjectBox">
        <button onClick={handleAddSubject}>Add Subject</button>
      </div>
      {/* Add Subject */}
      <div className={`addBox ${display ? "show" : "hide"}`}>
        <label htmlFor="">Enter Subject</label>
        <input onChange={handleInput} type="text" placeholder="Enter Subject name" />
        <div className="buttonBox">
          <button onClick={handleAddNewSubject}>Add</button>
          <button onClick={handleCloseAdd}>Close</button>
        </div>
      </div>
    </div>
    </> );
}

export default Subject;
