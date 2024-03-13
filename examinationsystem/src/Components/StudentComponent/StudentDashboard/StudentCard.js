import React from 'react';
import './StudentCard.css';

const StudentCard = ({ title, content, link, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">Go to</a>
      </div>
    </div>
  );
};

export default StudentCard;
