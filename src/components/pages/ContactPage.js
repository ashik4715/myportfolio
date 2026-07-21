import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import SocialLinks from '../shared/SocialLinks';

const ContactPage = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={`min-h-screen py-20 ${isDark ? 'bg-portavia-dark' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Me</h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Feel free to reach out for collaborations or just a friendly hello!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required
                  className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'bg-portavia-gray border-portavia-gray text-white focus:border-portavia-green' : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-portavia-green'} focus:outline-none focus:ring-2 focus:ring-portavia-green/50`} />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required
                  className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'bg-portavia-gray border-portavia-gray text-white focus:border-portavia-green' : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-portavia-green'} focus:outline-none focus:ring-2 focus:ring-portavia-green/50`} />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'bg-portavia-gray border-portavia-gray text-white focus:border-portavia-green' : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-portavia-green'} focus:outline-none focus:ring-2 focus:ring-portavia-green/50`} />
              </div>
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 bg-portavia-green text-black font-semibold rounded-lg hover:bg-portavia-green/90 transition-colors">Send Message</motion.button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Get in Touch</h3>
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>I&apos;m currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
            </div>
            <div>
              <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Email</h4>
              <a href="mailto:ashikurjhalak@gmail.com" className="text-portavia-green hover:underline">ashikurjhalak@gmail.com</a>
            </div>
            <div>
              <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Location</h4>
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>United Kingdom</p>
            </div>
            <div>
              <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Social</h4>
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
