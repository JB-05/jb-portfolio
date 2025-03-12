'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

interface SocialLinkProps {
  name: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email';
}

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope
};

export const SocialLink = ({ name, href, icon }: SocialLinkProps) => {
  const Icon = icons[icon];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (icon === 'email') {
      e.preventDefault();
      window.location.href = href;
    }
  };

  return (
    <a
      href={href}
      target={icon === 'email' ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 cursor-pointer transform hover:scale-110"
      title={name}
      onClick={handleClick}
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}; 