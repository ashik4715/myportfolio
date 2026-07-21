import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const SocialLinks = () => {
  const { isDark } = useTheme();

  const links = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ashikur-rahman-0a272ba1/',
      icon: (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/ashik4715',
      icon: (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>),
    },
    {
      name: 'Email',
      url: 'mailto:ashikurjhalak@gmail.com',
      icon: (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929l0 12.002h-2.5v-12.002h2.5zm3.348 8.187l-1.104 1.364h2.506l4.096-5.074-1.402-1.712-3.596 4.422zm7.652-7.426v9.458l4.623-5.712-4.623-3.746zm5.143 5.926l-2.5 3.104-2.5-3.104h5zm3.348-8.187l1.104-1.364h-2.506l-4.096 5.074 1.402 1.712 3.596-4.422z"/></svg>),
    },
  ];

  return (
    <div className="flex space-x-4">
      {links.map((link) => (
        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
          className={`p-2 rounded-full transition-colors ${
            isDark ? 'text-gray-300 hover:text-portavia-green hover:bg-portavia-gray'
                   : 'text-gray-600 hover:text-portavia-green hover:bg-gray-100'
          }`}>
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
