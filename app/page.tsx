'use client';

import { type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Achievements } from './components/Achievements';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Posters } from './components/Posters';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Container } from './components/shared/Container';

const PageWrapper = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <AnimatePresence mode="wait">
        <PageWrapper>
          <Hero />
          <About />
          <Experience />
          <Achievements />
          <Projects />
          <Posters />
        </PageWrapper>
      </AnimatePresence>
    </main>
  );
} 