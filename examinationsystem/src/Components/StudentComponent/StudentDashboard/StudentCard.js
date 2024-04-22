import React from 'react';
import styles from './StudentCard.module.css'; // Import CSS module

const StudentCard = ({ title, content, link, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} />
      <div className={styles['card-content']}>
        <h2>{title}</h2>
        <p>{content}</p>
        <a href={link} target="_self" rel="noopener noreferrer">Go to</a>
      </div>
    </div>
  );
};

export default StudentCard;
