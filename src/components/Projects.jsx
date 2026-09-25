// src/components/Projects.jsx
import React from 'react';
import '../Projects.css';

export default function Projects() {
  const projectList = [
    {
      title: "Lumière Aesthetic Clinic",
      description: "A sleek, fully responsive frontend web application built for an aesthetic clinic, featuring clean UI components, service details, and smooth navigation.",
      techStack: ["HTML", "CSS", "JavaScript", "Netlify"],
      liveLink: "https://lumiere-aesthetic-clinic.netlify.app",
      githubLink: "https://github.com/alinajamil71-source/aesthetic-clinic"
    },
    {
      title: "SafeX Student Benefits Portal",
      description: "Official student benefits portal developed for SafeX Solutions, enabling students to easily view and access special services and portal offers.",
      techStack: ["React", "JavaScript", "CSS3", "Web Integration"],
      liveLink: "https://sdc.safexsolutions.com/student-benefits",
      githubLink: null
    },
    {
      title: "SafeX Student Tracker",
      description: "A real-time GPS tracking web application designed for student pick-and-drop management, integrating interactive Leaflet maps and dynamic route tracking.",
      techStack: ["React", "FastAPI", "Leaflet Maps", "JavaScript"],
      liveLink: null,
      githubLink: "https://github.com/alinajamil71-source/safex-student-tracker.git"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.techStack.map((tech, tIndex) => (
                    <span key={tIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveLink ? (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-btn primary"
                    >
                      Live Demo ↗
                    </a>
                  ) : (
                    <span className="project-btn disabled">Academic Project</span>
                  )}

                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-btn secondary"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}