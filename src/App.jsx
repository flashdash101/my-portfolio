import React from 'react';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Github, ExternalLink, Linkedin, FlaskConical, Database } from 'lucide-react';
import projects from './projects';
import MovingComponent from 'react-moving-text';
import './styles.css'; 
import TypeWriter from './TypeWriter';



// Profile Image Component
const ProfileImage = () => (
  <MovingComponent
    type="zoomIn"
    duration="1000ms"
    iteration="1"
    className="profile-container"
  >
    <img 
      src="./profilepic.jpeg"
      alt="Emmanuel A."
      className="profile-image"
    />
  </MovingComponent>
);


// Updated Lab Experience component
const LabExperience = () => {
  const labProjects = [
    {
      title: "Geolife Data Analysis",
      tasks: [
        "Time Zone Conversion for 1M+ GPS Points",
        "Beijing Area Traffic Pattern Analysis",
        "User Movement Analytics",
        "Altitude Variation Studies",
        "Distance Traveled Calculations"
      ],
      tech: ["PySpark", "Python", "Spark SQL", "Big Data"],
      metrics: [
        { name: "Data Processed", value: "1GB" },
        // { name: "Unique Users", value: "1,240" },
        { name: "Total Data Points", value: "287M " }
      ],
      github: "https://github.com/flashdash101/Geolife-Data-Analysis",
      relevance: "This analysis of large-scale movement patterns provides valuable insights for urban planning, logistics optimization, and consumer behavior analysis. Businesses can leverage these findings to improve route planning, location-based services, and infrastructure development."
    }
  ];

  return (
    <div className="content lab-container">
      <MovingComponent   type="zoomIn"
      duration="600ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="1"
      >
        <h1 className="section-title">Academic Lab Work</h1>
      </MovingComponent>
      
      <div className="lab-grid">
        {labProjects.map((project, index) => (
          <div key={index} className="lab-card glassmorphic expanded-lab-card">
            <div className="lab-header">
              <FlaskConical className="lab-icon" size={24} />
              <h3>{project.title}</h3>
            </div>
            
            <div className="metrics-grid">
              {project.metrics.map((metric, i) => (
                <div key={i} className="metric-item">
                  <Database size={20} />
                  <span className="metric-value">{metric.value}</span>
                  <span className="metric-name">{metric.name}</span>
                </div>
              ))}
            </div>

                        <div className="task-list">
              <h4>Key Achievements:</h4>
              {project.tasks.map((task, i) => (
                // <MovingComponent key={i} type="fadeIn" duration="500ms" delay={`${i * 100}ms`} fillMode="forwards">
                <div className="task-item" key={i}>
                  <span className="task-bullet">▹</span>
                  {task}
                </div>
                // </MovingComponent>
              ))}
            </div>

            <div className="business-relevance">
              <h4>Business Applications:</h4>
              <p>{project.relevance}</p>
            </div>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>

            {project.github && (
              <div className="lab-github-link">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={18} /> View on GitHub
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      <MovingComponent  type="zoomIn"
        duration="600ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="backwards">
        <Link to="/" className="button gradient-button">
          Back to Home
        </Link>
      </MovingComponent>
    </div>
  );
};
// Home Component
const Home = () => (
  <div className="container home-container">
    {/* Navigation Buttons */}
    <nav className="top-nav">
      <MovingComponent type="zoomIn"
        duration="600ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="backwards">
        <Link to="/projects" className="button large-text">
          <span className="button-icon">🚀</span>
          Projects
        </Link>
      </MovingComponent>

      <MovingComponent  type="zoomIn"
        duration="600ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="backwards">
        <Link to="/lab" className="button large-text">
          <FlaskConical size={20} />
          Academic Lab
        </Link>
      </MovingComponent>

      <MovingComponent type="zoomIn"
        duration="600ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="backwards">
        <a href="https://linkedin.com/in/emmanuelade29" className="button social-button">
          <Linkedin size={20} />
        </a>
      </MovingComponent>

      <MovingComponent type="zoomIn"
        duration="600ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="backwards">
        <a href="https://github.com/flashdash101" className="button social-button">
          <Github size={20} />
        </a>
      </MovingComponent>
    </nav>

    <div className="content-wrapper">
      <div className="text-content">
        <MovingComponent type="zoomIn" duration="1200ms" iteration="1">
          <h1 className="main-title">
            Emmanuel A
            {/* <span className="blinking-cursor">_</span> */}
          </h1>
        </MovingComponent>

        <div className="animated-description">
          {/* <MovingComponent type="zoomIn" duration="1200ms" delay="400ms" iteration="1"> */}
            <p className="main-subtitle">
              <TypeWriter text="An aspiring student with a deep passion in AI, Machine learning and Data Science, eager to apply theoretical concepts in practical settings" />
            </p>
          {/* </MovingComponent> */}
          
          {/* <MovingComponent type="zoomIn" duration="1200ms" delay="800ms" iteration="1"> */}
            <p className="main-subtitle">
              <TypeWriter text="Transforming raw data into meaningful insights through algorithmic innovation " />
              {/* <span className="highlight">algorithmic innovation</span> */}
            </p>
          {/* </MovingComponent> */}
        </div>
      </div>
      
      <ProfileImage />
    </div>
  </div>
);
// New HoverButton component for interactive effects
const HoverButton = ({ children, effect, delay }) => (
  <MovingComponent
    type={effect}
    duration="500ms"
    delay={`${delay}ms`}
    className="hover-transform"
  >
    {children}
  </MovingComponent>
);

// Updated App component with new route
const App = () => (
  <Router>
    <div id="root">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/lab" element={<LabExperience />} />
      </Routes>
    </div>
  </Router>
);

// Additional helper components
const AnimatedHeader = ({ children }) => (
  <MovingComponent
    type="fadeInFromTop"
    duration="1000ms"
    className="main-header"
  >
    {children}
  </MovingComponent>
);

const AnimatedParagraph = ({ children }) => (
  <MovingComponent
    type="fadeInFromBottom"
    duration="1200ms"
    className="animated-text"
  >
    <p>{children}</p>
  </MovingComponent>
);

const SocialLink = ({ href, icon }) => (
  <MovingComponent type="slideInFromRight" duration="800ms" className="social-link">
    <a href={href} className="button social-button">
      {icon}
    </a>
  </MovingComponent>
);

// Keep your existing ProjectCard and Projects components


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
        My projects!
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

// // Main App component
// const App = () => (
//   <Router>
//     <div id="root">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/projects" element={<Projects />} />
//       </Routes>
//     </div>
//   </Router>
// );

export default App;