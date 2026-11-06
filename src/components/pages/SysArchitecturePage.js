import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const VERSIONS = [
  {
    id: 'v1',
    tab: 'V1 · Slide Deck',
    file: 'sys-architecture-deck.html',
    title: 'Version 1 — Slide Deck (ours)',
    blurb:
      'The original 15-slide architecture deck. Clean slide navigation with arrow keys, brand timeline and KPI components.',
    features: ['15 slides', 'Brand palette', 'Arrow-key nav'],
  },
  {
    id: 'v2',
    tab: 'V2 · Pitch Build',
    file: 'sys-architecture-deck-v2.html',
    title: 'Version 2 — Pitch Build (notes + animation)',
    blurb:
      'The presentation build with speaker notes, an embedded markdown panel and animated slide transitions.',
    features: ['Speaker notes', 'Markdown panel', 'Animations'],
  },
  {
    id: 'v3',
    tab: 'V3 · Non-Technical',
    file: 'sys-architecture-deck-v3.html',
    title: 'Version 3 — Non-Technical Deck',
    blurb:
      'The plain-language business deck: no code, no terminology — the two systems explained for any audience.',
    features: ['Plain language', 'Business focus', 'No jargon'],
  },
];

const SysArchitecturePage = () => {
  const { isDark } = useTheme();
  const [version, setVersion] = useState('v1');
  const frameRef = useRef(null);

  const active = VERSIONS.find((v) => v.id === version) || VERSIONS[0];
  const deckUrl = `${process.env.PUBLIC_URL}/${active.file}`;

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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className={`text-3xl md:text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Sys-<span className="text-portavia-green">Architecture</span>
              </h1>
              <p className={`text-base max-w-3xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                WeGro platform: two systems, one architecture — OGRO agri-ERP and the Wegro-Investor backend.
                Choose a preview below.
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
          </div>
        </motion.div>
      </div>

      {/* Version toggle */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="flex flex-wrap items-center gap-3">
          {VERSIONS.map((v) => (
            <button
              key={v.id}
              onClick={() => setVersion(v.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                version === v.id
                  ? 'bg-portavia-green text-black'
                  : isDark
                    ? 'bg-portavia-gray text-white hover:bg-portavia-gray/80'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              {v.tab}
            </button>
          ))}
          <div className="flex flex-wrap gap-2 ml-0 sm:ml-2">
            {active.features.map((f) => (
              <span
                key={f}
                className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                  isDark ? 'border-white/15 text-gray-300' : 'border-gray-300 text-gray-600'
                }`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
        <p className={`text-sm mt-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          <b className={isDark ? 'text-white' : 'text-gray-900'}>{active.title}</b> — {active.blurb}
        </p>
      </div>

      {/* Deck */}
      <motion.div
        key={active.id}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8"
      >
        <div
          className={`w-full h-[calc(100vh-17rem)] min-h-[480px] rounded-2xl overflow-hidden border ${
            isDark ? 'border-white/10' : 'border-gray-200 shadow-lg'
          }`}
        >
          <iframe
            ref={frameRef}
            src={deckUrl}
            title={active.title}
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
