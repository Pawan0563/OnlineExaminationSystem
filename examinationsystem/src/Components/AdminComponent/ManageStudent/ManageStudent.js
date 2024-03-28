import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import style from "../../FacultyComponent/FacultyDashboard/SubjectComponent/Subject.module.css";
import baseUrl from "../../baseUrl";
import AdminNavbar from "../AdminDashboard/AdminNavbar/AdminNavbar";

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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseUrl}/users/${id}`);
      const updatedStudents = students.filter((student) => student.id !== id);
      setStudents(updatedStudents);
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <>
    <AdminNavbar/>
      <div id={style.displayHeadingBox}>
        <h2>Student List</h2>
      </div>

      <div id={style.tableBox}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className={style.center}>ID</th>
              <th className={style.center}>Name</th>
              <th className={style.center}>Email</th>
              <th className={style.center}>Mobile</th>
              <th className={style.center}>Actions</th>
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
                    to={`/FacultyDashboard/StudentList/Update/${student.id}`}
                  >
                    <button className="btn btn-success mr-2">Update</button>
                  </NavLink>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentList;
