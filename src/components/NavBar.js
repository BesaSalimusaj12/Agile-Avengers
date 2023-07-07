import React, { useState } from "react";
import "../styles/NavBar.css";
import Logo from "../assets/fti-logo.png";
import { Link } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";

export default function NavBar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="" />
        <div className="hiddenLinks">
          <Link to="/home"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/fakulteti"> Fakulteti</Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
      <Link to="/home"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/fakulteti"> Fakulteti</Link>
          <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <VscMenu />
        </button>
      </div>
    </div>
  );
}
