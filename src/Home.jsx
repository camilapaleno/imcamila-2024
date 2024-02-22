import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./App.css";
import {portfolio} from './Projects';

import logo from './image/logo.png';
import resume from './image/resume.png';
import github from './image/github.png';
import codepen from './image/codepen.png';
import behance from './image/behance.png';
import instagram from './image/instagram.png';
import linkedin from './image/linkedin.png';
import email from './image/email.png';
import lnk from './image/lnk.png';
import downld from './image/downld.png';

function Home() {
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
          <h1>hello! my name is Camila</h1>
          <img src={logo}></img>
        </div>

        <div className="links">
          <ul>
            <li>
              <a>resume
              <img src={downld}></img></a>
            </li>
            <li>
              <a>github
              <img src={lnk}></img></a>
            </li>
            <li>
              <a>insta
              <img src={lnk}></img></a>
            </li>
            <li>
              <a>linkedin
              <img src={lnk}></img></a>
            </li>
            <li>
              
              <a>email
              <img src={email}></img></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="portfolio">
        <div className="portfolio__header">
          <div className="type">
            <h2>&lt;div className=“projects”&gt;</h2>
          </div>
          
        </div>
        <div className="portfolio__labels">
          <a href="/#" active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </a>
          <a
            href="/#"
            active={filter === "websites"}
            onClick={() => setFilter("websites")}
          >
            Websites
          </a>
          <a
            href="/#"
            active={filter === "frontend"}
            onClick={() => setFilter("frontend")}
          >
            Frontend Development
          </a>
          <a
            href="/#"
            active={filter === "3d"}
            onClick={() => setFilter("3d")}
          >
            3D Modeling
          </a>
          <a
            href="/#"
            active={filter === "branding"}
            onClick={() => setFilter("branding")}
          >
            Branding
          </a>
          <a
            href="/#"
            active={filter === "squarespace"}
            onClick={() => setFilter("squarespace")}
          >
            Squarespace
          </a>
        </div>

        <div className="portfolio__container">
          <ul>
            {projects.map(item =>
              item.filtered === true ? 
              <li key={item.name} className='card'>
                  <Link className='card_path' to={item.source}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <div className="card_preview">
                      <img src={item.preview} />
                      <img src={item.overlay} />
                    </div>
                    
                    <span>{item.tools}</span>
                  </Link>
              </li> : ""
            )} 
          </ul>
        </div> 
        <div className="portfolio__closer">
          <h2>&lt;/div&gt;</h2>
        </div>       
      </div>

    </>
  );
}

export default Home;