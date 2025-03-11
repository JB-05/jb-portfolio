'use client';

import { type ReactNode, memo } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  ref?: any;
  fullHeight?: boolean;
}

export const Section = memo(({ id, children, className = '', ref, fullHeight = false }: SectionProps) => {
  return (
    <motion.section
      ref={ref}
      id={id}
      className={`
        relative w-full
        ${fullHeight ? 'min-h-screen' : 'py-16 sm:py-24'}
        ${className}
      `}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
});

Section.displayName = 'Section'; 