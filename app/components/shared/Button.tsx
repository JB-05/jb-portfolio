'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const variants = {
  primary:
    'bg-gradient-to-r from-accent-apricot to-accent-amber text-ink-900 shadow-neu-soft hover:shadow-neu-glow-apricot focus:ring-accent-mint focus:ring-offset-ink-900',
  outline:
    'border border-accent-mint text-accent-mint bg-transparent hover:bg-accent-mint/5 shadow-neu-soft focus:ring-accent-mint focus:ring-offset-ink-900',
  ghost:
    'text-ink-fg-soft hover:text-ink-fg bg-transparent hover:bg-ink-800/60 focus:ring-accent-mint/60 focus:ring-offset-ink-900',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  loading = false,
  type = 'button',
}: ButtonProps) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        relative inline-flex items-center justify-center
        rounded-pill font-medium transition-colors
        focus:outline-none focus:ring-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {loading ? (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      ) : null}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
    </motion.button>
  );
}; 