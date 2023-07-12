import React from 'react'
import "../styles/Staf.css";
import StaffBackground from "../assets/Staff.jpg";
import StaffDekanat from "../assets/pexels-shahin-khalaji-11697187.jpg";
export default function Staf() {
    return (
      <div className="staf">
        <div
          className="stafTop"
          style={{ backgroundImage: `url(${StaffBackground})` }}
        ><h1 className='caption'>Stafi</h1></div>
        <div className="stafBottom">
          <h1> Dekanati</h1>
          <div className='Dekanati_Kryesore'>
          <div className='Dekanati' style={{ backgroundImage: `url(${StaffBackground},style="width:100%")` }}></div>
         <h3>Assoc.Prof. Elinda Kajo Mece</h3>
         <div className='Dekanati' style={{ backgroundImage: `url(${StaffBackground},style="width:100%")` }}></div>
         <h3>Assoc.Prof. Elinda Kajo Mece</h3>
         <div className='Dekanati' style={{ backgroundImage: `url(${StaffBackground},style="width:100%")` }}></div>
         <h3>Assoc.Prof. Elinda Kajo Mece</h3>
         <a
         href="2021_cv_e_mece.pdf"
          download
         >
         Download Resume
        </a>
        </div>
        </div>
      </div>
    )
  }
 
