import React from "react";
import {Link} from "react-router-dom";
import ck01 from "../image/ck-01.png"
import ck02 from "../image/ck-02.png"
import ck03 from "../image/ck-03.png"
import ck04 from "../image/ck-04.png"
import ck05 from "../image/ck-05.png"
import ck06 from "../image/ck-06.png"
import ck07 from "../image/ck-07.png"


function Kitchen() {
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
              <h1>Cozy Kitchen</h1>
              <p>A cute kitchen made in Blender 3D.</p>
            </div>
          </div>

        <div className="gallery-wrapper">
          <img src={ck01} alt="Blender 3D Cycles Cozy Kitchen"></img>
          <img src={ck02} alt="Blender 3D Cycles Cozy Kitchen"></img>
          <img src={ck03} alt="Blender 3D Cycles Cozy Kitchen"></img>
          <img src={ck04} alt="Blender 3D Cycles Cozy Kitchen"></img>
          <img src={ck05} alt="Blender 3D Cycles Cozy Kitchen"></img>
          <img src={ck06} alt="Blender 3D Cycles Cozy Kitchen"></img>
          <img src={ck07} alt="Blender 3D Cycles Cozy Kitchen"></img>
        </div>
          

        
      </div>
    </>
  );
}

export default Kitchen;