import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="sobre" className="section about">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Olá! Sou um desenvolvedor Full Stack apaixonado por criar soluções web inovadoras e eficientes. 
              Com experiência em desenvolvimento front-end e back-end, estou sempre buscando aprender novas 
              tecnologias e aprimorar minhas habilidades.
            </p>
            <p>
              Minha jornada na programação começou com HTML, CSS e JavaScript, e desde então tenho expandido 
              meu conhecimento para incluir frameworks modernos como React, Next.js, e tecnologias de back-end
              como Node.js.
            </p>
            <p>
              Acredito que o bom design e a experiência do usuário são tão importantes quanto o código bem escrito.
              Meu objetivo é criar aplicações que não apenas funcionem bem, mas também proporcionem uma
              experiência agradável e intuitiva para os usuários.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Anos de Experiência</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projetos Concluídos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Tecnologias Dominadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;