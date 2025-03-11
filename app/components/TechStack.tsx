'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TechCardProps {
  name: string;
}

const TechCard = ({ name }: TechCardProps) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="p-4 rounded-lg bg-gray-800 text-center"
  >
    {name}
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
      <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {technologies.map((tech) => (
          <TechCard key={tech} name={tech} />
        ))}
      </div>
    </section>
  );
}; 