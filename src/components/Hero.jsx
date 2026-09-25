// src/components/Hero.jsx
import React from 'react';
import '../Hero.css';
import profilePic from '../assets/profile.jpeg';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Alina Jamil
        </h1>
        <p className="hero-subtitle-role">
          Computer Science Student & Web Developer
        </p>
        <p className="hero-description">
          Building clean, responsive, and modern web applications with React and JavaScript.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        <img src={profilePic} alt="Alina Jamil" className="profile-img" />
      </div>
    </section>
  );
}