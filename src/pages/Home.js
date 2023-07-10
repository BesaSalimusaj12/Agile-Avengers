import React, { useState, useEffect } from "react";
import fti1 from "../assets/fti1.jpg";
import fti2 from "../assets/fti2.jpg";
import fti3 from "../assets/fti3.jpg";
import "../styles/Home.css";

export default function Home() {
  const images = [fti1, fti2, fti3];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Miresevini,</h1>
        <p>Fakulteti i Teknologjise se Informacionit</p>
        <button>Lajme</button>
        <div>
          <img src={images[currentIndex]}></img>
        </div>
      </div>
      <div className="headerContainer">
        <h1>Miresevini,</h1>
        <p>Fakulteti i Teknologjise se Informacionit</p>
        <button>Lajme</button>
      </div>
      <div className="headerContainer">
        <h1>Miresevini,</h1>
        <p>Fakulteti i Teknologjise se Informacionit</p>
        <button>Lajme</button>
      </div>
      <div className="headerContainer">
        <h1>Miresevini,</h1>
        <p>Fakulteti i Teknologjise se Informacionit</p>
        <button>Lajme</button>
      </div>
    </div>
  );
}
