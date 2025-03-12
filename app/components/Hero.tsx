'use client';

import { motion } from 'framer-motion';
import { Section } from './shared/Section';
import { Container } from './shared/Container';
import { Button } from './shared/Button';
import { SocialLink } from './shared/SocialLink';
import { TypewriterText } from './shared/TypewriterText';
import Image from 'next/image';
import { useState } from 'react';

type SocialLinkProps = {
  name: string;
  href: string;
  icon: "github" | "linkedin" | "email";
};

const socialLinks: SocialLinkProps[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/jb-05',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/joel-biju-285527289',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    href: 'mailto:work.joelbiju@gmail.com?subject=Hello%20Joel',
    icon: 'email',
  },
];

const texts = [
  'Full Stack Developer',
  'Designer',
  'Mobile App Developer',
  'Problem Solver',
  'Hackathon Champion'
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Adjust this value based on your header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const BubblyBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-64 h-64 rounded-full bg-blue-500/10"
        initial={{
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50,
          scale: 0,
        }}
        animate={{
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50,
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          delay: i * 2,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);

const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-blue-400 rounded-full"
        initial={{
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50,
          opacity: 0,
        }}
        animate={{
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50,
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          delay: i * 3,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);

export const Hero = () => {
  //const [imageError, setImageError] = useState(false);

  return (
    <Section id="home" className="relative min-h-screen flex items-center mt-16 md:mt-0">
      <BubblyBackground />
      <FloatingElements />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I&apos;m Joel Biju
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I&apos;am a <TypewriterText texts={texts} />
            </motion.p>
            <motion.p 
              className="text-gray-400 text-lg mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Passionate about creating innovative solutions and building user-centric applications.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button onClick={() => scrollToSection('projects')}>
                View My Work
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('contact')}>
                Contact Me
              </Button>
            </motion.div>
            <motion.div 
              className="flex gap-6 mt-8 justify-center md:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {socialLinks.map((link) => (
                <SocialLink 
                  key={link.name} 
                  {...link}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20"
              />
              <div className="relative rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Joel Biju"
                  width={256}
                  height={256}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}; 