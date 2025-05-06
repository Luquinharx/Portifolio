import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#home" className="logo">Code by Lucas Martins</a>
        
        <div className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item"><a href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre</a></li>
            <li className="nav-item"><a href="#habilidades" onClick={() => setMobileMenuOpen(false)}>Habilidades</a></li>
            <li className="nav-item"><a href="#projetos" onClick={() => setMobileMenuOpen(false)}>Projetos</a></li>
            <li className="nav-item"><a href="#certificados" onClick={() => setMobileMenuOpen(false)}>Certificados</a></li>
            <li className="nav-item"><a href="#contato" onClick={() => setMobileMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;