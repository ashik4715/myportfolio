import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const ProjectCard = ({ project }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`project-card rounded-2xl overflow-hidden ${
        isDark ? 'bg-portavia-gray' : 'bg-gray-100'
      }`}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-portavia-green text-black rounded-full text-sm font-semibold hover:bg-white transition-colors"
          >
            View Project
          </a>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            isDark ? 'bg-portavia-green/20 text-portavia-green' : 'bg-portavia-green/10 text-green-800'
          }`}>
            {project.category}
          </span>
        </div>

        <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {project.title}
        </h3>

        <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                isDark ? 'bg-white/10 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
