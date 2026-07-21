import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`relative ${isDark ? 'bg-portavia-dark' : 'bg-white'}`}>
      {/* Let's Work Together Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={process.env.PUBLIC_URL + '/img/hamburg.avif'}
                alt="Mohammed Ashikur Rahman"
                className="w-full max-w-md rounded-2xl object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-4xl md:text-5xl font-black uppercase mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Let&apos;s Work Together
              </h2>
              <p className={`text-sm mb-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Let&apos;s build something impactful together—whether it&apos;s your brand, your website, or your next big idea.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`text-xs font-medium mb-1 block ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      className={`w-full px-4 py-3 rounded-lg text-sm ${
                        isDark ? 'bg-portavia-gray border border-gray-700 text-white' : 'bg-gray-50 border border-gray-200 text-gray-900'
                      } focus:outline-none focus:border-portavia-green`}
                    />
                  </div>
                  <div>
                    <label className={`text-xs font-medium mb-1 block ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="johnsmith@gmail.com"
                      className={`w-full px-4 py-3 rounded-lg text-sm ${
                        isDark ? 'bg-portavia-gray border border-gray-700 text-white' : 'bg-gray-50 border border-gray-200 text-gray-900'
                      } focus:outline-none focus:border-portavia-green`}
                    />
                  </div>
                </div>
                <div>
                  <label className={`text-xs font-medium mb-1 block ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    What Can I Help You With...
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Hello, I'd like to enquire about..."
                    className={`w-full px-4 py-3 rounded-lg text-sm ${
                      isDark ? 'bg-portavia-gray border border-gray-700 text-white' : 'bg-gray-50 border border-gray-200 text-gray-900'
                    } focus:outline-none focus:border-portavia-green resize-none`}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${
                    isDark
                      ? 'bg-portavia-green text-black hover:bg-portavia-green/90'
                      : 'bg-black text-white hover:bg-portavia-green hover:text-black'
                  }`}
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="footer-blue py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div>
              <p className="text-sm opacity-80 mb-1">Email :</p>
              <a href="mailto:ashikurjhalak@gmail.com" className="text-lg font-semibold hover:underline">
                ashikurjhalak@gmail.com
              </a>
            </div>
            <div>
              <p className="text-sm opacity-80 mb-1">Call Today :</p>
              <p className="text-lg font-semibold">+44 7XXX XXX XXX</p>
            </div>
            <div>
              <p className="text-sm opacity-80 mb-4">Social :</p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/ashikur-rahman-0a272ba1/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://github.com/ashik4715" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://www.instagram.com/ashikur4715/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-white text-sm">
            <p className="opacity-80">
              &copy; 2026. All Rights Reserved by <span className="font-semibold">ashik4715</span>
            </p>
            <p className="opacity-80 mt-2 md:mt-0">
              Created by <span className="font-semibold">Mohammed Ashikur Rahman</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
