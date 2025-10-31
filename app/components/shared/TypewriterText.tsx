'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  delay?: number;
}

export const TypewriterText = ({ texts, className = '', delay = 0 }: TypewriterTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts.length) {
      return;
    }

    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseDuration = 2000;

    const fullText = texts[currentTextIndex % texts.length];
    const isFull = currentText === fullText;
    const isEmpty = currentText.length === 0;

    let nextTickDelay = isDeleting ? deleteSpeed : typeSpeed;
    if (!isDeleting && isFull) {
      nextTickDelay = pauseDuration;
    }
    if (isDeleting && isEmpty) {
      nextTickDelay = typeSpeed;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (!isFull) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (!isEmpty) {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, nextTickDelay);

    return () => clearTimeout(timer);
  }, [currentText, currentTextIndex, isDeleting, texts]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[2px] h-[1em] bg-current ml-1"
      />
    </motion.div>
  );
};