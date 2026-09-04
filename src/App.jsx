import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CodeBackground from './components/CodeBackground';

// Scroll reveal hook for sections
function useScrollReveal() {
  useEffect(() => {
    // Standard reveal observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Initial attachment of the observer to all sections
    document.querySelectorAll('.reveal').forEach((el) => {
      revealObserver.observe(el);
    });

    // Strict focus observer (only triggers when near the middle of the screen)
    const handleScroll = () => {
      const cards = document.querySelectorAll('.glass-card');
      let closestCard = null;
      let minDistance = Infinity;
      const centerY = window.innerHeight / 2;

      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenterY = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - cardCenterY);

        if (distance < minDistance) {
          minDistance = distance;
          closestCard = card;
        }
      });

      cards.forEach(card => {
        // Highlight if it's the closest card AND reasonably close to the center
        if (card === closestCard && minDistance < window.innerHeight * 0.4) {
          card.classList.add('active-focus');
        } else {
          card.classList.remove('active-focus');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    setTimeout(handleScroll, 100);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}

export default function App() {
  useScrollReveal();

  return (
    <>
      {/* Scroll-driven canvas background */}
      <CodeBackground />

      <div className="page">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
