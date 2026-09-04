import { useState, useEffect, useRef, Fragment } from 'react';

// Reusable Typewriter that notifies when it's done and conditionally shows the cursor
const TypewriterText = ({ text, start, speed = 30, onComplete, showCursor }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!start) {
      setDisplayText('');
      setCurrentIndex(0);
      return;
    }
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length) {
      if (onComplete) onComplete();
    }
  }, [currentIndex, start, text, speed, onComplete]);

  const lines = displayText.split('\n');

  return (
    <span>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </Fragment>
      ))}
      <span style={{ 
        display: 'inline-block', 
        width: '4px', 
        height: '1.1em', 
        backgroundColor: 'var(--ink)', 
        verticalAlign: 'text-bottom',
        marginLeft: '4px',
        opacity: showCursor ? 1 : 0,
        animation: showCursor && currentIndex === text.length ? 'blink-caret 0.8s step-end infinite' : 'none'
      }} />
    </span>
  );
};

export default function Hero() {
  const [step, setStep] = useState(0); // 0 = Name, 1 = H1, 2 = P, 3 = Buttons/Done
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    // Trigger mount animations
    setIsMounted(true);
  }, []);

  return (
    <section 
      id="top" 
      className="hero-section" 
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '100px', paddingBottom: '120px', position: 'relative' }}
      ref={heroRef}
    >

      {/* Software Developer Badge */}
      <div 
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRadius: '50px',
          padding: '6px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.4)',
          marginBottom: '24px',
          opacity: isMounted ? 1 : 0,
          transform: isMounted ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        {/* Inner Concentrated Glass Highlight */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.5)', 
          borderRadius: '50px',
          padding: '6px 24px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05), inset 0 1px 2px rgba(255,255,255,0.9)'
        }}>
          <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)' }}>Software Developer</span>
        </div>
      </div>

      {/* Interactive Title Area */}
      <div 
        style={{ 
          position: 'relative', 
          width: '100%', 
          maxWidth: '800px', 
          height: '250px', 
          margin: '0 auto 16px auto', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}
      >
        {/* Base Layer: Likith .G */}
        <div style={{ 
          fontFamily: "'Dancing Script', cursive", 
          fontSize: 'clamp(80px, 16vw, 180px)', 
          fontWeight: 700, 
          color: 'var(--ink)' 
        }}>
          <TypewriterText 
            text="Likith .G" 
            start={step >= 0} 
            speed={120} 
            onComplete={() => setStep(1)} 
            showCursor={step === 0} 
          />
        </div>
      </div>

      {/* Intro Text Container */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 24px 0', color: 'var(--ink)' }}>
          <TypewriterText 
            text={'Engineering ideas into software\nthat works.'} 
            start={step >= 1} 
            speed={40} 
            onComplete={() => setStep(2)} 
            showCursor={step === 1} 
          />
        </h1>

        <p className="muted-text" style={{ fontSize: 'clamp(16px, 2vw, 20px)', maxWidth: '65ch', margin: '0 auto 40px auto' }}>
          <TypewriterText 
            text={'Computer Science Engineering student building practical software across APIs, mobile applications, machine learning, and databases.'} 
            start={step >= 2} 
            speed={25} 
            onComplete={() => setStep(3)} 
            showCursor={step >= 2} 
          />
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', opacity: step === 3 ? 1 : 0, transition: 'opacity 0.8s ease', pointerEvents: step === 3 ? 'auto' : 'none' }}>
          <a href="#projects" className="btn-dark" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View Projects
          </a>
          <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        style={{ 
          position: 'absolute', 
          bottom: '40px', 
          left: '50%', 
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: step === 3 ? 0.5 : 0,
          transition: 'opacity 1s ease'
        }}
      >
        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink)' }}>Scroll</div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>
  );
}
