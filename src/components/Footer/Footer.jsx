import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-copyright">
          &copy; {currentYear} <span className="footer-brand">Code by LQX</span>. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;