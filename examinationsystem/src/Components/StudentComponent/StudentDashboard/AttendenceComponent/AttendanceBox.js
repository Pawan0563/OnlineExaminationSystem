// AttendanceBox.js

import React, { useEffect } from 'react';
import styles from './AttendanceBox.module.css'; // Import the CSS module

const AttendanceBox = () => {
    useEffect(() => {
      generateYearOptions();
    }, []);
  
    const generateYearOptions = () => {
      const yearSelect = document.getElementById("year");
      const currentYear = new Date().getFullYear();
      const startYear = 1900;
  
      for (let year = startYear; year <= currentYear; year++) {
        const option = document.createElement("option");
        option.text = year;
        option.value = year;
        yearSelect.appendChild(option);
      }
    };
  
    const submitForm = () => {
      const year = document.getElementById("year").value;
      const semester = document.getElementById("semester").value;
      const branch = document.getElementById("branch").value;
  
      console.log("Selected Year: " + year);
      console.log("Selected Semester: " + semester);
      console.log("Selected Branch: " + branch);
  
      // Further processing or submission can be done here
    };
  
    return (
      <div className={styles.container}> {/* Use locally scoped class name */}
        <div className={styles['flex-container']}> {/* Use locally scoped class name */}
          <div className={styles['select-box']}>
            <label className={styles['select-label']} htmlFor="year">Year:</label> {/* Use locally scoped class name */}
            <select className={styles['select-dropdown']} id="year"> {/* Use locally scoped class name */}
            </select>
          </div>
          <div className={styles['select-box']}>
            <label className={styles['select-label']} htmlFor="semester">Semester:</label> {/* Use locally scoped class name */}
            <select className={styles['select-dropdown']} id="semester"> {/* Use locally scoped class name */}
              <option value="1">1st Semester</option>
              <option value="2">2nd Semester</option>
              <option value="3">3rd Semester</option>
              <option value="4">4th Semester</option>
              <option value="5">5th Semester</option>
              <option value="6">6th Semester</option>
              <option value="7">7th Semester</option>
              <option value="8">8th Semester</option>
            </select>
          </div>
          <div className={styles['select-box']}>
            <label className={styles['select-label']} htmlFor="branch">Branch:</label> {/* Use locally scoped class name */}
            <select className={styles['select-dropdown']} id="branch"> {/* Use locally scoped class name */}
              <option value="CSE">Computer Science & Engineering (CSE)</option>
              <option value="Mech">Mechanical Engineering</option>
              <option value="EEE">Electrical & Electronics Engineering (EEE)</option>
              <option value="ECE">Electronics & Communication Engineering (ECE)</option>
            </select>
          </div>
        </div>
        
        <button className={styles['submit-button']} onClick={submitForm}>Submit</button> {/* Use locally scoped class name */}
      </div>
    );
  };
   
export default AttendanceBox;
