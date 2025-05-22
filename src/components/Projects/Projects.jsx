import React from 'react';
import './Projects.css';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'NextOne E-commerce',
      description: 'E-commerce moderno desenvolvido com JavaScript e Node.js, oferecendo uma experiência de compra intuitiva para camisetas. Interface responsiva com CSS moderno e HTML semântico. Sistema completo de catálogo com gerenciamento de produtos e carrinho de compras integrado ao Firebase.',
      images: ['/nextonehub.PNG', '/nextonelogin.PNG'],
      technologies: ['JavaScript', 'CSS', 'HTML', 'Firebase'],
      liveLink: 'https://nextone-1e5be.web.app/',
      repoLink: 'https://github.com/Luquinharx/loja-camisetas'
    },
    {
      id: 2,
      title: 'GymTask',
      description: 'Aplicativo completo para gestão de academia e atletas de triatlon desenvolvido principalmente em TypeScript. Sistema robusto de gerenciamento de alunos, exercícios e treinos personalizados com Firebase. Dashboard intuitivo para professores com métricas de desempenho em tempo real.',
      images: ['/gymtaskhub.PNG', '/gymtasklogin.PNG'],
      technologies: ['TypeScript', 'React', 'Firebase', 'Node.js'],
      liveLink: 'https://gyntask.vercel.app/',
      repoLink: 'https://github.com/Luquinharx/GymTask'
    },
    {
      id: 3,
      title: 'Portfólio Profissional',
      description: 'Landing page moderna desenvolvida com JavaScript e CSS, apresentando projetos e habilidades profissionais. Utiliza TypeScript para tipagem e HTML semântico. Design elegante com animações suaves, modo escuro e efeito de estrelas no background.',
      images: ['/portfolio1.PNG', '/portfolio2.PNG'],
      technologies: ['JavaScript', 'CSS', 'TypeScript', 'HTML'],
      liveLink: 'https://portifoliolucasmartins.vercel.app/',
      repoLink: 'https://github.com/Luquinharx/Portifolio'
    }
  ];

  const certificates = [
    {
      id: 1,
      title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      institution: 'Universidade de Marília – UNIMAR',
      year: '2023',
      image: '/ads.PNG'
    },
    {
      id: 2,
      title: 'Node.JS',
      institution: 'Rocketseat',
      year: '2025',
      image: '/node.PNG'
    },
    {
      id: 3,
      title: 'Git e GitHub',
      institution: 'Fundação Getulio Vargas - FGV',
      year: '2024',
      image: '/git.PNG'
    },
    {
      id: 4,
      title: 'NLW Connect - Fullstack',
      institution: 'Rocketseat',
      year: '2025',
      image: '/nlw.PNG'
    },
    {
      id: 5,
      title: 'Foundational C# with Microsoft',
      institution: 'Microsoft',
      year: '2025',
      image: '/c.PNG'
    },
    {
      id: 6,
      title: 'Introdução á ciência de dados',
      institution: 'Fundação Getulio Vargas - FGV',
      year: '2025',
      image: '/dados.PNG'
    }
  ];

  return (
    <>
      <section id="projetos" className="section projects">
        <div className="container">
          <h2 className="section-title">Meus Projetos</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-images">
                  {project.images.map((image, index) => (
                    <div key={index} className="project-image">
                      <img src={image} alt={`${project.title} - Imagem ${index + 1}`} />
                    </div>
                  ))}
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
        </div>
      </section>

      <section id="certificados" className="section certificates">
        <div className="container">
          <h2 className="section-title">Certificados</h2>
          <div className="certificates-grid">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="certificate-card">
                <div className="certificate-image">
                  <img src={certificate.image} alt={certificate.title} />
                </div>
                <div className="certificate-content">
                  <h3 className="certificate-title">{certificate.title}</h3>
                  <p className="certificate-institution">{certificate.institution}</p>
                  <p className="certificate-year">{certificate.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;