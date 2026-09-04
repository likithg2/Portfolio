import { useEffect, useRef, useCallback } from 'react';

/**
 * Orchestrates hero entrance animations.
 */
export function useHeroAnimations() {
  useEffect(() => {
    const appears = document.querySelectorAll('.appear');
    const heroPhoto = document.querySelector('.hero-photo');

    const addIsIn = (el) => el.classList.add('is-in');

    appears.forEach((el) => {
      el.addEventListener('animationend', () => addIsIn(el), { once: true });
    });

    if (heroPhoto) {
      heroPhoto.addEventListener('animationend', () => addIsIn(heroPhoto), { once: true });
    }

    // Fallback
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        appears.forEach((el) => {
          const anims = el.getAnimations?.() || [];
          const hasRunning = anims.some(
            (a) => a.playState === 'running' || a.playState === 'finished'
          );
          if (!hasRunning) addIsIn(el);
        });
        if (heroPhoto) {
          const anims = heroPhoto.getAnimations?.() || [];
          const hasRunning = anims.some(
            (a) => a.playState === 'running' || a.playState === 'finished'
          );
          if (!hasRunning) addIsIn(heroPhoto);
        }
      });
    });
  }, []);
}

/**
 * Scroll-triggered reveal with 3D perspective transforms.
 */
export function useScrollReveal(rootMargin = '0px 0px -40px 0px', threshold = 0.08) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const reveals = container.querySelectorAll('.reveal');
    if (reveals.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return ref;
}

/**
 * 3D tilt effect on cards.
 */
export function useTilt(ref, intensity = 8) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const cards = el.querySelectorAll('.tilt-card');

    const handleMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -intensity;
      const rotateY = ((x - centerX) / centerX) * intensity;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      
      // Update shine position
      const shine = card.querySelector('.card-shine');
      if (shine) {
        shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.08) 0%, transparent 60%)`;
      }
    };

    const handleLeave = (e) => {
      const card = e.currentTarget;
      card.style.transform = '';
      const shine = card.querySelector('.card-shine');
      if (shine) shine.style.background = '';
    };

    cards.forEach((card) => {
      card.addEventListener('mousemove', handleMove);
      card.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleMove);
        card.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, [ref, intensity]);
}

/**
 * Parallax scroll effect for sections.
 */
export function useParallax() {
  useEffect(() => {
    const parallaxEls = document.querySelectorAll('[data-parallax]');
    if (parallaxEls.length === 0) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0.1;
        const rect = el.getBoundingClientRect();
        const offset = (rect.top + scrollY - window.innerHeight * 0.5) * speed;
        el.style.transform = `translateY(${-offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

/**
 * Mobile menu logic.
 */
export function useMenu() {
  const close = useCallback(() => {
    document.body.classList.remove('menu-open');
    const backdrop = document.querySelector('.menu-backdrop');
    const nav = document.querySelector('.mobile-nav');
    const burger = document.querySelector('.burger');
    if (backdrop) backdrop.classList.remove('is-open');
    if (nav) nav.classList.remove('is-open');
    if (burger) {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Open menu');
    }
  }, []);

  const toggle = useCallback(() => {
    const isOpen = document.body.classList.toggle('menu-open');
    const backdrop = document.querySelector('.menu-backdrop');
    const nav = document.querySelector('.mobile-nav');
    const burger = document.querySelector('.burger');
    if (backdrop) backdrop.classList.toggle('is-open', isOpen);
    if (nav) nav.classList.toggle('is-open', isOpen);
    if (burger) {
      burger.setAttribute('aria-expanded', String(isOpen));
      burger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    }
  }, []);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') close(); };
    const handleResize = () => {
      if (window.matchMedia('(min-width: 901px)').matches) close();
    };

    window.addEventListener('keydown', handleEsc);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('resize', handleResize);
    };
  }, [close]);

  return { toggle, close };
}
