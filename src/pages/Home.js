import React from "react";
import HomePage from "../assets/homepage.avif";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${HomePage})` }}>
      <div className="headerContainer">
        <h1>Miresevini,</h1>
        <p>Fakulteti i Teknologjise se Informacionit</p>
        <button>Lajme</button>
      </div>
    </div>
  );
}
