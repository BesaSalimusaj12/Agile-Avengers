import React, { useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { BiDownArrow } from 'react-icons/bi';
import { BiSolidDownArrow } from 'react-icons/bi';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Menu(props) {
    const {toggleNavbar} = props;
    const [openDD, setOpenDD] = useState(false);

    const handleMenuClick = () => {
        toggleNavbar();
    };

    const toggleDropdown = () => {  
      setOpenDD(!openDD);
    };
  return (
    <div className={`background`}>
        <div onClick={handleMenuClick} className="rightTransparent"></div>
        <div className="leftMenu">
            <div className="closeDiv" >
                <div className="emptyDiv"></div>
                <IoClose onClick={handleMenuClick} className="closeIcon"/>
            </div>
            <div >
            <Link onClick={handleMenuClick} to="/home"> Libraria </Link>
                <Link onClick={handleMenuClick} to="/about"> 
                    Alumni
                </Link>
                <Link onClick={handleMenuClick} to="/contact"> Studimet Jashte</Link>
            </div>
            <div className="dropdown ddmargin">
                    <span onClick={toggleDropdown}>Pranimet {openDD ? <BiSolidDownArrow className="dropdown-Icon" />:  <BiDownArrow className="dropdown-Icon" /> }</span>
                    {openDD && (
                        <div className="dropdown-content">
                        <Link onClick={handleMenuClick} to="/fakulteti/stafi"> Aplikimi </Link>
                        <Link onClick={handleMenuClick} to="/fakulteti/kurset"> Ndihme Ekonomike </Link>
                        <NavDropdown.Divider />
                        <Link onClick={handleMenuClick} to="/fakulteti/departamenti"> Vizitioni Kampusin </Link>
                    </div>
                    )}
            </div>
        </div>
    </div>
    );
}
