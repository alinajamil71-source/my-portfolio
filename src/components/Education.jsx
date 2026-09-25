// src/components/Education.jsx
import React from 'react';
import '../Education.css';

export default function Education() {
  const educationList = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Edwardes College peshawar",
      duration: "In Progress",
      description: "Focusing on core computer science fundamentals including Data Structures, Algorithms, Web Development, and Database Systems."
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {educationList.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <h3>{edu.degree}</h3>
                <span className="education-duration">{edu.duration}</span>
              </div>
              <h4 className="institution">{edu.institution}</h4>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}