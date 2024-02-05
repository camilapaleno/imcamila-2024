import React, { useState, useEffect } from "react";
import {  BrowserRouter,  Routes,  Route} from "react-router-dom";
import "./App.css";
import {portfolio} from './Projects';

import resume from './image/resume.png';
import github from './image/github.png';
import codepen from './image/codepen.png';
import behance from './image/behance.png';
import instagram from './image/instagram.png';
import linkedin from './image/linkedin.png';
import email from './image/email.png';

function App() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);

  return (
    <>
      <div className="header">
        <div className="top">
          <h1>Hi! <span>My name is</span> Camila</h1>
          <p>I live in Los Angeles and primarily work as a frontend web developer. </p>
        </div>

        <div className="links">
          <ul>
            <li>
              <img src={resume}></img>
              <a>Resume</a>
            </li>
            <li>
              <hr></hr>
            </li>
            <li>
              <img src={github}></img>
              <a>Github</a>
            </li>
            <li>
              <img src={codepen}></img>
              <a>Codepen</a>
            </li>
            <li>
              <img src={behance}></img>
              <a>Behance</a>
            </li>
            <li>
              <hr></hr>
            </li>
            <li>
              <img src={instagram}></img>
              <a>Instagram</a>
            </li>
            <li>
              <img src={linkedin}></img>
              <a>Linkedin</a>
            </li>
            <li>
              <img src={email}></img>
              <a>Email</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="portfolio">
        <div className="portfolio__labels">
          <a href="/#" active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </a>
          <a
            href="/#"
            active={filter === "frontend"}
            onClick={() => setFilter("frontend")}
          >
            Frontend
          </a>
          <a
            href="/#"
            active={filter === "mobile"}
            onClick={() => setFilter("mobile")}
          >
            Mobile
          </a>
          <a
            href="/#"
            active={filter === "ux-ui"}
            onClick={() => setFilter("ux-ui")}
          >
            UX/UI
          </a>
          <a
            href="/#"
            active={filter === "others"}
            onClick={() => setFilter("others")}
          >
            Others
          </a>
        </div>

        <div className="portfolio__container">
          <ul>
            {projects.map(item =>
              item.filtered === true ? 
              <li key={item.name} className='card'>
                  <a className='card_path' href={item.source}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <img src={item.preview} />
                    <span>{item.tools}</span>
                  </a>
              </li> : ""
            )} 
          </ul>
        </div>        
      </div>
    </>
  );
}

export default App;