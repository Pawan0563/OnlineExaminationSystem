// AdminCard.js

import React from 'react';
import styles from './AdminCard.module.css';

const AdminCard = ({ title, content, link, imageUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={imageUrl} alt={title} />
        <div className={styles['card-content']}>
          <h2>{title}</h2>
          <p>{content}</p>
          <a href={link}>Go to</a> {/* Removed target="_blank" rel="noopener noreferrer" */}
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
