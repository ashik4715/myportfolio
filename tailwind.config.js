/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'portavia-green': '#c8ff00',
        'portavia-dark': '#1a1a1a',
        'portavia-light': '#ffffff',
        'portavia-gray': '#2d2d2d',
        'portavia-light-gray': '#f5f5f5',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

