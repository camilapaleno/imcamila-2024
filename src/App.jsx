import React from "react";
import { Routes,  Route } from "react-router-dom";
import './App.css';
import Splash from "./Splash";
import Home from "./Home";

import NeiHome from "./projects/NeiHome";
import Devon from "./projects/Devon";
import Perspective from "./projects/Perspective"
import DiveDeeper from "./projects/DiveDeeper";
import CodeStack from "./projects/CodeStack";
import Linked from "./projects/Linked";
import Mango from "./projects/Mango";
import Portfolio21 from "./projects/Portfolio21";
import Portfolio22 from "./projects/Portfolio22";
import Portfolio23 from "./projects/Portfolio23";
import BlueWindowS from "./projects/BlueWindowS";
import Sage from "./projects/Sage";
import ATD from "./projects/ATD";
import NeiTmip from "./projects/NeiTmip";
import NeiEncore from "./projects/NeiEncore";
import NeiMpp from "./projects/NeiMpp";

import Kitchen from "./projects/Kitchen";
import Bedroom from "./projects/Bedroom";
import Bathroom from "./projects/Bathroom";
import BlueWindowB from "./projects/BlueWindowB";
import GalCo from "./projects/GalCo";

import Kickback from "./projects/Kickback";


export default function App() {

  return (
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />

        <Route path="/neuroscience-education-institute-home" element={<NeiHome />} />
        <Route path="/neuroscience-education-institute-tmip" element={<NeiTmip />} />
        <Route path="/neuroscience-education-institute-mpp" element={<NeiMpp />} />
        <Route path="/neuroscience-education-institute-encore" element={<NeiEncore />} />
        <Route path="/devon-donis" element={<Devon />} />
        <Route path="/perspective" element={<Perspective />} />
        <Route path="/dive-deeper" element={<DiveDeeper />} />
        <Route path="/code-stack" element={<CodeStack />} />
        <Route path="/linked" element={<Linked />} />
        <Route path="/mango-mobile-development" element={<Mango />} />
        <Route path="/portfolio-2021" element={<Portfolio21 />} />
        <Route path="/portfolio-2022" element={<Portfolio22 />} />
        <Route path="/portfolio-2023" element={<Portfolio23 />} />
        <Route path="/blue-window-website" element={<BlueWindowS />} />
        <Route path="/sage-social" element={<Sage />} />
        <Route path="/atd-ventures" element={<ATD />} />
        <Route path="/cozy-kitchen" element={<Kitchen />} />
        <Route path="/cozy-bedroom" element={<Bedroom />} />
        <Route path="/cozy-bathroom" element={<Bathroom />} />
        <Route path="/blue-window-branding" element={<BlueWindowB />} />
        <Route path="/gal-co" element={<GalCo />} />
        <Route path="/kickback-coldbrew" element={<Kickback />} />
      </Routes>

  );
}