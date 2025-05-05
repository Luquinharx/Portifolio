import React from 'react';
import './Projects.css';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'NextOne E-commerce',
      description: 'E-commerce moderno desenvolvido com JavaScript e Node.js, oferecendo uma experiência de compra intuitiva para camisetas. Interface responsiva com CSS moderno e HTML semântico. Sistema completo de catálogo com gerenciamento de produtos e carrinho de compras integrado ao Firebase.',
      image: '/nextonehub.PNG',
      technologies: ['JavaScript ', 'CSS ', 'HTML ', 'Firebase'],
      liveLink: 'https://nextone-1e5be.web.app/',
      repoLink: 'https://github.com/Luquinharx/loja-camisetas'
    },
    {
      id: 2,
      title: 'GymTask',
      description: 'Aplicativo completo para gestão de academia e atletas de triatlon desenvolvido principalmente em TypeScript. Sistema robusto de gerenciamento de alunos, exercícios e treinos personalizados com Firebase. Dashboard intuitivo para professores com métricas de desempenho em tempo real.',
      image: '/gymtaskhub.PNG',
      technologies: ['TypeScript ', 'React', 'Firebase', 'Node.js'],
      liveLink: 'https://gyntask.vercel.app/',
      repoLink: 'https://github.com/Luquinharx/GymTask'
    },
    {
      id: 3,
      title: 'Portfólio Profissional',
      description: 'Landing page moderna desenvolvida com JavaScript e CSS, apresentando projetos e habilidades profissionais. Utiliza TypeScript para tipagem e HTML semântico. Design elegante com animações suaves, modo escuro e efeito de estrelas no background.',
      image: '/portfolio1.PNG',
      technologies: ['JavaScript ', 'CSS ', 'TypeScript ', 'HTML '],
      liveLink: 'https://portifoliolucasmartins.vercel.app/',
      repoLink: 'https://github.com/Luquinharx/Portifolio'
    }
  ];

  return (
    <section id="projetos" className="section projects">
      <div className="container">
        <h2 className="section-title">Meus Projetos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="projects-cta">
          <a href="#contato" className="btn btn-primary">Entre em Contato</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;