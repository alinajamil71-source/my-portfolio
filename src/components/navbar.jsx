// src/components/Navbar.jsx
import React, { useState } from 'react';
import '../Navbar.css';

export default function Navbar() {
  // useState tracks whether the mobile menu is open (true) or closed (false)
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to switch state between true and false
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">AJ</div>

      {/* Dynamic className based on isOpen state */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        <li><a href="#certificates" onClick={() => setIsOpen(false)}>Certificates</a></li>
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </div>
    </nav>
  );
}