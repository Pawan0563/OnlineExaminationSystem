import React from 'react';
import styles from './CourseCard.module.css';
import AttendanceBox from '../AttendenceComponent/AttendanceBox';

const CourseCard = () => {
  return (
    <>
      <div className={styles.course}>Apply For Course </div>
      <AttendanceBox/>
      <div className={styles.container}>
        <div className={styles.contain}>
          <div className={styles.card}>
            <h2>Course Code: CUTM1018</h2>
            <p>Credit: 4.00</p>
            <h2>Title: </h2><h4>DATA ANALYSIS AND VISUALISATION USING PYTHON</h4>
            <p>Super Course Code:</p>
            <button className={styles['apply-button']}>Apply</button>
          </div>
          <div className={styles.card}>
            <h2>Course Code: CUTM1019</h2>
            <p>Credit: 3.00</p>
            <h2>Title: </h2><h4>INTRODUCTION TO MACHINE LEARNING</h4>
            <p>Super Course Code:</p>
            <button className={styles['apply-button']}>Apply</button>
          </div>
          <div className={styles.card}>
            <h2>Course Code: CUTM1020</h2>
            <p>Credit: 3.50</p>
            <h2>Title: </h2><h4>ADVANCED DATABASE MANAGEMENT SYSTEMS</h4>
            <p>Super Course Code:</p>
            <button className={styles['apply-button']}>Apply</button>
          </div>
        </div>
        <div className={styles.contain}>
          <div className={styles.card}>
            <h2>Course Code: CUTM1021</h2>
            <p>Credit: 3.00</p>
            <h2>Title: </h2><h4>NETWORK SECURITY</h4>
            <p>Super Course Code:</p>
            <button className={styles['apply-button']}>Apply</button>
          </div>
          <div className={styles.card}>
            <h2>Course Code: CUTM1022</h2>
            <p>Credit: 3.50</p>
            <h2>Title: </h2><h4>SOFTWARE ENGINEERING METHODOLOGIES</h4>
            <p>Super Course Code:</p>
            <button className={styles['apply-button']}>Apply</button>
          </div>
          <div className={styles.card}>
            <h2>Course Code: CUTM1023</h2>
            <p>Credit: 4.00</p>
            <h2>Title: </h2><h4>ARTIFICIAL INTELLIGENCE</h4>
            <p>Super Course Code:</p>
            <button className={styles['apply-button']}>Apply</button>
          </div>
        </div>
        {/* Add more contain divs here */}
      </div>
    </>
  );
};

export default CourseCard;
