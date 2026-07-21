import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-8 rounded-full p-1 transition-colors duration-300 ${
        isDark ? 'bg-portavia-green' : 'bg-gray-300'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`w-6 h-6 rounded-full bg-white shadow-md ${
          isDark ? 'translate-x-8' : 'translate-x-0'
        }`}
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
