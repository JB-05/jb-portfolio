'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PosterCardProps {
  image: string;
  title: string;
}

const PosterCard = ({ image, title }: PosterCardProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative group"
  >
    <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg" />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  </motion.div>
);

export const Posters = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <h2 className="text-3xl font-bold mb-12 text-center">Poster Designs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PosterCard image="/poster1.jpg" title="Brand Campaign" />
        <PosterCard image="/poster2.jpg" title="Event Promotion" />
        <PosterCard image="/poster3.jpg" title="Product Launch" />
      </div>
    </section>
  );
}; 