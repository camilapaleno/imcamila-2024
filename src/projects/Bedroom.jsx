import React from "react";
import test from "../image/preview-codestack.png"
import cr01 from "../image/cr-01.JPG"
import cr02 from "../image/cr-02.JPG"
import cr03 from "../image/cr-03.PNG"
import cr04 from "../image/cr-04.JPG"
import cr05 from "../image/cr-05.PNG"
import {Link} from "react-router-dom";

function Bedroom() {
  return (
    <>
      <div className='frame'>
        <div className="head">
          <Link to="/home" id="back">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <div className="info">
            <h1>Cozy Bedroom</h1>
            <p>A cute bedroom made in Blender 3D.</p>
          </div>
        </div>

        <div className="gallery-wrapper">
          <img src={cr01}></img>
          <img src={cr02}></img>
          <img src={cr03}></img>
          <img src={cr04}></img>
          <img src={cr05}></img>
        </div>
          

        
      </div>
    </>
  );
}

export default Bedroom;