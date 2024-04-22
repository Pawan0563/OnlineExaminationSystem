import React, { useState } from "react";
import "./CourseAssign.css"; 


const CourseAssign = () => {
  const [semester, setSemester] = useState(1);
  const [section, setSection] = useState("A");
  const semesters = Array.from({ length: 8 }, (_, i) => i + 1);
  const sections = ["A", "B", "C", "D"];

  const handleSemesterChange = (event) => {
    setSemester(parseInt(event.target.value));
  };

  const handleSectionChange = (event) => {
    setSection(event.target.value);
  };

  return (
    <div className="course-selection">
      <div className="semester-selection">
        <label htmlFor="semester">Select Semester:</label>
        <select id="semester" value={semester} onChange={handleSemesterChange}>
          {semesters.map((sem) => (
            <option key={sem} value={sem}>
              {sem}
            </option>
          ))}
        </select>
      </div>
      <div className="section-selection">
        <label htmlFor="section">Select Section:</label>
        <select id="section" value={section} onChange={handleSectionChange}>
          {sections.map((sec) => (
            <option key={sec} value={sec}>
              {sec}
            </option>
          ))}
        </select>
      </div>
      <div className="course-assignment">
        {/* Add logic to assign courses based on selected semester and section */}
        {/* Display assigned courses here */}
      </div>
    </div>
  );
};

export default CourseAssign;
