import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/blogs', label: 'Blogs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      {/* Desktop Pill Nav */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`hidden md:flex items-center gap-6 px-3 py-2 nav-pill ${
          isDark
            ? 'bg-[#2a2a2a]/90 border border-white/10'
            : 'bg-white/90 border border-gray-200 shadow-lg'
        } ${scrolled ? 'shadow-xl' : ''}`}
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={process.env.PUBLIC_URL + '/img/hamburg.avif'}
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link-hover text-sm font-medium ${
                location.pathname === link.path
                  ? isDark ? 'text-portavia-green' : 'text-portavia-green'
                  : isDark ? 'text-white hover:text-portavia-green' : 'text-gray-700 hover:text-portavia-green'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Link
          to="/contact"
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isDark
              ? 'bg-white text-black hover:bg-portavia-green hover:text-black'
              : 'bg-black text-white hover:bg-portavia-green hover:text-black'
          }`}
        >
          Contact
        </Link>
      </motion.nav>

      {/* Mobile Nav */}
      <div className="md:hidden w-full">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`flex items-center justify-between px-3 py-2 nav-pill ${
            isDark
              ? 'bg-[#2a2a2a]/90 border border-white/10'
              : 'bg-white/90 border border-gray-200 shadow-lg'
          }`}
        >
          <Link to="/" className="flex items-center gap-2">
            <img
              src={process.env.PUBLIC_URL + '/img/hamburg.avif'}
              alt="Logo"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className={`text-xs ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Available for work <span className="work-badge-dot inline-block ml-1"></span>
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-full ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`mt-2 mx-2 rounded-2xl overflow-hidden ${
                isDark ? 'bg-[#2a2a2a] border border-white/10' : 'bg-white border border-gray-200 shadow-xl'
              }`}
            >
              <div className="p-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      location.pathname === link.path
                        ? 'bg-portavia-green text-black'
                        : isDark ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium bg-portavia-green text-black text-center"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
