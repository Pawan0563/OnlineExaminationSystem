import React, { useState, useEffect } from "react";
import styles from "./AddCourse.module.css";

function AddCourse() {
  const [courseCode, setCourseCode] = useState("");
  const [courseCredit, setCourseCredit] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [courses, setCourses] = useState([]);
  const [showSaveConfirmation, setShowSaveConfirmation] = useState(false);
  const [courseToRemove, setCourseToRemove] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  // Load courses from localStorage on component mount
  useEffect(() => {
    const savedCourses = localStorage.getItem("savedCourses");
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    }
  }, []);

  // Save courses to localStorage whenever courses state changes
  useEffect(() => {
    localStorage.setItem("savedCourses", JSON.stringify(courses));
  }, [courses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new course object
    const newCourse = {
      id: Date.now(), // Unique ID for each course
      code: courseCode,
      credit: courseCredit,
      title: courseTitle,
    };
    // Add the new course to the courses array
    setCourses([...courses, newCourse]);
    // Clear form fields after submission
    setCourseCode("");
    setCourseCredit("");
    setCourseTitle("");
  };

  const handleSave = (id) => {
    // Display confirmation dialog
    setShowSaveConfirmation(true);
  };

  const handleConfirmSave = () => {
    // Here you can perform the save action
    // For demonstration purpose, let's log the course id
    console.log("Save course with id:", courseToRemove);
    // Close the confirmation dialog
    setShowSaveConfirmation(false);
  };

  const handleCancelSave = () => {
    // Close the confirmation dialog
    setShowSaveConfirmation(false);
  };

  const handleRemove = (id) => {
    // Display confirmation dialog
    setCourseToRemove(id);
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    // Filter out the course with the given id
    const updatedCourses = courses.filter(
      (course) => course.id !== courseToRemove
    );
    // Update the courses state
    setCourses(updatedCourses);
    // Close the confirmation dialog
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    // Close the confirmation dialog
    setShowDeleteConfirmation(false);
  };

  return (
    <div>
      <div className={styles["container"]}>
        <h2>Course Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="courseCode">Course Code:</label>
            <input
              type="text"
              id="courseCode"
              value={courseCode}
              onChange={(e) => setCourseCode(e.target.value)}
              placeholder="Enter Course Code"
              required
            />
          </div>
          <div>
            <label htmlFor="courseCredit">Course Credit:</label>
            <input
              type="number"
              id="courseCredit"
              value={courseCredit}
              onChange={(e) => setCourseCredit(e.target.value)}
              placeholder="Enter Course Credit"
              required
            />
          </div>
          <div>
            <label htmlFor="courseTitle">Title:</label>
            <input
              type="text"
              id="courseTitle"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
              placeholder="Enter Course Title"
              required
            />
          </div>
          <div>
            <button type="submit">Apply</button>
          </div>
        </form>

        {/* Display created courses */}
        <div>
          {courses.map((course) => (
            <div key={course.id} className={styles["course-card"]}>
              <h3>{course.code}</h3>
              <p>Credit: {course.credit}</p>
              <p>Title: {course.title}</p>
              <div className={styles["button-container"]}>
                <button onClick={() => handleSave(course.id)}>Save</button>
                <button onClick={() => handleRemove(course.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>

        {/* Save confirmation dialog */}
        {showSaveConfirmation && (
          <div className={styles["confirmation-dialog"]}>
            <p>Do you want to save this course?</p>
            {/* Display the saved course */}
            <div className={styles["saved-course"]}>
              <h3>{courses[courses.length - 1].code}</h3>
              <p>Credit: {courses[courses.length - 1].credit}</p>
              <p>Title: {courses[courses.length - 1].title}</p>
            </div>
            <button onClick={handleConfirmSave}>OK</button>
            <button onClick={handleCancelSave}>Cancel</button>
          </div>
        )}

        {/* Delete confirmation dialog */}
        {showDeleteConfirmation && (
          <div className={styles["confirmation-dialog"]}>
            <p>Are you sure you want to delete this course?</p>
            <button onClick={handleConfirmDelete}>Yes</button>
            <button onClick={handleCancelDelete}>No</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddCourse;
