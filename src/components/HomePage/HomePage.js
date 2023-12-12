import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import About from "../../pages/About";
import Contact from "../../pages//Contact";
import Home from "../../pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "../Caurosel/Card"
import "./HomePage.css"
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';



function HomePage() {
  const [index, setIndex] = useState(1);

  const leftHandler = () => {
    let i = index;
    if(i === 0){
      setIndex(cardProps.length-1);
    }else{
      setIndex(index-1);
      console.log("this is the length of list:", cardProps.length)
      console.log("this is the index", i)
    }
  };
  const righHandler = () => {  
    let i = index;
    if(i === cardProps.length-1){
      setIndex(0);
    } else{
      setIndex(index+1);
      console.log("this is the length of list:", cardProps.length)
      console.log("this is the index", i)
    }
  };
  const cardProps = [
    {
      image: "./fti-logo.png",
      title: "Alban Zyle",
      description: "This is a sample card description. You can put any content here.",
      destination: "/home"
    },
    {
      image: "./fti-logo.png",

      title: "Besa Salimusaj",
      description: "Another card with different content.",
      destination: "/about"
    },
    {
      image: "./fti-logo.png",
      title: "Ambra Zajsi",
      description: "Yet another card with unique content.",
      destination: "/contact"
    }
  ];
  return (
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <div className="devider"/> */}
        <div className="karusel">
            <FaLessThan className="leftArrow" onClick={leftHandler}/>
            <Card {...cardProps[index]} /> 
            <FaGreaterThan className="rightArrow" onClick={righHandler}/>
            
        </div>

        <div className="devider"/>

        <Footer/>
      </Router>
      
  );
}

export default HomePage;
