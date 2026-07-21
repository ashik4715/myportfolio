import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import AnimatedText from '../shared/AnimatedText';
import ProjectCard from '../shared/ProjectCard';

const HomePage = () => {
  const { isDark } = useTheme();

  const featuredProjects = [
    { id: 1, title: 'WeGro Global', description: 'Agricultural Fintech Platform for smallholder farmers', image: process.env.PUBLIC_URL + '/img/hamburg.avif', technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'AWS'], liveUrl: 'https://wegro.global' },
    { id: 2, title: 'Commerce Connections', description: 'Enterprise B2B/EDI Platform for global trading', image: process.env.PUBLIC_URL + '/img/hamburg.avif', technologies: ['Angular', 'MongoDB', 'EDI Systems'], liveUrl: 'https://commerce-connections.com' },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-portavia-dark' : 'bg-white'}`}>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-right">
              <h1 className={`text-4xl md:text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>MOHAMMED ASHIKUR</h1>
              <h2 className={`text-5xl md:text-7xl font-black mt-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>DIGITAL</h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center">
              <div className="relative">
                <img src={process.env.PUBLIC_URL + '/img/hamburg.avif'} alt="Mohammed Ashikur Rahman" className="w-64 h-80 md:w-80 md:h-96 rounded-2xl object-cover shadow-2xl" />
                <motion.div className="absolute -bottom-4 -left-4 w-20 h-20 bg-portavia-green rounded-full flex items-center justify-center" whileHover={{ scale: 1.1 }}>
                  <span className="text-2xl font-bold text-black">Hi</span>
                </motion.div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <h2 className={`text-5xl md:text-7xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>DESIGNER</h2>
              <p className={`text-lg mt-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                I&apos;m a UK-based Senior Software Engineer and<br />Backend &amp; Cloud Specialist
              </p>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-center mt-16">
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <AnimatedText texts={['Backend Specialist', 'Full-Stack Developer', 'Cloud Architect', 'Problem Solver']} />
            </p>
          </motion.div>
        </div>
      </section>
      <section className={`py-20 ${isDark ? 'bg-portavia-gray' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className={`text-3xl md:text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>Featured Projects</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
