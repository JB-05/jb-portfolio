'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaDev } from 'react-icons/fa';
import { SiDuolingo } from 'react-icons/si';

interface SocialLinkProps {
  name: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email' | 'dev' | 'duolingo';
}

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
  dev: FaDev,
  duolingo: SiDuolingo,
};

export const SocialLink = ({ name, href, icon }: SocialLinkProps) => {
  const Icon = icons[icon];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 cursor-pointer transform hover:scale-110"
      title={name}
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}; 