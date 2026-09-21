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
  const [menuOpen, setMenuOpen] = useState(false);
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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const targetId = hoverId || activeId;

  // Update pill position when targetId changes
  useEffect(() => {
    const activeLink = linkRefs.current[targetId];
    if (activeLink && navRef.current) {
      const containerRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setPillStyle({
        left: linkRect.left - containerRect.left,
        width: linkRect.width,
        opacity: 1
      });
    }
  }, [targetId]);

  // Recalculate on window resize
  useEffect(() => {
    const handleResize = () => {
      const activeLink = linkRefs.current[targetId];
      if (activeLink && navRef.current) {
        const containerRect = navRef.current.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        setPillStyle(prev => ({ ...prev, left: linkRect.left - containerRect.left, width: linkRect.width }));
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [targetId]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveId(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <header
        className="navbar-desktop"
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
            background: 'rgba(238, 242, 238, 0.35)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
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
              const isTarget = targetId === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="nav-link"
                  ref={el => linkRefs.current[link.id] = el}
                  onClick={(e) => handleNavClick(e, link.id)}
                  onMouseEnter={() => setHoverId(link.id)}
                  onMouseLeave={() => setHoverId(null)}
                  style={{
                    position: 'relative',
                    padding: '8px 20px',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: isTarget ? '#fff' : '#444',
                    textDecoration: 'none',
                    transition: 'color 0.35s ease',
                    zIndex: 1
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      {/* ── Mobile Navbar ── */}
      <header
        className="navbar-mobile"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 70,
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(238, 242, 238, 0.6)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255,255,255,0.4)',
          boxSizing: 'border-box',
        }}
      >
        {/* Brand */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, 'top')}
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '24px',
            fontWeight: 700,
            color: 'var(--ink)',
            textDecoration: 'none',
          }}
        >
          Likith .G
        </a>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{
            background: 'rgba(255,255,255,0.5)',
            border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: '10px',
            width: '40px',
            height: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            cursor: 'pointer',
            padding: '0',
          }}
        >
          <span style={{
            display: 'block',
            width: '18px',
            height: '2px',
            background: '#111',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }} />
          <span style={{
            display: 'block',
            width: '18px',
            height: '2px',
            background: '#111',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block',
            width: '18px',
            height: '2px',
            background: '#111',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }} />
        </button>
      </header>

      {/* ── Mobile Drawer Overlay ── */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 68,
            background: 'rgba(0,0,0,0.3)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
          }}
        />
      )}

      {/* ── Mobile Drawer ── */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100%',
          width: '260px',
          zIndex: 69,
          background: 'rgba(245, 248, 245, 0.95)',
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)',
          borderLeft: '1px solid rgba(255,255,255,0.5)',
          boxShadow: '-8px 0 32px rgba(0,0,0,0.1)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.23, 1, 0.32, 1)',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '80px',
          paddingLeft: '24px',
          paddingRight: '24px',
          gap: '8px',
          boxSizing: 'border-box',
        }}
        className="navbar-mobile"
      >
        {navLinks.map((link) => {
          const isActive = activeId === link.id;
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              style={{
                display: 'block',
                padding: '14px 20px',
                borderRadius: '14px',
                fontSize: '16px',
                fontWeight: 500,
                color: isActive ? '#fff' : '#444',
                background: isActive ? '#111' : 'transparent',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </>
  );
}
