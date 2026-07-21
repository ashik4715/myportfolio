import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const SkillBadge = ({ skill, category }) => {
  const { isDark } = useTheme();

  const categoryColors = {
    backend: 'bg-green-500/20 text-green-400',
    frontend: 'bg-blue-500/20 text-blue-400',
    database: 'bg-purple-500/20 text-purple-400',
    cloud: 'bg-orange-500/20 text-orange-400',
    other: 'bg-gray-500/20 text-gray-400',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
      isDark ? (categoryColors[category] || categoryColors.other) : 'bg-gray-100 text-gray-800'
    }`}>
      {skill}
    </span>
  );
};

export default SkillBadge;
