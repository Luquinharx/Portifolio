import React from 'react';
import './Skills.css';
import { 
  Code2, 
  Server, 
  Database,
  FileJson,
  Blocks,
  Braces,
  FileCode2,
  Flame,
  Layout,
  Box,
  Users
} from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: <Code2 size={24} /> },
    { name: 'Node.js', icon: <Server size={24} /> },
    { name: 'Next.js', icon: <Blocks size={24} /> },
    { name: 'React', icon: <Braces size={24} /> },
    { name: 'TypeScript', icon: <FileJson size={24} /> },
    { name: 'Tailwind CSS', icon: <Layout size={24} /> },
    { name: 'CSS3', icon: <Box size={24} /> },
    { name: 'HTML5', icon: <FileCode2 size={24} /> },
    { name: 'Firebase', icon: <Flame size={24} /> },
    { name: 'SQL', icon: <Database size={24} /> },
    { name: 'MongoDB', icon: <Database size={24} /> },
    { name: 'Scrum', icon: <Users size={24} /> }
  ];

  return (
    <section id="habilidades" className="section skills">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;