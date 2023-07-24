import React from 'react'
import "../styles/Courses.css";
import CoursesBackground from "../assets/courses.jpg"
/*import { Link } from 'react-router-dom';*/
import CategoryCard from '../components/categoryCard/card';
import categoryData from '../components/categoryCard/categoryData';


const courses = () => {
  return (
    <div>
      <div className="courses">
        <div 
          className="coursesTop"
          style={{ backgroundImage: `url(${CoursesBackground})` }}
        >
          <div className="text-overlay">
            <h1 className="text">KURSET</h1>
          </div>
        </div>
      </div>
      
      <div className="category-grid">
        {categoryData.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            description={category.description}
            image={category.image}
            slug={category.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default courses