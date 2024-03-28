import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import style from "../../FacultyComponent/FacultyDashboard/SubjectComponent/Subject.module.css";
import baseUrl from "../../baseUrl";
import AdminNavbar from "../AdminDashboard/AdminNavbar/AdminNavbar";

function FacultyList() {
  const [facultys, setFacultys] = useState([]);

  useEffect(() => {
    async function getAllStudent() {
      try {
        const response = await axios.get(`${baseUrl}/faculty`);
        setFacultys(response.data);
      } catch (error) {
        console.error("Error fetching facultys:", error);
      }
    }
    getAllStudent();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseUrl}/faculty/${id}`);
      const updatedFacultys = facultys.filter((faculty) => faculty.id !== id);
      setFacultys(updatedFacultys);
    } catch (error) {
      console.error("Error deleting faculty:", error);
    }
  };

  return (
    <>
    <AdminNavbar/>
      <div id={style.displayHeadingBox}>
        <h2>Faculty List</h2>
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
            {facultys.map((faculty) => (
              <tr key={faculty.id}>
                <td>{faculty.id}</td>
                <td>{faculty.firstName} {faculty.lastName}</td>
                <td>{faculty.email}</td>
                <td>{faculty.mobile}</td>
                <td>
                  <NavLink
                    exact
                    to={`/FacultyDashboard/StudentList/Update/${faculty.id}`}
                  >
                    <button className="btn btn-success mr-2">Update</button>
                  </NavLink>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(faculty.id)}
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

export default FacultyList;
