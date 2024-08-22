import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Github, ExternalLink, Linkedin } from 'lucide-react';
import projects from './projects'
import MovingComponent from 'react-moving-text';
// Home component
const Home = () => (
  <div className="container home-container">
    <nav className="top-nav">
      <MovingComponent
        type="slideInFromLeft"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="forwards"
      >
        <Link to="/projects" className="button">View My Projects</Link>
      </MovingComponent>
      <MovingComponent
        type="slideInFromRight"
        duration="1000ms"
        delay="200ms"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="forwards"
      >
        <a href='https://www.linkedin.com/in/emmanuelade29/' className='button'><Linkedin size={16} /> LinkedIn</a>
      </MovingComponent>
      <MovingComponent
        type="slideInFromRight"
        duration="1000ms"
        delay="400ms"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="forwards"
      >
        <a href='https://github.com/flashdash101' className='button'><Github size={16} /> Github</a>
      </MovingComponent>
    </nav>
    <div className="content">
      <div className="HeaderName">
        <MovingComponent
          type="fadeInFromTop"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="forwards"
        >
          Emmanuel A.
        </MovingComponent>
      </div>
      <div className="Paragraph">
        <MovingComponent
          type="fadeInFromBottom"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="forwards"
        >
          An aspiring student with a deep passion in AI, Machine learning and Data Science, eager to apply theoretical concepts in practical settings
        </MovingComponent>

        <MovingComponent
          type="fadeInFromBottom"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease-out"
          iteration="1"
          fillMode="forwards"
        >
         So give me a call, let me know if you're interested :)
        </MovingComponent>
      </div>
    </div>
  </div>
);


const ProjectCard = ({ project, index }) => (
  <MovingComponent
    type="fadeInFromBottom"
    duration="1000ms"
    delay={`${index * 200}ms`}
    direction="normal"
    timing="ease"
    iteration="1"
    fillMode="forwards"
  >
    <div className="card">
      <div className="card-image">
        <img src={project.image} alt={project.title} className="project-image" />
      </div>
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} /> GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} /> Demo
          </a>
        </div>
      </div>
    </div>
  </MovingComponent>
);

const Projects = () => (
  <div className="content">
    <div className="HeaderName">
      <MovingComponent
        type="fadeInFromTop"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="forwards"
      >
        My Awesome projects
      </MovingComponent>
    </div>
    <div className="projects-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
    <MovingComponent
      type="fadeInFromBottom"
      duration="1000ms"
      delay={`${projects.length * 200 + 200}ms`}
      direction="normal"
      timing="ease"
      iteration="1"
      fillMode="forwards"
    >
      <Link to="/" className="button">
        Back to Home
      </Link>
    </MovingComponent>
  </div>
);

// Main App component
const App = () => (
  <Router>
    <div id="root">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  </Router>
);

export default App;