import { useState } from "react";
import React from "react";
import "./Card.css";
import {FiArrowRight} from 'react-icons/fi'
import { Link } from "react-router-dom";

export default function Card(props) {
  const { image, title, description, destination, mode } = props;
  const [open, setOpen] = useState(false);

  
  const handleOpenClick = () => {  
    setOpen(!open)
  };

  return (

      <div className="card">
      <img src= {image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {/* {!open && <button onClick={handleOpenClick} >REad more</button>} */}
        <Link  to= {destination} className="read-more-button" > Read more <FiArrowRight/> </Link> 
        {/* {open && <p className="card-description">{description}{description}</p>}
        
        {open && <button onClick={handleOpenClick} >REad less</button> } */}
      </div>
    </div>

  );
}
