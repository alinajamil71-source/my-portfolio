// src/components/Certifications.jsx
import React from 'react';
import '../Certifications.css';
import cert1 from '../assets/cert1.jpeg';
import cert2 from '../assets/cert2.jpeg';
import cert3 from '../assets/cert3.jpeg';

export default function Certifications() {
  const certificateList = [
    {
      title: "Web Development Internship",
      issuer: "SafeX Solutions",
      date: "September 2026",
      image: cert1,
      description: "Completed the Skills Development Internship Program focused on frontend web development, UI design, and responsive project implementations."
    },
    {
      title: "Professional Networking for Career Growth",
      issuer: "HP LIFE | HP Foundation",
      date: "September 2026",
      image: cert2,
      description: "Explored strategic networking techniques, personal branding, and digital tools for professional expansion."
    },
    {
      title: "Introduction to Cybersecurity Awareness",
      issuer: "HP LIFE | HP Foundation",
      date: "September 2026",
      image: cert3,
      description: "Gained core knowledge on identifying online threats, data protection best practices, and online security management."
    }
  ];

  return (
    <section id="certificates" className="certifications-section">
      <div className="certifications-container">
        <h2 className="section-title">Certifications </h2>
        <div className="certifications-grid">
          {certificateList.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-img-container">
                <img src={cert.image} alt={cert.title} className="cert-img" />
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <h4 className="cert-issuer">{cert.issuer}</h4>
                <p className="cert-date">{cert.date}</p>
                <p className="cert-description">{cert.description}</p>
                <span className="cert-id">ID: {cert.credentialId}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}