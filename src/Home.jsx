import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./App.css";
import {portfolio} from './Projects';
import resume from './image/camila_paleno-2023_resume.pdf';


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
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 359.54 250.73" >

<path className="st0" d="M93.81,15.11c-17.43,0.22-30.45-2.24-41.7,9.27c-10.42,10.65-1.49,58.2-6.94,70.99
	C35.67,117.66,6.4,125.36,6.4,125.36s36.32,11.05,39.1,31.58c3.61,26.64-3.16,43.25,4.6,64.08c5.76,15.46,29.52,11.54,43.71,11.54"
	/>
<path className="st0" d="M265.19,16.95c17.43,0.22,30.45-2.24,41.7,9.27c10.42,10.65,1.49,58.2,6.94,70.99
	c9.51,22.29,38.77,29.98,38.77,29.98s-36.32,11.05-39.1,31.58c-3.61,26.64,3.16,43.25-4.6,64.08
	c-5.76,15.46-29.52,11.54-43.71,11.54"/>
<path className="st0" d="M124.5,120.72c-1.78,69.51,116.06,72.72,116.06,0"/>
<path className="st0" d="M139.87,76.07c0-5.11,8.39-4.59,8.39-0.13C148.27,82.67,139.87,80.86,139.87,76.07z"/>
<path className="st0" d="M193.87,76.07c0-5.11,8.39-4.59,8.39-0.13C202.27,82.67,193.87,80.86,193.87,76.07z"/>
</svg>


        </div>

        <div className="links">
          <ul>
            <li>
              <a href={resume} target="_blank">resume
              <svg className="dwnld" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 227.71 225.85">
                <polyline class="st0" points="14.24,15.08 214.41,15.08 214.41,210.39 "/>  
                <line class="st0" x1="14.24" y1="210.39" x2="214.41" y2="15.08"/>
              </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/camilapaleno" target="_blank">github
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 227.71 225.85">
                <polyline class="st0" points="14.24,15.08 214.41,15.08 214.41,210.39 "/>  
                <line class="st0" x1="14.24" y1="210.39" x2="214.41" y2="15.08"/>
              </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/camilawebdev/" target="_blank">insta
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 227.71 225.85">
                <polyline class="st0" points="14.24,15.08 214.41,15.08 214.41,210.39 "/>  
                <line class="st0" x1="14.24" y1="210.39" x2="214.41" y2="15.08"/>
              </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/camilapaleno/" target="_blank">linkedin
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 227.71 225.85">
                <polyline class="st0" points="14.24,15.08 214.41,15.08 214.41,210.39 "/>  
                <line class="st0" x1="14.24" y1="210.39" x2="214.41" y2="15.08"/>
              </svg>
              </a>
            </li>
            <li>
              <a href="mailto:hi@imcamila.dev">email
              <svg className="eml" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 227.71 225.85">
                <polyline class="st0" points="14.24,15.08 214.41,15.08 214.41,210.39 "/>  
                <line class="st0" x1="14.24" y1="210.39" x2="214.41" y2="15.08"/>
              </svg>
              </a>
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
          <a 
            active={filter === "all"} 
            onClick={() => setFilter("all")}
            className={filter === "all" ? 'selected-label' :'default-label'}
          >
            All
          </a>
          <a
            active={filter === "websites"}
            onClick={() => setFilter("websites")}
            className={filter === "websites" ? 'selected-label' :'default-label'}
          >
            Websites
          </a>
          <a
            active={filter === "frontend"}
            onClick={() => setFilter("frontend")}
            className={filter === "frontend" ? 'selected-label' :'default-label'}
          >
            Frontend Development
          </a>
          <a
           
            active={filter === "3d"}
            onClick={() => setFilter("3d")}
            className={filter === "3d" ? 'selected-label' :'default-label'}
          >
            3D Modeling
          </a>
          <a
            
            active={filter === "branding"}
            onClick={() => setFilter("branding")}
            className={filter === "branding" ? 'selected-label' :'default-label'}
          >
            Branding
          </a>
          <a
            
            active={filter === "squarespace"}
            onClick={() => setFilter("squarespace")}
            className={filter === "squarespace" ? 'selected-label' :'default-label'}
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