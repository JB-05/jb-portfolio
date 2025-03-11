'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface PosterCardProps {
  image: string;
  title: string;
  onClick: () => void;
}

interface PreviewModalProps {
  image: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const PreviewModal = ({ image, title, isOpen, onClose }: PreviewModalProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-5xl aspect-[16/9] rounded-xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 90vw, 1024px"
            priority
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const PosterCard = ({ image, title, onClick }: PosterCardProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative group cursor-pointer"
    onClick={onClick}
  >
    <div className="w-full aspect-[3/4] relative rounded-xl overflow-hidden">
      <Image 
        src={image} 
        alt={title} 
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <h3 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {title}
        </h3>
      </div>
    </div>
  </motion.div>
);

export const Posters = () => {
  const [selectedPoster, setSelectedPoster] = useState<{ image: string; title: string } | null>(null);

  const posters = [
    { image: "/posters/poster1.jpg", title: "Creative Design" },
    { image: "/posters/poster2.png", title: "Modern Art" },
    { image: "/posters/poster3.jpg", title: "Digital Innovation" }
  ];

  return (
    <>
      <section className="py-20 px-4 bg-gray-900">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">My </span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Posters</span>
        </h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {posters.map((poster, index) => (
            <motion.div
              key={poster.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PosterCard
                {...poster}
                onClick={() => setSelectedPoster(poster)}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <PreviewModal
        image={selectedPoster?.image || ''}
        title={selectedPoster?.title || ''}
        isOpen={!!selectedPoster}
        onClose={() => setSelectedPoster(null)}
      />
    </>
  );
}; 