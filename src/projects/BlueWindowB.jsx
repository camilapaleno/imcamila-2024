import React from "react";
import {Link} from "react-router-dom";
import bwb01 from "../image/bwb-01.jpg"
import bwb02 from "../image/bwb-02.jpg"
import bwb03 from "../image/bwb-03.jpg"
import bwb04 from "../image/bwb-04.jpg"
import bwb05 from "../image/bwb-05.jpg"

function BlueWindowB() {
  return (
    <>
      <div className='frame'>
        <div className="head">
          <Link to="/home" id="back"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
</Link>
          <div className="info">
            <h1>Blue Window Branding</h1>
            <p>Logo and social media for a boutique hotel in Junquillal, Costa Rica</p>
          </div>
        </div>

        <div className="gallery-wrapper">
          <img src={bwb01} alt="Blue Window Branding - Logo and social media for a boutique hotel in Junquillal, Costa Rica"></img>
          <img src={bwb02} alt="Blue Window Branding - Logo and social media for a boutique hotel in Junquillal, Costa Rica"></img>
          <img src={bwb03} alt="Blue Window Branding - Logo and social media for a boutique hotel in Junquillal, Costa Rica"></img>
          <img src={bwb04} alt="Blue Window Branding - Logo and social media for a boutique hotel in Junquillal, Costa Rica"></img>
          <img src={bwb05} alt="Blue Window Branding - Logo and social media for a boutique hotel in Junquillal, Costa Rica"></img>

        </div>
          

        
      </div>
    </>
  );
}

export default BlueWindowB;