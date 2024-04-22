import React from 'react';
import StudentNavbar from "./StudentNavbar/StudentNavbar";
import StudentCard from './StudentCard';
import styles from './StudentDsh.module.css'; // Import CSS module

function StudentDsh() {
  return (
    <>
      <StudentNavbar />
      <div className={styles.CardContainer}>
        <StudentCard
          className="student-card"
          title="Subject"
          link="/StudentDsh/Subject"
          imageUrl="https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg"
        />
        <StudentCard
          className="student-card"
          title="Course Registration"
          link="/Registration"
          imageUrl="https://www.goethe-university-frankfurt.de/119253669.jpg"
        />
        <StudentCard
          className="student-card"
          title="See Result"
          link="/StudentDsh/Result"
          imageUrl="https://voiceofyouthngo.com/wp-content/uploads/2023/11/Result.jpg"
        />
      </div>
    </>
  );
}

export default StudentDsh;
