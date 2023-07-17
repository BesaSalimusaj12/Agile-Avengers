import React, { useState } from "react";
import "./NavBar.css";
import Logo from "../../assets/fti-logo.png";
import { Link } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";
import { BsSearch } from 'react-icons/bs';
import { BiDownArrow } from 'react-icons/bi';
import { BiSolidDownArrow } from 'react-icons/bi';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Menu from "./Menu"



// BiDownArrow, BiSolidDownArrow
export default function NavBar() {
  const [openLinks, setOpenLinks] = useState(false);
  const [openDD, setOpenDD] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  const toggleDropdown = () => {  
    setOpenDD(!openDD);
  };
  return (
    <div className="navbar">
      <Link  className="noHoverEffect" to="/home">
        <div className="leftSide">
          <img src={Logo} alt="" />
        </div> 
      </Link>
      <div className="rightSide">
      <Link  to="/home"> Njoftime </Link>
          <Link to="/about"> 
              About
          </Link>
          <div className="dropdown">
              <span onClick={toggleDropdown}>Fakulteti {openDD ? <BiSolidDownArrow className="dropdown-icon" />:  <BiDownArrow className="dropdown-icon" /> }</span>
              {openDD && (
                <div className="dropdown-content">
                <Link to="/fakulteti/stafi"> Stafi </Link>
                <Link to="/fakulteti/kurset"> Kurset </Link>
                <NavDropdown.Divider />
                <Link to="/fakulteti/departamenti"> Departamentet </Link>
              </div>
              )}
          </div>
          <Link to="/contact"> Contact </Link>
      </div>
      <div className="searchSide">
        <div className="search-input-container">
          <input type="text" id="searchInput" placeholder="Search..." />
          <BsSearch className="search-icon" />
        </div>
      </div>
      <div className="menutSide">
        <button> 
          <VscMenu onClick={toggleNavbar}/>
        </button>
      </div>
      {openLinks && <Menu toggleNavbar={toggleNavbar}/>}
    </div>
  );
}
