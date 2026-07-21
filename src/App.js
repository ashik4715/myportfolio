import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ThemeToggle from './components/layout/ThemeToggle';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ProjectsPage from './components/pages/ProjectsPage';
import BlogsPage from './components/pages/BlogsPage';
import ContactPage from './components/pages/ContactPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <ThemeToggle />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
