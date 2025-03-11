'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

interface SocialLinkProps {
  href: string;
  icon: 'github' | 'linkedin' | 'email';
}

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope
};

export const SocialLink = ({ href, icon }: SocialLinkProps) => {
  const Icon = icons[icon];

  return (
    <motion.a
      href={href}
      target={icon === 'email' ? '_self' : '_blank'}
      rel={icon === 'email' ? '' : 'noopener noreferrer'}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-colors"
      title={icon.charAt(0).toUpperCase() + icon.slice(1)}
    >
      <Icon className="text-xl" />
    </motion.a>
  );
}; 