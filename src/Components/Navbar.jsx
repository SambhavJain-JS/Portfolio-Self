import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaCode, FaProjectDiagram, FaGraduationCap, FaBriefcase, FaCertificate } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', name: 'Home', icon: <FaHome /> },
    { path: '/skills', name: 'Skills', icon: <FaCode /> },
    { path: '/projects', name: 'Projects', icon: <FaProjectDiagram /> },
    { path: '/experience', name: 'Experience', icon: <FaBriefcase /> },
    { path: '/certificates', name: 'Certificates', icon: <FaCertificate /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300">
            to="/"
            Sambhav Jain
          </Link>
        
          <button
            className='md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  isActive(item.path)
                    ? 'text-blue-400 bg-blue-500/10 shadow-lg shadow-blue-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/80'
                }`}
              >
                <span className={`mr-2 transition-transform duration-300 group-hover:scale-110 ${
                  isActive(item.path) ? 'text-blue-400' : 'text-gray-400'
                }`}>{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-blue-400 bg-blue-500/10 shadow-lg shadow-blue-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/80'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className={`mr-2 ${isActive(item.path) ? 'text-blue-400' : 'text-gray-400'}`}>
                  {item.icon}
                </span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
