import { useState, useEffect, useRef } from 'react';

// Reusable Typewriter that holds its exact layout dimensions in place to prevent any shifts or movement
const TypewriterText = ({ text, start, speed = 30, onComplete, showCursor }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!start) {
      setCurrentIndex(0);
      return;
    }
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length) {
      if (onComplete) onComplete();
    }
  }, [currentIndex, start, text, speed, onComplete]);

  const visiblePart = text.slice(0, currentIndex);
  const hiddenPart = text.slice(currentIndex);

  return (
    <span style={{ whiteSpace: 'pre-wrap', position: 'relative' }}>
      <span>{visiblePart}</span>
      {showCursor && (
        <span style={{ position: 'relative', display: 'inline', userSelect: 'none' }}>
          <span 
            style={{
              position: 'absolute',
              left: 0,
              bottom: '0.08em',
              width: '3px',
              height: '1.05em',
              backgroundColor: 'var(--ink)',
              animation: 'blink-caret 0.8s step-end infinite',
              pointerEvents: 'none'
            }} 
          />
        </span>
      )}
      <span style={{ visibility: 'hidden', userSelect: 'none' }} aria-hidden="true">
        {hiddenPart}
      </span>
    </span>
  );
};

export default function Hero() {
  const [step, setStep] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    const nameTimer = setTimeout(() => setNameVisible(true), 150);
    const stepTimer = setTimeout(() => setStep(1), 950);
    return () => { clearTimeout(nameTimer); clearTimeout(stepTimer); };
  }, []);

  useEffect(() => {
    if (step === 3) {
      const scrollTimer = setTimeout(() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }, 800);
      return () => clearTimeout(scrollTimer);
    }
  }, [step]);

  return (
    <section 
      id="top" 
      className="hero-section" 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        position: 'relative' 
      }}
      ref={heroRef}
    >

      {/* Software Developer Badge */}
      <div 
        className="hero-badge-box"
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRadius: '50px',
          padding: '5px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          border: '1px solid rgba(255,255,255,0.4)',
          marginBottom: '18px',
          opacity: isMounted ? 1 : 0,
          transform: isMounted ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        <div style={{
          background: 'rgba(255, 255, 255, 0.55)', 
          borderRadius: '50px',
          padding: '6px 20px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04), inset 0 1px 2px rgba(255,255,255,0.9)'
        }}>
          <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>Software Developer</span>
        </div>
      </div>

      {/* Interactive Title Area */}
      <div 
        className="hero-title-area"
        style={{ 
          position: 'relative', 
          width: '100%', 
          maxWidth: '800px', 
          height: '175px', 
          margin: '0 auto 16px auto', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}
      >
        {/* Base Layer: Likith .G — popup transition */}
        <div 
          className="hero-title-text"
          style={{ 
            fontFamily: "'Dancing Script', cursive", 
            fontSize: 'clamp(64px, 14vw, 160px)', 
            fontWeight: 700, 
            color: 'var(--ink)',
            lineHeight: 1,
            opacity: nameVisible ? 1 : 0,
            transform: nameVisible ? 'scale(1) translateY(0)' : 'scale(0.7) translateY(30px)',
            transition: 'opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          Likith .G
        </div>
      </div>

      {/* Intro Text Container */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <h1 
          className="hero-heading"
          style={{ 
            fontSize: 'clamp(26px, 5vw, 50px)', 
            fontWeight: 500, 
            letterSpacing: '-0.03em', 
            lineHeight: 1.25, 
            margin: '0 0 20px 0', 
            color: 'var(--ink)' 
          }}
        >
          <TypewriterText 
            text={'Engineering ideas into software\nthat works.'} 
            start={step >= 1} 
            speed={40} 
            onComplete={() => setStep(2)} 
            showCursor={step === 1} 
          />
        </h1>

        <p 
          className="muted-text hero-description" 
          style={{ 
            fontSize: 'clamp(15px, 2vw, 19px)', 
            maxWidth: '65ch', 
            margin: '0 auto 36px auto' 
          }}
        >
          <TypewriterText 
            text={'Computer Science Engineering student building practical software across APIs, mobile applications, web applications, machine learning, and databases.'} 
            start={step >= 2} 
            speed={25} 
            onComplete={() => setStep(3)} 
            showCursor={step >= 2} 
          />
        </p>

        {/* Action Buttons */}
        <div 
          className="hero-actions"
          style={{ 
            display: 'flex', 
            gap: '16px', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            width: '100%',
            opacity: step === 3 ? 1 : 0, 
            transition: 'opacity 0.8s ease', 
            pointerEvents: step === 3 ? 'auto' : 'none' 
          }}
        >
          <a href="#projects" className="btn-dark" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View Projects
          </a>
          <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        style={{ 
          position: 'absolute', 
          bottom: '30px', 
          left: '50%', 
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          opacity: step === 3 ? 0.45 : 0,
          transition: 'opacity 1s ease',
          pointerEvents: 'none'
        }}
      >
        <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink)' }}>Scroll</div>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>
  );
}
