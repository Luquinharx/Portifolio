import React from 'react';
import './Projects.css';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Uma plataforma de e-commerce completa com carrinho de compras, pagamentos e painel de administração.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: '#',
      repoLink: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas com recursos de arrastar e soltar, notificações e colaboração em equipe.',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      liveLink: '#',
      repoLink: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Site de portfólio responsivo com animações suaves e design moderno.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      liveLink: '#',
      repoLink: '#'
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