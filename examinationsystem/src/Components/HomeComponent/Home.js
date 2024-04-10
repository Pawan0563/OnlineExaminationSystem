// Home.js

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
import pic0 from "../../Images/1.png";
import pic1 from "../../Images/studentlogo.jpg";
import pic2 from "../../Images/facultylogo.png";
import pic3 from "../../Images/adminlogo.png";

function Home() {
    return (
        <div>
            <div className={styles.headerContainer}>
                <img src={pic0} alt="Logo" />
                <span>Centurion Online Examination System</span>
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <NavLink exact to="/StudentLogin">
                        <img src={pic1} alt="Student" />
                    </NavLink>
                    <span>Student</span>
                </div>
                <div className={styles.card}>
                    <NavLink exact to="/FacultyLogin">
                        <img src={pic2} alt="Faculty" />
                    </NavLink>
                    <span>Faculty</span>
                </div>
                <div className={styles.card}>
                    <NavLink exact to="/AdminLogin">
                        <img src={pic3} alt="Admin" />
                    </NavLink>
                    <span>Admin</span>
                </div>
            </div>
        </div>
    );
}

export default Home;
