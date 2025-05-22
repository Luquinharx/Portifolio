import React from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="section contact">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <div className="contact-container">
          <div className="contact-info-container">
            <h3 className="contact-subtitle">Informações de Contato</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={20} className="contact-icon" />
                <p>lucasmartinsa3009@gmail.com</p>
              </div>
              <div className="contact-item">
                <Phone size={20} className="contact-icon" />
                <p>(34) 99879-1817</p>
              </div>
              <div className="contact-item">
                <MapPin size={20} className="contact-icon" />
                <p>Minas Gerais, Brasil</p>
              </div>
            </div>
            
            <div className="social-links">
              <h3 className="contact-subtitle">Redes Sociais</h3>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/lqx/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/Luquinharx" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Github size={20} />
                </a>
                <a href="https://www.instagram.com/luquinharx/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <p className="whatsapp-note">
              Precisa de uma resposta rápida? Clique no botão do WhatsApp no canto inferior direito! 😊
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;