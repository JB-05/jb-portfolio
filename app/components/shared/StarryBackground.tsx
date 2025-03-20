'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '@/app/context/ThemeContext';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

export const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDarkMode } = useTheme();
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      const stars: Star[] = [];
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          opacity: Math.random(),
          speed: Math.random() * 0.5 + 0.1,
        });
      }
      starsRef.current = stars;
    };

    const animate = () => {
      if (!isDarkMode) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      starsRef.current.forEach((star) => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.y = (star.y + star.speed) % canvas.height;
        star.opacity = Math.sin(Date.now() * 0.001 + star.x) * 0.5 + 0.5;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    createStars();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full pointer-events-none transition-opacity duration-500
        ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}
    />
  );
}; 