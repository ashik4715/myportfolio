import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import SkillBadge from '../shared/SkillBadge';

const AboutPage = () => {
  const { isDark } = useTheme();

  const skills = [
    { name: 'Node.js', category: 'backend' },
    { name: 'NestJS', category: 'backend' },
    { name: 'TypeScript', category: 'backend' },
    { name: 'PHP', category: 'backend' },
    { name: 'Laravel', category: 'backend' },
    { name: 'React', category: 'frontend' },
    { name: 'Vue.js', category: 'frontend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'PostgreSQL', category: 'database' },
    { name: 'MySQL', category: 'database' },
    { name: 'AWS', category: 'cloud' },
    { name: 'Docker', category: 'cloud' },
    { name: 'CI/CD', category: 'cloud' },
    { name: 'Jest', category: 'other' },
  ];

  const experiences = [
    { title: 'Senior Backend Engineer', company: 'WeGro Global Ltd', duration: 'Aug 2024 - Present', description: 'Leading backend architecture using NestJS, TypeScript, and PostgreSQL.' },
    { title: 'Junior Software Consultant', company: 'Commerce Connection LTD', duration: 'Sep 2023 - Jan 2024', description: 'Full-stack development for enterprise clients with EDI solutions.' },
    { title: 'Lead PHP Developer', company: 'MNB Technology', duration: 'May 2019 - Nov 2022', description: 'Led backend development using PHP and Laravel.' },
    { title: 'Laravel Intern', company: 'Mazegeek Incorporation', duration: '2019', description: 'Internship focused on learning Laravel and enterprise PHP development.' },
  ];

  return (
    <div className={`min-h-screen py-20 ${isDark ? 'bg-portavia-dark' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>About Me</h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Senior Software Engineer with 5+ years of experience in backend development, full-stack applications, and cloud infrastructure.
          </p>
        </motion.div>

        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl ${isDark ? 'bg-portavia-gray' : 'bg-gray-50'}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{exp.title}</h3>
                    <p className="text-portavia-green font-medium">{exp.company}</p>
                  </div>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{exp.duration}</span>
                </div>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                <SkillBadge skill={skill.name} category={skill.category} />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;
