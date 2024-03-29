import React from "react";
import "./Card.css"; // Import CSS file for styling
const Card = ({ title, description, imageUrl, link }) => {
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {" "}
        {/* Link */}
        <div
          className="card-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>{" "}
        {/* Background image */}
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
