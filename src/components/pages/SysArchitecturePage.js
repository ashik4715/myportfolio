import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

const SysArchitecturePage = () => {
  const { isDark } = useTheme();
  const frameRef = useRef(null);

  const deckUrl = `${process.env.PUBLIC_URL}/sys-architecture-deck.html`;

  const openFullscreen = () => {
    const el = frameRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-portavia-dark' : 'bg-white'}`}>
      {/* Page header */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <h1 className={`text-3xl md:text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Sys-<span className="text-portavia-green">Architecture</span>
            </h1>
            <p className={`text-base max-w-3xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              WeGro platform: two systems, one architecture — OGRO agri-ERP and the Wegro-Investor backend.
              Interactive 16-slide deck (arrow keys navigate).
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={deckUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                isDark
                  ? 'bg-portavia-gray text-white hover:bg-portavia-gray/80'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              Open in new tab
            </a>
            <button
              onClick={openFullscreen}
              className="px-5 py-2 rounded-full text-sm font-medium bg-portavia-green text-black hover:opacity-90 transition-opacity"
            >
              Fullscreen
            </button>
          </div>
        </motion.div>
      </div>

      {/* Deck */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15 }}
        className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8"
      >
        <div
          className={`w-full h-[calc(100vh-13rem)] min-h-[480px] rounded-2xl overflow-hidden border ${
            isDark ? 'border-white/10' : 'border-gray-200 shadow-lg'
          }`}
        >
          <iframe
            ref={frameRef}
            src={deckUrl}
            title="WeGro — Two System Architecture deck"
            className="w-full h-full border-0 block"
            allowFullScreen
          />
        </div>
        <p className={`text-xs mt-3 text-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Tip: click inside the deck first, then use ← → arrow keys to navigate slides.
        </p>
      </motion.div>
    </div>
  );
};

export default SysArchitecturePage;
