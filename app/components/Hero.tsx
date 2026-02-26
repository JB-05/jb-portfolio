'use client';

import { motion } from 'framer-motion';
import { Section } from './shared/Section';
import { Container } from './shared/Container';
import { Button } from './shared/Button';
import { SocialLink } from './shared/SocialLink';
import { TypewriterText } from './shared/TypewriterText';
import Image from 'next/image';

type SocialLinkProps = {
  name: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email' | 'dev' | 'duolingo';
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
    href: 'mailto:work.joelbiju@gmail.com',
    icon: 'email',
  },
  {
    name: 'DEV Community',
    href: 'https://dev.to/jb05',
    icon: 'dev',
  },
  {
    name: 'Duolingo',
    href: 'https://www.duolingo.com/profile/JoelBiju05?via=share_profile_link',
    icon: 'duolingo',
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
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-72 h-72 rounded-full bg-accent-apricot/12 blur-3xl"
        initial={{
          x: Math.random() * 60 - 30,
          y: Math.random() * 60 - 30,
          scale: 0.8,
        }}
        animate={{
          x: Math.random() * 60 - 30,
          y: Math.random() * 60 - 30,
          scale: [0.8, 1.05, 0.8],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          delay: i * 3,
          ease: 'easeInOut',
        }}
      />
    ))}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={`mint-${i}`}
        className="absolute w-64 h-64 rounded-full bg-accent-mint/10 blur-3xl"
        initial={{
          x: Math.random() * 60 - 30,
          y: Math.random() * 60 - 30,
          scale: 0.8,
        }}
        animate={{
          x: Math.random() * 60 - 30,
          y: Math.random() * 60 - 30,
          scale: [0.8, 1.05, 0.8],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          delay: i * 4,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5 rounded-full bg-accent-amber/70"
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
          duration: 18,
          repeat: Infinity,
          delay: i * 2.5,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

export const Hero = () => {
  return (
    <Section id="home" className="relative min-h-screen flex items-center mt-16 md:mt-0">
      <BubblyBackground />
      <FloatingElements />
      <Container>
        <div className="neu-surface-soft grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 py-10 md:px-10 md:py-12 relative overflow-hidden">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 text-center md:text-left"
          >
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink-fg mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I&apos;m Joel Biju
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-ink-fg-soft mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I&apos;am a <TypewriterText texts={texts} />
            </motion.p>
            <motion.p 
              className="text-ink-fg-muted text-lg mb-8 max-w-2xl"
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
            className="relative z-10"
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
                className="absolute inset-0 bg-gradient-to-r from-accent-apricot to-accent-mint rounded-full blur-3xl opacity-30"
              />
              <div className="relative rounded-full overflow-hidden border-[3px] border-white/8 shadow-neu-soft bg-ink-800">
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