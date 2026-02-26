'use client';

import { FaHeart } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="text-ink-fg-muted text-sm">&nbsp;</div>
          <div className="pt-6 border-t border-white/5 w-full">
            <p className="text-ink-fg-soft text-sm">
              Made with <FaHeart className="inline-block text-danger-soft animate-pulse" /> by JB
            </p>
            <p className="text-ink-fg-muted text-sm mt-2">
              © {currentYear} Joel Biju. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 