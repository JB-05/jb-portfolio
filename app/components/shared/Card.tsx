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
        relative group p-6
        neu-surface-soft
        transition-transform duration-300
        ${hoverable ? 'hover:shadow-neu-glow-apricot' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      whileHover={hoverable ? { scale: 1.02, y: -2 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-card-xl bg-gradient-to-r from-accent-apricot/8 via-transparent to-accent-mint/10 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </motion.div>
  );
}; 