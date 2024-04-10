import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./StudentList.css"; // Assuming you have a CSS file for custom styling
import baseUrl from "../../../baseUrl";
// import FacultyNavbar from "../FacultyNavbar/FacultyNavbar";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getAllStudent() {
      try {
        const response = await axios.get(`${baseUrl}/users/`);
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    }
    getAllStudent();
  }, []);

  return (
    <>
    {/* <FacultyNavbar/> */}
    <div id="studentListContainer">
      <h2>Student List</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.firstName} {student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.mobile}</td>
                <td>
                  <NavLink
                    exact
                    to={`/FacultyDashboard/StudentList/Result/${student.id}`} // Assuming Result route
                  >
                    <button className="btn btn-primary">Result</button>
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </> );
}

export default StudentList;
