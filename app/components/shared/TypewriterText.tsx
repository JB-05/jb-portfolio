'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  delay?: number;
}

export const TypewriterText = ({ texts, className = '', delay = 0 }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + texts[textIndex][currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else if (textIndex < texts.length - 1) {
      // Wait before starting next text
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
        setTextIndex(prev => prev + 1);
      }, 2000);

      return () => clearTimeout(timeout);
    } else {
      // Reset to first text when all texts are done
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
        setTextIndex(0);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, textIndex, texts]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[2px] h-[1em] bg-current ml-1"
      />
    </motion.div>
  );
}; 