'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/jb-05',
    icon: FaGithub
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/joel-biju-285527289',
    icon: FaLinkedin
  },
  {
    name: 'Email',
    href: 'mailto:work.joelbiju@gmail.com',
    icon: FaEnvelope
  }
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Me</h3>
            <div className="space-y-2">
              <a
                href="mailto:work.joelbiju@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-colors flex items-center justify-center md:justify-start gap-2"
              >
                <FaEnvelope className="text-blue-400" />
                work.joelbiju@gmail.com
              </a>
              <p className="text-gray-300">Kerala, India</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors block">Home</a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors block">About</a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors block">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors block">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name === 'Email' ? '_self' : '_blank'}
                  rel={link.name === 'Email' ? '' : 'noopener noreferrer'}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <link.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            Made with <FaHeart className="inline-block text-red-500 animate-pulse" /> by JB
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {currentYear} Joel Biju. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}; 