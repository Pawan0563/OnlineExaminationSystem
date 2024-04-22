// App.js

import React from "react";
import styles from "./ManageCourse.module.css";
import { Link } from "react-router-dom";

const Card = ({ title, description, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles["card-image"]} />
      <div className={styles["card-content"]}>
        <h3 className={styles["card-title"]}>{title}</h3>
        <p className={styles["card-description"]}>{description}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className={styles.container}>
      <Link to="/AddCourse">
        <Card
          title="Add Course"
          description="Description for add course."
          image="https://www.clipartmax.com/png/small/69-696050_affiliates-icon-background-for-employee-login.png"
        />
      </Link>
      <Link to="/CourseAssign">
        <Card
          title="Course Assign"
          description="Description for course assign."
          image="https://www.clipartmax.com/png/small/69-696050_affiliates-icon-background-for-employee-login.png"
        />
      </Link>
      <Link to="/">
        <Card
          title="Course registered"
          description="Description for course register."
          image="https://www.clipartmax.com/png/small/69-696050_affiliates-icon-background-for-employee-login.png"
        />
      </Link>
     
    </div>
  );
};

export default App;
