import React from "react";
import cb01 from "../image/cb-01.png"
import cb02 from "../image/cb-02.png"
import cb03 from "../image/cb-03.png"
import cb04 from "../image/cb-04.png"
import cb05 from "../image/cb-05.png"
import cb06 from "../image/cb-06.png"
import cb07 from "../image/cb-07.png"
import {Link} from "react-router-dom";

function Bathroom() {
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
            <h1>Cozy Bathroom</h1>
            <p>A cute bathroom made in Blender 3D.</p>
          </div>
        </div>

        <div className="gallery-wrapper">
          <img src={cb01} alt="3D Blender Cycles - Cozy Bathroom"></img>
          <img src={cb02} alt="3D Blender Cycles - Cozy Bathroom"></img>
          <img src={cb03} alt="3D Blender Cycles - Cozy Bathroom"></img>
          <img src={cb04} alt="3D Blender Cycles - Cozy Bathroom"></img>
          <img src={cb05} alt="3D Blender Cycles - Cozy Bathroom"></img>
          <img src={cb06} alt="3D Blender Cycles - Cozy Bathroom"></img>
          <img src={cb07} alt="3D Blender Cycles - Cozy Bathroom"></img>
        </div>
          

        
      </div>
    </>
  );
}

export default Bathroom;