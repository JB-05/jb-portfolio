'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'design', label: 'Design' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = 'home';
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      navItems.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setIsMobileMenuOpen(false);
    }
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
    >
      {/* Progress bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-accent-apricot origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-2 mb-3 flex items-center justify-between h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 shadow-neu-soft">
          {/* Logo or Name */}
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-shrink-0 text-xl font-semibold tracking-tight text-ink-fg"
              onClick={() => scrollToSection('home')}
              aria-label="Scroll to top"
            >
              JB
            </motion.button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isContact = item.id === 'contact';

              const baseClasses = 'relative text-sm font-medium rounded-full transition-all duration-200';

              const contactClasses = isContact
                ? isActive
                  ? 'px-5 py-2 bg-gradient-to-r from-accent-apricot to-accent-mint text-ink-900 shadow-neu-soft hover:shadow-neu-glow-apricot'
                  : 'px-5 py-2 bg-gradient-to-r from-accent-apricot/90 to-accent-mint/90 text-ink-900 shadow-neu-soft hover:shadow-neu-glow-apricot'
                : isActive
                  ? 'px-3 py-1.5 bg-ink-700 text-ink-fg shadow-neu-soft'
                  : 'px-3 py-1.5 text-ink-fg-muted hover:text-ink-fg-soft hover:bg-ink-800/70';

              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${baseClasses} ${contactClasses}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {!isContact && isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full ring-1 ring-accent-mint/50"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-ink-fg-muted hover:text-ink-fg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
        }}
        transition={{ duration: 0.2 }}
        className="md:hidden fixed inset-0 z-40 bg-ink-900/95 backdrop-blur-2xl"
      >
        {/* Close icon */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
          className="absolute top-4 right-4 p-2 rounded-full bg-ink-800/80 text-ink-fg-soft hover:text-ink-fg hover:bg-ink-700 transition-colors"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex h-full flex-col items-center justify-center space-y-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className={`
                text-center font-medium tracking-wide
                ${item.id === 'contact'
                  ? 'text-lg px-6 py-2 rounded-full bg-gradient-to-r from-accent-apricot to-accent-mint text-ink-900 shadow-neu-soft'
                  : 'text-2xl text-ink-fg-soft'
                }
              `}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}; 