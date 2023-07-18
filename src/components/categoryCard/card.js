import React from 'react';
import "./card.css";
import { Link } from 'react-router-dom';


const CategoryCard = ({ title, description, image, slug }) => {
  return (
    <div className="category-card">
      <img src={image} alt={title} className="category-image" />
      <div className="category-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={`/category/${slug}`} className="learn-more-button">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;