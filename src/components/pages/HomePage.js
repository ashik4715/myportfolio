import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import AnimatedText from '../shared/AnimatedText';
import ProjectCard from '../shared/ProjectCard';

const HomePage = () => {
  const { isDark } = useTheme();
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const imageY = useTransform(scrollY, [0, 500], [0, 100]);
  const imageRotateX = useTransform(scrollY, [0, 500], [0, -10]);
  const imageRotateY = useTransform(scrollY, [0, 500], [0, 5]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const featuredProjects = [
    { id: 1, title: 'WeGro Global', description: 'Agricultural Fintech Platform for smallholder farmers', image: process.env.PUBLIC_URL + '/img/wegro-global.png', technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'AWS'], liveUrl: 'https://wegro.global' },
    { id: 2, title: 'Commerce Connections', description: 'Enterprise B2B/EDI Platform for global trading', image: process.env.PUBLIC_URL + '/img/commerce-connections.png', technologies: ['Angular', 'MongoDB', 'EDI Systems'], liveUrl: 'https://commerce-connections.com' },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-portavia-dark' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-right hidden lg:block"
            >
              <p className={`text-sm font-medium tracking-wider mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                MOHAMMED ASHIKUR
              </p>
              <h1 className={`text-7xl xl:text-8xl font-black uppercase tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                DIGITAL
              </h1>
            </motion.div>

            {/* Center Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="flex justify-center relative"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="relative"
                style={{
                  y: imageY,
                  rotateX: imageRotateX,
                  rotateY: imageRotateY,
                }}
                whileHover={{
                  scale: 1.02,
                  rotateY: mousePosition.x * 0.5,
                  rotateX: -mousePosition.y * 0.5,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + '/img/hamburg.avif'}
                  alt="Mohammed Ashikur Rahman"
                  className="w-64 h-80 md:w-72 md:h-[400px] xl:w-80 xl:h-[450px] rounded-2xl object-cover hero-image"
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-24 h-24 bg-portavia-green rounded-full flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="text-3xl font-bold text-black">Hi</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className="hidden lg:block"
            >
              <h1 className={`text-7xl xl:text-8xl font-black uppercase tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                DESIGNER
              </h1>
              <p className={`text-sm mt-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                I&apos;m a UK-based Senior Software Engineer and<br />
                Backend &amp; Cloud Specialist
              </p>
            </motion.div>

            {/* Mobile Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="lg:hidden text-center"
            >
              <p className={`text-xs font-medium tracking-wider mb-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                MOHAMMED ASHIKUR
              </p>
              <h1 className={`text-4xl font-black uppercase ${isDark ? 'text-white' : 'text-gray-900'}`}>
                DIGITAL DESIGNER
              </h1>
              <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Senior Software Engineer &amp; Backend Specialist
              </p>
            </motion.div>
          </div>

          {/* Animated Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-20"
          >
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <AnimatedText
                texts={['Backend Specialist', 'Full-Stack Developer', 'Cloud Architect', 'Problem Solver']}
                speed={80}
                deleteSpeed={40}
                pauseTime={2000}
              />
            </p>
          </motion.div>
        </div>

        {/* Theme Toggle - Bottom Center */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ThemeToggle />
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className={`py-24 ${isDark ? 'bg-portavia-gray/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl md:text-5xl font-black uppercase mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Featured Projects
            </h2>
            <p className={`text-sm mb-12 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              A selection of projects showcasing my expertise in modern web development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`w-14 h-7 rounded-full p-1 transition-colors duration-300 theme-toggle-track ${
        isDark ? 'bg-portavia-green' : 'bg-gray-300'
      }`}
    >
      <motion.div
        className={`w-5 h-5 rounded-full bg-white shadow-md theme-toggle-thumb ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </button>
  );
};

export default HomePage;
