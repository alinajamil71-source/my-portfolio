// src/components/Skills.jsx
import React from 'react';
import '../Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      category: "Tools & Workflow",
      skills: ["Git", "GitHub", "VS Code", "Vite", "Netlify"]
    },
    {
      category: "Core Computer Science",
      skills: ["Data Structures", "Algorithms", "Object-Oriented Programming", "Database Systems"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <div key={index} className="skill-card">
              <h3>{cat.category}</h3>
              <div className="badge-container">
                {cat.skills.map((skill, sIndex) => (
                  <span key={sIndex} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}