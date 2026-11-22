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
  const [hoverId, setHoverId] = useState(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef(null);
  const linkRefs = useRef({});

  // Setup intersection observer to track which section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => {
            return Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top);
          });
          setActiveId(visibleEntries[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -79% 0px', threshold: 0 }
    );

    navLinks.forEach(link => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const targetId = hoverId || activeId;

  // Update pill position when targetId changes
  useEffect(() => {
    const updatePill = () => {
      const activeLink = linkRefs.current[targetId];
      if (activeLink && navRef.current) {
        const left = activeLink.offsetLeft;
        const width = activeLink.offsetWidth;

        setPillStyle({
          left,
          width,
          opacity: 1
        });

        // Auto-scroll the nav container to keep the active link visible on smaller screens
        const navContainer = navRef.current;
        const scrollLeft = navContainer.scrollLeft;
        const containerWidth = navContainer.offsetWidth;

        if (left < scrollLeft || left + width > scrollLeft + containerWidth) {
          navContainer.scrollTo({
            left: Math.max(0, left - containerWidth / 2 + width / 2),
            behavior: 'smooth'
          });
        }
      }
    };

    updatePill();

    // Recalculate once web fonts finish loading to ensure pixel-perfect width
    if (document.fonts?.ready) {
      document.fonts.ready.then(updatePill);
    }
  }, [targetId]);

  // Recalculate on window resize / orientation change
  useEffect(() => {
    const handleResize = () => {
      const activeLink = linkRefs.current[targetId];
      if (activeLink) {
        setPillStyle({
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
          opacity: 1
        });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [targetId]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveId(id);
    setHoverId(null);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="navbar-header">
      <div className="navbar-pill-container rise" style={{ '--i': 1 }}>
        <nav ref={navRef} className="mobile-scrollable-nav">
          
          {/* Animated Background Pill */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              width: pillStyle.width,
              opacity: pillStyle.opacity,
              transform: `translateX(${pillStyle.left}px)`,
              background: '#111',
              borderRadius: '50px',
              transition: 'transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), width 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s ease',
              pointerEvents: 'none'
            }}
          />

          {navLinks.map((link) => {
            const isTarget = targetId === link.id;
            return (
              <a 
                key={link.id} 
                href={`#${link.id}`}
                className="nav-link"
                ref={el => linkRefs.current[link.id] = el}
                onClick={(e) => handleNavClick(e, link.id)}
                onMouseEnter={() => {
                  if (window.matchMedia('(hover: hover)').matches) {
                    setHoverId(link.id);
                  }
                }}
                onMouseLeave={() => setHoverId(null)}
                style={{ 
                  color: isTarget ? '#fff' : '#444', 
                }}
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
