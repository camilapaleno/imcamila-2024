import React from "react";
import {Link} from "react-router-dom";
import gc01 from "../image/gc-01.jpg"
import gc02 from "../image/gc-02.jpg"
import gc03 from "../image/gc-03.jpg"
import gc04 from "../image/gc-04.jpg"

function GalCo() {
  return (
    <>
      <div className='frame'>
        <div className="head">
          <Link to="/home" id="back"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
</Link>
          <div className="info">
            <h1>Gal & Co</h1>
            <p>Logo and website for a women's boutique in Los Angeles</p>
          </div>
        </div>

        <div className="gallery-wrapper">
          <img src={gc01} alt="Gal & Co - Logo and website for a women's boutique in Los Angeles"></img>
          <img src={gc02} alt="Gal & Co - Logo and website for a women's boutique in Los Angeles"></img>
          <img src={gc03} alt="Gal & Co - Logo and website for a women's boutique in Los Angeles"></img>
          <img src={gc04} alt="Gal & Co - Logo and website for a women's boutique in Los Angeles"></img>
        </div>
          

        
      </div>
    </>
  );
}

export default GalCo;