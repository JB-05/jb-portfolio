'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

export const Toast = ({ message, type, isVisible, onClose }: ToastProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div
            className={`flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg ${
              type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {type === 'success' ? (
              <FaCheckCircle className="text-white text-xl" />
            ) : (
              <FaExclamationCircle className="text-white text-xl" />
            )}
            <p className="text-white">{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 