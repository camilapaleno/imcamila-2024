import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./App.css";
import {portfolio} from './Projects';

import logo from './image/logo.png';
import email from './image/email.png';
import lnk from './image/lnk.png';
import downld from './image/downld.png';

function Splash() {


  return (
    <>

      <div className="header">
        <div className="top">
          <img src={logo}></img>
        </div>

      </div>

      <div className="splash">
        <div className="splash-lottie">
          
        </div>
        <p>I’m a web designer and developer based in Los Angeles, CA. I specialize in creating and fine-tuning business' online presence through content creation and building websites. I also do art.</p>
        <div className="links">
          <ul>
          <li>
              <a>recent projects
              <img src={lnk}></img></a>
            </li>
            <li>
              <a>resume
              <img src={downld}></img></a>
            </li>
            <li>
              
              <a>email
              <img src={email}></img></a>
            </li>
          </ul>
        </div>
      </div>

    </>
  );
}

export default Splash;