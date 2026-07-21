import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`py-8 ${isDark ? 'bg-portavia-gray' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              &copy; 2026 Mohammed Ashikur Rahman. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/ashikur-rahman-0a272ba1/" target="_blank" rel="noopener noreferrer"
              className={`text-sm ${isDark ? 'text-gray-300 hover:text-portavia-green' : 'text-gray-600 hover:text-portavia-green'}`}>LinkedIn</a>
            <a href="https://github.com/ashik4715" target="_blank" rel="noopener noreferrer"
              className={`text-sm ${isDark ? 'text-gray-300 hover:text-portavia-green' : 'text-gray-600 hover:text-portavia-green'}`}>GitHub</a>
            <a href="mailto:ashikurjhalak@gmail.com"
              className={`text-sm ${isDark ? 'text-gray-300 hover:text-portavia-green' : 'text-gray-600 hover:text-portavia-green'}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
