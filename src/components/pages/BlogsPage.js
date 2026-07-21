import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const BlogsPage = () => {
  const { isDark } = useTheme();

  const blogPosts = [
    { id: 1, title: 'Building Scalable Backend Systems with NestJS', excerpt: 'Learn how to design and implement scalable backend architectures using NestJS and TypeScript.', date: '2026-07-15', readTime: '5 min read', category: 'Backend' },
    { id: 2, title: 'Deploying Applications on AWS with Docker', excerpt: 'A comprehensive guide to deploying containerized applications on AWS EC2.', date: '2026-07-10', readTime: '8 min read', category: 'DevOps' },
    { id: 3, title: 'PostgreSQL Performance Optimization Tips', excerpt: 'Techniques for optimizing PostgreSQL queries and improving database performance.', date: '2026-07-05', readTime: '6 min read', category: 'Database' },
  ];

  return (
    <div className={`min-h-screen py-20 ${isDark ? 'bg-portavia-dark' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Blogs</h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Thoughts on software development, architecture, and technology.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
              className={`rounded-xl overflow-hidden shadow-lg ${isDark ? 'bg-portavia-gray' : 'bg-white'}`}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm px-3 py-1 rounded-full ${isDark ? 'bg-portavia-green/20 text-portavia-green' : 'bg-portavia-green/10 text-green-800'}`}>{post.category}</span>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{post.readTime}</span>
                </div>
                <h2 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{post.title}</h2>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <button className="text-portavia-green font-medium hover:underline">Read More &rarr;</button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
