'use client';

import { motion } from 'framer-motion';
import { Section } from './shared/Section';
import { Container } from './shared/Container';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Toast } from './shared/Toast';
import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  const [mailtoLink, setMailtoLink] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setToastMessage('Please fill in all fields');
      setToastType('error');
      setShowToast(true);
      return;
    }

    if (!isValidEmail(formData.email)) {
      setToastMessage('Please enter a valid email address');
      setToastType('error');
      setShowToast(true);
      return;
    }

    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const link = `mailto:work.joelbiju@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Try to open email client
    const mailWindow = window.open(link, '_blank');
    
    if (!mailWindow) {
      // If popup blocked or failed, save the link for the backup button
      setMailtoLink(link);
      setToastMessage('Click the backup link below to open your email client');
      setToastType('error');
    } else {
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setToastMessage('Opening your email client...');
      setToastType('success');
    }
    
    setShowToast(true);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Section id="contact" className="py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get in <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations, questions, or just a friendly chat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-blue-400 text-xl mt-1" />
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a
                    href="mailto:work.joelbiju@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    work.joelbiju@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-blue-400 text-xl mt-1" />
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-300">Kerala, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-white font-medium mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/jb-05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/joel-biju-285527289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg transition-colors hover:bg-blue-600"
              >
                Send Message
              </button>
              
              {mailtoLink && (
                <a
                  href={mailtoLink}
                  className="block w-full px-6 py-3 bg-gray-600 text-white rounded-lg text-center transition-colors hover:bg-gray-700 mt-2"
                  onClick={() => {
                    setMailtoLink('');
                    setFormData({
                      name: '',
                      email: '',
                      message: '',
                    });
                  }}
                >
                  Click here to open email client
                </a>
              )}
            </form>
          </motion.div>
        </div>
      </Container>

      <Toast
        message={toastMessage}
        type={toastType}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </Section>
  );
}; 