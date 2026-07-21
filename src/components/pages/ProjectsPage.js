import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import ProjectCard from '../shared/ProjectCard';

const ProjectsPage = () => {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState('all');

  const projects = [
    { id: 1, title: 'WeGro Global', description: 'Agricultural Fintech Platform for smallholder farmers with NestJS backend and investment platform.', image: process.env.PUBLIC_URL + '/img/hamburg.avif', technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'AWS'], liveUrl: 'https://wegro.global', category: 'fintech' },
    { id: 2, title: 'Commerce Connections', description: 'Enterprise B2B/EDI Platform for global trading partners with API integrations.', image: process.env.PUBLIC_URL + '/img/hamburg.avif', technologies: ['Angular', 'MongoDB', 'EDI Systems'], liveUrl: 'https://commerce-connections.com', category: 'enterprise' },
    { id: 3, title: 'AshMart BD', description: 'Multi-category e-commerce platform with payment processing and vendor management.', image: process.env.PUBLIC_URL + '/img/hamburg.avif', technologies: ['Laravel', 'PHP', 'MySQL', 'Payment APIs'], liveUrl: 'https://www.ashmartbd.com', category: 'ecommerce' },
    { id: 4, title: 'Azerbaijan Medical Journal', description: 'Academic publishing platform with content management and email marketing.', image: process.env.PUBLIC_URL + '/img/hamburg.avif', technologies: ['Laravel', 'PHP', 'MySQL', 'Email Marketing'], liveUrl: 'https://www.azerbaijanmedicaljournal.net', category: 'academic' },
  ];

  const categories = ['all', 'fintech', 'enterprise', 'ecommerce', 'academic'];
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className={`min-h-screen py-20 ${isDark ? 'bg-portavia-dark' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>My Projects</h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Showcase of impactful projects and applications I&apos;ve built and contributed to.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button key={category} onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category ? 'bg-portavia-green text-black' : isDark ? 'bg-portavia-gray text-white hover:bg-portavia-gray/80' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
