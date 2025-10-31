'use client';

import { FaHeart } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="text-gray-400 text-sm">&nbsp;</div>
          <div className="pt-6 border-t border-gray-800 w-full">
            <p className="text-gray-400 text-sm">
              Made with <FaHeart className="inline-block text-red-500 animate-pulse" /> by JB
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {currentYear} Joel Biju. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 