import React from "react";
import { useEffect, useState } from "react";
import dep1 from "../assets/departamentet1.jpg";
import dep2 from "../assets/departamentet2.jpg";
import dep3 from "../assets/departamentet3.jpg";
import "../styles/Departamentet.css";

export default function Departamentet() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n);
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };
  return (
    <div>
      <div className="info">
        <h1> Departamentet e FTI</h1>
      </div>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img src={dep1} style={{ width: "100%" }} alt="Slide 1" />
        </div>

        <div className="mySlides fade">
          <img src={dep2} style={{ width: "100%" }} alt="Slide 2" />
        </div>

        <div className="mySlides fade">
          <img src={dep3} style={{ width: "100%" }} alt="Slide 3" />
        </div>

        <a className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          ❯
        </a>

        <div style={{ textAlign: "center" }}>
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <p>Departamenti i Elektronikës dhe Telekomunikacionit (DET) </p>
          <div className="more">
            <button>Lexo me shume</button>
          </div>
        </div>
        <div className="column">
          <p>Departamenti i Inxhinierisë Informatike (DII)</p>
          <div className="more">
            <button>Lexo me shume</button>
          </div>
        </div>
        <div className="column">
          {" "}
          <p>Departamenti i Bazave të Informatikës (DBI)</p>
          <div className="more">
            <button>Lexo me shume</button>
          </div>
        </div>
      </div>
    </div>
  );
}
