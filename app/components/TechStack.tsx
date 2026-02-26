'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TechCardProps {
  name: string;
}

const TechCard = ({ name }: TechCardProps) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="p-4 rounded-card-xl neu-surface-soft text-center"
  >
    <span className="text-ink-fg-soft text-sm font-medium">{name}</span>
  </motion.div>
);

export const TechStack = () => {
  const technologies = [
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'Docker',
    'AWS',
    'Figma',
    'MongoDB'
  ];

  return (
    <section className="py-20 px-4">
      <h2 className="font-display text-3xl font-semibold mb-12 text-center text-ink-fg">
        Tech <span className="gradient-text">Stack</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {technologies.map((tech) => (
          <TechCard key={tech} name={tech} />
        ))}
      </div>
    </section>
  );
}; 