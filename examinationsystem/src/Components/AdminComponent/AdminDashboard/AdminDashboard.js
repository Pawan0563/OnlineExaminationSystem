// AdminDashboard.js

import React from 'react';
import AdminNavbar from './AdminNavbar/AdminNavbar';
import AdminCard from './AdminCard';
import styles from './AdminDashBoard.module.css'; // Importing the CSS module

function AdminDashboard() {
  return (
    <>
      <AdminNavbar />
      <div className={styles.CardContainer}> {/* Using the generated class name */}
        <AdminCard
          title="Manage Faculty"
          link="/ManageFaculty"
          imageUrl="https://cdn.pixabay.com/photo/2019/09/01/06/17/board-4444443_640.jpg"
        />
        <AdminCard
          title="Manage Student"
          link="/ManageStudent"
          imageUrl="https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg"
        />
        <AdminCard
          title="Manage Course"
          link="/ManageCourse"
          imageUrl="https://barathiedu.in/wp-content/uploads/2023/06/236.jpg"
        />
        <AdminCard
          title="See Result"
          link="/See Result"
          imageUrl="https://images.shiksha.com/mediadata/images/articles/1591428914phpMABeQI.jpeg"
        />
      </div>
    </>
  );
}

export default AdminDashboard;
