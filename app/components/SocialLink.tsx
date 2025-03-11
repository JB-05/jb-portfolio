'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SocialLinkProps {
  href: string;
  icon: string;
}

export const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
  >
    <span className="sr-only">{icon}</span>
    {icon === 'linkedin' && 'LinkedIn'}
    {icon === 'github' && 'GitHub'}
    {icon === 'email' && 'Email'}
  </motion.a>
); 