import { useEffect, useRef } from 'react';

export default function CodeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    // The Japanese Katakana characters to use
    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン'.split('');
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    
    // drops array stores the y-coordinate of each column
    const drops = [];
    for (let i = 0; i < columns; i++) {
      // Start randomly across the entire screen height instead of above the screen
      drops[i] = Math.random() * (canvas.height / fontSize + 100); 
    }

    let scrollY = window.scrollY;
    let mouseX = -1000;
    let mouseY = -1000;
    let isOverLayout = false;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Identify if the cursor is hovering over an actual layout container rather than empty space
      isOverLayout = !!e.target.closest('.glass-card, header, footer, .section-header, .hero-section > div');
    };
    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      // Classic Matrix trailing effect: fill canvas with semi-transparent background to fade old characters
      ctx.fillStyle = 'rgba(224, 244, 224, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw the character
        const xPos = i * fontSize;
        const yPos = drops[i] * fontSize;

        // Dark text for the light background
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        ctx.fillText(text, xPos, yPos);

        // Distance check for mouse freeze effect
        let speed = 1;
        const dx = xPos - mouseX;
        const dy = yPos - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (!isOverLayout && dist < 100) { 
          // Completely freeze letters directly under/near the cursor if on background
          speed = 0; 
        } else if (!isOverLayout && dist < 200) {
          // 50% chance to not move to simulate sluggishness near cursor
          if (Math.random() > ((dist - 100) / 100)) {
            speed = 0;
          }
        }

        // If it's not frozen, drop it down
        if (speed > 0) {
          // Reset drop to the top randomly to create staggered streams
          if (yPos > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          
          // Move down one row
          drops[i]++;
        }
      }

      // Slower animation for the matrix effect
      setTimeout(() => {
        animationFrameId = requestAnimationFrame(draw);
      }, 35);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        background: '#e0f4e0' // Light green background
      }}
    />
  );
}
