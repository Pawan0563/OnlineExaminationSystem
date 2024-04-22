// StudentList.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import baseUrl from "../../baseUrl";
import AdminNavbar from "../AdminDashboard/AdminNavbar/AdminNavbar";
import styles from "./StudentList.module.css"; // Importing the CSS module

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
      <AdminNavbar />
      <div className={styles.displayHeadingBox}>
        <h2>Student List</h2>
      </div>

      <div className={styles.tableBox}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className={styles.center}>ID</th>
              <th className={styles.center}>Name</th>
              <th className={styles.center}>Email</th>
              <th className={styles.center}>Mobile</th>
              <th className={styles.center}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              // Check if any field is null
              if (
                student.id !== null &&
                student.firstName !== null &&
                student.lastName !== null &&
                student.email !== null &&
                student.mobile !== null
              ) {
                return (
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
                        <button className={`${styles.btn} ${styles['btn-success']} mr-2`}>Update</button>
                      </NavLink>
                      <button
                        className={`${styles.btn} ${styles['btn-danger']}`}
                        onClick={() => handleDelete(student.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              }
              return null; // Return null for rows with null values
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentList;
