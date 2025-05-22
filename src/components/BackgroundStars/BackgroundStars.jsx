import React, { useEffect, useRef } from 'react';
import './BackgroundStars.css';

const BackgroundStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', setCanvasDimensions);
    setCanvasDimensions();
    
    // Star properties
    const stars = [];
    const starCount = 150;
    const starMaxRadius = 1.5;
    
    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * starMaxRadius,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.05,
        pulse: Math.random() * 0.1,
        pulseFactor: 0,
        pulseDirection: Math.random() > 0.5 ? 1 : -1
      });
    }
    
    // Animation loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        // Update star pulsing
        star.pulseFactor += star.pulse * star.pulseDirection;
        
        if (star.pulseFactor > 1) {
          star.pulseDirection = -1;
        } else if (star.pulseFactor < 0) {
          star.pulseDirection = 1;
        }
        
        // Move the star
        star.y -= star.speed;
        
        // Reset star if it goes off screen
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
        
        // Draw the star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * (1 + star.pulseFactor * 0.3), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * (1 + star.pulseFactor * 0.3)})`;
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-stars" />;
};

export default BackgroundStars;