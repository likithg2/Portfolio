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
    // Standard reveal observer - elements stay visible once revealed
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Unobserve to prevent rough fade-outs
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Initial attachment of the observer to all sections
    document.querySelectorAll('.reveal').forEach((el) => {
      revealObserver.observe(el);
    });

    // Polished focus observer with debounce to prevent 'popcorn' effect during fast smooth-scrolls
    let scrollTimeout;
    const handleScroll = () => {
      const cards = document.querySelectorAll('.glass-card');
      const centerY = window.innerHeight / 2;

      // Instantly remove focus if a card strays too far from center while scrolling
      cards.forEach(card => {
        if (card.classList.contains('active-focus')) {
          const rect = card.getBoundingClientRect();
          const cardCenterY = rect.top + rect.height / 2;
          if (Math.abs(centerY - cardCenterY) > window.innerHeight * 0.4) {
            card.classList.remove('active-focus');
          }
        }
      });

      // Wait for scroll to stop before highlighting the new center card
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        let closestCard = null;
        let minDistance = Infinity;

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
          if (card === closestCard && minDistance < window.innerHeight * 0.4) {
            card.classList.add('active-focus');
          } else {
            card.classList.remove('active-focus');
          }
        });
      }, 150);
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
