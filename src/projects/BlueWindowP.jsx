import React from "react";


function BlueWindowP() {
  return (
    <>
      <div className='frame'>
        <div className="head">
          <Link to="/home" id="back"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        </Link>
          <div className="info">
            <h1>Blue Window Photography</h1>
            <p>Photography for a boutique hotel in Junquillal, Costa Rica</p>
          </div>
        </div>

        <div className="gallery-wrapper">


        </div>
      </div>
    </>
  );
}

export default BlueWindowP;