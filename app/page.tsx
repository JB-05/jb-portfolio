'use client';

import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Posters } from './components/Posters';

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Posters />
    </main>
  );
} 