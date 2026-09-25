// src/components/About.jsx
import React from 'react';
import '../About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <p className="about-description">
          I am a passionate Computer Science student and web developer with a strong focus on building user-friendly, high-performance web applications. I enjoy turning complex problems into simple, beautiful, and intuitive designs using modern technologies like React, JavaScript, HTML, and CSS.
        </p>
        
        <div className="about-highlights">
          <div className="highlight-card">
            <h3>Education</h3>
            <p>BS in Computer Science</p>
          </div>
          <div className="highlight-card">
            <h3>Focus Area</h3>
            <p>Frontend Web Development</p>
          </div>
          <div className="highlight-card">
            <h3>Core Tech</h3>
            <p>React, JavaScript, HTML/CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
}