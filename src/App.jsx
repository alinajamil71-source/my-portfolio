// src/App.jsx
import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Certifications/>
    </div>
  );
}

export default App;