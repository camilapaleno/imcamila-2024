import React from "react";
import {Link} from "react-router-dom";

import kb02 from "../image/kb-02.png"
import kb03 from "../image/kb-03.jpg"

import kb05 from "../image/kb-05.jpg"
import kb06 from "../image/kb-06.jpg"
import kb07 from "../image/kb-07.jpg"
import kb08 from "../image/kb-08.jpg"
import kb09 from "../image/kb-09.jpg"
import kb10 from "../image/kb-10.jpg"
import kb11 from "../image/kb-11.jpg"
import kb12 from "../image/kb-12.jpg"
import kb13 from "../image/kb-13.jpg"
import kb14 from "../image/kb-14.jpg"
import kb15 from "../image/kb-15.jpg"
import kb16 from "../image/kb-16.jpg"
import kb17 from "../image/kb-17.jpg"



function Kickback() {
  return (
    <>
      <div className='frame'>
        <div className="head">
          <Link to="/home" id="back"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        </Link>
          <div className="info">
            <h1>Kickback Photography</h1>
            <p>Photography for a CBD coldbrew company.</p>
          </div>
        </div>

        <div className="photo-wrapper">
        <img src={kb16} alt="Kickback Photography - Photography for a CBD coldbrew company"></img>
        
        <img src={kb13} alt="Kickback Photography - Photography for a CBD coldbrew company"></img>
        <img src={kb10} alt="Kickback Photography - Photography for a CBD coldbrew company"></img>
          <img src={kb14} alt="Kickback Photography - Photography for a CBD coldbrew company"></img>
          
          <img src={kb05} alt="Kickback Photography - Photography for a CBD coldbrew company"></img>
          <img src={kb03} alt="Kickback Photography - Photography for a CBD coldbrew company"></img>
          <img src={kb02} alt="Kickback Photography - Photography for a CBD coldbrew company"></img>
          

          
          <img src={kb06} alt="Kickback Photography - Photography for a CBD coldbrew company"></img>
          <img src={kb07} alt="Kickback Photography - Photography for a CBD coldbrew company"></img>
          <img src={kb17} alt="Kickback Photography - Photography for a CBD coldbrew company"></img>
          <img src={kb08} alt="Kickback Photography - Photography for a CBD coldbrew company"></img>
          <img src={kb09} alt="Kickback Photography - Photography for a CBD coldbrew company"></img>
          
          <img src={kb11} alt="Kickback Photography - Photography for a CBD coldbrew company"></img>
          <img src={kb12} alt="Kickback Photography - Photography for a CBD coldbrew company"></img>
          
          <img src={kb15} alt="Kickback Photography - Photography for a CBD coldbrew company"></img>
          


        </div>
      </div>
    </>
  );
}

export default Kickback;