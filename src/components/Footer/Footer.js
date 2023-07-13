import React from 'react'
import styles from"./Footer.css";
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { TfiYoutube } from 'react-icons/tfi';
import { FaInstagram } from 'react-icons/fa';



export default function Footer() {
  return ( 

    <footer>
      <div class="footer">
        <div class="row">
          <ImFacebook/>
          <FaInstagram/>
          <TfiYoutube/>
          <BsTwitter/>

        </div>
        
        <div class="row">
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>
        
        <div class="row">
          Copyright © 2023, All Right Reserved FTI 
        </div>
      </div>
    </footer>
    
  );
}
