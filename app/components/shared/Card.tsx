'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const Card = ({ children, className = '', onClick, hoverable = true }: CardProps) => {
  return (
    <motion.div
      onClick={onClick}
      className={`
        relative p-6 rounded-xl
        bg-gray-800/50 backdrop-blur-sm
        border border-gray-700/50
        transition-colors duration-200
        ${hoverable ? 'hover:bg-gray-800 hover:border-gray-600' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      whileHover={hoverable ? { scale: 1.02, y: -2 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
    >
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </motion.div>
  );
}; 