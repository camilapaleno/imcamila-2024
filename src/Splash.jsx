import React, { useState, useEffect } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import {Link} from "react-router-dom";
import "./App.css";
import {portfolio} from './Projects';

import logo from './image/logo.png';
import email from './image/email.png';
import lnk from './image/lnk.png';
import downld from './image/downld.png';
import hello from './image/helloimcamila.json';
import resume from './image/camila_paleno-2023_resume.pdf';

function Splash() {


  return (
    <>

      <div className="splash">
        <div className="splash-lottie">
          <Player
            autoplay
            keepLastFrame
            src={hello}
          >
          </Player>
        </div>
        <p>I’m a web designer and developer based in Los Angeles, CA. I specialize in creating and fine-tuning business' online presence through content creation and building websites. I also do art.</p>
        <div className="links">
          <ul>
          <li>
              <Link to={"/home"}>recent projects
              <img src={lnk}></img></Link>
            </li>
            <li>
              <a href={resume} target="_blank">resume
              <img src={downld}></img></a>
            </li>
            <li>
              
              <a href="mailto:hi@imcamila.dev">email
              <img src={email}></img></a>
            </li>
          </ul>
        </div>
      </div>

    </>
  );
}

export default Splash;