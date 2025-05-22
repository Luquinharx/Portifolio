import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Lucas Martins<span className="hero-title-underline"></span>
          </h1>
          <h2 className="hero-subtitle">Desenvolvedor Full Stack</h2>
          <p className="hero-description">
            Construindo aplicações web modernas com foco em experiência do
            usuário e performance
          </p>
          <div className="hero-buttons">
            <a 
              href="https://whatsa.me/5534998791817" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Entre em contato
            </a>
            <a 
              href="https://github.com/Luquinharx" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
            >
              Ver projetos
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-circle">
            <img 
              src="https://github.com/Luquinharx.png"
              alt="Lucas Martins" 
              className="profile-image"
            />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <a href="#sobre">
          <span className="scroll-arrow"></span>
        </a>
      </div>
      <a 
        href="https://whatsa.me/5534998791817" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-button"
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;