import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Github, ExternalLink, Linkedin, FlaskConical, Dna, Database, BarChart3, BrainCircuit, TrendingUp, ArrowRight, ArrowLeft, Terminal } from 'lucide-react';
import projects from './projects';
import NeuralNetwork from './NeuralNetwork';
import './brutalist.css';
import './brutalist-lab.css';

// Profile Image Component - Top Left Position
const ProfileImage = () => (
  <div className="profile-container">
    <img 
      src="./profilepic.jpeg"
      alt="Emmanuel A."
      className="profile-image"
    />
    <div style={{
      marginTop: '1rem',
      fontSize: '0.7rem',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontWeight: '700'
    }}>
      /01
    </div>
  </div>
);


// Brutalist Lab Experience component
const LabExperience = () => {
  const labProjects = [
    {
      title: "Structural Biology Generative AI Evaluation",
      tasks: [
        "Led an 8-person team to build a diagnostic pipeline evaluating AlphaFold geometric reliability against PDB ground truths",
        "Engineered a custom diagonal extraction algorithm with NumPy/SciPy to produce rotationally invariant distance matrices for sequence-specific error mapping",
        "Implemented a mu + 2sigma anomaly threshold to detect geometric hallucinations (atomic clashes and bond violations), including high-confidence models (>90% pLDDT)",
        "Built an interactive 9-component Plotly dashboard mapping prediction errors to protein secondary structures (helix, sheet, loop)"
      ],
      tech: ["Python", "BioPython", "Plotly", "NumPy/SciPy", "AlphaFold", "Bioinformatics"],
      metrics: [
        { name: "Team Size", value: "8" },
        { name: "Dashboard Components", value: "9" }
      ],
      github: "https://github.com/flashdash101",
      relevance: "Applied ML and computational biology methods to evaluate structure-generation reliability, turning complex protein diagnostics into actionable visual insights for research workflows."
    },
    {
      title: "Geolife Data Analysis",
      tasks: [
        "Time Zone Conversion for 1M+ GPS Points",
        "Beijing Area Traffic Pattern Analysis using PySpark",
        "User Movement Analytics & Behavioral Modeling",
        "Altitude Variation Studies with Statistical Methods",
        "Distance Traveled Calculations & Spatial Analysis"
      ],
      tech: ["PySpark", "Python", "Spark SQL", "Big Data", "Geospatial"],
      metrics: [
        { name: "Data Processed", value: "1GB" },
        { name: "Data Points", value: "287M" }
      ],
      github: "https://github.com/flashdash101/Geolife-Data-Analysis",
      relevance: "Large-scale geospatial analysis demonstrating expertise in big data processing, distributed computing, and extracting business insights from location data. Applicable to urban planning, supply chain optimization, and location-based analytics."
    }
  ];

  return (
    <div className="lab-container">
      <h1 className="section-title">
        <Terminal size={28} style={{ marginRight: '1rem', verticalAlign: 'middle' }} />
        RESEARCH_
      </h1>
      <p style={{ 
        color: 'var(--text-muted)', 
        fontSize: '0.9rem',
        marginBottom: '3rem',
        maxWidth: '600px',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        Academic research projects // Data engineering // Analytics
      </p>
      
      <div className="lab-grid">
        {labProjects.map((project, index) => (
          <div key={index} className="lab-card expanded-lab-card">
            <div className="lab-header">
              {index === 0 ? <Dna className="lab-icon" size={24} /> : <Database className="lab-icon" size={24} />}
              <h3>{project.title}</h3>
            </div>
            
            <div className="metrics-grid">
              {project.metrics.map((metric, i) => (
                <div key={i} className="metric-item">
                  <span className="metric-value">{metric.value}</span>
                  <span className="metric-name">{metric.name}</span>
                </div>
              ))}
            </div>

            <div className="task-list">
              <h4>// Key Achievements</h4>
              {project.tasks.map((task, i) => (
                <div className="task-item" key={i}>
                  <span className="task-bullet">{String(i + 1).padStart(2, '0')}</span>
                  {task}
                </div>
              ))}
            </div>

            <div className="business-relevance">
              <h4>// Business Impact</h4>
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
                  <Github size={16} /> VIEW_SOURCE
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem' }}>
        <Link to="/" className="button gradient-button">
          <ArrowLeft size={16} /> BACK_HOME
        </Link>
      </div>
    </div>
  );
};
// Brutalist Home Component
const Home = () => (
  <div className="container home-container">
    {/* Fixed Navigation */}
    <nav className="top-nav">
      <Link to="/projects" className="button large-text">
        PROJECTS_
      </Link>
      <Link to="/lab" className="button large-text">
        RESEARCH_
      </Link>
      <a href="https://linkedin.com/in/emmanuelade29" className="button social-button" aria-label="LinkedIn">
        <Linkedin size={18} />
      </a>
      <a href="https://github.com/flashdash101" className="button social-button" aria-label="GitHub">
        <Github size={18} />
      </a>
    </nav>

    <div className="hero-split-container">
      {/* Left Side - Content */}
      <div className="hero-content-left">
        {/* Profile Image - Top Left */}
        <ProfileImage />
        
        {/* Main Content */}
        <div className="text-content">
          <div style={{ 
            fontSize: '0.75rem', 
            color: 'var(--accent-highlight)',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            fontWeight: '700'
          }}>
            Data Scientist // ML Engineer
          </div>
          
          <h1 className="main-title">
            EMMANUEL_
          </h1>

          <p className="main-subtitle">
            Masters of Engineering, Computer Science student at the University of Liverpool, specialising in Data Science and Software Engineering. Experienced in building end to end Full Stack and Machine Learning pipelines, translating complex, multi-source datasets into clear, actionable insights. Eager to contribute to professional teams working on problems with real world impact.
          </p>

          <div
            style={{
              marginTop: '1.5rem',
              borderTop: 'var(--border-thin)',
              borderBottom: 'var(--border-thin)',
              padding: '1.25rem 0'
            }}
          >
            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--accent-highlight)',
                marginBottom: '0.65rem'
              }}
            >
              Experience
            </div>
            <h3
              style={{
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                margin: '0 0 0.3rem 0'
              }}
            >
              Project Manager &amp; Data Scientist | Structural Biology AI Research, University of Liverpool
            </h3>
            <p
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
                margin: '0 0 0.9rem 0'
              }}
            >
              Feb 2026 - May 2026
            </p>
            <ul
              style={{
                margin: '0',
                paddingLeft: '1rem',
                display: 'grid',
                gap: '0.6rem',
                color: 'var(--text-secondary)'
              }}
            >
              <li>
                Led an 8-person Agile team across fortnightly sprints, managing a Jira board, delegating tasks, and tracking milestones while delivering a computational pipeline to evaluate AlphaFold predictions against PDB ground-truth data.
              </li>
              <li>
                Held regular supervisory meetings with Dr. Viktor Zamaraev and Dr. Olga Anosova, translating research requirements into sprint objectives across algorithm design, data acquisition, and dashboard development.
              </li>
              <li>
                Organised and maintained the project Gantt chart, coordinated roles across data science, algorithm development, statistical analysis, and QA, and oversaw version control strategy via Git.
              </li>
            </ul>

            <h3
              style={{
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                margin: '1.25rem 0 0.3rem 0'
              }}
            >
              Data Scientist &amp; AI Evaluator | Data Annotation (Remote)
            </h3>
            <p
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
                margin: '0 0 0.9rem 0'
              }}
            >
              March 2026 - Present
            </p>
            <ul
              style={{
                margin: '0',
                paddingLeft: '1rem',
                display: 'grid',
                gap: '0.6rem',
                color: 'var(--text-secondary)'
              }}
            >
              <li>
                Evaluated and refined high-complexity AI-generated code across Python, SQL, and R, performing rigorous debugging, logic verification, and RLHF-based feedback to improve model accuracy and rubric alignment by 15% across 75+ technical prompts.
              </li>
              <li>
                Engineered and stress-tested adversarial prompts and edge-case scenarios to assess LLM robustness within data science workflows, identifying 30+ hallucination and reasoning failure modes that improved response reliability.
              </li>
              <li>
                Collaborated with reviewers to resolve ambiguous evaluation cases, reducing rework by 16% and sustaining a 92% quality score across 80+ completed tasks.
              </li>
            </ul>
          </div>
          
          {/* Expertise Areas */}
          <div style={{ 
            display: 'flex', 
            gap: '0', 
            marginTop: '3rem', 
            flexWrap: 'wrap' 
          }}>
            <div className="expertise-badge" data-tools="Pandas / SQL / Spark">
              <BarChart3 size={20} />
              <span className="expertise-text" data-default="Data Analytics">Data Analytics</span>
            </div>
            <div className="expertise-badge" style={{ marginLeft: '-1px' }} data-tools="Scikit-Learn / TensorFlow / PyTorch">
              <BrainCircuit size={20} />
              <span className="expertise-text" data-default="Machine Learning">Machine Learning</span>
            </div>
            <div className="expertise-badge" style={{ marginLeft: '-1px' }} data-tools="XGBoost / Random Forest / Neural Networks">
              <TrendingUp size={20} />
              <span className="expertise-text" data-default="Predictive Models">Predictive Models</span>
            </div>
          </div>

          {/* Stats Row */}
          <div style={{ 
            display: 'flex', 
            gap: '0', 
            marginTop: '3rem',
            borderTop: 'var(--border-thin)',
            paddingTop: '2rem'
          }}>
            <div style={{ 
              padding: '0 2rem 0 0',
              // borderRight: 'var(--border-thin)'
            }}>
              {/* <div style={{ 
                fontSize: '2rem', 
                fontWeight: '900',
                color: 'var(--text-primary)'
              }}>03</div>
              <div style={{ 
                fontSize: '0.7rem', 
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>Projects</div> */}
            </div>
            <div >
              {/* <div style={{ 
                fontSize: '2rem', 
                fontWeight: '900',
                color: 'var(--text-primary)'
              }}>287M+</div>
              <div style={{ 
                fontSize: '0.7rem', 
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>Data Points</div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - 3D Neural Network */}
      <div className="hero-neural-right">
        <NeuralNetwork />
      </div>
    </div>
  </div>
);
// Brutalist Project Card
const ProjectCard = ({ project, index }) => (
  <div className="card" style={{ marginBottom: '0' }}>
    <div className="card-image">
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
        style={project.imageScale ? { transform: `scale(${project.imageScale})` } : undefined}
      />
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        background: 'var(--bg-primary)',
        padding: '0.5rem 1rem',
        fontSize: '0.7rem',
        fontWeight: '900',
        color: 'var(--text-primary)',
        border: 'none',
        letterSpacing: '0.1em'
      }}>
        /{String(index + 1).padStart(2, '0')}
      </div>
      {project.category && (
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          background: 'var(--accent-highlight)',
          padding: '0.4rem 0.8rem',
          fontSize: '0.65rem',
          fontWeight: '900',
          color: 'var(--bg-primary)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          {project.category}
        </div>
      )}
    </div>
    <div className="card-content">
      <h3>
        {project.title.toUpperCase()}_
      </h3>
      <p>{project.description}</p>
      
      {project.metrics && (
        <div style={{ 
          display: 'flex', 
          gap: '0', 
          margin: '1rem 0',
          borderTop: 'var(--border-thin)',
          borderBottom: 'var(--border-thin)',
          padding: '1rem 0'
        }}>
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} style={{ 
              paddingRight: '1.5rem',
              marginRight: '1.5rem',
              borderRight: 'var(--border-thin)'
            }}>
              <span style={{ 
                fontSize: '1.2rem', 
                fontWeight: '900',
                color: 'var(--accent-highlight)',
                display: 'block'
              }}>{value}</span>
              <span style={{ 
                fontSize: '0.65rem', 
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>{key}</span>
            </div>
          ))}
        </div>
      )}
      
      <div className="tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>
      <div className="links">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-secondary">
          <Github size={14} /> SOURCE_
        </a>
        {project.pageRoute && (
          <Link to={project.pageRoute} className="link-primary">
            <ArrowRight size={14} /> VIEW_
          </Link>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-primary">
            <ExternalLink size={14} /> DEMO_
          </a>
        )}
      </div>
    </div>
  </div>
);

// Brutalist Projects Page
const Projects = () => (
  <div className="content" style={{ padding: '100px 2rem 2rem 2rem' }}>
    <h2 className="section-title">
      PROJECTS_
    </h2>
    <p style={{ 
      color: 'var(--text-muted)', 
      fontSize: '0.9rem',
      marginBottom: '3rem',
      maxWidth: '600px',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }}>
      End-to-end machine learning solutions // Predictive analytics // Data applications
    </p>
    
    <div className="projects-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
    
    <div style={{ marginTop: '3rem' }}>
      <Link to="/" className="button gradient-button">
        <ArrowLeft size={16} /> BACK_HOME
      </Link>
    </div>
  </div>
);

const GreenParadoxProject = () => {
  const embeddedPath = `${import.meta.env.BASE_URL}GreenParadox.html`;

  return (
    <div
      className="content"
      style={{
        padding: '100px 1rem 2rem 1rem',
        width: 'min(96vw, 1200px)',
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      <h2 className="section-title">GREEN_HOUSE_PARADOX_</h2>
      <p
        style={{
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
          marginBottom: '2rem',
          maxWidth: '760px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
      >
        Spatial analysis dashboard // Embedded project view
      </p>

      <div
        className="card"
        style={{ padding: '0.5rem', marginBottom: '1.5rem', minHeight: '78vh', width: '100%' }}
      >
        <iframe
          src={embeddedPath}
          title="Green House Paradox"
          style={{ width: '100%', height: '75vh', border: 'none' }}
        />
      </div>

      <div className="links" style={{ marginBottom: '2rem' }}>
        <a
          href="https://github.com/flashdash101/Green-House-Paradox"
          target="_blank"
          rel="noopener noreferrer"
          className="link-secondary"
        >
          <Github size={14} /> SOURCE_
        </a>
        <a href={embeddedPath} target="_blank" rel="noopener noreferrer" className="link-primary">
          <ExternalLink size={14} /> OPEN_FULL_PAGE_
        </a>
      </div>

      <Link to="/projects" className="button gradient-button">
        <ArrowLeft size={16} /> BACK_PROJECTS
      </Link>
    </div>
  );
};

// Main App
const App = () => (
  <Router>
    <div id="root">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/green-house-paradox" element={<GreenParadoxProject />} />
        <Route path="/lab" element={<LabExperience />} />
      </Routes>
    </div>
  </Router>
);

export default App;