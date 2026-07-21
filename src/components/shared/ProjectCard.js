import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const ProjectCard = ({ project }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`rounded-xl overflow-hidden shadow-lg ${isDark ? 'bg-portavia-gray' : 'bg-white'}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 bg-portavia-green text-black rounded-lg font-medium">Live Demo</a>
        </div>
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
        <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                isDark ? 'bg-portavia-green/20 text-portavia-green' : 'bg-portavia-green/10 text-green-800'
              }`}>{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
