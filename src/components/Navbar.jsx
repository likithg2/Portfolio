import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState('top');
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef(null);
  const linkRefs = useRef({});

  // Setup intersection observer to track which section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find all intersecting entries
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by bounding client rect to find the one closest to the top
          visibleEntries.sort((a, b) => {
            return Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top);
          });
          setActiveId(visibleEntries[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -79% 0px', threshold: 0 } // Trigger when section passes upper top
    );

    navLinks.forEach(link => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Update pill position when activeId changes
  useEffect(() => {
    const activeLink = linkRefs.current[activeId];
    if (activeLink && navRef.current) {
      const containerRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      
      setPillStyle({
        left: linkRect.left - containerRect.left,
        width: linkRect.width,
        opacity: 1
      });
    }
  }, [activeId]);

  // Recalculate on window resize
  useEffect(() => {
    const handleResize = () => {
      const activeLink = linkRefs.current[activeId];
      if (activeLink && navRef.current) {
        const containerRect = navRef.current.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        setPillStyle(prev => ({ ...prev, left: linkRect.left - containerRect.left, width: linkRect.width }));
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeId]);


  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        zIndex: 70, 
        padding: '24px', 
        display: 'flex', 
        justifyContent: 'center',
      }}
    >
      <div 
        className="rise"
        style={{ 
          '--i': 1,
          background: 'rgba(238, 242, 238, 0.35)', /* Highly translucent glass */
          backdropFilter: 'blur(24px)',
          borderRadius: '50px',
          padding: '8px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.5)',
          position: 'relative'
        }}
      >
        <nav ref={navRef} style={{ display: 'flex', position: 'relative', listStyle: 'none', margin: 0, padding: 0 }}>
          
          {/* Animated Background Pill */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: pillStyle.left,
              width: pillStyle.width,
              opacity: pillStyle.opacity,
              background: '#111',
              borderRadius: '50px',
              transition: 'all 0.35s cubic-bezier(0.23, 1, 0.32, 1)',
              pointerEvents: 'none'
            }}
          />

          {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a 
                key={link.id} 
                href={`#${link.id}`}
                ref={el => linkRefs.current[link.id] = el}
                onClick={(e) => handleNavClick(e, link.id)}
                style={{ 
                  position: 'relative',
                  padding: '8px 20px',
                  fontSize: '15px', 
                  fontWeight: 500, 
                  color: isActive ? '#fff' : '#444', 
                  textDecoration: 'none', 
                  transition: 'color 0.35s ease',
                  zIndex: 1
                }}
                onMouseOver={(e) => { if (!isActive) e.target.style.color = '#111'; }}
                onMouseOut={(e) => { if (!isActive) e.target.style.color = '#444'; }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
